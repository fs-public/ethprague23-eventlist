export type TimeStatus = 'upcoming' | 'live' | 'past'

export interface Event {
  type: TimeStatus
  name?: string
  subheadline?: string
  programUrl?: string
  stages?: Stage[]
}

export interface Stage {
  name?: string
  image?: string
  url?: string
  activities?: Activity[]
}

export interface Activity {
  status: TimeStatus
  name: string
  time: string
  speaker: string
  url?: string
}
