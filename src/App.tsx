
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

// ✅ New legal pages
import Disclaimer from "./pages/disclaimer";
import Terms from "./pages/terms-conditions";
import PrivacyPolicy from "./pages/privacy-policy";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <h1 style={{ display: "none" }}>
        IGNOU Distance Education – Admission Open for MBA, BBA, MCA 2024
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

          {/* ✅ Legal Page Routes */}
          <Route path="/disclaimer" element={<Disclaimer />} />
          <Route path="/terms-conditions" element={<Terms />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />

          {/* ❗ Catch-all 404 route */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
