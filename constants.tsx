import React from 'react';
import { Home, TrendingUp, Building2, HardHat, Compass, PenTool } from 'lucide-react';
import { Project, Service, TeamMember, Testimonial } from './types';

// Contact Information from PDF
export const CONTACT_INFO = {
  phone: "0961340004",
  buyProperty: "+880 1705-666658",
  consultancy: "+880 1937-785176",
  query: "+880 1745-997181",
  address: "House # 531/3, Road # 11, Baridhara DOHS, Dhaka-1206",
  email: "contact@dreamdalebd.com",
  website: "www.dreamdalebd.com"
};

// Projects Data from PDF - Expanded to 6 items per category for 2 rows layout
// Using high-quality Unsplash images for buildings/architecture
export const PROJECTS: Project[] = [
  // Upcoming
  {
    id: 'p1',
    title: 'Sky Height',
    location: 'Sector # 15/C, Uttara, Dhaka',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1582407947304-fd86f028f716?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+10 | 1600 sft | 3 Bed'
  },
  {
    id: 'p2',
    title: 'Dream Square',
    location: 'Sector # 10, Uttara, Dhaka',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1574362848149-11496d93a7c7?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+12 | 1800 sft | 4 Bed'
  },
   {
    id: 'p1-3',
    title: 'Lake View Residency',
    location: 'Bashundhara R/A, Dhaka',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1580587771525-78b9dba3b91d?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+14 | 2200 sft | 4 Bed'
  },
  {
    id: 'p1-4',
    title: 'Green Valley',
    location: 'Purbachal, Dhaka',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+9 | 1450 sft | 3 Bed'
  },
  {
    id: 'p1-5',
    title: 'Urban Heights',
    location: 'Gulshan 1, Dhaka',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+20 | 3000 sft | 5 Bed'
  },
  {
    id: 'p1-6',
    title: 'River Breeze',
    location: 'Uttara 3rd Phase',
    status: 'Upcoming',
    image: 'https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+10 | 1550 sft | 3 Bed'
  },

  // Ongoing
  {
    id: 'p3',
    title: 'Dream Dale Tower',
    location: 'Sector#10, Uttara, Dhaka',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+13 | 1900 sft | Delivery: June 2026'
  },
  {
    id: 'p4',
    title: 'Shonar Bangla Tower',
    location: 'Ranavola, Uttara, Dhaka',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1560184897-ae75f418493e?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+13 | 1750 sft | Delivery: Dec 2026'
  },
  {
    id: 'p3-3',
    title: 'City Center Heights',
    location: 'Dhanmondi 27',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+15 | 2100 sft | Delivery: Oct 2025'
  },
  {
    id: 'p3-4',
    title: 'Rose Garden',
    location: 'Mirpur DOHS',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1571939228382-b2f2b585ce15?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+8 | 1300 sft | Delivery: Jan 2026'
  },
  {
    id: 'p3-5',
    title: 'Metro Life',
    location: 'Agargaon, Dhaka',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+12 | 1650 sft | Delivery: Mar 2026'
  },
  {
    id: 'p3-6',
    title: 'Prime Tower',
    location: 'Banani',
    status: 'Ongoing',
    image: 'https://images.unsplash.com/photo-1523217582562-09d0def993a6?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+18 | 2500 sft | Delivery: Aug 2025'
  },

  // Completed
  {
    id: 'p5',
    title: 'DDL Islam Tower',
    location: 'Mirpur 60 fit main road',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80',
    specs: '2/6 Home | Chapra Mosjid'
  },
  {
    id: 'p6',
    title: 'Darul Karar',
    location: 'Dhaka',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600596542815-2a4d9f010196?auto=format&fit=crop&w=800&q=80',
    specs: 'Land 36 Katha | 13 Units'
  },
  {
    id: 'p5-3',
    title: 'Peace Heaven',
    location: 'Malibagh',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+9 | Handed over 2023'
  },
  {
    id: 'p5-4',
    title: 'Modern Living',
    location: 'Badda Link Road',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80',
    specs: 'B+G+10 | Handed over 2022'
  },
  {
    id: 'p5-5',
    title: 'Heritage Home',
    location: 'Old Dhaka',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600566753086-00f18fb6b3ea?auto=format&fit=crop&w=800&q=80',
    specs: 'G+6 | Handed over 2021'
  },
  {
    id: 'p5-6',
    title: 'Classic Villa',
    location: 'Khilgaon',
    status: 'Completed',
    image: 'https://images.unsplash.com/photo-1600573472591-ee6c563aaec9?auto=format&fit=crop&w=800&q=80',
    specs: 'G+8 | Handed over 2020'
  }
];

// Services
export const SERVICES: Service[] = [
  {
    id: 's1',
    title: 'Residential Real Estate',
    description: 'Discover your dream home effortlessly. Explore diverse properties tailored to your lifestyle.',
    icon: <Home className="w-8 h-8 text-accent" />
  },
  {
    id: 's2',
    title: 'Commercial Real Estate',
    description: 'Sell confidently with expert guidance and effective strategies showcasing your property.',
    icon: <Building2 className="w-8 h-8 text-accent" />
  },
  {
    id: 's3',
    title: 'Investment in Property',
    description: 'Discover your perfect rental or investment opportunity with our diverse variety of listings.',
    icon: <TrendingUp className="w-8 h-8 text-accent" />
  }
];

// Why Choose Us
export const FEATURES = [
  { title: "Design & Architectural Experts", icon: <PenTool /> },
  { title: "Engineering & Site Professionals", icon: <Compass /> },
  { title: "Skilled Civil Work & Construction", icon: <HardHat /> },
  { title: "Electrical and Plumbing Constructions", icon: <Building2 /> }
];

// Team Data
export const TEAM: TeamMember[] = [
  { id: 't1', name: 'Mohammad Ibrahim Khalil', role: 'Chairman', image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=300&q=80' },
  { id: 't2', name: 'Khalid Mahmud Abdullah', role: 'Vice Chairman', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=300&q=80' },
  { id: 't3', name: 'Momena Akhter Seuli', role: 'Managing Director', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=300&q=80' },
  { id: 't4', name: 'Engineer Akash', role: 'Head Engineer', image: 'https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?auto=format&fit=crop&w=300&q=80' },
];

export const TESTIMONIALS: Testimonial[] = [
  { id: 'tm1', name: 'Daniel Miller', role: 'Home Owner', text: 'Thanks to the expertise and guidance of this real estate team, I am now the proud owner of my dream home.', rating: 5 },
  { id: 'tm2', name: 'Jennifer Lee', role: 'Investor', text: 'From the initial consultation to closing day, the real estate team went above and beyond. Their professionalism made the process seamless.', rating: 5 },
  { id: 'tm3', name: 'Masud Rana', role: 'Client', text: 'Excellent construction quality and timely handover. Highly recommended for anyone looking for reliability.', rating: 5 },
];

export const AFFILIATIONS = [
  "KSRM", "GPH Ispat", "Akij Ready Concrete", "Crown Ready Mix", "Supercrete Cement", "Prime Bank", "PUBALI Bank", "Stella", "Khadim Ceramic"
];