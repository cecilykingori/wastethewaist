export interface TeamMember {
  name: string;
  title: string;
  description: string;
  image?: string;
}

export interface Intervention {
  id: string;
  title: string;
  subtitle: string;
  description: string;
  features: string[];
  image?: string;
}

export interface Testimonial {
  id: string;
  content: string;
  author: string;
  rating?: number;
}

export interface ContactInfo {
  phones: string[];
  emails: string[];
}

export interface AppointmentSlot {
  id: string;
  date: Date;
  time: string;
  available: boolean;
}
