import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import VisaFrro from "./pages/VisaFrro";
import Industries from "./pages/Industries";
import IndustryDetail from "./pages/IndustryDetail";
import Gallery from "./pages/Gallery";
import AboutFounder from "./pages/AboutFounder";
import TranslationPage from "./pages/services/TranslationPage";
import EquipmentPage from "./pages/services/EquipmentPage";
import ManpowerPage from "./pages/services/ManpowerPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/visa-frro" element={<VisaFrro />} />
          <Route path="/industries" element={<Industries />} />
          <Route path="/industries/:slug" element={<IndustryDetail />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/about-founder" element={<AboutFounder />} />
          <Route path="/services/translation" element={<TranslationPage />} />
          <Route path="/services/equipment" element={<EquipmentPage />} />
          <Route path="/services/manpower" element={<ManpowerPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
