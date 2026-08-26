import React, { useState } from 'react';
import { Sparkles, ArrowRight, Layers, FileText, Wand2, ChevronDown } from 'lucide-react';

const PACKAGES = [
  {
    name: 'Basic Package',
    price: '₹5,000',
    period: 'Month',
    isPopular: false,
    tagline: 'Build Your Digital Foundation',
    desc: 'Perfect for new and local salons looking to establish a professional online presence.',
    categories: [
      {
        title: 'CONTENT',
        items: [
          '12 Professional Reels & Videos',
          'Monthly Festival & Promotion Planning',
          'Guidance on Camera Angles & Framing',
          'Captions & Hashtag Support'
        ]
      },
      {
        title: 'VISIBILITY',
        items: [
          'Instagram & Facebook Management',
          'Local Visibility Improvement Strategy',
          'Google Business Profile Content Support',
          'Monthly Profile & Content Optimization'
        ]
      },
      {
        title: 'CUSTOMER ENGAGEMENT',
        items: [
          'Customer Interaction Guidance',
          'Comment & Message Response Support',
          'Monthly Offer Planning',
          'Customer Review & Testimonial Content Guidance'
        ]
      },
      {
        title: 'REPORTING',
        items: [
          'Monthly Social Media Performance Report',
          'Growth Review Call'
        ]
      }
    ],
    expectedResults: [
      'Professional Online Presence',
      'Improved Local Visibility',
      'Consistent Social Media Activity',
      'Better Customer Trust & Brand Awareness'
    ]
  },
  {
    name: 'Pro Package',
    price: '₹8,000',
    period: 'Month',
    isPopular: false,
    tagline: 'Grow Your Brand & Customer Base',
    desc: 'Ideal for salons that want more enquiries, appointments, and stronger local branding.',
    categories: [
      {
        title: 'CONTENT',
        items: [
          '20 Premium Reels & Brand Videos',
          'Monthly Video Planning Calendar',
          'Monthly Festival & Promotion Planning',
          'Content Strategy & Planning',
          'Captions, Hashtags & Posting Guidance'
        ]
      },
      {
        title: 'VISIBILITY',
        items: [
          'Google Business Profile Management',
          'Review & Rating Growth Strategy',
          'Competitor Analysis Report',
          'Local Area Branding Strategy',
          'Google Visibility Improvement'
        ]
      },
      {
        title: 'LEAD GENERATION',
        items: [
          'Facebook & Instagram Page Management',
          'Meta Ads Management',
          'Lead Generation Campaigns',
          'Customer Retargeting Campaigns',
          'Offer & Campaign Strategy for Enquiries'
        ]
      },
      {
        title: 'REPORTING & GROWTH',
        items: [
          'Follower & Subscriber Tracking',
          'Monthly Performance Report',
          'Business Growth Consultation',
          'Monthly Campaign Performance Review'
        ]
      }
    ],
    expectedResults: [
      'Increased Customer Enquiries',
      'Higher Google Visibility',
      'Better Social Media Engagement',
      'More Appointment Opportunities',
      'Stronger Local Brand Recognition'
    ]
  },
  {
    name: 'Premium Package',
    price: '₹12,000',
    period: 'Month',
    isPopular: true,
    tagline: 'Your Complete Salon Growth Partner',
    desc: 'Designed for ambitious salon brands looking for consistent growth, stronger customer acquisition, and long-term market positioning.',
    categories: [
      {
        title: 'CONTENT & BRANDING',
        items: [
          '26 Premium Reels & Trend-Based Videos',
          'Monthly Video Planning & Content Calendar',
          'Content Strategy & Planning',
          'Monthly Festival & Promotional Creatives',
          'Advanced Brand Content Strategy',
          'YouTube Content Support'
        ]
      },
      {
        title: 'VISIBILITY & BRAND GROWTH',
        items: [
          'Complete Digital Presence Management (Instagram, Facebook, YouTube & Google)',
          'Google Business Growth Management',
          'Local Market Visibility Strategy',
          'Multi-Branch Marketing Support',
          'Online Reputation & Review Growth Strategy'
        ]
      },
      {
        title: 'LEAD GENERATION',
        items: [
          'Advanced Lead Generation Strategy',
          'Meta Ads Management',
          'Lead Generation Campaigns',
          'Customer Retargeting Campaigns',
          'Campaign & Offer Optimization',
          'Enquiry-to-Appointment Growth Strategy'
        ]
      },
      {
        title: 'REPORTING & BUSINESS GROWTH',
        items: [
          'Social Media Insights Dashboard',
          'Reach, Engagement & Follower Tracking',
          'Lead & Campaign Performance Tracking',
          'Monthly Growth Review Meeting',
          'Quarterly Business Growth Roadmap'
        ]
      }
    ],
    expectedResults: [
      'Higher Customer Footfall',
      'Consistent Lead Generation',
      'Stronger Online & Local Brand Presence',
      'Better Customer Acquisition',
      'Strong Local Market Authority',
      'Predictable Business Growth'
    ]
  }
];

