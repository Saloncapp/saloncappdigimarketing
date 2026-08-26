import React from 'react';
import { ArrowLeft } from 'lucide-react';

const TERMS = [
  {
    number: '01',
    title: 'Package Scope',
    body: 'The services provided will be based on the package selected by the client (Basic, Pro, or Premium). Any service not included in the selected package will be treated as an additional service and may incur extra charges.',
  },
  {
    number: '02',
    title: 'Content Deliverables',
    body: 'The number of reels, videos, creatives, posters, and promotional content will be delivered as specified in the selected package.',
  },
  {
    number: '03',
    title: 'Additional Services',
    body: 'Additional reels, creatives, photo editing, custom video editing, or any other work beyond the selected package scope will be charged separately.',
  },
  {
    number: '04',
    title: 'Social Media Management',
    body: 'We will manage only the social media platforms included in the selected package.',
  },
  {
    number: '05',
    title: 'Advertising & Promotion Charges',
    body: 'Any amount required for promotions, advertisements, boosts, or paid campaigns on platforms such as Meta, Google, or other advertising platforms must be paid by the client separately.',
  },
  {
    number: '06',
    title: 'Advertising Account Funding',
    body: 'The client is responsible for maintaining sufficient funds in the respective advertising account for running campaigns.',
  },
  {
    number: '07',
    title: 'Ads Without Approval',
    body: 'The management will not be responsible for any issues, losses, performance, or consequences arising from advertisements or campaigns run by the client or any third party without our approval.',
  },
  {
    number: '08',
    title: 'Creative Revisions',
    body: 'A maximum of 2 revisions will be provided for each creative, reel, video, or flyer. Any additional revisions may incur extra charges.',
  },
  {
    number: '09',
    title: 'Payment Terms',
    body: "The applicable advance payment must be made after the client's approval of the first 2 videos/reels. Further content production or services may be paused until the payment is received.",
  },
  {
    number: '10',
    title: 'Cancellation & Discontinuation',
    body: 'If the client discontinues the selected package before completion, payment must be made for all videos, reels, creatives, and services completed up to the date of cancellation.',
  },
  {
    number: '11',
    title: 'Client Approval & Cooperation',
    body: "The client is responsible for providing required photos, videos, information, offers, prices, and approvals on time. Delays from the client's side may affect the planned content and posting schedule.",
  },
  {
    number: '12',
    title: 'No Guaranteed Results',
    body: 'Digital marketing results such as leads, followers, reach, engagement, sales, revenue, or ROI are not guaranteed. Results may vary depending on advertising budget, audience, competition, offers, market conditions, platform algorithms, and other external factors.',
  },
  {
    number: '13',
    title: 'Client-Provided Information & Materials',
    body: 'The client is responsible for the accuracy, legality, and ownership of all photos, videos, logos, content, offers, pricing, and other materials provided to us.',
  },
  {
    number: '14',
    title: 'Third-Party Platform Issues',
    body: 'We will not be responsible for issues caused by third-party platforms such as Instagram, Facebook, Google, or other platforms, including account restrictions, technical issues, policy changes, algorithm changes, suspension, or downtime.',
  },
  {
    number: '15',
    title: 'Unused Deliverables',
    body: 'Deliverables that are not completed or used due to client-side delays, lack of approvals, or non-cooperation will not automatically be carried forward to the following month unless mutually agreed.',
  },
  {
    number: '16',
    title: 'Terms Acceptance',
    body: 'By availing of our services, the client confirms that they have read, understood, and agreed to the above Terms & Conditions.',
  },
];

type TermsProps = {
  onBackHome: () => void;
};

export default function Terms({ onBackHome }: TermsProps) {
  return (
    <section className="relative pt-28 pb-20 overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 opacity-40"
        style={{
          background:
            'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,208,0,0.12), transparent 60%)',
        }}
      />

      <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <button
          type="button"
          onClick={onBackHome}
          className="inline-flex items-center gap-2 text-sm text-zinc-400 hover:text-[#FFD000] transition-colors cursor-pointer mb-10"
        >
          <ArrowLeft className="w-4 h-4" />
          Back to Home
        </button>

        <header className="mb-12 space-y-4">
          <p className="text-[11px] font-bold uppercase tracking-[0.2em] text-[#FFD000]">
            Legal
          </p>
          <h1 className="font-display text-3xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
            Digital Marketing — Terms &amp; Conditions
          </h1>
          <p className="text-zinc-400 font-light text-sm leading-relaxed max-w-2xl">
            Please read these terms carefully before engaging our digital marketing services.
          </p>
        </header>

        <ol className="space-y-8">
          {TERMS.map((term) => (
            <li key={term.number} className="flex gap-4 sm:gap-5">
              <span className="shrink-0 font-display text-sm font-bold text-[#FFD000] tracking-wider pt-0.5 w-8">
                {term.number}
              </span>
              <div className="space-y-2 border-l border-zinc-800 pl-4 sm:pl-5">
                <h2 className="font-display text-base sm:text-lg font-semibold text-white">
                  {term.title}
                </h2>
                <p className="text-zinc-400 font-light text-sm leading-relaxed">
                  {term.body}
                </p>
              </div>
            </li>
          ))}
        </ol>

        <div className="mt-14 pt-8 border-t border-zinc-800/80 space-y-3">
          <p className="text-zinc-300 font-light text-sm italic">
            Thank you for your trust and cooperation!
          </p>
          <p className="text-white font-display text-sm font-semibold tracking-wide">
            SalonCapp Technologies Private Limited
          </p>
        </div>
      </div>
    </section>
  );
}
