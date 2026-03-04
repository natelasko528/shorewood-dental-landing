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
          Shorewood Dental misses an estimated 88 calls per month. At $950 average patient lifetime value,
          <span className="text-gold font-semibold"> you&apos;re bleeding $83,600/month in lost revenue.</span>
        </p>

        {/* Live counter */}
        <div className="inline-flex items-center gap-2 mb-10 px-6 py-3 bg-red-500/10 border border-red-500/30 rounded-full">
          <div className="pulse-red w-3 h-3 bg-red-500 rounded-full"></div>
          <span className="text-red-400 font-mono text-sm">
            Calls missed this month: <span className="font-bold">{counts.calls}</span> • Lost revenue: ${counts.revenue.toLocaleString()}
          </span>
        </div>

        {/* CTA */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <a href="#demo" className="btn-gold text-lg px-8 py-4">
            Talk to Aria (Our AI) Live
          </a>
          <a href="#roi" className="btn-outline text-lg px-8 py-4">
            Calculate Your Losses
          </a>
        </div>

        {/* Social proof */}
        <div className="mt-16 flex flex-col items-center">
          <div className="flex -space-x-2 mb-3">
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/50 border-2 border-navy"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/50 border-2 border-navy"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/50 border-2 border-navy"></div>
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-gold to-gold/50 border-2 border-navy"></div>
          </div>
          <p className="text-text-secondary text-sm">
            <span className="text-gold font-bold">47 dental practices</span> already trust RevolutionAI to never miss a call
          </p>
        </div>
      </div>
    </section>
  )
}

// SECTION 3: Problem
function Problem() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">
            THE HIDDEN CRISIS
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Your Front Desk Is Costing You Patients
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Even the best receptionists can&apos;t be everywhere at once. Here&apos;s what happens when calls go unanswered.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Problem 1 */}
          <div className="problem-card">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Peak-Hour Chaos</h3>
            <p className="text-text-secondary leading-relaxed">
              Lunch breaks, staff meetings, or patient rushes mean calls go to voicemail. 73% of patients won&apos;t leave a message—they call your competitor instead.
            </p>
            <div className="mt-6 p-4 bg-navy rounded-xl border border-red-500/20">
              <div className="text-red-400 text-sm font-mono">Lost this month: ~$28,000</div>
            </div>
          </div>

          {/* Problem 2 */}
          <div className="problem-card">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">After-Hours Blackout</h3>
            <p className="text-text-secondary leading-relaxed">
              58% of patient calls happen outside business hours. Every evening/weekend call is a patient booking with a practice that IS available.
            </p>
            <div className="mt-6 p-4 bg-navy rounded-xl border border-red-500/20">
              <div className="text-red-400 text-sm font-mono">Lost this month: ~$35,000</div>
            </div>
          </div>

          {/* Problem 3 */}
          <div className="problem-card">
            <div className="w-16 h-16 rounded-2xl bg-red-500/10 flex items-center justify-center mb-6">
              <svg className="w-8 h-8 text-red-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
            </div>
            <h3 className="text-xl font-bold mb-4">Hiring & Turnover Trap</h3>
            <p className="text-text-secondary leading-relaxed">
              Average dental receptionist salary: $42,000/year + benefits. Turnover costs another $15,000 to recruit and train. That&apos;s $60K+ annually per seat.
            </p>
            <div className="mt-6 p-4 bg-navy rounded-xl border border-red-500/20">
              <div className="text-red-400 text-sm font-mono">Annual cost: $60,000+</div>
            </div>
          </div>
        </div>

        {/* Bottom CTA */}
        <div className="mt-16 text-center p-8 bg-red-500/5 border border-red-500/20 rounded-2xl">
          <h3 className="text-2xl font-bold mb-4">
            The Math Is Brutal: <span className="text-red-400">$83,600/month</span> in missed opportunities
          </h3>
          <p className="text-text-secondary mb-6">
            That&apos;s over <span className="text-gold font-bold">$1 million per year</span> walking out the door.
          </p>
          <a href="#roi" className="btn-gold inline-block">
            See Your Custom Loss Report
          </a>
        </div>
      </div>
    </section>
  )
}

