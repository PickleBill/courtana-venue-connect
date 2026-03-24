

# Part 1: Landing Page Visual Overhaul

The user wants two things done **sequentially** -- first the landing page redesign, then the Venue Opportunity Dashboard. This plan covers **Part 1 only**: making the landing page (`/`) visually stunning with a witty tagline.

## What Changes

### Landing Page (`src/pages/Landing.tsx`) -- Full Visual Redesign

**Hero Section -- Complete Rework:**
- Massive headline: "Courtana × Peak" stays but gets a dramatic gradient treatment
- New tagline: **"Let's Launch Together."** -- large, confident, not buried in small text
- Remove the tiny badge pill with the "courtana.com experience" text -- replace with a bold, clean presentation
- Hero gets a subtle radial gradient background glow behind the headline (green/teal)
- CTAs get larger, more prominent styling with proper spacing
- Add a subtle animated background element (gradient orbs or mesh)

**Stats Bar -- Make it pop:**
- Larger numbers, bolder presentation
- Add subtle card backgrounds to each stat instead of bare text
- Green glow accent on the stat values

**Value Props -- Upgrade cards:**
- Larger icons (32-36px instead of 24px)
- Bigger titles (text-xl instead of text-lg)  
- More padding, more breathing room
- Description text bumped to base size (not text-sm)

**"See It In Action" Section:**
- Feature description cards: bump text sizes, remove cramped text-xs descriptions
- Better spacing between the feature cards and mockup grid

**Timeline Section:**
- Cleaner spacing, larger week titles
- Focus tags more prominent

**Economics Section:**
- Metric cards: larger value text (text-5xl)
- Table: slightly larger text, more padding

**CTA Section:**
- Bolder headline
- Bigger buttons with more visual weight

### Files Modified
- `src/pages/Landing.tsx` -- complete visual upgrade (sizing, spacing, hero redesign, tagline)
- `src/index.css` -- possibly add a hero-gradient utility or background glow class

No new files, no new routes. Pure visual polish.

## Technical Approach
- Increase all text sizes: hero text stays clamp-based but larger, body sections use text-base/text-lg instead of text-sm/text-xs
- Add radial gradient backgrounds using Tailwind arbitrary values or inline styles
- Increase card padding from p-4/p-6 to p-6/p-8
- Ensure mobile remains clean at the larger sizes
- Tagline "Let's Launch Together." placed prominently below the main headline in text-2xl or text-3xl with a subtle gradient or accent color

