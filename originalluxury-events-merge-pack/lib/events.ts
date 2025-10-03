import allEvents from "../content/events.json";

export type EventItem = {
  slug: string;
  title: string;
  date: string;      // YYYY-MM-DD
  start?: string;    // HH:mm
  end?: string;      // HH:mm
  series?: string;
  location?: string;
  standardPriceAED?: number;
  memberPriceAED?: number;
  status?: "upcoming" | "waitlist" | "soldout" | "past";
};

export function getAllEvents(): EventItem[] {
  const list = (allEvents as EventItem[]).slice();
  list.sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());
  return list;
}

export function getUpcoming(limit?: number): EventItem[] {
  const today = new Date();
  const upcoming = getAllEvents().filter(e => {
    const d = new Date(e.date + "T00:00:00");
    return d.getTime() >= new Date(today.toDateString()).getTime();
  });
  return typeof limit === "number" ? upcoming.slice(0, limit) : upcoming;
}
