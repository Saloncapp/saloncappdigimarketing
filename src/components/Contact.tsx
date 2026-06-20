import React, { useState, useEffect } from 'react';
import { Phone, Mail, MapPin, MessageSquare, Instagram, Send, Sparkles, CheckCircle, Database } from 'lucide-react';
import { LeadSubmission } from '../types';

export default function Contact() {
  const [formData, setFormData] = useState<LeadSubmission>({
    name: '',
    salonName: '',
    mobile: '',
    city: '',
    message: ''
  });

  const [validationError, setValidationError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setValidationError('');
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setValidationError('');

    const name = formData.name.trim();
    const salonName = formData.salonName.trim();
    const mobile = formData.mobile.trim();
    const city = formData.city.trim();
    const message = formData.message.trim();

    // Custom strict validation
    if (!name || !salonName || !mobile) {
      setValidationError('Name, Salon Name, and Mobile Number are required.');
      return;
    }

    // Generate WhatsApp text format exactly as requested by user
    const waText = `Hello SalonCapp Team,

I am interested in your Digital Marketing Services.

Name: ${name}
Salon Name: ${salonName}
Mobile Number: ${mobile}
City: ${city}
Requirement: ${message}

Please contact me regarding my enquiry.

Thank you.`;

    const encodedText = encodeURIComponent(waText);
    const whatsappUrl = `https://wa.me/919789753804?text=${encodedText}`;

    // Direct redirect to WhatsApp
    window.location.href = whatsappUrl;
  };

  return (
    <section id="contact" className="bg-[#121212] py-24 border-t border-zinc-900/80 scroll-mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Title */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 text-[#FFD000] text-xs font-semibold tracking-widest uppercase mb-4 justify-center">
            <span className="w-8 h-px bg-[#FFD000]" />
            <span>GROWTH ENTRANCE</span>
            <span className="w-8 h-px bg-[#FFD000]" />
          </div>
          
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-white mb-6 font-display">
            Begin the <span className="text-[#FFD000] italic">Consultation.</span>
          </h2>
          
          <p className="text-zinc-400 font-light text-base sm:text-lg">
            Let us design a premium digital presence and creative video infrastructure specific to your salon's local goals.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          
          {/* Card Info Details Deck */}
          <div className="lg:col-span- così lg:col-span-5 space-y-8 select-all">
            <div className="bg-[#1a1a1a]/60 border border-zinc-800/80 rounded-xl p-8 space-y-6">
              
              <div>
                <h3 className="text-xl font-bold font-display text-white">SalonCapp</h3>
                <p className="text-[#FFD000] text-xs uppercase tracking-widest font-semibold mt-1">
                  Crafted for Salon Proprietors
                </p>
              </div>

              <div className="h-px bg-zinc-800" />

              <div className="space-y-4">
                
                {/* Map item */}
                <div className="flex gap-4 items-start text-left">
                  <MapPin className="w-5 h-5 text-[#FFD000] shrink-0 mt-1" />
                  <div>
                    <h4 className="text-xs text-zinc-500 font-mono uppercase tracking-wider">ADDRESS</h4>
                    <p className="text-zinc-200 text-sm font-light leading-relaxed mt-1">
                      Second Floor, Plot No. 24,<br />
                      Kumbakonam - Chennai Road,<br />
                      Near MRV Mahal,<br />
                      Sethuraman Nagar,<br />
                      Melacavery,<br />
                      Kumbakonam,<br />
                      Tamil Nadu 612002,<br />
                      India
                    </p>
                    <a 
                      href="https://www.google.com/maps/place/SalonCapp+Technologies+Private+Limited/@10.976081,79.3815836,1115m/data=!3m2!1e3!4b1!4m6!3m5!1s0x25514065e8c42edf:0x30d6c2d7f0b4e31a!8m2!3d10.976081!4d79.3841585!16s%2Fg%2F11yw94kcc3"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1 text-[#FFD000] hover:underline text-xs font-semibold mt-2"
                      id="link_open_map_address_btn"
                    >
                      <span>Open Map</span>
                      <span className="text-[10px]">↗</span>
                    </a>
                  </div>
                </div>

                {/* Email item */}
                <div className="flex gap-4 items-start text-left">
                  <Mail className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Secured Mailbox</h4>
                    <p className="text-zinc-200 text-sm font-light mt-1">
                      digimarket.saloncapp@gmail.com
                    </p>
                  </div>
                </div>

                {/* Phone items */}
                <div className="flex gap-4 items-start text-left">
                  <Phone className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Inbound Call Hotline</h4>
                    <p className="text-zinc-200 text-sm font-light mt-1">
                      +91 87004 97004
                    </p>
                  </div>
                </div>

                {/* WhatsApp item */}
                <div className="flex gap-4 items-start text-left">
                  <MessageSquare className="w-5 h-5 text-[#FFD000] shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs text-zinc-500 font-mono uppercase tracking-wider">Secure WhatsApp Channel</h4>
                    <p className="text-[#FFD000] text-sm font-light mt-1 font-semibold">
                      +91 97897 53804
                    </p>
                  </div>
                </div>

              </div>

              <div className="h-px bg-zinc-800" />

              {/* Instant Social Channels Taps */}
              <div className="flex flex-col gap-3">
                <a
                  href="https://wa.me/919789753804"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-green-600 hover:bg-green-700 text-white font-bold uppercase text-xs tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  id="link_wa_btn"
                >
                  <MessageSquare className="w-4 h-4 fill-current" />
                  WhatsApp Direct Chat
                </a>
                
                <a
                  href="tel:8700497004"
                  className="p-3 bg-zinc-800 hover:bg-zinc-700 text-white font-bold uppercase text-xs tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  id="link_call_btn"
                >
                  <Phone className="w-4 h-4" />
                  Dial hotline directly
                </a>

                <a
                  href="https://www.instagram.com/saloncapp_technologies/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3 bg-[#FFD000] hover:bg-[#e6be00] text-[#121212] font-black uppercase text-xs tracking-wider rounded text-center transition-colors flex items-center justify-center gap-2 shadow-lg cursor-pointer"
                  id="link_ig_btn"
                >
                  <Instagram className="w-4 h-4" />
                  Instagram: @saloncapp_technologies
                </a>
              </div>

            </div>

            {/* Geographical Interactive Google Map Embed focused on Melacavery Kumbakonam */}
            <a 
              href="https://www.google.com/maps/place/SalonCapp+Technologies+Private+Limited/@10.976081,79.3815836,1115m/data=!3m2!1e3!4b1!4m6!3m5!1s0x25514065e8c42edf:0x30d6c2d7f0b4e31a!8m2!3d10.976081!4d79.3841585!16s%2Fg%2F11yw94kcc3"
              target="_blank"
              rel="noopener noreferrer"
              className="relative block rounded-xl overflow-hidden border border-zinc-800 h-64 shadow-2xl group cursor-pointer"
              id="clickable_google_map_container"
            >
              <iframe
                title="SalonCapp Kumbakonam HQ Location Map"
                src="https://maps.google.com/maps?q=Second%20Floor,%20Plot%20No%2024,%20Kumbakonam%20-%20Chennai%20Rd,%20Sethuraman%20Nagar,%20Melacavery,%20Kumbakonam,%20Tamil%20Nadu%20612002&t=&z=14&ie=UTF8&iwloc=&output=embed"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'grayscale(0.9) invert(0.9) contrast(1.1) brightness(0.8)', pointerEvents: 'none' }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              {/* Overlay with subtle blur/darken hover effect to capture clicks */}
              <div className="absolute inset-0 bg-transparent group-hover:bg-black/10 transition-colors duration-300 z-10" />
              
              {/* View Map Float Badge */}
              <div className="absolute bottom-3 right-3 bg-zinc-950/90 border border-[#FFD000]/30 hover:border-[#FFD000] text-white hover:text-[#FFD000] text-[10px] font-mono tracking-widest uppercase py-1.5 px-3 rounded-md backdrop-blur-md transition-all duration-300 shadow-xl z-20 flex items-center gap-1.5 pointer-events-none group-hover:bg-zinc-900 group-hover:scale-102">
                <span>View Map</span>
                <span className="text-[#FFD000]">↗</span>
              </div>
            </a>
          </div>

          {/* Form Intake Column */}
          <div className="lg:col-span-7">
            
            <div className="bg-[#1a1a1a]/40 border border-zinc-800/80 rounded-xl p-8 sm:p-10">
              <h3 className="font-display font-black text-white text-xl tracking-wider uppercase text-left mb-2">
                Send a Message
              </h3>
              <p className="text-zinc-500 font-light text-xs text-left mb-8">
                All inquiries reviewed table-side within standard operational shifts by Jawahars strategy leads.
              </p>

              <form onSubmit={handleSubmit} className="space-y-6 text-left" id="lead_contact_form">
                
                {validationError && (
                  <div className="p-4 bg-red-950/40 border border-red-500/30 text-red-200 rounded text-xs font-mono leading-normal">
                    ⚠️ {validationError}
                  </div>
                )}

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Name field */}
                  <div>
                    <label htmlFor="form_name" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Name <span className="text-[#FFD000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="form_name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Name"
                      className="w-full bg-[#121212] border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#FFD000] transition-colors font-display"
                    />
                  </div>

                  {/* Salon brand field */}
                  <div>
                    <label htmlFor="form_salonName" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Salon Name <span className="text-[#FFD000]">*</span>
                    </label>
                    <input
                      type="text"
                      id="form_salonName"
                      name="salonName"
                      value={formData.salonName}
                      onChange={handleChange}
                      placeholder="Salon Name"
                      className="w-full bg-[#121212] border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#FFD000] transition-colors font-display"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {/* Mobile Mobile input */}
                  <div>
                    <label htmlFor="form_mobile" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      Mobile Number <span className="text-[#FFD000]">*</span>
                    </label>
                    <input
                      type="tel"
                      id="form_mobile"
                      name="mobile"
                      value={formData.mobile}
                      onChange={handleChange}
                      placeholder="Mobile Number"
                      className="w-full bg-[#121212] border border-zinc-800 rounded p-3 text-sm text-white font-mono focus:outline-none focus:border-[#FFD000] transition-colors"
                    />
                  </div>

                  {/* City address input */}
                  <div>
                    <label htmlFor="form_city" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                      City
                    </label>
                    <input
                      type="text"
                      id="form_city"
                      name="city"
                      value={formData.city}
                      onChange={handleChange}
                      placeholder="City"
                      className="w-full bg-[#121212] border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#FFD000] transition-colors"
                    />
                  </div>
                </div>

                {/* Message block */}
                <div>
                  <label htmlFor="form_message" className="block text-xs font-semibold text-zinc-400 uppercase tracking-wider mb-2">
                    Your Requirement
                  </label>
                  <textarea
                    id="form_message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    placeholder="Your Requirement"
                    className="w-full bg-[#121212] border border-zinc-800 rounded p-3 text-sm text-white focus:outline-none focus:border-[#FFD000] transition-colors"
                  />
                </div>

                {/* Submit trigger */}
                <button
                  type="submit"
                  className="w-full py-4 rounded bg-[#FFD000] text-[#121212] font-black tracking-widest text-xs uppercase hover:bg-[#e6be00] hover:shadow-[0_0_20px_rgba(255,208,0,0.35)] transition-all cursor-pointer flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  Send Enquiry on WhatsApp
                </button>
              </form>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
