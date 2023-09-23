export type Status = 'initial' | 'loading' | 'done'

export type Result = {
  url: string
  title: string
}

export type SearchError = {
  status: number
  statusText: string
}
