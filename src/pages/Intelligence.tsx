import { motion } from "framer-motion";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, RadarChart, PolarGrid, PolarAngleAxis, PolarRadiusAxis, Radar } from "recharts";
import { Brain, Play, Users, Trophy, ExternalLink, TrendingUp } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { useBrands, useClips, usePlayers, useFeed, useCoaching } from "@/lib/pickleApi";

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};
const stagger = { visible: { transition: { staggerChildren: 0.1 } } };

const Intelligence = () => {
  const { data: brands, isLoading: brandsLoading } = useBrands();
  const { data: clips, isLoading: clipsLoading } = useClips();
  const { data: players, isLoading: playersLoading } = usePlayers();
  const { data: feed } = useFeed();
  const { data: coaching } = useCoaching();

  const topBrands = brands?.brands.slice(0, 10).map((b) => ({
    name: b.name,
    share: b.share_of_court,
    detections: b.detections,
    category: b.primary_category,
  })) ?? [];

  const topClips = clips?.top_quality.slice(0, 6) ?? [];
  const topPlayers = players?.players.slice(0, 8) ?? [];

  const selectedPlayer = topPlayers[0];
  const radarData = selectedPlayer
    ? Object.entries(selectedPlayer.skills).map(([key, val]) => ({
        skill: key.replace(/_/g, " ").replace(/\b\w/g, (c) => c.toUpperCase()),
        value: val,
        fullMark: 10,
      }))
    : [];

  const shotData = coaching
    ? Object.entries(coaching.shot_distribution)
        .sort(([, a], [, b]) => b - a)
        .slice(0, 6)
        .map(([name, count]) => ({ name: name.replace(/_/g, " "), count }))
    : [];

  const isLoading = brandsLoading || clipsLoading || playersLoading;

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto max-w-6xl">
          {/* Header */}
          <motion.div initial="hidden" animate="visible" variants={stagger} className="mb-10">
            <motion.div variants={fadeInUp}>
              <h1 className="section-title text-foreground">
                <span className="text-gradient-green">Intelligence</span> Hub
              </h1>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Live data from {feed?.corpus.total_clips.toLocaleString() ?? "3,700"}+ analyzed clips.
                Updated automatically by our AI pipeline.
              </p>
              <div className="flex flex-wrap gap-3 mt-4">
                {feed && (
                  <>
                    <span className="text-xs px-3 py-1 rounded-full bg-primary/20 text-primary font-bold">
                      {feed.corpus.total_clips.toLocaleString()} Clips
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-purple-500/20 text-purple-400 font-bold">
                      {feed.corpus.unique_brands} Brands
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-amber-500/20 text-amber-400 font-bold">
                      {feed.corpus.unique_players} Players
                    </span>
                    <span className="text-xs px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-400 font-bold">
                      Avg Quality: {feed.corpus.avg_quality.toFixed(1)}/10
                    </span>
                  </>
                )}
              </div>
            </motion.div>
          </motion.div>

          {isLoading ? (
            <div className="flex items-center justify-center py-20">
              <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary" />
            </div>
          ) : (
            <>
              {/* Brand Market Share */}
              <motion.div className="glass rounded-2xl p-6 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-2 mb-1">
                  <TrendingUp size={18} className="text-primary" />
                  <h3 className="font-bold text-foreground">Brand Share of Court</h3>
                </div>
                <p className="text-xs text-muted-foreground mb-4">
                  {brands?.total_brands} brands detected across {brands?.corpus_size.toLocaleString()} clips
                </p>
                <div className="h-72">
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={topBrands} layout="vertical">
                      <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                      <XAxis type="number" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} tickFormatter={(v) => `${v}%`} />
                      <YAxis type="category" dataKey="name" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} width={80} />
                      <Tooltip
                        contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }}
                        formatter={(value: number, _name: string, props: any) => [`${value.toFixed(1)}% (${props.payload.detections} detections)`, "Share"]}
                      />
                      <Bar dataKey="share" fill="hsl(145, 100%, 45%)" radius={[0, 6, 6, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </motion.div>

              {/* Top Clips */}
              <motion.div className="mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <div className="flex items-center gap-2 mb-4">
                  <Play size={18} className="text-primary" />
                  <h3 className="font-bold text-foreground text-lg">Top Clips</h3>
                </div>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                  {topClips.map((clip) => (
                    <a
                      key={clip.uuid}
                      href={clip.video_url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="glass rounded-xl overflow-hidden group hover:border-primary/30 transition-colors"
                    >
                      <div className="relative aspect-video bg-secondary">
                        <img src={clip.thumbnail} alt={clip.summary} className="w-full h-full object-cover" loading="lazy" />
                        <div className="absolute inset-0 bg-black/40 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                          <Play size={36} className="text-white" />
                        </div>
                        <div className="absolute top-2 right-2 flex gap-1">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-primary/80 text-white font-bold">Q{clip.quality}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-amber-500/80 text-white font-bold">V{clip.viral}</span>
                        </div>
                      </div>
                      <div className="p-3">
                        <p className="text-xs text-muted-foreground line-clamp-2">{clip.summary}</p>
                        <div className="flex items-center gap-2 mt-2">
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{clip.dominant_shot}</span>
                          <span className="text-[10px] px-2 py-0.5 rounded-full bg-secondary text-muted-foreground">{clip.total_shots} shots</span>
                        </div>
                      </div>
                    </a>
                  ))}
                </div>
              </motion.div>

              {/* Players + Radar */}
              <div className="grid lg:grid-cols-2 gap-6 mb-8">
                {/* Player Leaderboard */}
                <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-4">
                    <Trophy size={18} className="text-amber-400" />
                    <h3 className="font-bold text-foreground">Player Leaderboard</h3>
                  </div>
                  <div className="space-y-2">
                    {topPlayers.map((p, i) => (
                      <div key={p.username} className="flex items-center gap-3 p-2.5 rounded-lg hover:bg-secondary/50 transition-colors">
                        <span className="text-xs font-bold text-muted-foreground w-5 text-right">{i + 1}</span>
                        <img src={p.avatar} alt={p.username} className="w-8 h-8 rounded-full object-cover bg-secondary" />
                        <div className="flex-1 min-w-0">
                          <div className="text-sm font-semibold text-foreground truncate">{p.username}</div>
                          <div className="text-[10px] text-muted-foreground">{p.archetype} · {p.clip_count} clips</div>
                        </div>
                        <span className="text-xs px-2 py-0.5 rounded-full bg-primary/20 text-primary font-bold">{p.avg_viral.toFixed(1)}★</span>
                      </div>
                    ))}
                  </div>
                </motion.div>

                {/* Skill Radar */}
                <motion.div className="glass rounded-2xl p-6" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-1">
                    <Brain size={18} className="text-primary" />
                    <h3 className="font-bold text-foreground">Skill Profile — {selectedPlayer?.username}</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">{selectedPlayer?.archetype} · {selectedPlayer?.primary_brand}</p>
                  <div className="h-72">
                    <ResponsiveContainer width="100%" height="100%">
                      <RadarChart data={radarData}>
                        <PolarGrid stroke="hsl(215, 20%, 20%)" />
                        <PolarAngleAxis dataKey="skill" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 10 }} />
                        <PolarRadiusAxis angle={90} domain={[0, 10]} tick={false} axisLine={false} />
                        <Radar name="Skills" dataKey="value" stroke="hsl(145, 100%, 45%)" fill="hsl(145, 100%, 45%)" fillOpacity={0.2} strokeWidth={2} />
                      </RadarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              </div>

              {/* Shot Distribution */}
              {shotData.length > 0 && (
                <motion.div className="glass rounded-2xl p-6 mb-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                  <div className="flex items-center gap-2 mb-1">
                    <Brain size={18} className="text-primary" />
                    <h3 className="font-bold text-foreground">Shot Distribution</h3>
                  </div>
                  <p className="text-xs text-muted-foreground mb-4">Dominant shot types across the entire corpus</p>
                  <div className="h-64">
                    <ResponsiveContainer width="100%" height="100%">
                      <BarChart data={shotData}>
                        <CartesianGrid strokeDasharray="3 3" stroke="hsl(215, 20%, 15%)" />
                        <XAxis dataKey="name" tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} />
                        <YAxis tick={{ fill: "hsl(215, 16%, 62%)", fontSize: 11 }} />
                        <Tooltip contentStyle={{ backgroundColor: "hsl(220, 26%, 10%)", border: "1px solid hsl(215, 20%, 15%)", borderRadius: 12, fontSize: 12 }} />
                        <Bar dataKey="count" fill="hsl(280, 80%, 60%)" radius={[6, 6, 0, 0]} />
                      </BarChart>
                    </ResponsiveContainer>
                  </div>
                </motion.div>
              )}

              {/* Deep Dive Link */}
              <motion.div className="text-center py-8" initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
                <a
                  href="https://picklebill.github.io/pickle-daas-data/dashboards/showcase-portal-v3.3.html"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-primary/10 border border-primary/20 text-primary hover:bg-primary/20 transition-colors font-semibold"
                >
                  <ExternalLink size={16} />
                  Open Full Data Showcase
                </a>
              </motion.div>
            </>
          )}
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Intelligence;
