import { getPayload } from 'payload'
import configPromise from '@payload-config'

export const getServerPayload = async () => {
  return await getPayload({
    config: configPromise,
  })
}
