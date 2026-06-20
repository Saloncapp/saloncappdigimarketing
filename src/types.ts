export interface VideoItem {
  id: string;
  title: string;
  url: string;
  thumbnail: string;
  aspectRatio: 'vertical' | 'landscape';
  type: 'salon' | 'ai';
  category?: string;
}

export interface PricingPackage {
  name: string;
  price: string;
  period: string;
  isPopular: boolean;
  features: string[];
}

export interface TestimonialItem {
  clientName: string;
  salonName: string;
  review: string;
  avatarInitials: string;
}

export interface LeadSubmission {
  name: string;
  salonName: string;
  mobile: string;
  city: string;
  message: string;
}
