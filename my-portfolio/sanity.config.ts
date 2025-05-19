import {defineConfig} from 'sanity'
import {structureTool} from 'sanity/structure'
import {visionTool} from '@sanity/vision'
import {schemaTypes} from './schemaTypes'

export default defineConfig({
  name: 'default',
  title: 'My portfolio',

  projectId: 'jblhspn1',
  dataset: 'portfoliotest',

  plugins: [structureTool(), visionTool()],

  schema: {
    types: schemaTypes,
  },
})
