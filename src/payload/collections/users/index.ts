import { admins } from '@/payload/access/admins'
import type { CollectionConfig } from 'payload/types'

export const Users: CollectionConfig = {
  slug: 'users',
  admin: {
    useAsTitle: 'email',
  },
  auth: true,
  access: {
    create: admins,
    update: admins,
    read: admins,
    delete: admins,
  },
  fields: [
    {
      name: 'roles',
      type: 'select',
      hasMany: true,
      defaultValue: ['admin'],
      options: [
        {
          label: 'admin',
          value: 'admin',
        },
      ],
    },
  ],
}
