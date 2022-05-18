import { createClient } from 'contentful'

const space = process.env.CONTENTFUL_SPACE_ID
const accessToken = process.env.CONTENTFUL_ACCESS_KEY

const client = createClient({
  space: space,
  accessToken: accessToken
})
export async function fetchEntries(): Promise<any> {
  const entries = await client.getEntries()
  return entries
}
export async function fetchEntriesLimited(): Promise<any> {
  const entries = await client.getEntries({ limit: 3 })
  return entries
}

export default { fetchEntries, fetchEntriesLimited }
