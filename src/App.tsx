
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Index from "./pages/Index";
import MbaLanding from "./pages/MbaLanding";
import McaLanding from "./pages/McaLanding";
import MaLanding from "./pages/MaLanding";
import McomLanding from "./pages/McomLanding";
import BcaLanding from "./pages/BcaLanding";
import BbaLanding from "./pages/BbaLanding";
import BaLanding from "./pages/BaLanding";
import BcomLanding from "./pages/BcomLanding";
import NotFound from "./pages/NotFound";

import Disclaimer from "./pages/disclaimer";
import Terms from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/privacy-policy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      {/* ✅ Hidden SEO Headings to Improve Keyword Indexing */}
      <h1 style={{ display: "none" }}>
        IGNOU Admission 2025 (July Session) – Apply Online Today
      </h1>
      <h1 style={{ display: "none" }}>
        Apply for IGNOU MBA Admission 2025 – Distance & Online Mode
      </h1>
      <h1 style={{ display: "none" }}>
        Indira Gandhi National Open University (IGNOU) Admission 2025–26 Open Now
      </h1>

      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/mba" element={<MbaLanding />} />
          <Route path="/mca" element={<McaLanding />} />
          <Route path="/ma" element={<MaLanding />} />
          <Route path="/mcom" element={<McomLanding />} />
          <Route path="/bca" element={<BcaLanding />} />
          <Route path="/bba" element={<BbaLanding />} />
          <Route path="/ba" element={<BaLanding />} />
          <Route path="/bcom" element={<BcomLanding />} />

          {/* ✅ Legal Pages */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ❗ 404 Route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
