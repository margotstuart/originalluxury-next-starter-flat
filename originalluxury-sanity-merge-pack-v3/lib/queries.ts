import groq from 'groq'

export const eventsUpcoming = groq`*[_type == "event" && date >= now()] | order(date asc){
  _id,
  title,
  "slug": slug.current,
  date,
  start,
  end,
  location,
  standardPriceAED,
  memberPriceAED,
  status,
  "series": series->title
}`

export const eventsUpcomingLimited = groq`*[_type == "event" && date >= now()] | order(date asc)[0...3]{
  _id,
  title,
  "slug": slug.current,
  date,
  start,
  end,
  location,
  standardPriceAED,
  memberPriceAED,
  status,
  "series": series->title
}`
