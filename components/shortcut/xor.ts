import { search as wasmSearch } from '@/wasm/xor/pkg'

type Title = string
type Url = string
type SearchResult = [Title, Url][]

export const xorf = async (term: string): Promise<SearchResult[]> => {
  const results = await wasmSearch(term, 5)
  return results
}
