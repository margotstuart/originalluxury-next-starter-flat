import { defineField, defineType } from 'sanity';
export default defineType({
  name: 'event',
  title: 'Event',
  type: 'document',
  fields: [
    defineField({ name: 'title', type: 'string', validation: Rule => Rule.required() }),
    defineField({ name: 'slug', type: 'slug', options: { source: 'title', maxLength: 96 }, validation: Rule => Rule.required() }),
    defineField({ name: 'date', type: 'date', options: { dateFormat: 'YYYY-MM-DD' }, validation: Rule => Rule.required() }),
    defineField({ name: 'start', title: 'Start time', type: 'string' }),
    defineField({ name: 'end', title: 'End time', type: 'string' }),
    defineField({ name: 'series', type: 'reference', to: [{ type: 'series' }] }),
    defineField({ name: 'location', type: 'string' }),
    defineField({ name: 'standardPriceAED', type: 'number' }),
    defineField({ name: 'memberPriceAED', type: 'number' }),
    defineField({ name: 'status', type: 'string', options: { list: ['upcoming', 'waitlist', 'soldout', 'past'] }, initialValue: 'upcoming' }),
    defineField({ name: 'coverImage', type: 'image', options: { hotspot: true } }),
    defineField({ name: 'summary', type: 'text' })
  ],
});
