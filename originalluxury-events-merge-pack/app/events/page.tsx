import { getUpcoming } from "../../lib/events";

export const dynamic = "force-static";

export default function EventsPage() {
  const items = getUpcoming();
  return (
    <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
      <h1 className="text-3xl font-semibold">Events at DLIC</h1>
      <p className="mt-2 text-neutral-600">Browse upcoming sessions. Registration uses our 3-step flow: Register → Pay invoice → Get confirmation.</p>
      <div className="mt-8 grid md:grid-cols-3 gap-6">
        {items.map((e) => (
          <article key={e.slug} className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4">
            <div className="text-sm text-neutral-500">{e.series} • {e.location}</div>
            <h2 className="mt-1 font-medium">{e.title}</h2>
            <div className="text-sm text-neutral-600">{new Date(e.date).toLocaleDateString(undefined, { month: "short", day: "2-digit" })} · {e.start}{e.end ? ("–" + e.end) : ""}</div>
            <div className="mt-3 text-sm text-neutral-600">Standard: AED {e.standardPriceAED} · Member: AED {e.memberPriceAED}</div>
            <div className="mt-4 flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">Register</button>
              <button className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-sm">Add to Calendar</button>
            </div>
          </article>
        ))}
      </div>
    </main>
  );
}
