# Plan: Connect Pickle DaaS Production Data to Courtana Connect

## The Situation

You have two systems that need to talk to each other:

```text
┌─────────────────────────────┐     ┌──────────────────────────────┐
│  PICKLE DAAS (GitHub)       │     │  COURTANA CONNECT (Lovable)  │
│                             │     │                              │
│  Claude Code pipeline       │     │  React/TypeScript app        │
│  Auto-ingest every few hrs  │     │  Venue partnership portal    │
│  3,689 clips analyzed       │     │  Hardcoded seed data         │
│  153 brands classified      │     │  Static charts               │
│  90 player profiles         │     │                              │
│  gh-pages JSON API ────────────►  │  Currently: no connection    │
│  10 endpoints, live data    │     │                              │
└─────────────────────────────┘     └──────────────────────────────┘
```

**The bridge is already built.** Your gh-pages branch publishes a clean REST-like JSON API at `picklebill.github.io/pickle-daas-data/api/`. It's public, CORS-friendly, and auto-updated by your Claude Code pipeline. We just need to consume it.

## What I Recommend (3 phases)

### Phase 1: Direct Fetch from gh-pages API (do now, no setup needed)

Create a data service layer in this Lovable app that fetches from your live gh-pages API. Wire it into the Dashboard and a new "Intelligence" page.

**Files to create/modify:**

- `src/lib/pickleApi.ts` -- fetch wrapper with types for all 10 API endpoints
- `src/pages/Dashboard.tsx` -- replace hardcoded KPIs with live data (clip count, brand count, player count, coverage %)
- New page: `src/pages/Intelligence.tsx` -- brand leaderboard, top clips with thumbnails/video, player profiles with radar charts
- `src/App.tsx` -- add `/intelligence` route

**Data available immediately (no auth needed):**


| Endpoint                    | What it gives you                                           | Use in Lovable               |
| --------------------------- | ----------------------------------------------------------- | ---------------------------- |
| `api/clips.json`            | Top clips with video URLs, thumbnails, quality/viral scores | Highlight reel, clip browser |
| `api/brands.json`           | 153 brands, market share, skill correlations                | Brand intelligence dashboard |
| `api/players.json`          | 90 players, skill radars, archetypes, avatars               | Player profiles, leaderboard |
| `api/coaching.json`         | Coaching insights from analysis                             | AI coaching demo content     |
| `api/feed.json`             | Activity feed                                               | Live feed widget             |
| `api/sponsors.json`         | Sponsor detection data                                      | Sponsor/venue intelligence   |
| `api/player-equipment.json` | Equipment per player                                        | Equipment analytics          |
| `api/venue-tech.json`       | Venue technology data                                       | Venue intelligence           |
| `api/ideas.json`            | Research findings                                           | Idea lab integration         |


### Phase 2: Supabase as the Real-Time Layer (next step)

Connect Lovable Cloud (Supabase) to this project. Your GitHub repo already has `push-to-supabase.py` and schema. This enables:

- Write operations (event bookings, player sign-ups)
- Auth (real partner login for Chris Kepko)
- Real-time subscriptions (live dashboard updates)
- Edge functions (Courtana API proxy already in your repo)

**What you'd need to do:** Enable Lovable Cloud on this project, then I can create tables and edge functions directly.

### Phase 3: Bi-Directional Sync

- Claude Code pipeline pushes to Supabase (you already have the script)
- Lovable app reads from Supabase for real-time, gh-pages as fallback
- Edge function proxies to Courtana API for live court data
- Dashboard becomes truly live: court utilization, active sessions, highlight generation in real-time

## Phase 1 Implementation Details

### New file: `src/lib/pickleApi.ts`

- Base URL: `https://picklebill.github.io/pickle-daas-data/api/`
- TypeScript interfaces for each endpoint's response shape
- React Query hooks (`useClips`, `useBrands`, `usePlayers`, etc.) for caching and loading states
- 5-minute stale time (data updates every few hours anyway)

### Modified: `src/pages/Dashboard.tsx`

- KPI cards pull from live API: total clips, brands detected, player accounts, coverage %
- Revenue chart stays as projections (that's venue-specific)
- Add a "Live Intelligence" section below the existing content showing:
  - Top 5 clips with thumbnails (from clips.json)
  - Brand market share bar chart (from brands.json, real data replacing seed data)
  - Player leaderboard (from players.json)

### New page: `src/pages/Intelligence.tsx`

- Full brand intelligence view (sortable table, market share chart)
- Clip browser with video playback
- Player profiles with radar charts
- Links out to your gh-pages dashboards for deep dives

### Nav update

- Add "Intelligence" to primary nav or under "More" dropdown

## On Remixing Strategy

Your instinct is right. Here's how I'd organize:

- **This project** (courtana-venue-connect) = Peak Pickleball portal, the one Chris sees
- **Concord fork** = already exists at [CONCORD Remix](/projects/0ad7c004-8e07-4c5a-b54a-ffa1bd1bd9cb)
- **Template remix** = strip venue-specific content, keep data integration, use for next venue
- **DinkData / PickleStats Hub** = your data-heavy apps, can share the same `pickleApi.ts` layer

You can always go back to any build via Lovable's version history or by remixing before changes. - lets move forward with as much as you can...at least 1 & 2.    I'm not sure we need the Courtana API proxy, so we can address that one later. None of this is necessarily live CourtSense data, I believe, but let's bridge that one when the time comes. I would also encourage you to start thinking about edge AI functions that we can embed in here to make it more dynamic. Let's start by wiring this up and then move on to the next. Sound good? Great 

## What I Need From You

1. **Should I start Phase 1 now?** I can wire up the gh-pages API fetch layer and update the Dashboard with real data immediately -- no setup required on your end.
2. **Do you want to enable Lovable Cloud?** This would let me set up Supabase tables and edge functions for Phase 2. Go to Cloud in the sidebar to enable it.
3. **For the Courtana API proxy** (the edge function in your GitHub repo) -- do you have the Courtana API key accessible? That would enable live court session data.