'use client'

import React from 'react'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Team from '@/components/Team'
import Services from '@/components/Services'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import { Reveal } from '@/components/ui/reveal'

export default function HomePage() {
  return (
    <main className="min-h-screen">
      <Header />
      <Reveal><Hero /></Reveal>
      <Reveal><About /></Reveal>
      <Reveal><Team /></Reveal>
      <Reveal><Services /></Reveal>
      <Reveal><Contact /></Reveal>
      <Footer />
    </main>
  )
}
