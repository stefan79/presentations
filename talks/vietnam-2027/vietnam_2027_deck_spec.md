# Vietnam 2027 — Working Deck Specification

## Communication job

By the end, the family should understand and be able to refine a relaxed 19-night Vietnam plan built around one long beach base, one slow-coast stay, and a safe Hanoi departure buffer.

## Source-of-truth rules

- Base party: 2 adults and 3 children; optional sixth traveler: Schwägerin.
- Route: Hanoi (2 nights) → Hoi An / An Bang (9) → Quy Nhon / Bai Xep (7) → Hanoi (1).
- Only three accommodation changes in Vietnam.
- Activities are a menu, never a forced day-by-day itinerary.
- Use `data/pricing.json` for all costs.
- Distinguish observed, estimated, derived, and TBD values.
- Never invent accommodation, transport, cancellation, or booking details.
- Uploaded local images take priority; missing files remain designed placeholders.
- Revalidate mutable entry, health, safety, and weather information before departure.

## Visual direction

Bespoke tour operator meets modern travel magazine: warm ivory paper, deep ink, jade and coral accents, large editorial photography, generous whitespace, route lines, concise lists, and calm pacing. Hoi An is the visual center of gravity; Quy Nhon is deliberately sparse and slow; Hanoi II is brief and functional.

## Fixed flights

- VN34 MUC–HAN: 3 July 2027, 13:35 → 4 July, 05:20; direct; 10h45m.
- VN35 HAN–MUC: 23 July 2027, 23:40 → 24 July, 06:20; direct; 11h40m.
- Observed quote: €5,277 for six travelers; not booked unless updated later.

## Accommodation updates

- Hanoi I: Solare De Monte Hotel & Spa, 2 nights, observed total €250 (€125 per night), not marked as booked.
- Hanoi I room setup: 3 bedrooms.
- Hoi An / An Bang: Happy Villa Hoi An, 4 bedrooms, 9 nights, observed total €2,681 (approx. €298 per night), not marked as booked.
- Quy Nhon / Bai Xep: Casa Marina Resort villa, 3 rooms, 7 nights, observed total €1,272 (approx. €182 per night), not marked as booked.

## Update workflow

1. Add property and transport costs to `data/pricing.json`.
2. Upload images using the filenames printed in the deck placeholders.
3. Serve with `make serve NAME=vietnam-2027`.
4. The final budget slide recalculates from the JSON on load.
