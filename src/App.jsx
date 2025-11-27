import React, { useEffect, useState } from 'react'
import Header from './components/Header'
import Hero from './components/Hero'
import About from './components/About'
import Pricing from './components/Pricing'
import Features from './components/Features'
import Results from './components/Results'
import FAQ from './components/FAQ'
import Footer from './components/Footer'
import Registration from './components/Registration'

export default function App() {
  return (
    // השתמשנו ב-Fragment במקום ב-div עוטף מיותר
    <>
      <Header />
      {/* הוספנו id כדי לאפשר את קישור הדילוג מ-index.html */}
      <main id="main-content">
        <Hero />
        <About />
        <Pricing />
        <Registration/>
        <Features />
        <Results />
        <FAQ />
      </main>
      <Footer />
    </>
  )
}