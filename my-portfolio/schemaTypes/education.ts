import {defineField, defineType} from 'sanity'

export const education = defineType({
  name: 'education',
  title: 'Education',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      type: 'string',
    }),
  ],
})