import {defineField, defineType} from 'sanity'

export default defineType({
  name: 'series',
  title: 'Series',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'cadence', type: 'string', options: { list: ['Monthly','Quarterly','Biannual','Annual','One-off'] } }),
    defineField({ name: 'description', type: 'text' }),
  ],
})
