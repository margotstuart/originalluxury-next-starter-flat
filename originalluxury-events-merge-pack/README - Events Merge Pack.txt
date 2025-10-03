ORIGINALLUXURY — Events Merge Pack
==================================
This adds a simple JSON-driven events system and replaces your homepage so it reads the next 3 events automatically.

Upload these files into your GitHub repo at the same paths:
- content/events.json
- lib/events.ts
- app/events/page.tsx
- app/page.tsx  (replace your existing file)

After you commit, Vercel will redeploy. 
Visit:
  - /events  (full list)
  - Home     (shows next 3)

To add an event later: edit content/events.json on GitHub and Commit.
