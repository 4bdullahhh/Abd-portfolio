import React from 'react';

export interface NavItem {
  label: string;
  href: string;
}

export interface Skill {
  name: string;
  level: number;
  icon: React.ReactNode;
  category: 'Tech' | 'Marketing' | 'Business';
}

export interface ExperienceItem {
  role: string;
  company: string;
  period: string;
  description: string;
  tags: string[];
}

export interface Quote {
  text: string;
  author: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
  isError?: boolean;
}