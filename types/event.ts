export type DTimeStatus = 'upcoming' | 'live' | 'past'

export interface DEvent {
  slug: string
  name: string
  location: string
  region: string
  description: string
  startDate: Date
  endDate: Date
  image: string
  stages: DStage[]
}

export interface DStage {
  name: string
  image: string
}

export interface DActivity {
  status: DTimeStatus
  name: string
  time: string
  speaker: string
  url?: string
}
