import { getUpcoming } from "../lib/events";

export default function LandingWireframe() {
  const events = getUpcoming(3);
  const programs = [
    { label: "Executive Learning", cadence: "Cohorts" },
    { label: "Expert Sessions", cadence: "Micro-conferences" },
    { label: "Materials Brownbag", cadence: "Monthly" },
    { label: "Pitch Night", cadence: "Quarterly" },
    { label: "Women in Diamonds", cadence: "Quarterly" },
    { label: "Women in Sustainable Luxury", cadence: "Biannual" },
    { label: "Luxury Summit", cadence: "Annual" },
    { label: "Media Studio", cadence: "On-demand" },
    { label: "Jewellery Photo Studio", cadence: "On-demand" },
  ];

  return (
    <div className="min-h-screen bg-neutral-50 text-neutral-900">
      {/* Top Nav (kept intentionally minimal) */}
      <header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="h-8 w-8 rounded bg-neutral-200 border border-dashed border-neutral-400" aria-hidden />
            <span className="font-semibold">ORIGINALLUXURY</span>
          </div>
          <nav className="hidden md:flex items-center gap-6 text-sm">
            <a className="hover:underline" href="#dlic">DLIC</a>
            <a className="hover:underline" href="/events">Events</a>
            <a className="hover:underline" href="#partners">Tech Partners</a>
            <a className="hover:underline" href="#members">Members</a>
            <a className="hover:underline" href="#marketplace">Marketplace</a>
          </nav>
          <div className="flex items-center gap-2">
            <button className="px-3 py-1.5 text-sm rounded-full border border-neutral-300 bg-white">Sign In</button>
            <button className="px-3 py-1.5 text-sm rounded-full bg-neutral-900 text-white">Join</button>
          </div>
        </div>
      </header>

      {/* HERO — DLIC-first */}
      <section id="dlic" className="border-b border-neutral-200 bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h1 className="text-3xl sm:text-4xl font-semibold leading-tight">Dubai Luxury Innovation Center (DLIC)</h1>
            <p className="mt-3 text-neutral-600">Your hub for transparency, traceability, and cross-industry collaboration. Visit, learn, and register for programs in one place.</p>
            <div className="mt-6 flex flex-wrap gap-3">
              <a href="/events" className="px-4 py-2 rounded-full bg-neutral-900 text-white">View Events</a>
              <a href="#how" className="px-4 py-2 rounded-full border border-neutral-300 bg-white">How Registration Works</a>
              <a href="#studios" className="px-4 py-2 rounded-full border border-neutral-300 bg-white">Book a Studio</a>
            </div>
            {/* Trust row */}
            <div className="mt-6 flex items-center gap-6 text-sm text-neutral-600">
              <span>300+ stakeholders</span>
              <span>25+ tech partners</span>
              <span>20+ countries</span>
            </div>
          </div>
          {/* Placeholder visual panel */}
          <div className="h-56 sm:h-72 rounded-2xl bg-neutral-100 border border-dashed border-neutral-400 flex items-center justify-center text-neutral-500">Hero visual / video placeholder</div>
        </div>
      </section>

      {/* 3-Step flow */}
      <section id="how" className="bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-semibold">Registration in 3 steps</h2>
          <div className="mt-4 grid md:grid-cols-3 gap-4">
            {["Register", "Pay invoice", "Get confirmation"].map((step, i) => (
              <div key={i} className="rounded-xl p-4 border border-dashed border-neutral-300 bg-white">
                <div className="text-sm text-neutral-500">Step {i + 1}</div>
                <div className="mt-1 text-lg font-medium">{step}</div>
                <div className="mt-2 h-14 rounded bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">UI placeholder</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Events — pulls next 3 from JSON */}
      <section id="events" className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex items-end justify-between gap-4">
            <h2 className="text-2xl font-semibold">Upcoming at DLIC</h2>
            <a href="/events" className="text-sm underline">View full calendar</a>
          </div>
          <div className="mt-6 grid md:grid-cols-3 gap-6">
            {events.map((e) => (
              <div key={e.slug} className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4">
                <div className="h-28 rounded bg-neutral-100 border border-dashed border-neutral-300 mb-3 flex items-center justify-center text-neutral-400">Event image</div>
                <div className="text-sm text-neutral-500">{e.series} • {e.location}</div>
                <h3 className="mt-1 font-medium">{e.title}</h3>
                <div className="text-sm text-neutral-600">{new Date(e.date).toLocaleDateString(undefined, { month: "short", day: "2-digit" })} · {e.start}{e.end ? ("–" + e.end) : ""}</div>
                <div className="mt-3 text-sm text-neutral-600">Standard: AED {e.standardPriceAED} · Member: AED {e.memberPriceAED}</div>
                <div className="mt-4 flex gap-2">
                  <button className="px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">Register</button>
                  <button className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-sm">Add to Calendar</button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Programs at a glance — only the essentials, scannable chips */}
      <section id="programs" className="bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-semibold">Programs at a glance</h2>
          <div className="mt-4 flex flex-wrap gap-2">
            {programs.map((p, i) => (
              <span key={i} className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-sm">{p.label} <span className="text-neutral-500">· {p.cadence}</span></span>
            ))}
          </div>
        </div>
      </section>

      {/* Member Value Strip (simple, not noisy) */}
      <section id="members" className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-2xl font-semibold">Members get more</h2>
              <ul className="mt-3 space-y-2 text-neutral-700 text-sm">
                <li>• Discounted pricing on events & classes (shown when signed in)</li>
                <li>• Access to reports, templates, and replays</li>
                <li>• Studio credits for Media & Jewellery Photo Studio</li>
                <li>• Partner perks and priority seating</li>
              </ul>
              <div className="mt-5 flex gap-3">
                <button className="px-4 py-2 rounded-full bg-neutral-900 text-white">Join as a Member</button>
                <button className="px-4 py-2 rounded-full border border-neutral-300 bg-white">Sign In</button>
              </div>
            </div>
            <div className="rounded-2xl border border-dashed border-neutral-300 bg-neutral-50 p-4">
              <div className="text-sm text-neutral-500">Example price comparison</div>
              <div className="mt-2 grid grid-cols-2 gap-2 text-sm">
                <div className="p-3 rounded bg-white border border-neutral-200">Standard: AED 500</div>
                <div className="p-3 rounded bg-white border border-neutral-200">Member: AED 350</div>
                <div className="p-3 rounded bg-white border border-neutral-200">Standard: AED 750</div>
                <div className="p-3 rounded bg-white border border-neutral-200">Member: AED 525</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* DPP + Marketplace promo */}
      <section id="marketplace" className="bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-2xl font-semibold">Digital Product Passports (DPP) → Marketplace</h2>
            <p className="mt-2 text-neutral-700">Create DPPs free in the member-only DPP Studio. With one click, publish to the DPP Marketplace for verified storytelling—and sales. We take a 5% fee on completed sales.</p>
            <div className="mt-5 flex flex-wrap gap-3">
              <button className="px-4 py-2 rounded-full bg-neutral-900 text-white">Open DPP Studio (Members)</button>
              <button className="px-4 py-2 rounded-full border border-neutral-300 bg-white">Browse Marketplace</button>
            </div>
          </div>
          <div className="h-48 rounded-2xl bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">DPP viewer / product card placeholders</div>
        </div>
      </section>

      {/* Tech Partner & Member spotlights (single each, lightweight) */}
      <section id="partners" className="bg-white border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-2 gap-6">
          <div className="rounded-2xl border border-dashed border-neutral-300 p-4">
            <div className="text-sm text-neutral-500">Tech Partner Spotlight</div>
            <div className="mt-2 h-28 rounded bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">Logo/image</div>
            <h3 className="mt-3 font-medium">Partner name</h3>
            <p className="text-sm text-neutral-700">One-line value prop and a relevant DLIC demo/use case.</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">Request Intro</button>
              <button className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-sm">Book DLIC Demo</button>
            </div>
          </div>
          <div className="rounded-2xl border border-dashed border-neutral-300 p-4">
            <div className="text-sm text-neutral-500">Member Spotlight</div>
            <div className="mt-2 h-28 rounded bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">Image</div>
            <h3 className="mt-3 font-medium">Member name</h3>
            <p className="text-sm text-neutral-700">Recent project, case study, or recognition tied to transparency.</p>
            <div className="mt-3 flex gap-2">
              <button className="px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">View Case Study</button>
              <button className="px-3 py-1.5 rounded-full border border-neutral-300 bg-white text-sm">Explore Members</button>
            </div>
          </div>
        </div>
      </section>

      {/* Studios quick access */}
      <section id="studios" className="bg-neutral-50 border-b border-neutral-200">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
          <h2 className="text-xl font-semibold">Studios</h2>
          <div className="mt-4 grid md:grid-cols-2 gap-4">
            <div className="rounded-2xl p-4 border border-dashed border-neutral-300 bg-white">
              <div className="text-sm text-neutral-500">Media Studio</div>
              <div className="mt-2 h-20 rounded bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">Podcast / Social / PR</div>
              <button className="mt-3 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">Book a Slot</button>
            </div>
            <div className="rounded-2xl p-4 border border-dashed border-neutral-300 bg-white">
              <div className="text-sm text-neutral-500">Jewellery Photo Studio</div>
              <div className="mt-2 h-20 rounded bg-neutral-100 border border-dashed border-neutral-300 flex items-center justify-center text-neutral-400">Macro / 360° / Video</div>
              <button className="mt-3 px-3 py-1.5 rounded-full bg-neutral-900 text-white text-sm">Book a Slot</button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-10 grid md:grid-cols-3 gap-8 text-sm">
          <div>
            <div className="h-8 w-8 rounded bg-neutral-200 border border-dashed border-neutral-400 mb-2" aria-hidden />
            <p className="text-neutral-600">ORIGINALLUXURY • Dubai Luxury Innovation Center</p>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <ul className="space-y-1 text-neutral-700">
              <li className="font-medium">DLIC</li>
              <li>Events</li>
              <li>Visit the Center</li>
              <li>Speakers & Faculty</li>
            </ul>
            <ul className="space-y-1 text-neutral-700">
              <li className="font-medium">Members</li>
              <li>Join / Sign In</li>
              <li>DPP Studio</li>
              <li>Marketplace</li>
            </ul>
          </div>
          <div>
            <div className="font-medium">Stay in the loop</div>
            <div className="mt-2 flex gap-2">
              <input placeholder="Email" className="px-3 py-2 rounded border border-neutral-300 w-full" />
              <button className="px-4 py-2 rounded bg-neutral-900 text-white">Subscribe</button>
            </div>
          </div>
        </div>
        <div className="border-t border-neutral-200 py-4 text-xs text-neutral-500 text-center">© ORIGINALLUXURY — All rights reserved</div>
      </footer>
    </div>
  );
}
