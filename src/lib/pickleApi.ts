import { useQuery } from "@tanstack/react-query";

const BASE_URL = "https://picklebill.github.io/pickle-daas-data/api";

// ── Types ──────────────────────────────────────────────

export interface Clip {
  uuid: string;
  video_url: string;
  thumbnail: string;
  summary: string;
  quality: number;
  viral: number;
  watchability: number;
  arc: string;
  dominant_shot: string;
  total_shots: number;
  brands: string[];
}

export interface ClipsResponse {
  generated_at: string;
  top_quality: Clip[];
  top_viral: Clip[];
  top_watchability: Clip[];
}

export interface Brand {
  name: string;
  detections: number;
  unique_clips: number;
  share_of_court: number;
  primary_category: string;
  avg_viral: number;
  avg_quality: number;
  avg_skills: Record<string, number>;
}

export interface BrandsResponse {
  generated_at: string;
  total_brands: number;
  corpus_size: number;
  brands: Brand[];
}

export interface PlayerSkills {
  court_coverage: number;
  kitchen: number;
  power: number;
  touch: number;
  athleticism: number;
  creativity: number;
  court_iq: number;
  consistency: number;
  composure: number;
}

export interface Player {
  username: string;
  avatar: string;
  clip_count: number;
  archetype: string;
  avg_viral: number;
  skills: PlayerSkills;
  primary_brand: string;
  favorite_arc: string;
}

export interface PlayersResponse {
  generated_at: string;
  total_players: number;
  players: Player[];
}

export interface FeedCorpus {
  total_clips: number;
  linked_to_courtana: number;
  unique_brands: number;
  unique_players: number;
  avg_quality: number;
  avg_viral: number;
}

export interface FeedResponse {
  generated_at: string;
  corpus: FeedCorpus;
  idea_lab: {
    version: number;
    total_findings: number;
    strategic_count: number;
    data_count: number;
  };
  top_brands: [string, number][];
}

export interface CoachingResponse {
  generated_at: string;
  arc_distribution: Record<string, number>;
  shot_distribution: Record<string, number>;
  shot_skill_matrix: Record<string, { count: number; avg_skills: Record<string, number> }>;
}

// ── Fetchers ───────────────────────────────────────────

async function fetchJson<T>(endpoint: string): Promise<T> {
  const res = await fetch(`${BASE_URL}/${endpoint}`);
  if (!res.ok) throw new Error(`API error: ${res.status}`);
  return res.json();
}

// ── React Query Hooks ──────────────────────────────────

const STALE = 5 * 60 * 1000; // 5 minutes

export const useClips = () =>
  useQuery<ClipsResponse>({ queryKey: ["pickle", "clips"], queryFn: () => fetchJson("clips.json"), staleTime: STALE });

export const useBrands = () =>
  useQuery<BrandsResponse>({ queryKey: ["pickle", "brands"], queryFn: () => fetchJson("brands.json"), staleTime: STALE });

export const usePlayers = () =>
  useQuery<PlayersResponse>({ queryKey: ["pickle", "players"], queryFn: () => fetchJson("players.json"), staleTime: STALE });

export const useFeed = () =>
  useQuery<FeedResponse>({ queryKey: ["pickle", "feed"], queryFn: () => fetchJson("feed.json"), staleTime: STALE });

export const useCoaching = () =>
  useQuery<CoachingResponse>({ queryKey: ["pickle", "coaching"], queryFn: () => fetchJson("coaching.json"), staleTime: STALE });
