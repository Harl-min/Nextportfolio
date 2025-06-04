import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'experience',
  title: 'Experience',
  type: 'document',
  fields: [
    defineField({
      name: 'jobTitle', type: 'string'
    }),
    defineField({
      name: 'fromDate', type: 'date'
    }),
    defineField({
      name: 'toDate', type: 'date'
    }),
    defineField({
      name: 'skills', type: 'array', of: [{ type: 'string' }] 
    }),
    defineField({
      name: 'company',
      type: 'object',
      fields: [
        defineField({
          name: 'name', type: 'string'
        }),
        defineField({
          name: 'url', type: 'url'
        }),
        defineField({
          name: 'logo', type: 'image', options: { hotspot: true }
        }),
      ],
    }),
  ],
})