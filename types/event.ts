export type DTimeStatus = 'upcoming' | 'live' | 'past'

export interface DEvent {
  type: DTimeStatus
  name?: string
  subheadline?: string
  date?: string
  image?: string
  programUrl?: string
  stages?: DStage[]
}

export interface DStage {
  name?: string
  image?: string
  url?: string
  activities?: DActivity[]
}

export interface DActivity {
  status: DTimeStatus
  name: string
  time: string
  speaker: string
  url?: string
}
