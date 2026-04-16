import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Landing from "./pages/Landing";
import Events from "./pages/Events";
import EventDetail from "./pages/EventDetail";
import Schedule from "./pages/Schedule";
import Dashboard from "./pages/Dashboard";
import Intelligence from "./pages/Intelligence";
import About from "./pages/About";
import Discovery from "./pages/Discovery";
import Partners from "./pages/Partners";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Landing />} />
          <Route path="/events" element={<Events />} />
          <Route path="/events/:id" element={<EventDetail />} />
          <Route path="/schedule" element={<Schedule />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/intelligence" element={<Intelligence />} />
          <Route path="/about" element={<About />} />
          <Route path="/discovery" element={<Discovery />} />
          <Route path="/partners" element={<Partners />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