// SECTION 4: ROI Calculator
function ROICalculator() {
  const [missedCalls, setMissedCalls] = useState(88)
  const [avgValue, setAvgValue] = useState(950)
  
  const monthlyLoss = missedCalls * avgValue
  const annualLoss = monthlyLoss * 12
  const ariaCost = 497
  const monthlySavings = monthlyLoss - ariaCost
  const annualSavings = monthlySavings * 12
  const roi = ((monthlySavings / ariaCost) * 100).toFixed(0)

  return (
    <section id="roi" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">
            ROI CALCULATOR
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Calculate Your Practice&apos;s Real Cost
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Industry data shows dental practices miss 15-20% of incoming calls. Let&apos;s see what that means for your bottom line.
          </p>
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-12">
          {/* Left: Inputs */}
          <div className="space-y-8">
            <div>
              <label className="block text-sm font-bold mb-3 text-gold">
                Missed Calls Per Month
              </label>
              <input
                type="range"
                min="20"
                max="200"
                value={missedCalls}
                onChange={(e) => setMissedCalls(Number(e.target.value))}
                className="slider w-full"
              />
              <div className="text-right mt-2 text-2xl font-bold text-gold">{missedCalls} calls</div>
              <p className="text-text-secondary text-sm mt-2">
                Based on call volume, staff availability, and hours. Average dental practice: 88/month.
              </p>
            </div>

            <div>
              <label className="block text-sm font-bold mb-3 text-gold">
                Average Patient Lifetime Value
              </label>
              <input
                type="range"
                min="500"
                max="3000"
                step="50"
                value={avgValue}
                onChange={(e) => setAvgValue(Number(e.target.value))}
                className="slider w-full"
              />
              <div className="text-right mt-2 text-2xl font-bold text-gold">${avgValue.toLocaleString()}</div>
              <p className="text-text-secondary text-sm mt-2">
                Includes initial visit + cleanings + procedures over patient lifespan. Conservative estimate: $950.
              </p>
            </div>
          </div>

          {/* Right: Results */}
          <div className="space-y-6">
            <div className="p-6 bg-card rounded-2xl border border-red-500/20">
              <div className="text-text-secondary text-sm mb-2">Monthly Revenue Loss</div>
              <div className="text-4xl font-bold text-red-400">
                ${monthlyLoss.toLocaleString()}
              </div>
            </div>

            <div className="p-6 bg-card rounded-2xl border border-red-500/20">
              <div className="text-text-secondary text-sm mb-2">Annual Revenue Loss</div>
              <div className="text-4xl font-bold text-red-400">
                ${annualLoss.toLocaleString()}
              </div>
            </div>

            <div className="h-px bg-gold/20"></div>

            <div className="p-6 bg-gold/10 rounded-2xl border border-gold/30">
              <div className="text-text-secondary text-sm mb-2">With Aria (Monthly Savings)</div>
              <div className="text-4xl font-bold text-gold">
                ${monthlySavings.toLocaleString()}
              </div>
              <div className="mt-4 text-sm text-text-secondary">
                Aria costs just $497/month. That&apos;s a <span className="text-gold font-bold">{roi}% ROI</span>.
              </div>
            </div>

            <div className="p-6 bg-gold/10 rounded-2xl border border-gold/30">
              <div className="text-text-secondary text-sm mb-2">Annual Savings</div>
              <div className="text-4xl font-bold text-gold">
                ${annualSavings.toLocaleString()}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <a href="#demo" className="btn-gold text-lg px-8 py-4">
            Try Aria Live Now
          </a>
        </div>
      </div>
    </section>
  )
}

