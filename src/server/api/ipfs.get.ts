import { IPFS_PROVIDERS } from '../../config/config'

// example json: ipfs://bafybeibro7fxpk7sk2nfvslumxraol437ug35qz4xx2p7ygjctunb2wi3i

export default defineEventHandler(async (event) => {
  const uri = getQuery(event).uri
  console.log(uri)

  if (!uri)
    return ''

  if (Array.isArray(uri))
    throw new Error('Multiple URIs provided.')

  if (typeof uri !== 'string' || !uri.includes('ipfs://'))
    throw new Error('Invalid URI')

  const url = uri.replace('ipfs://', IPFS_PROVIDERS[0])

  const data = await $fetch(url)

  return data
})
