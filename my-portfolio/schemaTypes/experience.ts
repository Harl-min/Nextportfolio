import {defineField, defineType} from 'sanity'

export const experience = defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
    defineField({
      name: 'company',
      type: 'string',
    }),
    defineField({
      name: 'startDate',
      type: 'datetime',
    }),
    defineField({
      name: 'image',
      type: 'image',
    })
  ],
})