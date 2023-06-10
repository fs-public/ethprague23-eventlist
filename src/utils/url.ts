export function getEventUrl(appendSlug: string, slugArray?: string[]) {
  return `/events/${slugArray ? `${slugArray.join('/')}/` : ''}${appendSlug}`
}
