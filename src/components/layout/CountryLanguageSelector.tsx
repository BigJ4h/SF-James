"use client";

import { useState } from "react";

export function CountryLanguageSelector() {
  const [countryOpen, setCountryOpen] = useState(false);
  const [languageOpen, setLanguageOpen] = useState(false);

  return (
    <div className="flex flex-wrap items-center gap-6 text-[0.7rem] text-sf-muted">
      <div className="relative">
        <button
          type="button"
          onClick={() => { setCountryOpen(!countryOpen); setLanguageOpen(false); }}
          className="flex items-center gap-1 uppercase tracking-[0.15em] transition hover:text-sf-black"
        >
          Change your delivery country ?
          <span className="inline-block transition-transform" style={{ transform: countryOpen ? "rotate(180deg)" : "none" }}>▼</span>
        </button>
        {countryOpen && (
          <div className="absolute right-0 top-full z-10 mt-1 min-w-[12rem] rounded border border-sf-border bg-white py-2 shadow-lg">
            <p className="px-3 py-1 font-medium text-sf-black">United States</p>
            <button type="button" className="w-full px-3 py-1.5 text-left hover:bg-ecru/50">
              United Kingdom
            </button>
            <button type="button" className="w-full px-3 py-1.5 text-left hover:bg-ecru/50">
              France
            </button>
            <button type="button" className="w-full px-3 py-1.5 text-left hover:bg-ecru/50">
              Rest of World
            </button>
          </div>
        )}
      </div>
      <div className="relative">
        <button
          type="button"
          onClick={() => { setLanguageOpen(!languageOpen); setCountryOpen(false); }}
          className="flex items-center gap-1 uppercase tracking-[0.15em] transition hover:text-sf-black"
        >
          Change language:
          <span className="font-medium text-sf-black">English</span>
          <span className="inline-block transition-transform" style={{ transform: languageOpen ? "rotate(180deg)" : "none" }}>▼</span>
        </button>
        {languageOpen && (
          <div className="absolute right-0 top-full z-10 mt-1 min-w-[10rem] rounded border border-sf-border bg-white py-2 shadow-lg">
            <button type="button" className="w-full px-3 py-1.5 text-left font-medium text-sf-black hover:bg-ecru/50">
              English
            </button>
            <button type="button" className="w-full px-3 py-1.5 text-left hover:bg-ecru/50">
              Français
            </button>
            <button type="button" className="w-full px-3 py-1.5 text-left hover:bg-ecru/50">
              Español
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
