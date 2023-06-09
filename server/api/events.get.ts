import type { DEvent } from '../../types'

export default defineEventHandler(() => {
  const events: DEvent[] = [
    {
      slug: 'ethprague23',
      name: 'ETH Prague 2023',
      location: 'Prague,CZ',
      region: 'europe',
      description: 'Description',
      startDate: new Date(2023, 5, 9),
      endDate: new Date(2023, 5, 11),
      image: '/assets/ethprague-shiny.png',
      stages: [
        { name: 'La-Fabrika', image: 'assets/ethprague-shiny.png' },
        { name: 'Polis', image: 'assets/hub.png' },
        { name: 'Hackaton', image: 'assets/polis.png' },
      ],
    },
    {
      slug: 'ethcc23',
      name: 'ETH CC 2023',
      location: 'Paris, FR',
      region: 'europe',
      description: 'Description',
      startDate: new Date(2023, 6, 12),
      endDate: new Date(2023, 6, 15),
      image: '/assets/ethprague-shiny.png',
      stages: [
        { name: 'Stage 1', image: 'assets/ethprague-shiny.png' },
        { name: 'Stage 2', image: 'assets/hub.png' },
        { name: 'Hackaton', image: 'assets/polis.png' },
      ],
    },
    {
      slug: 'ethzurich23',
      name: 'ETH Zurich 2023',
      location: 'Zurich,SZ',
      region: 'europe',
      description: 'Description',
      startDate: new Date(2023, 4, 12),
      endDate: new Date(2023, 4, 15),
      image: '/assets/ethprague-shiny.png',
      stages: [
        { name: 'Stage 1', image: 'assets/ethprague-shiny.png' },
        { name: 'Stage 2', image: 'assets/hub.png' },
        { name: 'Hackaton', image: 'assets/polis.png' },
      ],
    },
  ]

  return events
})