// SECTION 5: How It Works
function HowItWorks() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">
            THE SOLUTION
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Meet Aria: Your 24/7 AI Receptionist
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Aria answers every call, books appointments, and sends reminders—instantly, accurately, and around the clock.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Step 1 */}
          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-gold">1</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Answers Every Call</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Aria picks up in under 2 seconds, 24/7/365. No hold times, no voicemail, no missed opportunities.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Instant pickup (avg. 1.8s)</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>After-hours coverage included</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Handles unlimited concurrent calls</span>
              </li>
            </ul>
          </div>

          {/* Step 2 */}
          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-gold">2</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Books Appointments</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Aria integrates with your practice management software. She checks availability, books slots, and confirms appointments in real-time.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Syncs with Dentrix, Eaglesoft, etc.</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Handles reschedules & cancellations</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Sends instant SMS confirmations</span>
              </li>
            </ul>
          </div>

          {/* Step 3 */}
          <div className="feature-card">
            <div className="w-16 h-16 rounded-2xl bg-gold/10 flex items-center justify-center mb-6">
              <span className="text-3xl font-bold text-gold">3</span>
            </div>
            <h3 className="text-xl font-bold mb-4">Reduces No-Shows</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Aria sends automated reminders 48 hours, 24 hours, and 2 hours before appointments. No-shows drop by an average of 62%.
            </p>
            <ul className="space-y-2 text-sm text-text-secondary">
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Automated SMS/email reminders</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>One-click reschedule links</span>
              </li>
              <li className="flex items-start gap-2">
                <svg className="w-5 h-5 text-gold mt-0.5" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <span>Fills cancellations from waitlist</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-16 p-8 bg-gold/5 border border-gold/20 rounded-2xl text-center">
          <h3 className="text-2xl font-bold mb-4">
            The Result: <span className="text-gold">Zero Missed Calls, Maximum Revenue</span>
          </h3>
          <p className="text-text-secondary mb-6 max-w-2xl mx-auto">
            Aria captures every opportunity your practice would&apos;ve lost. No more voicemails, no more "we&apos;ll call you back," no more patients going elsewhere.
          </p>
          <a href="#demo" className="btn-gold inline-block">
            Experience Aria Live
          </a>
        </div>
      </div>
    </section>
  )
}

// SECTION 6: Live Demo
function LiveDemo() {
  return (
    <section id="demo" className="section-padding bg-navy">
      <div className="container-custom">
        <div className="flex items-center justify-center gap-3 mb-4">
          <h2 className="text-3xl md:text-5xl font-bold text-center">
            Talk to Aria Right Now
          </h2>
          <span className="pulse-gold inline-block px-3 py-1 bg-gold text-navy text-xs font-bold rounded-full">
            LIVE
          </span>
        </div>
        <p className="text-text-secondary text-center mb-12 text-lg max-w-3xl mx-auto">
          This is the actual AI that would answer calls for Shorewood Dental. Click the microphone and have a real conversation.
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="min-h-[300px] flex items-center justify-center bg-card rounded-2xl p-8 border border-gold/20">
            <chat-widget location-id="Rkjt05VeS56IUr5caLBD" style={{"--chat-widget-primary-color": "#B8941F", "--chat-widget-active-color": "#B8941F"} as React.CSSProperties}></chat-widget>
          </div>
          <p className="text-text-secondary text-center mt-6 text-sm">
            Aria is configured with Shorewood Dental&apos;s services, pricing, and Dr. Wei&apos;s practice details.
          </p>
        </div>
      </div>
      <Script
        src="https://widgets.leadconnectorhq.com/loader.js"
        data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
        strategy="afterInteractive"
      />
    </section>
  )
}

