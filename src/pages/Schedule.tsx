import { useState, useMemo } from "react";
import { motion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { format, addDays, startOfWeek, isSameDay } from "date-fns";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

type BlockType = "available" | "event" | "booked" | "premium";

interface TimeBlock {
  time: string;
  type: BlockType;
  label?: string;
}

const courts = ["Court 1", "Court 2", "Court 3", "Court 4"];
const hours = ["8 AM", "9 AM", "10 AM", "11 AM", "12 PM", "1 PM", "2 PM", "3 PM", "4 PM", "5 PM", "6 PM", "7 PM", "8 PM"];

const blockColors: Record<BlockType, string> = {
  available: "bg-primary/20 border-primary/30 hover:bg-primary/30 cursor-pointer",
  event: "bg-blue-500/20 border-blue-500/30",
  booked: "bg-muted border-border",
  premium: "bg-accent/20 border-accent/30",
};

const legendItems: { type: BlockType; label: string }[] = [
  { type: "available", label: "Available" },
  { type: "event", label: "Cortana Event" },
  { type: "booked", label: "Booked" },
  { type: "premium", label: "Premium Pricing" },
];

// Seed data generator
const generateBlocks = (dayIndex: number, courtIndex: number): TimeBlock[] => {
  const isWed = dayIndex === 2;
  const isSat = dayIndex === 5;
  const busy = isWed || isSat;

  return hours.map((time, hi) => {
    // Events on specific slots
    if (dayIndex === 0 && hi >= 10 && hi <= 11 && courtIndex < 2) return { time, type: "event" as BlockType, label: "Drill & Play" };
    if (dayIndex === 2 && hi >= 2 && hi <= 5) return { time, type: "event" as BlockType, label: "Round Robin" };
    if (dayIndex === 4 && hi >= 10 && hi <= 12 && courtIndex < 3) return { time, type: "event" as BlockType, label: "Friday Fights" };
    if (dayIndex === 5 && hi >= 4 && hi <= 7) return { time, type: "event" as BlockType, label: "Pro-Am" };

    // Premium slots - evenings
    if (hi >= 10 && hi <= 12 && !busy) return { time, type: "premium" as BlockType };

    // Busy days have more bookings
    if (busy && Math.random() > 0.4) return { time, type: "booked" as BlockType };
    if (!busy && Math.random() > 0.65) return { time, type: "booked" as BlockType };

    return { time, type: "available" as BlockType };
  });
};

const Schedule = () => {
  const [weekStart, setWeekStart] = useState(() => startOfWeek(new Date(), { weekStartsOn: 1 }));
  const [selectedDay, setSelectedDay] = useState(0);

  const days = useMemo(() =>
    Array.from({ length: 7 }, (_, i) => addDays(weekStart, i)),
    [weekStart]
  );

  // Pre-generate blocks so they don't change on re-render
  const [gridData] = useState(() => {
    const data: TimeBlock[][][] = [];
    for (let d = 0; d < 7; d++) {
      data[d] = [];
      for (let c = 0; c < 4; c++) {
        data[d][c] = generateBlocks(d, c);
      }
    }
    return data;
  });

  return (
    <div className="min-h-screen">
      <Navbar />
      <div className="pt-24 pb-20 px-4">
        <div className="container mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}>
            <h1 className="section-title text-foreground mb-2">Court Schedule</h1>
            <p className="text-muted-foreground mb-8">See what's open, what's booked, and where Cortana events are happening.</p>
          </motion.div>

          {/* Week picker */}
          <div className="flex items-center gap-4 mb-8">
            <Button variant="outline" size="icon" className="rounded-xl" onClick={() => setWeekStart(addDays(weekStart, -7))}>
              <ChevronLeft size={18} />
            </Button>
            <span className="text-foreground font-semibold">
              Week of {format(weekStart, "MMM d, yyyy")}
            </span>
            <Button variant="outline" size="icon" className="rounded-xl" onClick={() => setWeekStart(addDays(weekStart, 7))}>
              <ChevronRight size={18} />
            </Button>
          </div>

          {/* Mobile day picker */}
          <div className="flex gap-2 mb-6 lg:hidden overflow-x-auto pb-2">
            {days.map((day, i) => (
              <button
                key={i}
                onClick={() => setSelectedDay(i)}
                className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                  selectedDay === i ? "bg-primary text-primary-foreground" : "bg-secondary text-muted-foreground"
                }`}
              >
                {format(day, "EEE d")}
              </button>
            ))}
          </div>

          {/* Desktop Grid */}
          <div className="hidden lg:block glass rounded-2xl overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr>
                  <th className="p-3 text-left text-muted-foreground font-semibold sticky left-0 bg-card z-10">Court</th>
                  {days.map((day, i) => (
                    <th key={i} className="p-3 text-center text-muted-foreground font-semibold min-w-[120px]">
                      {format(day, "EEE, MMM d")}
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {courts.map((court, ci) => (
                  <tr key={court} className="border-t border-border/50">
                    <td className="p-3 text-foreground font-medium sticky left-0 bg-card z-10">{court}</td>
                    {days.map((_, di) => (
                      <td key={di} className="p-2">
                        <div className="flex flex-col gap-1">
                          {gridData[di][ci].map((block, bi) => (
                            <div
                              key={bi}
                              className={`px-2 py-1 rounded-md border text-[10px] truncate transition-colors ${blockColors[block.type]}`}
                              title={block.label || `${block.time} - ${block.type}`}
                            >
                              {block.label || block.time}
                            </div>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Mobile day view */}
          <div className="lg:hidden space-y-4">
            {courts.map((court, ci) => (
              <div key={court} className="glass rounded-2xl p-4">
                <h3 className="font-bold text-foreground mb-3">{court}</h3>
                <div className="grid grid-cols-4 gap-1.5">
                  {gridData[selectedDay][ci].map((block, bi) => (
                    <div
                      key={bi}
                      className={`px-2 py-2 rounded-lg border text-[11px] text-center truncate transition-colors ${blockColors[block.type]}`}
                      title={block.label || block.type}
                    >
                      {hours[bi]}
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Legend */}
          <div className="flex flex-wrap gap-4 mt-8">
            {legendItems.map((item) => (
              <div key={item.type} className="flex items-center gap-2 text-sm text-muted-foreground">
                <div className={`w-4 h-4 rounded border ${blockColors[item.type]}`} />
                {item.label}
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Schedule;