const ADD_ONS = [
  'Logo Design',
  'Brand Identity Design',
  'Poster Design',
  'Offer Creatives',
  'Menu Card Design',
  'Visiting Card Design',
  'Social Media Post Designs',
  'Instagram Story Designs',
  'WhatsApp Marketing Creatives',
  'Brochure Design',
  'Flex & Banner Design',
  'Festival Campaign Creatives',
  'Advertisement Creatives',
  'Custom Branding Materials'
];

const AI_PACKAGE = {
  name: 'AI Video Creation',
  tagline: 'Create Engaging AI-Powered Videos for Your Brand',
  desc: 'Perfect for salons and businesses looking to create creative, promotional, and engaging AI videos for social media.',
  price: '₹1,000',
  period: 'Video',
  highlights: [
    '1 AI Video Per Week',
    'Maximum Duration: 60 Seconds',
    '1 Revision Included'
  ],
  included: [
    'AI-Generated Video',
    'Concept & Script Planning',
    'AI-Generated Visuals & Animations',
    'AI Voice / Audio Support',
    'Product / Service Integration',
    'Social Media Ready Video',
    '1 Revision'
  ],
  idealFor: [
    'Service & Product Promotions',
    'Festival & Special Offers',
    'Brand Awareness Videos',
    'Instagram Reels',
    'YouTube Shorts',
    'Creative Promotional Campaigns'
  ],
  important: [
    '₹1,000 is charged per AI video.',
    'The package includes 1 AI video per week, with a maximum duration of 60 seconds per video. Additional videos in the same week or videos exceeding 60 seconds will be treated as additional requirements and may incur extra charges.',
    'Production will begin only after receiving the required details and approval of the concept/script.',
    'Payment must be completed before production begins.'
  ],
  priceSummary: [
    { label: 'Price', value: '₹1,000 / AI Video' },
    { label: 'Maximum Duration', value: '60 Seconds' },
    { label: 'Revisions', value: '1 Included' },
    { label: 'Additional Requirements', value: 'Charged Separately' }
  ],
  terms: [
    'Each video is limited to 60 seconds.',
    'The ₹1,000 price applies to one AI video.',
    'More than one video or videos exceeding 60 seconds will be charged separately.',
    'Production starts only after receiving all required details and approval of the concept/script. One revision is included. Additional revisions or major changes after approval may incur additional charges.',
    'AI-generated visuals, faces, hands, voices, characters and other elements may have minor variations and may not always appear exactly as requested.',
    'The client is responsible for providing accurate business, service, pricing, offer and promotional information.',
    'If a real person\'s face or voice is used or replicated, the required permission/authorization must be provided by the client.',
    'Payment must be completed before production begins. Any additional charges must be paid before final delivery.',
    'Delivery time may vary depending on the complexity of the concept, script approval, revisions and AI generation process.',
    'Third-party AI tools may be used, and their technical limitations or service availability are beyond our direct control.',
    'The final approved video can be used by the client for business marketing and promotional activities.',
    'Once the final video is approved, any further changes will be treated as additional revisions and may incur additional charges.',
    'If the project is cancelled after production has started, the payment/advance may not be refundable depending on the work completed.'
  ]
};

