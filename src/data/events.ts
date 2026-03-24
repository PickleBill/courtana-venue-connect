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
}

export const events: EventData[] = [
  {
    id: "launch-night",
    title: "Launch Night Open Play",
    description: "Kick off the Cortana × Peak partnership with a free night of open play, live demos, and prizes.",
    longDescription: [
      "Join us for the grand opening of the Cortana × Peak partnership! This free event is your first chance to experience smart court technology in action.",
      "We'll have courts running all night with live stat tracking, instant replay stations, and our AI analysis giving you real-time feedback on your game.",
      "Plus, stick around for raffles, giveaways, and a sneak peek at the full 8-week event lineup. Bring a friend — the more the merrier.",
      "All skill levels welcome. Paddles and balls provided. Just show up ready to play."
    ],
    date: "2026-03-29",
    time: "6:00 PM – 9:00 PM",
    price: 0,
    spots: 40,
    spotsTotal: 40,
    category: "Open Play",
    whatsIncluded: ["3 hours of open play", "Smart court stat tracking", "Instant replay access", "Raffle entry", "Snacks & drinks"],
    whoItsFor: "Everyone — all skill levels welcome. Perfect for curious beginners and seasoned players alike.",
    format: "Open play rotation. Courts assigned on arrival. 15-minute game rotations."
  },
  {
    id: "drill-play-michael",
    title: "Drill & Play with Coach Michael",
    description: "90-minute clinic focusing on third-shot drops, resets, and transition game with IPTPA-certified Coach Michael.",
    longDescription: [
      "Coach Michael brings 15 years of racquet sports experience and IPTPA certification to this focused 90-minute clinic.",
      "The session breaks down into three segments: warm-up drills (20 min), focused skill work on third-shot drops and resets (40 min), and live game application (30 min).",
      "With Cortana's smart court tech, you'll see your shot data in real time — spin rate, placement accuracy, and consistency metrics that help you understand exactly where to improve.",
      "Limited to 16 players (4 per court) to ensure personalized attention and maximum reps."
    ],
    date: "2026-04-02",
    time: "7:00 PM – 8:30 PM",
    price: 40,
    spots: 16,
    spotsTotal: 16,
    category: "Clinic",
    whatsIncluded: ["90-minute coached session", "Video analysis with AI feedback", "Drill progression handout", "Post-session stat report"],
    whoItsFor: "Intermediate players (3.0–4.0) looking to sharpen their transition game.",
    format: "4 courts, 4 players per court. Rotating drills with coach feedback between stations."
  },
  {
    id: "spring-charity-robin",
    title: "Spring Charity Round Robin",
    description: "Friendly round robin tournament with all proceeds going to the local youth sports foundation.",
    longDescription: [
      "Grab a partner and play for a cause! This round robin pairs you with different partners throughout the afternoon for a fun, competitive experience.",
      "Every dollar of your entry fee goes directly to the Peak Youth Sports Foundation, supporting equipment grants and court access for underserved kids.",
      "Cortana's smart courts will track every match — and at the end of the day, we'll award prizes for Most Aces, Best Rally, and the coveted 'Heart of the Court' sportsmanship award.",
      "Light refreshments provided. Medals for the top 3 teams."
    ],
    date: "2026-04-05",
    time: "10:00 AM – 2:00 PM",
    price: 15,
    spots: 24,
    spotsTotal: 24,
    category: "Tournament",
    whatsIncluded: ["4 hours of play", "Partner rotation format", "Medals for top 3", "Stat awards", "Refreshments"],
    whoItsFor: "All skill levels. We balance teams to keep matches competitive and fun.",
    format: "Round robin with rotating partners. 6 rounds, 15-minute matches. Points-based standings."
  },
  {
    id: "beginner-bootcamp",
    title: "Beginner Bootcamp",
    description: "Never played pickleball? Start here. Learn the rules, basic strokes, scoring, and court etiquette.",
    longDescription: [
      "Pickleball is the fastest-growing sport in America, and this bootcamp is your perfect on-ramp. Zero experience required.",
      "We'll cover everything: how to hold the paddle, the basic strokes (serve, return, dink, volley), the kitchen rule, and scoring. By the end of 90 minutes, you'll be playing real games confidently.",
      "Our smart court technology provides gentle, encouraging feedback — think of it like having a patient coach watching every shot and helping you improve in real time.",
      "Small group size means plenty of individual attention. You'll leave with a personalized tip sheet based on your session data."
    ],
    date: "2026-04-09",
    time: "6:30 PM – 8:00 PM",
    price: 25,
    spots: 12,
    spotsTotal: 12,
    category: "Clinic",
    whatsIncluded: ["90-minute lesson", "Paddle & balls provided", "Personalized tip sheet", "Smart court feedback", "Follow-up practice plan"],
    whoItsFor: "Complete beginners. No equipment or experience needed.",
    format: "Instructor-led progression: basics → drills → guided games."
  },
  {
    id: "friday-night-fights",
    title: "Friday Night Fights",
    description: "Competitive doubles tournament with bracket play, live leaderboards, and prizes for the top teams.",
    longDescription: [
      "Friday Night Fights is where the competitive players come to battle. Bring your A-game and a partner — this is bracket-style doubles with real stakes.",
      "We run a double-elimination bracket with games to 11, win by 2. Cortana's live leaderboard shows real-time standings, and our smart courts capture every point for post-match analysis.",
      "Top 3 teams win prizes: gift cards, free clinic passes, and bragging rights on the permanent Peak leaderboard.",
      "Check-in starts at 6:30 PM. First serve at 7:00 PM sharp. Estimated finish by 9:30 PM."
    ],
    date: "2026-04-11",
    time: "7:00 PM – 9:30 PM",
    price: 10,
    spots: 32,
    spotsTotal: 32,
    category: "Tournament",
    whatsIncluded: ["Double elimination bracket", "Live leaderboard", "Match replays", "Prizes for top 3", "Post-match stat reports"],
    whoItsFor: "Intermediate to advanced players (3.5+). Competitive but respectful atmosphere.",
    format: "Double elimination bracket. Teams of 2. Games to 11, win by 2."
  },
  {
    id: "pro-am-exhibition",
    title: "Pro-Am Exhibition",
    description: "Watch local pros play, then join them on court. A showcase of what smart court tech can do at the highest level.",
    longDescription: [
      "The Pro-Am Exhibition is the crown jewel of the Cortana × Peak launch. Watch top-rated local pros demonstrate elite-level play while Cortana's AI breaks down their techniques in real time on the big screen.",
      "After the exhibition matches, it's your turn. Sign up for a chance to play alongside the pros in mixed doubles games. Our AI will compare your stats to the pros — it's humbling, hilarious, and incredibly educational.",
      "The event includes a Q&A panel with the pros, a Cortana tech demo, and a preview of premium features coming to Peak.",
      "Food trucks on site. This is the event you don't want to miss."
    ],
    date: "2026-04-19",
    time: "4:00 PM – 8:00 PM",
    price: 20,
    spots: 60,
    spotsTotal: 60,
    category: "Special",
    whatsIncluded: ["Pro exhibition matches", "Play-with-a-pro session", "AI analysis demo", "Pro Q&A panel", "Food truck access"],
    whoItsFor: "Everyone — watch the pros, then try it yourself. All levels welcome for the play-along portion.",
    format: "Exhibition matches (1 hr) → Pro-Am mixed doubles (2 hrs) → Q&A + demo (1 hr)."
  },
];

export const getEventById = (id: string) => events.find((e) => e.id === id);

export const categoryColors: Record<string, string> = {
  "Open Play": "bg-primary/20 text-primary",
  "Clinic": "bg-blue-500/20 text-blue-400",
  "Tournament": "bg-amber-500/20 text-amber-400",
  "Special": "bg-accent/20 text-accent",
};
