export interface EventData {
  id: string;
  title: string;
  description: string;
  longDescription: string[];
  date: string;
  time: string;
  price: number;
  spots: number;
  spotsTotal: number;
  category: "Open Play" | "Clinic" | "Tournament" | "Special";
  whatsIncluded: string[];
  whoItsFor: string;
  format: string;
  badge?: string;
  featured?: boolean;
}

export const events: EventData[] = [
  {
    id: "grand-opening",
    title: "Peak Pickleball Grand Opening — Dinks & Drinks with Chris Kelly",
    description: "Live music. Craft drinks. Celebrity matches on smart courts. Every rally captured. Every highlight yours to keep.",
    longDescription: [
      "This is the event that puts Peak Pickleball on the map. Join us for a night of live music, craft cocktails, and high-energy pickleball on Courtana-powered smart courts.",
      "Watch celebrity exhibition matches with real-time AI analysis on the big screens. Every rally captured, every highlight generated — and every player goes home with their best moments.",
      "Live broadcast from championship courts visible from the highway and the Sheraton. This is Peak's coming-out party, powered by smart court technology.",
      "General admission includes drinks, food, live entertainment, and access to all smart court features for the night."
    ],
    date: "2026-05-09",
    time: "5:00 PM – 10:00 PM",
    price: 15,
    spots: 200,
    spotsTotal: 200,
    category: "Special",
    whatsIncluded: ["Live music & entertainment", "Craft drinks", "Smart court access", "Highlight reel", "Celebrity matches"],
    whoItsFor: "Everyone — players, families, spectators. The biggest night in Peak Pickleball history.",
    format: "Open format — exhibition matches, open play rotations, live entertainment throughout the evening.",
    badge: "🔥 Grand Opening",
    featured: true,
  },
  {
    id: "spring-smash",
    title: "Peak Spring Smash Tournament",
    description: "4-day tournament targeting 300 players. Courtana cameras live on 4 courts — every match recorded, highlights auto-generated, leaderboard on displays.",
    longDescription: [
      "The Peak Spring Smash is the showcase moment for Courtana × Peak. 300 players across 4 days of competitive pickleball with smart court technology on every championship court.",
      "Every match is recorded. Highlights are auto-generated. The live leaderboard runs on court-side displays. Every player leaves with a highlight reel and a reason to come back.",
      "Multiple skill divisions ensure competitive, fun matches at every level. Double elimination brackets with games to 11, win by 2.",
      "This is the tournament that proves what smart courts can do for a venue. Massive social content, player engagement, and community buzz."
    ],
    date: "2026-05-01",
    time: "8:00 AM – 6:00 PM",
    price: 40,
    spots: 300,
    spotsTotal: 300,
    category: "Tournament",
    whatsIncluded: ["4 days of tournament play", "Smart court recording", "Auto-generated highlights", "Live leaderboard", "Medals for winners"],
    whoItsFor: "All skill levels — multiple divisions from 3.0 to 5.0+.",
    format: "Double elimination brackets by skill division. Games to 11, win by 2.",
  },
  {
    id: "coaches-preview",
    title: "Courtana Court Preview: Coaches Only",
    description: "Private session for Chris and his coaching staff. See AI analysis on your own games. Coaches become evangelists before players see it.",
    longDescription: [
      "This invite-only session gives Peak's coaching team exclusive early access to Courtana's smart court technology.",
      "Each coach plays a full session while the AI analyzes their technique — shot selection, spin rate, placement accuracy, and consistency patterns.",
      "The goal: coaches experience the technology firsthand so they can authentically recommend it to their students. When coaches are believers, players follow.",
      "Includes a full walkthrough of the coaching tools, revenue sharing model, and how to integrate AI analysis into lesson plans."
    ],
    date: "2026-04-14",
    time: "10:00 AM – 12:00 PM",
    price: 0,
    spots: 10,
    spotsTotal: 10,
    category: "Clinic",
    whatsIncluded: ["2-hour smart court session", "AI analysis on your game", "Coaching tools walkthrough", "Revenue model briefing"],
    whoItsFor: "Peak coaching staff only — invite required.",
    format: "Guided demo + free play on smart courts with AI analysis running.",
    badge: "Invite Only",
  },
  {
    id: "open-play-happy-hour",
    title: "Open Play Happy Hour",
    description: "Weekly Thursday open play with smart court features active. Members play free, guests $10. The easiest way to experience Courtana.",
    longDescription: [
      "Every Thursday starting April 17, Peak's Courtana courts come alive for Open Play Happy Hour.",
      "Real-time court displays show who's playing, skill levels, and open spots. No more group text chains — just show up, scan in, and Courtana matches you.",
      "Members play free. Guests pay $10 — and get full access to smart court features including instant replay, shot tracking, and the weekly leaderboard.",
      "This is the weekly heartbeat of the Courtana experience at Peak. Consistent, fun, and powered by smart tech."
    ],
    date: "2026-04-17",
    time: "5:00 PM – 8:00 PM",
    price: 10,
    spots: 40,
    spotsTotal: 40,
    category: "Open Play",
    whatsIncluded: ["3 hours of open play", "Smart court features", "Skill-based matching", "Weekly leaderboard entry"],
    whoItsFor: "All levels. Members free, guests $10.",
    format: "Open rotation. Courtana handles court assignments and skill matching.",
  },
  {
    id: "ai-coaching-clinic",
    title: "AI Coaching Clinic: Third Shot Mastery",
    description: "Coach-led drills with AI analysis delivered to each player within 24 hours. $25/player, 16 spots. The first paid AI coaching session.",
    longDescription: [
      "The first paid coaching clinic on Courtana courts — and the test of the AI coaching revenue model Chris was excited about.",
      "Coach-led drills focus on the third shot drop, one of pickleball's most critical and hardest-to-master shots. The AI tracks every attempt — spin, trajectory, landing zone, consistency.",
      "Within 24 hours of the clinic, each player receives a personalized AI analysis report showing their performance, patterns, and specific drills to practice.",
      "At $25/player with 16 spots, this clinic validates the $20-25 AI coaching price point. Revenue split: 70% coach, 20% Peak, 10% Courtana."
    ],
    date: "2026-04-22",
    time: "6:00 PM – 7:30 PM",
    price: 25,
    spots: 16,
    spotsTotal: 16,
    category: "Clinic",
    whatsIncluded: ["90-minute coached clinic", "AI shot analysis", "Personalized report within 24hrs", "Drill progression plan"],
    whoItsFor: "Intermediate players (3.0–4.0) looking to master the third shot drop.",
    format: "4 courts, 4 players per court. Rotating drills with AI tracking every shot.",
  },
  {
    id: "friday-night-lights",
    title: "Friday Night Lights: Live Broadcast",
    description: "Live broadcast from championship courts. Watch from the highway, the Sheraton, or courtside. Free to watch, $5 to play.",
    longDescription: [
      "Every Friday night starting May 16, Peak's championship courts go live. Smart court cameras broadcast matches to screens inside the venue, on the highway-facing displays, and online.",
      "Players pay $5 to compete in the Friday night showcase — complete with live stats, instant replay, and real-time leaderboard. Spectators watch free.",
      "Peak is 30 seconds from a Sheraton and visible from the highway. Friday Night Lights turns cameras into a marketing billboard — attracting hotel guests, passersby, and curious spectators.",
      "This is how smart courts drive walk-in traffic and guest fee revenue without spending a dollar on advertising."
    ],
    date: "2026-05-16",
    time: "7:00 PM – 10:00 PM",
    price: 5,
    spots: 32,
    spotsTotal: 32,
    category: "Special",
    whatsIncluded: ["Live broadcast", "Smart court recording", "Instant replay", "Leaderboard competition", "Spectator-friendly atmosphere"],
    whoItsFor: "Players ($5 to compete) and spectators (free). All levels welcome.",
    format: "Showcase matches on championship courts with live broadcast.",
  },
  {
    id: "charity-round-robin",
    title: "Charity Round Robin",
    description: "Friendly round robin with all proceeds donated. Smart courts track every match — awards for Most Aces, Best Rally, and Heart of the Court.",
    longDescription: [
      "Grab a partner and play for a cause. This round robin pairs you with different partners throughout the afternoon for a fun, competitive experience.",
      "Every dollar of your $20 donation entry goes directly to local youth sports programs. Courtana's smart courts track every match for post-event analysis.",
      "At the end of the day, we award prizes for Most Aces, Best Rally, and the coveted 'Heart of the Court' sportsmanship award — all determined by smart court data.",
      "Light refreshments provided. Medals for the top 3 teams. A feel-good event that also showcases smart court tech to 24 players."
    ],
    date: "2026-05-17",
    time: "10:00 AM – 2:00 PM",
    price: 20,
    spots: 24,
    spotsTotal: 24,
    category: "Tournament",
    whatsIncluded: ["4 hours of play", "Partner rotation format", "Medals for top 3", "Smart court stat awards", "Refreshments"],
    whoItsFor: "All skill levels. Balanced teams keep matches competitive and fun.",
    format: "Round robin with rotating partners. 6 rounds, 15-minute matches. Points-based standings.",
  },
];

export const getEventById = (id: string) => events.find((e) => e.id === id);

export const categoryColors: Record<string, string> = {
  "Open Play": "bg-primary/20 text-primary",
  "Clinic": "bg-blue-500/20 text-blue-400",
  "Tournament": "bg-amber-500/20 text-amber-400",
  "Special": "bg-accent/20 text-accent",
};