import React from 'react';

export interface Project {
  id: string;
  title: string;
  location: string;
  status: 'Upcoming' | 'Ongoing' | 'Completed';
  image: string;
  specs: string; // e.g., "3 Bed | 2 Bath"
}

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}

export interface TeamMember {
  id: string;
  name: string;
  role: string;
  image: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  text: string;
  rating: number;
}