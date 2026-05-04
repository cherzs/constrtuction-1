'use client'

import { Button } from '@/components/ui/button'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 border-b border-border">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
          <div className="flex flex-col">
            <span className="text-xs font-semibold tracking-widest uppercase text-accent">Shin Dongah</span>
            <span className="text-base font-medium tracking-tight text-foreground leading-none">Construction</span>
          </div>
          <div className="hidden md:flex items-center gap-8">
            <Link href="#work" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Work
            </Link>
            <Link href="#expertise" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Expertise
            </Link>
            <Link href="#standard" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Standard
            </Link>
            <Link href="#milestones" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Milestones
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </div>
          <Button 
            variant="outline" 
            className="text-xs font-medium border-foreground hover:bg-foreground hover:text-background"
          >
            Discuss Project
          </Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/hero-architecture.jpg"
            alt="PT. Shin Dongah Construction - Premium Architecture Interior"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-black/20" />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="max-w-2xl">
            <p className="text-xs font-medium tracking-widest text-white/80 mb-4 uppercase">
              Korean Standard Construction & Interior
            </p>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tight leading-tight text-white mb-6">
              Built with Precision.<br />Finished with Elegance.
            </h1>
            <p className="text-lg text-white/90 max-w-xl mb-8 leading-relaxed font-light">
              Construction, interior fit-out, furniture, MEP, and project management solutions for commercial, residential, industrial, and hospitality projects in Indonesia.
            </p>
            <div className="flex gap-4">
              <Button 
                size="lg"
                className="bg-white text-foreground hover:bg-white/90 font-medium"
              >
                Discuss Your Project
              </Button>
              <Button 
                size="lg"
                variant="outline"
                className="text-foreground border-white hover:bg-white/10"
              >
                View Capabilities
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Signature Statement Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight leading-tight mb-8">
                A disciplined approach to construction and interior delivery.
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-12 font-light">
                PT. Shin Dongah Construction combines Korean working discipline, construction capability, interior expertise, furniture production, and project coordination to support projects from planning to completion.
              </p>
              
              <div className="space-y-8">
                <div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase mb-2">Precision</h3>
                  <div className="w-16 h-px bg-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase mb-2">Quality</h3>
                  <div className="w-16 h-px bg-accent" />
                </div>
                <div>
                  <h3 className="text-sm font-semibold tracking-wide uppercase mb-2">Responsibility</h3>
                  <div className="w-16 h-px bg-accent" />
                </div>
              </div>
            </div>
            
            <div className="relative h-96 md:h-full min-h-96">
              <Image
                src="/construction-capability.jpg"
                alt="Construction Capability"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Capability Gallery */}
      <section id="work" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Capabilities Across Built Environments
          </h2>
          <p className="text-muted-foreground mb-16 font-light">Strategic expertise in construction and interior solutions</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Construction */}
            <div className="group relative overflow-hidden">
              <div className="relative h-80 md:h-96 mb-6">
                <Image
                  src="/construction-capability.jpg"
                  alt="Construction"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-2">Construction</h3>
              <p className="text-muted-foreground font-light">
                Buildings, housing, condominiums, hotels, stadiums, factories, hospitals, and commercial facilities.
              </p>
            </div>

            {/* Interior Fit-Out */}
            <div className="group relative overflow-hidden">
              <div className="relative h-80 md:h-96 mb-6">
                <Image
                  src="/interior-fitout.jpg"
                  alt="Interior Fit-Out"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-2">Interior Fit-Out</h3>
              <p className="text-muted-foreground font-light">
                Interior works, partition, furniture, finishing, and spatial execution.
              </p>
            </div>

            {/* MEP Installation */}
            <div className="group relative overflow-hidden">
              <div className="relative h-80 md:h-96 mb-6">
                <Image
                  src="/mep-installation.jpg"
                  alt="MEP Installation"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-2">MEP Installation</h3>
              <p className="text-muted-foreground font-light">
                Mechanical and electrical installation support for construction and interior projects.
              </p>
            </div>

            {/* Project Delivery */}
            <div className="group relative overflow-hidden">
              <div className="relative h-80 md:h-96 mb-6">
                <Image
                  src="/project-delivery.jpg"
                  alt="Project Delivery"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
              <h3 className="text-2xl font-light tracking-tight mb-2">Project Delivery</h3>
              <p className="text-muted-foreground font-light">
                Planning, coordination, material supply, maintenance, logistics, and handover support.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Korean Standard Section */}
      <section id="standard" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16">
            Clean execution. Clear coordination. Consistent quality.
          </h2>
          
          <div className="space-y-px">
            {[
              { number: '01', title: 'Planning Discipline', description: 'Strategic approach to project requirements and timelines' },
              { number: '02', title: 'Material & Site Coordination', description: 'Seamless supply chain and on-site resource management' },
              { number: '03', title: 'Interior & Construction Execution', description: 'Precision delivery across all construction and interior phases' },
              { number: '04', title: 'Handover & Support', description: 'Complete project delivery and ongoing maintenance support' },
            ].map((item, index) => (
              <div key={index} className="py-8 border-b border-border last:border-b-0">
                <div className="flex items-start gap-8">
                  <span className="text-4xl font-light text-accent min-w-fit">{item.number}</span>
                  <div>
                    <h3 className="text-xl font-light mb-2">{item.title}</h3>
                    <p className="text-muted-foreground font-light">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Expertise Section */}
      <section id="expertise" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">Expertise</h2>
          <p className="text-muted-foreground mb-16 font-light">Complete service portfolio for construction and interior delivery</p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {[
              { title: 'Architectural Design', description: 'Strategic spatial planning and design development' },
              { title: 'Feasibility Assessment', description: 'Project viability and technical assessment' },
              { title: 'Existing Condition Assessment', description: 'Site and building evaluation services' },
              { title: 'Interior Design', description: 'Aesthetic and functional interior solutions' },
              { title: 'Construction', description: 'Full-scale construction execution and management' },
              { title: 'Project Management', description: 'End-to-end project coordination and oversight' },
              { title: 'Material Supply', description: 'Reliable sourcing and supply chain management' },
              { title: 'Furniture Manufacturing', description: 'Custom furniture production and installation' },
              { title: 'Mechanical & Electrical Installation', description: 'MEP systems and technical installation' },
              { title: 'Maintenance & Logistics', description: 'Ongoing maintenance and logistics support' },
            ].map((item, index) => (
              <div key={index} className="pb-8 border-b border-border">
                <h3 className="text-lg font-light mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground font-light">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision Section */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-12">
            Creating environments that inspire better living.
          </h2>
          
          <p className="text-lg text-muted-foreground mb-16 leading-relaxed font-light max-w-2xl mx-auto">
            SDC aims to create built environments that combine beauty, innovation, quality, and responsiveness to client needs, communities, and surrounding environments.
          </p>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {['Create', 'Innovate', 'Inspire', 'Integrity'].map((value, index) => (
              <div key={index} className="space-y-3">
                <p className="text-2xl font-light">{value}</p>
                <div className="w-8 h-px bg-accent mx-auto" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Operational Readiness */}
      <section className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-4">
            Prepared for site and production work.
          </h2>
          <p className="text-muted-foreground mb-16 font-light">
            SDC supports project delivery with production tools, site equipment, and technical resources for construction and interior execution.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              'Boring Machine',
              'Planner',
              'Compressor',
              'Sawing Machine',
              'Hand Pallet',
              'Double Radial',
              'Cross Cut Machine',
              'Balon Sand Machine',
              'Cyclone',
              'Pressure Tank',
            ].map((equipment, index) => (
              <div key={index} className="p-4 border border-border flex items-center">
                <span className="text-sm font-light text-foreground">{equipment}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section id="milestones" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-16">
            Company Milestones
          </h2>
          
          <div className="max-w-2xl space-y-px">
            {[
              { year: '2008', text: 'Established as PT. Amira Medika.' },
              { year: '2009', text: 'Joint cooperation with PT. Furniwell Sinar Jaya for indoor and outdoor furniture production and sales.' },
              { year: '2010', text: 'Capital increase and company name changed to PT. Shin Dongah Construction.' },
              { year: '2011', text: 'Obtained construction service business license as a construction contractor.' },
            ].map((milestone, index) => (
              <div key={index} className="py-8 border-b border-border last:border-b-0">
                <div className="flex gap-8">
                  <span className="text-4xl font-light text-accent min-w-fit">{milestone.year}</span>
                  <p className="text-lg font-light text-foreground pt-1">{milestone.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h2 className="text-5xl md:text-6xl font-light tracking-tight mb-8">
                Let&apos;s build with precision.
              </h2>
              <p className="text-lg text-muted-foreground font-light mb-8">
                For construction, interior, furniture, MEP, and project management inquiries, contact PT. Shin Dongah Construction.
              </p>
              <Button 
                size="lg"
                className="bg-foreground text-background hover:bg-foreground/90 font-medium"
              >
                Contact Us
              </Button>
            </div>
            
            <div className="space-y-6 text-lg font-light">
              <div>
                <p className="font-medium mb-1">PT. Shin Dongah Construction</p>
                <p className="text-muted-foreground">
                  Jl. Kav Perkebunan Raya No. 209B,<br />
                  Palem Semi, Karawaci, Tangerang
                </p>
              </div>
              
              <div className="pt-4 border-t border-border space-y-3">
                <div>
                  <p className="text-sm text-muted-foreground mb-1">WhatsApp</p>
                  <a href="https://wa.me/6285161917939" target="_blank" className="text-foreground hover:text-accent transition-colors">
                    +62 851-6191-7939
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Instagram</p>
                  <a href="https://www.instagram.com/flowcreativconsultant/" target="_blank" className="text-foreground hover:text-accent transition-colors">
                    @flowcreativconsultant
                  </a>
                </div>

                <div>
                  <p className="text-sm text-muted-foreground mb-1">Email</p>
                  <a href="mailto:flowcreativconsultant@gmail.com" className="text-foreground hover:text-accent transition-colors">
                    flowcreativconsultant@gmail.com
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 px-4 sm:px-6 lg:px-8 border-t border-border text-center">
        <div className="max-w-7xl mx-auto space-y-4">
          <p className="text-sm font-medium">PT. Shin Dongah Construction</p>
          <p className="text-xs text-muted-foreground">
            Korean Standard Construction & Interior Solutions
          </p>
          <p className="text-xs text-muted-foreground">
            Tangerang, Indonesia
          </p>
          <p className="text-xs text-muted-foreground pt-4">
            © 2024 PT. Shin Dongah Construction. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Dibuat oleh{" "}
            <a
              href="https://flowreativ.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors"
            >
              Flow Creativ
            </a>
          </p>
        </div>
      </footer>
    </div>
  )
}
