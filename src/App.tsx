/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { ProductItem } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { StatsStrip } from './components/StatsStrip';
import { AboutSection } from './components/AboutSection';
import { PhotoGallerySection } from './components/PhotoGallerySection';
import { ProductsSection } from './components/ProductsSection';
import { FeaturedPlantSystem } from './components/FeaturedPlantSystem';
import { BatchingCalculator } from './components/BatchingCalculator';
import { WhyChooseUs } from './components/WhyChooseUs';
import { ProjectsSection } from './components/ProjectsSection';
import { ProcessTimeline } from './components/ProcessTimeline';
import { QualityStandards } from './components/QualityStandards';
import { CtaBanner } from './components/CtaBanner';
import { ContactSection } from './components/ContactSection';
import { FaqSection } from './components/FaqSection';
import { Footer } from './components/Footer';
import { ProductModal } from './components/ProductModal';
import { QuoteModal } from './components/QuoteModal';

export default function App() {
  const [selectedProduct, setSelectedProduct] = useState<ProductItem | null>(null);
  const [quoteModalOpen, setQuoteModalOpen] = useState<boolean>(false);
  const [quotePrefillProduct, setQuotePrefillProduct] = useState<string>('HRC 3500 PSI High Performance RCC');
  const [quotePrefillMessage, setQuotePrefillMessage] = useState<string>('');

  const handleOpenQuoteModal = (productName?: string) => {
    if (productName) {
      setQuotePrefillProduct(productName);
    }
    setQuoteModalOpen(true);
  };

  const handleTransferCalculatorToQuote = (details: { model: string; dailyVolume: number; plantSpecs: string }) => {
    setQuotePrefillProduct(details.model);
    setQuotePrefillMessage(`HRC Concrete Requirement Sizing:\n${details.plantSpecs}`);
    
    // Smooth scroll down to contact RFQ section
    const contactElement = document.getElementById('contact');
    if (contactElement) {
      contactElement.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen w-full overflow-x-hidden flex flex-col bg-[#F5F7FA] text-[#172033] font-sans selection:bg-[#F4C400] selection:text-[#001F52]">
      {/* Sticky Navigation Bar */}
      <Navbar onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Engineering Hero Section */}
        <Hero onOpenQuoteModal={() => handleOpenQuoteModal('HRC 3500 PSI High Performance RCC')} />

        {/* 2. Trust Metrics Strip */}
        <StatsStrip />

        {/* 3. About the Company Section */}
        <AboutSection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 4. Real HRC Plant & Fleet Photographic Gallery */}
        <PhotoGallerySection onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 5. Products & Solutions Catalog */}
        <ProductsSection
          onSelectProduct={(prod) => setSelectedProduct(prod)}
          onOpenQuoteModal={(name) => handleOpenQuoteModal(name)}
        />

        {/* 5. Featured Batching Plant Interactive Flow */}
        <FeaturedPlantSystem onOpenQuoteModal={(name) => handleOpenQuoteModal(name)} />

        {/* 6. Concrete Batching & Sizing Calculator */}
        <BatchingCalculator onTransferToQuote={handleTransferCalculatorToQuote} />

        {/* 7. Why Industry Professionals Choose Us */}
        <WhyChooseUs />

        {/* 8. Projects & Infrastructure Showcase */}
        <ProjectsSection />

        {/* 9. Engineering Timeline Process */}
        <ProcessTimeline />

        {/* 10. Quality & Standards Certification Section */}
        <QualityStandards />

        {/* 11. High-Impact CTA Banner */}
        <CtaBanner onOpenQuoteModal={() => handleOpenQuoteModal()} />

        {/* 12. Contact & RFQ Inquiry Section */}
        <ContactSection
          initialEquipment={quotePrefillProduct}
          initialMessage={quotePrefillMessage}
        />

        {/* 13. Engineering FAQ Accordion */}
        <FaqSection />
      </main>

      {/* Comprehensive Corporate Footer */}
      <Footer onOpenQuoteModal={() => handleOpenQuoteModal()} />

      {/* Interactive Blueprint & Technical Specs Modal */}
      <ProductModal
        product={selectedProduct}
        onClose={() => setSelectedProduct(null)}
        onOpenQuote={(name) => handleOpenQuoteModal(name)}
      />

      {/* Fast Quotation Modal */}
      <QuoteModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        prefillProduct={quotePrefillProduct}
        prefillMessage={quotePrefillMessage}
      />
    </div>
  );
}