export default function Pricing() {
  const [showAiTerms, setShowAiTerms] = useState(false);

  const handleSelectPackage = (packageName: string) => {
    const contactForm = document.getElementById('contact');
    const messageInput = document.getElementById('form_message') as HTMLTextAreaElement;
    if (contactForm) {
      if (messageInput) {
        messageInput.value = `Hello! I would like to request a custom quote / inquire about the "${packageName}".`;
      }
      const headerOffset = 80;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  const handleSelectAddOn = (addOnName: string) => {
    const contactForm = document.getElementById('contact');
    const messageInput = document.getElementById('form_message') as HTMLTextAreaElement;
    if (contactForm) {
      if (messageInput) {
        messageInput.value = `Hello! I am interested in your Creative & Branding Add-on: "${addOnName}". Please tell me its delivery details.`;
      }
      const headerOffset = 80;
      const elementPosition = contactForm.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
    }
  };

  return (
    <section id="pricing" className="bg-[#121212] py-24 border-t border-zinc-900/80">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Pricing Title Block */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span>SalonCapp Digital Marketing Services</span>
            <span className="w-8 h-px bg-[#FFD000]" />
          </div>
          
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold tracking-tight text-white mb-2 font-display uppercase">
            We Don't <span className="text-[#FFD000] italic leading-none">Just Post Content.</span>
          </h2>
          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold tracking-tight text-white mb-6 font-display">
            We Help Salons Get More Customers, More Visibility & More Growth.
          </h3>
          
          <p className="text-zinc-400 font-light text-sm sm:text-base max-w-3xl mx-auto leading-relaxed">
            At SalonCapp DM, we become your salon's dedicated digital marketing team. From content creation and social media management to Google visibility, customer engagement, and lead generation, we help salons build a strong online presence and attract more appointments consistently.
          </p>
        </div>

        {/* Packages Cards Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch mb-16">
          {PACKAGES.map((pkg, idx) => (
            <div
              key={idx}
              className={`flex flex-col justify-between rounded-xl relative overflow-hidden transition-all duration-300 ${
                pkg.isPopular
                  ? 'bg-gradient-to-b from-[#1a1a1a] to-zinc-950 border-2 border-[#FFD000] shadow-[0_15px_40px_rgba(255,208,0,0.15)] ring-1 ring-[#FFD000]/50 lg:-translate-y-4'
                  : 'bg-[#1a1a1a]/40 border border-zinc-805/80 hover:border-zinc-700 hover:bg-[#1a1a1a]/60'
              } p-8`}
            >
              {pkg.isPopular && (
                <div className="absolute top-4 right-4 bg-[#FFD000] text-[#121212] font-black text-[9px] uppercase tracking-widest px-2.5 py-1 rounded inline-flex items-center gap-1">
                  <Sparkles className="w-3 h-3" />
                  <span>MOST POPULAR</span>
                </div>
              )}

              {/* Package Meta Info */}
              <div>
                <h3 className="font-display font-black tracking-wider text-xl text-white uppercase text-left">
                  {pkg.name}
                </h3>
                <p className="text-[#FFD000] text-xs font-semibold uppercase tracking-wider mt-1.5 text-left">
                  {pkg.tagline}
                </p>
                <p className="text-zinc-400 text-xs mt-2 text-left font-light leading-relaxed min-h-[40px]">
                  {pkg.desc}
                </p>

                {/* Price Display */}
                <div className="my-6 border-y border-zinc-800/80 py-4 flex items-baseline gap-1">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-none">{pkg.price}</span>
                  <span className="text-zinc-500 font-mono text-xs">/ {pkg.period}</span>
                </div>

                {/* Subtitle Upgrade Indicator */}
                {'subtitle' in pkg && pkg.subtitle && (
                  <div className="bg-[#FFD000]/10 text-[#FFD000] font-black text-[9px] uppercase tracking-widest px-2 py-1 rounded inline-block mb-4 text-left">
                    {pkg.subtitle}
                  </div>
                )}

                {/* Categorized Features */}
                <div className="space-y-4 text-left">
                  {pkg.categories.map((cat, catIdx) => (
                    <div key={catIdx} className="space-y-1.5">
                      <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border-l border-[#FFD000] pl-2">
                        {cat.title}
                      </h4>
                      <ul className="space-y-1 pl-2">
                        {cat.items.map((item, itemIdx) => (
                          <li key={itemIdx} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                            <span className="text-[#FFD000] shrink-0 mt-0.5 font-bold">✓</span>
                            <span className="text-left">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>

                {/* Expected Results Block */}
                {pkg.expectedResults && pkg.expectedResults.length > 0 && (
                  <div className="mt-6 pt-4 border-t border-zinc-800/80 text-left">
                    <h5 className="text-[10px] tracking-widest uppercase font-bold text-zinc-400 mb-2">
                      Expected Results
                    </h5>
                    <ul className="space-y-1">
                      {pkg.expectedResults.map((res, resIdx) => (
                        <li key={resIdx} className="flex items-start gap-1.5 text-xs text-zinc-300 font-medium">
                          <span className="text-green-500 shrink-0 select-none">✔</span>
                          <span>{res}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>

              {/* Action Button */}
              <button
                onClick={() => handleSelectPackage(pkg.name)}
                className={`w-full py-4 rounded font-bold uppercase tracking-wider text-xs transition-all duration-300 cursor-pointer text-center mt-8 ${
                  pkg.isPopular
                    ? 'bg-[#FFD000] text-[#121212] hover:bg-[#e6be00] hover:shadow-[0_0_25px_rgba(255,208,0,0.35)] font-black'
                    : 'bg-zinc-900 hover:bg-[#FFD000] text-white hover:text-[#121212] border border-zinc-800 hover:border-transparent'
                }`}
              >
                Launch Growth Run
              </button>
            </div>
          ))}
        </div>

        {/* AI Video Package */}
        <div className="mb-16 rounded-xl border border-zinc-800/80 bg-[#1a1a1a]/40 overflow-hidden">
          <div className="p-8 lg:p-10">
            <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-8 mb-8">
              <div className="max-w-2xl text-left">
                <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-3">
                  <Wand2 className="w-4 h-4" />
                  <span>AI Package</span>
                </div>
                <h3 className="font-display font-black tracking-wider text-2xl sm:text-3xl text-white uppercase">
                  {AI_PACKAGE.name}
                </h3>
                <p className="text-[#FFD000] text-xs font-semibold uppercase tracking-wider mt-2">
                  {AI_PACKAGE.tagline}
                </p>
                <p className="text-zinc-400 text-sm mt-3 font-light leading-relaxed">
                  {AI_PACKAGE.desc}
                </p>
                <ul className="mt-4 flex flex-wrap gap-2">
                  {AI_PACKAGE.highlights.map((item) => (
                    <li
                      key={item}
                      className="text-[10px] uppercase tracking-wider font-bold text-zinc-200 bg-black/40 border border-zinc-800 px-2.5 py-1 rounded"
                    >
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0 w-full sm:w-auto lg:min-w-[220px] flex flex-col items-stretch gap-4">
                <div className="flex items-baseline justify-center gap-1 border border-zinc-800 bg-black/30 rounded-lg px-5 py-4 text-center">
                  <span className="text-3xl sm:text-4xl font-extrabold text-white font-display leading-none">
                    {AI_PACKAGE.price}
                  </span>
                  <span className="text-zinc-500 font-mono text-xs">/ {AI_PACKAGE.period}</span>
                </div>
                <button
                  onClick={() => handleSelectPackage(AI_PACKAGE.name)}
                  className="w-full px-6 py-3.5 rounded bg-[#FFD000] text-[#121212] font-black uppercase tracking-wider text-xs hover:bg-[#e6be00] hover:shadow-[0_0_25px_rgba(255,208,0,0.35)] transition-all cursor-pointer"
                >
                  Order AI Video
                </button>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 text-left">
              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border-l border-[#FFD000] pl-2">
                  What&apos;s Included
                </h4>
                <ul className="space-y-1.5 pl-2">
                  {AI_PACKAGE.included.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                      <span className="text-[#FFD000] shrink-0 mt-0.5 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border-l border-[#FFD000] pl-2">
                  Ideal For
                </h4>
                <ul className="space-y-1.5 pl-2">
                  {AI_PACKAGE.idealFor.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-xs text-zinc-300 font-light">
                      <span className="text-[#FFD000] shrink-0 mt-0.5 font-bold">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2 md:col-span-2 xl:col-span-1">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border-l border-[#FFD000] pl-2">
                  Important
                </h4>
                <ul className="space-y-2 pl-2">
                  {AI_PACKAGE.important.map((item) => (
                    <li key={item} className="text-xs text-zinc-400 font-light leading-relaxed">
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="space-y-2">
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-zinc-400 border-l border-[#FFD000] pl-2">
                  Price
                </h4>
                <ul className="space-y-2 pl-2">
                  {AI_PACKAGE.priceSummary.map((row) => (
                    <li key={row.label} className="text-xs">
                      <span className="block text-zinc-500 uppercase tracking-wider text-[9px] font-bold mb-0.5">
                        {row.label}
                      </span>
                      <span className="text-zinc-200 font-medium">{row.value}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* AI Package Terms & Conditions only */}
          <div className="border-t border-zinc-800/80 bg-black/20">
            <button
              type="button"
              onClick={() => setShowAiTerms((prev) => !prev)}
              className="w-full px-8 lg:px-10 py-4 flex items-center justify-between gap-4 text-left cursor-pointer hover:bg-white/[0.02] transition-colors"
              aria-expanded={showAiTerms}
            >
              <span className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-zinc-300">
                <FileText className="w-4 h-4 text-[#FFD000]" />
                Important Terms — AI Package Only
              </span>
              <ChevronDown
                className={`w-4 h-4 text-zinc-500 transition-transform duration-200 ${showAiTerms ? 'rotate-180' : ''}`}
              />
            </button>

            {showAiTerms && (
              <div className="px-8 lg:px-10 pb-8 text-left">
                <p className="text-[10px] uppercase tracking-widest text-zinc-500 font-bold mb-3">
                  These terms apply only to the AI Video Creation package.
                </p>
                <ol className="space-y-2.5 list-decimal list-inside">
                  {AI_PACKAGE.terms.map((term) => (
                    <li key={term} className="text-xs text-zinc-400 font-light leading-relaxed">
                      {term}
                    </li>
                  ))}
                </ol>
              </div>
            )}
          </div>
        </div>

        {/* Why Choose SalonCapp DM? Banner Box */}
        <div className="bg-[#1a1a1a]/40 border border-[#FFD000]/20 rounded-xl p-8 sm:p-10 mb-16 relative overflow-hidden text-left">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FFD000]/5 rounded-full blur-[80px] pointer-events-none" />
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-6">
              <h3 className="text-[#FFD000] font-display font-extrabold text-lg sm:text-xl uppercase tracking-wider">
                Why Choose SalonCapp DM?
              </h3>
              <ul className="space-y-3.5">
                {[
                  'Salon Industry Specialists',
                  'Content + Marketing + Lead Generation Under One Roof',
                  'Google Business Profile Growth Experts',
                  'Dedicated Support & Strategy',
                  'Affordable Plans Designed Specifically For Salons'
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-sm text-zinc-200 font-light">
                    <span className="text-[#FFD000] font-bold text-sm shrink-0">✔</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="lg:col-span-5 bg-black/40 border border-zinc-800/80 p-6 rounded-xl text-center space-y-3">
              <p className="text-zinc-400 font-mono text-[10px] uppercase tracking-widest">Digital Growth Manifesto</p>
              <h4 className="text-white font-extrabold text-lg uppercase font-display leading-tight">
                Your Salon Deserves More Than Social Media Posts.
              </h4>
              <p className="text-[#FFD000] font-black uppercase text-xs tracking-wider">
                It Deserves A Complete Growth System.
              </p>
            </div>
          </div>
        </div>

        {/* Premium A La Carte Add-ons Block */}
        <div className="bg-[#1a1a1a]/30 border border-zinc-800/80 rounded-xl p-8 lg:p-12">
          <div className="text-left max-w-xl mb-10">
            <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-3">
              <Layers className="w-4 h-4" />
              <span>SALON BRANDING SOLUTIONS</span>
            </div>
            <h3 className="text-2xl sm:text-3xl font-bold text-white font-display uppercase tracking-tight">
              Creative & Branding <span className="text-[#FFD000]">Add-ons.</span>
            </h3>
            <p className="text-zinc-500 font-light text-sm mt-2">
              Transform your physical salon space and marketing collateral to reflect supreme digital luxury. Click any add-on below to construct a customized combo bundle:
            </p>
          </div>

          {/* Add-ons Grid board */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 mb-10">
            {ADD_ONS.map((addon, idx) => (
              <div
                key={idx}
                onClick={() => handleSelectAddOn(addon)}
                className="group p-3 sm:p-4 rounded-lg bg-[#121212] border border-zinc-800/60 hover:border-[#FFD000]/40 hover:bg-[#1a1a1a] transition-all duration-200 cursor-pointer text-left flex items-center justify-between"
              >
                <div className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-zinc-700 group-hover:bg-[#FFD000] transition-colors" />
                  <span className="text-zinc-300 group-hover:text-white transition-colors font-medium text-xs sm:text-sm">
                    {addon}
                  </span>
                </div>
                <ArrowRight className="w-3.5 h-3.5 text-zinc-600 group-hover:text-[#FFD000] transition-colors shrink-0 opacity-0 group-hover:opacity-100 translate-x-[-4px] group-hover:translate-x-0 group-hover:duration-150" />
              </div>
            ))}
          </div>

          {/* Custom Solutions Frame Card */}
          <div className="border-t border-zinc-800/80 pt-8 flex flex-col md:flex-row items-center justify-between gap-6" id="special_quote_block">
            <div className="text-left">
              <h4 className="text-white font-bold font-display text-base uppercase tracking-wider flex items-center gap-1.5">
                <span>Need a Custom Marketing Solution?</span>
              </h4>
              <p className="text-zinc-400 font-light text-xs sm:text-sm mt-1 max-w-xl">
                Every salon business is unique. Contact Jawahars strategy table for a customized digital marketing and brand plan tailored to your exact budget, local demographics, and studio objectives.
              </p>
            </div>
            <button
              onClick={() => handleSelectPackage('Custom Digital Marketing Solutions combo')}
              className="px-6 py-3.5 rounded bg-white hover:bg-[#FFD000] text-[#121212] font-extrabold tracking-widest text-xs uppercase transition-colors shrink-0 shadow-md cursor-pointer flex items-center gap-2"
            >
              Request Custom Quote
              <ArrowRight className="w-4.5 h-4.5" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
