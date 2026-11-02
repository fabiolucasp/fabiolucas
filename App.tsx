import React from 'react';
import { HashRouter as Router, Routes, Route, useLocation } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Skills from './components/Skills';
import Experience from './components/Experience';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ClientPortal from './components/ClientApp';
import Methodology from './components/Methodology';
import DesignPhilosophy from './components/DesignPhilosophy';
import ECommerceOverview from './components/ECommerceOverview';
import CoursesOverview from './components/CoursesOverview';
import CommunityOverview from './components/CommunityOverview';
import ServicesPage from './components/ServicesPage';
import WebDevelopmentLanding from './components/WebDevelopmentLanding';
import LoginScreen from './components/LoginScreen';
import BichoMimadoLanding from './components/BichoMimadoLanding';
import PineapplePayLanding from './components/PineapplePayLanding';
import ScrollToTop from './components/ScrollToTop';
import ScreensArchitecture from './components/ScreensArchitecture';

// Main Portfolio sections component
const PortfolioPage: React.FC = () => (
  <>
    <Hero />
    <Skills />
    <DesignPhilosophy />
    <Experience />
    <Projects />
    <ScreensArchitecture />
    <Methodology />
    <ClientPortal />
    <Contact />
  </>
);

function App() {
  return (
    <Router>
      {/* 
          O Router deve envolver apenas o MainLayout.
          A lógica de navegação e exibição da Navbar agora é centralizada no MainLayout 
          para evitar duplicação de componentes no DOM.
      */}
      <ScrollToTop />
      <MainLayout />
    </Router>
  );
}

// Sub-component to handle conditional layout logic
const MainLayout = () => {
    const location = useLocation();
    
    // Verifica se a rota atual é a landing page do Bicho Mimado, Pineapple Pay ou Login
    // Usar useLocation é mais performático e seguro que ouvir eventos de window
    const hideNavbarRoutes = ['/bicho-mimado-app', '/login', '/pineapple-pay'];
    const shouldHideNavbar = hideNavbarRoutes.includes(location.pathname);

    return (
        <div className="bg-[#000000] min-h-screen text-[#EEEEEE]">
            {/* Renderiza a Navbar apenas se não estiver nas rotas ocultas */}
            {!shouldHideNavbar && <Navbar />}
            
            <main>
                <Routes>
                    <Route path="/" element={<PortfolioPage />} />
                    <Route path="/servicos" element={<ServicesPage />} />
                    <Route path="/servicos/web" element={<WebDevelopmentLanding />} />
                    <Route path="/ebooks" element={<ECommerceOverview type="ebooks" />} />
                    <Route path="/cursos" element={<CoursesOverview />} />
                    <Route path="/comunidade" element={<CommunityOverview />} />
                    <Route path="/cliente" element={<ClientPortal />} />
                    <Route path="/login" element={<LoginScreen />} />
                    <Route path="/bicho-mimado-app" element={<BichoMimadoLanding />} />
                    <Route path="/pineapple-pay" element={<PineapplePayLanding />} />
                </Routes>
            </main>
            
            {!shouldHideNavbar && (
                <footer className="py-8 text-center text-[#666] text-sm border-t border-[#333] bg-[#0A0A0A]">
                <div className="container mx-auto">
                    <p className="font-mono">&copy; {new Date().getFullYear()} Fábio Lucas. Developed with Flutter Architecture Principles.</p>
                </div>
                </footer>
            )}
        </div>
    );
}

export default App;