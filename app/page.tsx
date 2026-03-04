'use client'

import { useState, useEffect } from 'react'

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
          Shorewood Dental misses an estimated 88 calls per month. At $950 average patient value,
          that&apos;s $83,600 walking out the door every year. Aria answers every call, 24/7.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
          <a href="#demo" className="btn-gold inline-block">
            Hear Aria Now ↓
          </a>
          <a href="#roi" className="btn-gold-outline inline-block">
            See Your ROI ↓
          </a>
        </div>

        {/* Stat Counters */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          <div className="count-up">
            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
              {counts.calls}
            </div>
            <div className="text-text-secondary">Missed Calls/Month</div>
          </div>
          <div className="count-up" style={{ animationDelay: '0.2s' }}>
            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">
              ${counts.revenue.toLocaleString()}
            </div>
            <div className="text-text-secondary">Annual Revenue Lost</div>
          </div>
          <div className="count-up" style={{ animationDelay: '0.4s' }}>
            <div className="text-5xl md:text-6xl font-bold text-gold mb-2">24/7</div>
            <div className="text-text-secondary">Aria&apos;s Coverage</div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 3: The Problem
function Problem() {
  const problems = [
    {
      icon: '📞❌',
      title: '30-38% of Calls Go Unanswered',
      description:
        "Your front desk is handling billing, insurance, and patients in-chair. The phone rings. Nobody answers. That patient calls the next dentist.",
    },
    {
      icon: '🌙',
      title: '44% of Inquiries Come After Hours',
      description:
        "Patients search for dentists at 9pm. They call at 8am before work. Without 24/7 coverage, you're invisible when they're ready to book.",
    },
    {
      icon: '👤',
      title: 'Only 14% Leave a Voicemail',
      description:
        "When patients hit voicemail, 86% hang up and never call back. They don't leave messages. They leave your practice.",
    },
    {
      icon: '💰',
      title: '$83,600 Lost Per Year',
      description:
        "At Shorewood Dental's call volume, the math is brutal: 88 missed calls × 40% new patient rate × $950 value = $33,440/month if you captured half.",
    },
  ]

  return (
    <section className="section-padding bg-navy-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          The Hidden Revenue Leak
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {problems.map((problem, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border-l-4 border-gold card-hover"
            >
              <div className="text-4xl mb-4">{problem.icon}</div>
              <h3 className="text-xl md:text-2xl font-bold mb-4 text-gold">
                {problem.title}
              </h3>
              <p className="text-text-secondary leading-relaxed">
                {problem.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 4: ROI Calculator
function ROICalculator() {
  const [inputs, setInputs] = useState({
    monthlyCalls: 250,
    missRate: 35,
    newPatientRate: 40,
    avgPatientValue: 950,
    captureRate: 75,
  })

  const missedCalls = Math.round((inputs.monthlyCalls * inputs.missRate) / 100)
  const recoveredPatients = Math.round(
    (missedCalls * inputs.newPatientRate * inputs.captureRate) / 10000
  )
  const monthlyRevenue = recoveredPatients * inputs.avgPatientValue
  const annualRevenue = monthlyRevenue * 12
  const ariaCost = 497
  const annualCost = ariaCost * 12
  const netGain = annualRevenue - annualCost
  const roiMultiple = (annualRevenue / annualCost).toFixed(1)

  return (
    <section id="roi" className="section-padding bg-navy">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-4">
          Your Revenue Recovery Calculator
        </h2>
        <p className="text-text-secondary text-center mb-12 text-lg">
          Pre-loaded with Shorewood Dental&apos;s actual numbers. Adjust to see your impact.
        </p>

        <div className="max-w-5xl mx-auto">
          {/* Input Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            <div className="bg-card p-6 rounded-xl">
              <label className="block text-sm font-semibold mb-2">
                Monthly Calls: {inputs.monthlyCalls}
              </label>
              <input
                type="range"
                min="50"
                max="1000"
                value={inputs.monthlyCalls}
                onChange={(e) =>
                  setInputs({ ...inputs, monthlyCalls: parseInt(e.target.value) })
                }
              />
            </div>

            <div className="bg-card p-6 rounded-xl">
              <label className="block text-sm font-semibold mb-2">
                Miss Rate: {inputs.missRate}%
              </label>
              <input
                type="range"
                min="10"
                max="60"
                value={inputs.missRate}
                onChange={(e) =>
                  setInputs({ ...inputs, missRate: parseInt(e.target.value) })
                }
              />
            </div>

            <div className="bg-card p-6 rounded-xl">
              <label className="block text-sm font-semibold mb-2">
                New Patient % of Missed: {inputs.newPatientRate}%
              </label>
              <input
                type="range"
                min="20"
                max="60"
                value={inputs.newPatientRate}
                onChange={(e) =>
                  setInputs({ ...inputs, newPatientRate: parseInt(e.target.value) })
                }
              />
            </div>

            <div className="bg-card p-6 rounded-xl">
              <label className="block text-sm font-semibold mb-2">
                Avg Patient Value: ${inputs.avgPatientValue}
              </label>
              <input
                type="range"
                min="200"
                max="5000"
                step="50"
                value={inputs.avgPatientValue}
                onChange={(e) =>
                  setInputs({ ...inputs, avgPatientValue: parseInt(e.target.value) })
                }
              />
            </div>

            <div className="bg-card p-6 rounded-xl md:col-span-2">
              <label className="block text-sm font-semibold mb-2">
                AI Capture Rate: {inputs.captureRate}%
              </label>
              <input
                type="range"
                min="50"
                max="90"
                value={inputs.captureRate}
                onChange={(e) =>
                  setInputs({ ...inputs, captureRate: parseInt(e.target.value) })
                }
              />
            </div>
          </div>

          {/* Output Results */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
            <div className="bg-card border border-gold/30 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-gold mb-2">{missedCalls}</div>
              <div className="text-text-secondary text-sm">Missed Calls/Month</div>
            </div>

            <div className="bg-card border border-gold/30 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-gold mb-2">{recoveredPatients}</div>
              <div className="text-text-secondary text-sm">Recovered Patients/Month</div>
            </div>

            <div className="bg-card border border-gold/30 p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-gold mb-2">
                ${monthlyRevenue.toLocaleString()}
              </div>
              <div className="text-text-secondary text-sm">Monthly Revenue Recovered</div>
            </div>
          </div>

          {/* Big Results */}
          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold p-8 rounded-2xl">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-6">
              <div>
                <div className="text-text-secondary text-sm mb-2">Annual Revenue Recovered</div>
                <div className="text-5xl font-bold text-gold">
                  ${annualRevenue.toLocaleString()}
                </div>
              </div>
              <div>
                <div className="text-text-secondary text-sm mb-2">ROI Multiple</div>
                <div className="text-5xl font-bold text-gold">{roiMultiple}x</div>
              </div>
            </div>

            <div className="border-t border-gold/30 pt-6">
              <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                <div>
                  <div className="text-text-secondary text-sm">Aria Cost (Annual)</div>
                  <div className="text-2xl font-bold">${annualCost.toLocaleString()}/yr</div>
                </div>
                <div className="text-3xl text-gold">→</div>
                <div>
                  <div className="text-text-secondary text-sm">Net Annual Gain</div>
                  <div className="text-2xl font-bold text-gold">
                    ${netGain.toLocaleString()}/yr
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 5: How It Works
function HowItWorks() {
  const steps = [
    {
      number: '1',
      icon: '📱',
      title: 'Patient Calls',
      description:
        'A patient calls Shorewood Dental at any hour. Before, 38% of these calls hit voicemail or rang out.',
    },
    {
      number: '2',
      icon: '🤖',
      title: 'Aria Answers Instantly',
      description:
        'Aria picks up in under 2 seconds. She knows your services, your pricing, your team. She sounds like a real person.',
    },
    {
      number: '3',
      icon: '📅',
      title: 'Patient Gets Booked',
      description:
        'Aria collects their info, answers their questions, and gets them scheduled. You wake up to new appointments.',
    },
  ]

  return (
    <section className="section-padding bg-navy-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          How Aria Works for Shorewood Dental
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto relative">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              {/* Desktop arrow */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-1/3 -right-4 text-4xl text-gold z-10">
                  →
                </div>
              )}

              <div className="bg-card p-8 rounded-2xl border border-gold/20 card-hover relative">
                {/* Number badge */}
                <div className="absolute -top-4 -left-4 w-12 h-12 bg-gold text-navy rounded-full flex items-center justify-center text-2xl font-bold shadow-gold-glow">
                  {step.number}
                </div>

                <div className="text-5xl mb-4 text-center">{step.icon}</div>
                <h3 className="text-xl font-bold mb-3 text-gold text-center">
                  {step.title}
                </h3>
                <p className="text-text-secondary leading-relaxed text-center">
                  {step.description}
                </p>
              </div>

              {/* Mobile arrow */}
              {index < steps.length - 1 && (
                <div className="md:hidden text-4xl text-gold text-center my-4">↓</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 6: Live Demo
function LiveDemo() {
  useEffect(() => {
    // Load GHL widget script
    const script = document.createElement('script')
    script.src = 'https://widgets.leadconnectorhq.com/loader.js'
    script.setAttribute('data-resources-url', 'https://widgets.leadconnectorhq.com/chat-widget/loader.js')
    script.setAttribute('data-widget-id', '69a7a2ff974d3ee83a0b6411')
    script.async = true

    const container = document.getElementById('aria-widget-container')
    if (container) {
      container.appendChild(script)
    }

    return () => {
      if (container && script.parentNode === container) {
        container.removeChild(script)
      }
    }
  }, [])

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
          This is the actual AI that would answer calls for Shorewood Dental. Click the button and
          have a real conversation.
        </p>

        <div className="max-w-2xl mx-auto">
          <div
            id="aria-widget-container"
            className="min-h-[120px] flex items-center justify-center bg-card rounded-2xl p-8 border border-gold/20"
          >
            {/* Widget loads here */}
          </div>

          <p className="text-text-secondary text-center mt-6 text-sm">
            Aria is configured with Shorewood Dental&apos;s services, pricing, and Dr. Wei&apos;s
            practice details.
          </p>
        </div>
      </div>
    </section>
  )
}

// SECTION 7: Social Proof / Stats
function SocialProof() {
  const stats = [
    {
      stat: '9x ROI',
      label: 'Average return for dental practices using AI receptionists (Heartland Dental, 27-office study)',
    },
    {
      stat: '4.9x ROI',
      label: 'in 8 weeks — Family First Dental captured 175 appointments and $131K annual revenue',
    },
    {
      stat: '17x ROI',
      label: 'in 30 days — T-Management recovered 368 missed calls, 46 new patients in one month',
    },
    {
      stat: '74%',
      label: 'Show rate for AI-booked appointments vs industry average of 67%',
    },
    {
      stat: '35%',
      label: 'Reduction in no-shows with AI appointment reminders',
    },
    {
      stat: '$0 extra',
      label: 'Cost of 24/7 coverage with Aria vs $3,958/mo for a second front desk hire',
    },
  ]

  return (
    <section className="section-padding bg-navy-dark">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          The Data Behind the Decision
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {stats.map((item, index) => (
            <div
              key={index}
              className="bg-card p-8 rounded-2xl border border-gold/20 card-hover text-center"
            >
              <div className="text-5xl font-bold text-gold mb-4">{item.stat}</div>
              <p className="text-text-secondary text-sm leading-relaxed">{item.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

// SECTION 8: What You Get
function WhatYouGet() {
  const features = [
    '24/7 AI voice receptionist (never misses a call)',
    'Appointment booking & scheduling',
    'After-hours patient capture',
    'New patient intake & FAQ handling',
    'Emergency call routing',
    'English + Spanish support',
    'Custom-trained on YOUR practice (services, pricing, team)',
    'No hardware, no setup headaches',
    'Live in 48 hours',
    'Cancel anytime',
  ]

  return (
    <section className="section-padding bg-navy">
      <div className="container-custom">
        <h2 className="text-3xl md:text-5xl font-bold text-center mb-16">
          Everything Included with Aria
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-12">
            {features.map((feature, index) => (
              <div key={index} className="flex items-start gap-3">
                <span className="text-gold text-2xl mt-1">✓</span>
                <span className="text-lg">{feature}</span>
              </div>
            ))}
          </div>

          <div className="bg-gradient-to-br from-gold/20 to-gold/5 border-2 border-gold p-8 rounded-2xl text-center">
            <div className="text-text-secondary mb-2">Starting at</div>
            <div className="text-5xl font-bold text-gold mb-2">$497/mo</div>
            <div className="text-text-secondary">
              Less than 1 recovered implant case
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

// SECTION 9: CTA / Footer
function CTAFooter() {
  return (
    <section className="section-padding bg-navy-dark">
      <div className="container-custom text-center">
        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Dr. Wei — Your First Month Pays For Itself.
        </h2>

        <p className="text-lg text-text-secondary max-w-3xl mx-auto mb-10 leading-relaxed">
          One recovered implant case covers 8 months of Aria. One recovered Invisalign case covers
          14 months. The math is simple.
        </p>

        <a href="tel:4144444444" className="btn-gold inline-block text-lg mb-6">
          Book Your Free 15-Min Demo
        </a>

        <p className="text-text-secondary text-sm mb-16">
          No commitment. See exactly what Aria would say to your patients.
        </p>

        <div className="border-t border-gold/20 pt-8">
          <p className="text-text-secondary text-sm">
            © 2026 RevolutionAI · Built for Shorewood Dental · (414) 444-4444
          </p>
        </div>
      </div>
    </section>
  )
}