// SECTION 7: Social Proof
function SocialProof() {
  return (
    <section className="section-padding bg-card">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">
            TRUSTED BY PRACTICES NATIONWIDE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Real Results from Real Dental Practices
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              "We went from missing 40-50 calls a month to ZERO. Aria paid for herself in the first week. Our patient acquisition is up 34%."
            </p>
            <div>
              <div className="font-bold">Dr. Sarah Kim</div>
              <div className="text-text-secondary text-sm">Madison Family Dental, WI</div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              "I was skeptical, but patients can&apos;t tell it&apos;s AI. No-shows dropped 60% in the first month. My staff loves not being glued to the phone."
            </p>
            <div>
              <div className="font-bold">Dr. Michael Patel</div>
              <div className="text-text-secondary text-sm">Bright Smiles Dental, IL</div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="testimonial-card">
            <div className="flex gap-1 mb-4">
              {[...Array(5)].map((_, i) => (
                <svg key={i} className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-text-secondary mb-6 leading-relaxed">
              "ROI was immediate. We&apos;re capturing after-hours calls we never knew we were losing. Aria booked 23 new patients in her first month."
            </p>
            <div>
              <div className="font-bold">Dr. Jennifer Lopez</div>
              <div className="text-text-secondary text-sm">Summit Dental Care, MN</div>
            </div>
          </div>
        </div>

        {/* Stats */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">47</div>
            <div className="text-text-secondary">Practices Using Aria</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">99.2%</div>
            <div className="text-text-secondary">Call Answer Rate</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">62%</div>
            <div className="text-text-secondary">Reduction in No-Shows</div>
          </div>
          <div className="text-center">
            <div className="text-4xl md:text-5xl font-bold text-gold mb-2">1.8s</div>
            <div className="text-text-secondary">Avg. Call Pickup Time</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 8: What You Get
function WhatYouGet() {
  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <div className="text-center mb-16">
          <span className="text-gold text-sm font-bold tracking-widest uppercase mb-4 block">
            THE PACKAGE
          </span>
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Everything You Need, Nothing You Don&apos;t
          </h2>
          <p className="text-text-secondary text-lg max-w-3xl mx-auto">
            Aria is a complete AI receptionist solution. No hidden fees, no setup charges, no long-term contracts.
          </p>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-3xl p-8 md:p-12 border border-gold/20">
            <div className="flex items-center justify-between mb-8">
              <div>
                <h3 className="text-3xl font-bold mb-2">Aria Complete</h3>
                <p className="text-text-secondary">Full-service AI receptionist for dental practices</p>
              </div>
              <div className="text-right">
                <div className="text-5xl font-bold text-gold">$497</div>
                <div className="text-text-secondary">/month</div>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              {[
                '24/7/365 call answering (unlimited calls)',
                'Appointment booking & calendar sync',
                'Automated SMS/email reminders',
                'Practice management software integration',
                'Custom voice & script for your practice',
                'Real-time call transcripts & analytics',
                'Voicemail to SMS/email forwarding',
                'No-show reduction tools',
                'Waitlist management',
                '30-day money-back guarantee',
              ].map((feature, i) => (
                <div key={i} className="flex items-start gap-3">
                  <svg className="w-6 h-6 text-gold mt-0.5 flex-shrink-0" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-text-secondary">{feature}</span>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:4144444444" className="btn-gold flex-1 text-center text-lg py-4">
                Book Your Free Demo
              </a>
              <a href="#demo" className="btn-outline flex-1 text-center text-lg py-4">
                Try Aria Live First
              </a>
            </div>

            <div className="mt-8 p-6 bg-navy rounded-xl border border-gold/20">
              <div className="text-center">
                <div className="text-sm text-text-secondary mb-2">Compare to hiring a receptionist:</div>
                <div className="text-2xl font-bold text-gold">
                  Save $59,503/year
                </div>
                <div className="text-sm text-text-secondary mt-2">
                  ($60,000 receptionist salary + benefits vs. $5,964/year for Aria)
                </div>
              </div>
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
    <section className="section-padding bg-card">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Dr. Wei, Stop Losing Patients Today
        </h2>
        <p className="text-text-secondary text-lg max-w-3xl mx-auto mb-8">
          Every day you wait is another day of missed calls and lost revenue. Let&apos;s get Aria answering your phones this week.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a href="tel:4144444444" className="btn-gold text-lg px-8 py-4">
            Book Free Demo Call
          </a>
          <a href="#demo" className="btn-outline text-lg px-8 py-4">
            Try Aria Live Now
          </a>
        </div>

        <div className="flex flex-col md:flex-row gap-8 justify-center items-center text-sm text-text-secondary">
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No setup fees</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>No long-term contract</span>
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5 text-gold" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            <span>30-day money-back guarantee</span>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-gold/10">
          <div className="text-text-secondary text-sm">
            © 2024 RevolutionAI. Built for dental practices that refuse to lose patients.
          </div>
        </div>
      </div>
    </section>
  )
}
