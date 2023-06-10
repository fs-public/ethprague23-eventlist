export const useEvents = defineStore('events', () => {
  const eventLists = ref<string[]>([])
  const events = ref<DEvent[]>([])

  const fetchEventLists = async (force?: boolean) => {
    if (eventLists.value.length && !force)
      return

    eventLists.value = await $fetch('/api/event-lists', { method: 'GET' })
  }

  const fetchEvents = async (force?: boolean) => {
    if (events.value.length && !force)
      return

    events.value = (await $fetch('/api/events', { method: 'GET' }))
  }

  const sortedEvents = computed(() => {
    const result: {
      live: DEvent[]
      upcoming: DEvent[]
      past: DEvent[]
    } = {
      live: [],
      upcoming: [],
      past: [],
    }

    const currentDate = new Date().getTime()
    if (events.value && events.value.length) {
      for (const event of events.value) {
        const startDate = new Date(event.startDate).getTime()
        const endDate = new Date(event.endDate).getTime()

        if (currentDate >= startDate && currentDate <= endDate) {
        // Object is happening right now
          result.live.push(event)
        }
        else if (currentDate < startDate) {
        // Object is in the future
          result.upcoming.push(event)
        }
        else {
        // Object has already happened
          result.past.push(event)
        }
      }
    }

    return result
  })

  fetchEventLists()
  fetchEvents()

  return {
    eventLists,
    events,
    sortedEvents,
  }
})
