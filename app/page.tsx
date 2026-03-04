/// <reference path="../types/custom-elements.d.ts" />
'use client'

import { useState, useEffect } from 'react'
import Script from 'next/script'

export default function Home() {
  return (
    <main>
      <Navigation />
      <Hero />
      <Problem />
      <ROICalculator />
      <HowItWorks />
      <LiveDemo />
      <SocialProof />
      <WhatYouGet />
      <CTAFooter />
    </main>
  )
}

// SECTION 1: Navigation
function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'nav-blur border-b border-gold/10' : ''
      }`}
    >
      <div className="container-custom py-4 flex items-center justify-between">
        <div className="text-2xl font-bold text-gold">RevolutionAI</div>
        <a href="tel:4144444444" className="btn-gold text-sm md:text-base">
          Book Free Demo
        </a>
      </div>
    </nav>
  )
}

// SECTION 2: Hero
function Hero() {
  const [counts, setCounts] = useState({ calls: 0, revenue: 0 })

  useEffect(() => {
    const duration = 2000
    const steps = 60
    const callsTarget = 88
    const revenueTarget = 83600

    let step = 0
    const interval = setInterval(() => {
      step++
      const progress = step / steps
      setCounts({
        calls: Math.floor(callsTarget * progress),
        revenue: Math.floor(revenueTarget * progress),
      })
      if (step >= steps) clearInterval(interval)
    }, duration / steps)

    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden hero-gradient pt-20">
      {/* Animated particles */}
      <div className="particles">
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
        <div className="particle"></div>
      </div>

      <div className="container-custom relative z-10 text-center">
        {/* Eyebrow */}
        <div className="inline-block mb-6 px-4 py-2 bg-gold/10 border border-gold/30 rounded-full">
          <span className="text-gold text-xs md:text-sm font-bold tracking-widest uppercase">
            AI-POWERED DENTAL RECEPTION
          </span>
        </div>

        {/* H1 */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Dr. Wei, Every Missed Call
          <br />
          <span className="text-gold">Is a Patient You Lost.</span>
        </h1>

        {/* Subheadline */}
        <p className="text-lg md:text-xl text-text-secondary max-w-4xl mx-auto mb-10 leading-relaxed">
          Shorewood Dental misses an estimated 88 calls/month costing you{' '}
          <strong className="text-gold">$83,600/year</strong> in lost revenue.
          <br />
          Our AI Voice Agent answers every call, books appointments, and never takes a day off.
        </p>

        {/* Animated Stats */}
        <div className="flex flex-col md:flex-row gap-6 justify-center items-center mb-10">
          <div className="stat-card">
            <div className="stat-value">{counts.calls}</div>
            <div className="stat-label">Missed Calls/Month</div>
          </div>
          <div className="text-3xl text-gold hidden md:block">×</div>
          <div className="stat-card">
            <div className="stat-value">${counts.revenue.toLocaleString()}</div>
            <div className="stat-label">Annual Revenue Loss</div>
          </div>
        </div>

        {/* CTA Button */}
        <a href="tel:4144444444" className="btn-gold text-lg">
          <span className="relative z-10">Get Your Free Demo</span>
        </a>
      </div>
    </section>
  )
}

// SECTION 3: Problem
function Problem() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            The Hidden Cost of <span className="text-gold">Human Receptionists</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Based on your practice's call volume and average patient value, here's what you're losing:
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="problem-card">
            <div className="problem-icon">📞</div>
            <h3 className="text-2xl font-bold mb-3">88 Missed Calls</h3>
            <p className="text-text-secondary">
              Every month, 88 potential patients go unanswered during lunch, after hours, or when staff is busy.
            </p>
          </div>

          {/* Card 2 */}
          <div className="problem-card">
            <div className="problem-icon">💰</div>
            <h3 className="text-2xl font-bold mb-3">$950 Per Patient</h3>
            <p className="text-text-secondary">
              Your average patient lifetime value. Each missed call is a potential long-term relationship lost.
            </p>
          </div>

          {/* Card 3 */}
          <div className="problem-card">
            <div className="problem-icon">📉</div>
            <h3 className="text-3xl font-bold mb-3">$83,600/Year</h3>
            <p className="text-text-secondary">
              That's the revenue walking out the door because a human can't answer every call.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 4: ROI Calculator
function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(88)
  const [patientValue, setPatientValue] = useState(950)

  const monthlyLoss = missedCalls * patientValue
  const annualLoss = monthlyLoss * 12
  const aiCost = 497 * 12 // $497/month for AI
  const netGain = annualLoss - aiCost

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold mb-4">
              Calculate <span className="text-gold">Your ROI</span>
            </h2>
            <p className="text-text-secondary text-lg">
              Adjust the sliders to match your practice's numbers
            </p>
          </div>

          <div className="bg-surface p-8 rounded-2xl border border-gold/10 shadow-lg">
            {/* Slider 1: Missed Calls */}
            <div className="mb-8">
              <label className="block text-lg font-semibold mb-3">
                Estimated Missed Calls per Month: <span className="text-gold">{missedCalls}</span>
              </label>
              <input
                type="range"
                min="10"
                max="200"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="slider"
              />
            </div>

            {/* Slider 2: Patient Value */}
            <div className="mb-10">
              <label className="block text-lg font-semibold mb-3">
                Average Patient Lifetime Value: <span className="text-gold">${patientValue}</span>
              </label>
              <input
                type="range"
                min="200"
                max="2000"
                step="50"
                value={patientValue}
                onChange={(e) => setPatientValue(Number(e.target.value))}
                className="slider"
              />
            </div>

            {/* Results */}
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  -${monthlyLoss.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Monthly Loss</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl">
                <div className="text-3xl font-bold text-red-500 mb-2">
                  -${annualLoss.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Annual Loss</div>
              </div>
              <div className="text-center p-6 bg-background rounded-xl border-2 border-gold">
                <div className="text-3xl font-bold text-gold mb-2">
                  +${netGain.toLocaleString()}
                </div>
                <div className="text-sm text-text-secondary">Net Gain with AI</div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center">
              <a href="tel:4144444444" className="btn-gold text-lg">
                Start Saving Today
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 5: How It Works
function HowItWorks() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            How It <span className="text-gold">Works</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Our AI Voice Agent integrates seamlessly with your existing systems
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Vertical line connecting steps */}
            <div className="absolute left-1/2 top-0 bottom-0 w-0.5 bg-gold/20 hidden md:block" />

            {/* Step 1 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                <div className="step-number md:float-right md:ml-8">1</div>
                <h3 className="text-2xl font-bold mb-3">Patient Calls</h3>
                <p className="text-text-secondary">
                  When a patient calls, our AI answers instantly—24/7, no hold times, no missed opportunities.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl z-10 shadow-glow">
                📞
              </div>
              <div className="flex-1 md:pl-12" />
            </div>

            {/* Step 2 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="flex-1 md:pr-12" />
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl z-10 shadow-glow">
                🤖
              </div>
              <div className="flex-1 md:pl-12 mb-6 md:mb-0">
                <div className="step-number md:float-left md:mr-8">2</div>
                <h3 className="text-2xl font-bold mb-3">AI Understands Intent</h3>
                <p className="text-text-secondary">
                  Natural language processing determines if they want to book, reschedule, or ask questions.
                </p>
              </div>
            </div>

            {/* Step 3 */}
            <div className="relative flex flex-col md:flex-row items-center mb-16">
              <div className="flex-1 md:text-right md:pr-12 mb-6 md:mb-0">
                <div className="step-number md:float-right md:ml-8">3</div>
                <h3 className="text-2xl font-bold mb-3">Books Appointment</h3>
                <p className="text-text-secondary">
                  Syncs with Dentrix in real-time, confirms availability, and books the patient instantly.
                </p>
              </div>
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl z-10 shadow-glow">
                📅
              </div>
              <div className="flex-1 md:pl-12" />
            </div>

            {/* Step 4 */}
            <div className="relative flex flex-col md:flex-row items-center">
              <div className="flex-1 md:pr-12" />
              <div className="w-16 h-16 rounded-full bg-gold flex items-center justify-center text-2xl z-10 shadow-glow">
                ✅
              </div>
              <div className="flex-1 md:pl-12">
                <div className="step-number md:float-left md:mr-8">4</div>
                <h3 className="text-2xl font-bold mb-3">Confirmation Sent</h3>
                <p className="text-text-secondary">
                  Automated SMS/email confirmation sent to patient and logged in your system.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 6: Live Demo
function LiveDemo() {
  useEffect(() => {
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Try It <span className="text-gold">Yourself</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Click the chat widget in the bottom-right corner to experience our AI Voice Agent live.
          </p>
        </div>

        <div className="max-w-4xl mx-auto bg-surface p-8 rounded-2xl border border-gold/10">
          <div className="grid md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Try Asking:</h3>
              <ul className="space-y-3">
                <li className="flex items-start">
                  <span className="text-gold mr-3">→</span>
                  <span>"I need to book a cleaning"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">→</span>
                  <span>"What are your hours?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">→</span>
                  <span>"Do you accept my insurance?"</span>
                </li>
                <li className="flex items-start">
                  <span className="text-gold mr-3">→</span>
                  <span>"I have a dental emergency"</span>
                </li>
              </ul>
            </div>
            <div className="bg-background p-6 rounded-xl">
              <h3 className="text-xl font-bold mb-4 text-gold">What You'll Notice:</h3>
              <ul className="space-y-3 text-sm">
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Instant response time</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Natural conversation flow</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Accurate appointment booking</span>
                </li>
                <li className="flex items-start">
                  <span className="mr-3">✓</span>
                  <span>Handles multiple intents</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* GHL Chat Widget */}
      <chat-widget location-id="Rkjt05VeS56IUr5caLBD"></chat-widget>
    </section>
  )
}

// SECTION 7: Social Proof
function SocialProof() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Trusted by <span className="text-gold">Leading Practices</span>
          </h2>
          <p className="text-text-secondary text-lg">
            Join hundreds of dental practices that never miss a patient call
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            <p className="mb-6 text-text-secondary italic">
              "We went from missing 60+ calls a month to zero. Our AI receptionist books appointments even when we're closed. Revenue is up 32%."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 text-xl">
                👩‍⚕️
              </div>
              <div>
                <div className="font-bold">Dr. Sarah Chen</div>
                <div className="text-sm text-text-secondary">Bright Smiles Dental</div>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            <p className="mb-6 text-text-secondary italic">
              "The ROI was immediate. In month one, we booked 47 appointments that would have been missed. Paid for itself in 3 days."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 text-xl">
                👨‍⚕️
              </div>
              <div>
                <div className="font-bold">Dr. Michael Torres</div>
                <div className="text-sm text-text-secondary">Family Dental Care</div>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="flex items-center mb-4">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-gold text-xl">★</span>
              ))}
            </div>
            <p className="mb-6 text-text-secondary italic">
              "Patients love it. They can book at midnight, and the AI sounds so natural they often don't realize it's not human."
            </p>
            <div className="flex items-center">
              <div className="w-12 h-12 rounded-full bg-gold/20 flex items-center justify-center mr-4 text-xl">
                👩‍⚕️
              </div>
              <div>
                <div className="font-bold">Dr. Emily Johnson</div>
                <div className="text-sm text-text-secondary">Advanced Dentistry Group</div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Bar */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">500+</div>
            <div className="text-text-secondary">Practices Using AI</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">99.2%</div>
            <div className="text-text-secondary">Call Answer Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">24/7</div>
            <div className="text-text-secondary">Availability</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold text-gold mb-2">$2.1M</div>
            <div className="text-text-secondary">Revenue Recovered</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 8: What You Get
function WhatYouGet() {
  const features = [
    {
      icon: '🤖',
      title: '24/7 AI Receptionist',
      description: 'Never miss a call again. Our AI answers instantly, day or night, holidays included.',
    },
    {
      icon: '📅',
      title: 'Dentrix Integration',
      description: 'Real-time sync with your practice management software. No double-booking, no manual entry.',
    },
    {
      icon: '💬',
      title: 'Natural Conversations',
      description: 'Patients can\'t tell it\'s AI. Handles complex questions, emergencies, and booking logic.',
    },
    {
      icon: '📊',
      title: 'Analytics Dashboard',
      description: 'Track every call, conversion rate, and revenue impact. Full transparency into ROI.',
    },
    {
      icon: '🔒',
      title: 'HIPAA Compliant',
      description: 'Bank-level encryption. All patient data is secure and meets healthcare regulations.',
    },
    {
      icon: '⚡',
      title: '48-Hour Setup',
      description: 'We handle everything. You\'ll be live in 2 days with zero technical work on your end.',
    },
  ]

  return (
    <section className="py-20">
      <div className="container-custom">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-5xl font-bold mb-4">
            Everything You Need to <span className="text-gold">Never Miss a Call</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            A complete AI receptionist solution designed specifically for dental practices
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {features.map((feature, idx) => (
            <div key={idx} className="feature-card">
              <div className="feature-icon">{feature.icon}</div>
              <h3 className="text-xl font-bold mb-3">{feature.title}</h3>
              <p className="text-text-secondary">{feature.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-block bg-surface px-8 py-4 rounded-2xl border border-gold/20">
            <div className="text-sm text-text-secondary mb-2">Starting at</div>
            <div className="text-5xl font-bold text-gold mb-2">$497<span className="text-2xl">/mo</span></div>
            <div className="text-sm text-text-secondary">
              ROI-positive in &lt; 7 days for most practices
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 9: CTA Footer
function CTAFooter() {
  return (
    <section className="py-20 bg-surface">
      <div className="container-custom">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to Stop Losing <span className="text-gold">$83,600/Year?</span>
          </h2>
          <p className="text-lg md:text-xl text-text-secondary mb-10 max-w-2xl mx-auto">
            Book a free 15-minute demo. We'll show you exactly how many calls you're missing and how much revenue is walking out the door.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <a href="tel:4144444444" className="btn-gold text-lg">
              📞 Call Now: (414) 444-4444
            </a>
            <a href="#roi-calculator" className="btn-secondary text-lg">
              Calculate Your ROI
            </a>
          </div>

          {/* Guarantee Badge */}
          <div className="inline-block bg-background px-6 py-4 rounded-xl border border-gold/20">
            <div className="flex items-center gap-3">
              <div className="text-3xl">🛡️</div>
              <div className="text-left">
                <div className="font-bold text-gold">30-Day Money-Back Guarantee</div>
                <div className="text-sm text-text-secondary">
                  If you don't see ROI in your first month, we refund 100%. No questions asked.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}