import { TeamMember, TimelineEvent } from '@/types';

export const teamMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Alhaji Mohamed Kamara',
    role: 'Founder & CEO',
    image: '/images/team/founder.jpg',
    bio: 'A visionary leader and philanthropist dedicated to transforming communities through sustainable development, clean water initiatives, and agricultural empowerment across West Africa.',
    socials: {
      facebook: '#',
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '2',
    name: 'Fatmata Sesay',
    role: 'Director of Operations',
    image: '/images/team/member2.jpg',
    bio: 'Overseeing daily operations and ensuring all projects are executed with excellence, efficiency, and maximum community impact.',
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
  {
    id: '3',
    name: 'Ibrahim Conteh',
    role: 'Head of Agriculture',
    image: '/images/team/member3.jpg',
    bio: 'Leading our animal rearing and agricultural programs with deep expertise in sustainable farming practices and livestock management.',
    socials: {
      twitter: '#',
      linkedin: '#',
    },
  },
  {
    id: '4',
    name: 'Aminata Bangura',
    role: 'Community Relations Manager',
    image: '/images/team/member4.jpg',
    bio: 'Building bridges between Alhaji Production Home and the communities we serve, ensuring every project meets real needs.',
    socials: {
      facebook: '#',
      twitter: '#',
    },
  },
  {
    id: '5',
    name: 'Mohamed Turay',
    role: 'Water Factory Manager',
    image: '/images/team/member5.jpg',
    bio: 'Managing the boat and water factory project, ensuring clean water production meets the highest quality standards.',
    socials: {
      linkedin: '#',
    },
  },
  {
    id: '6',
    name: 'Mariama Kargbo',
    role: 'Finance & Administration',
    image: '/images/team/member6.jpg',
    bio: 'Ensuring transparent financial management and administrative excellence across all our programs and initiatives.',
    socials: {
      facebook: '#',
      linkedin: '#',
    },
  },
];

export const timeline: TimelineEvent[] = [
  {
    year: '2015',
    title: 'Founded with a Vision',
    description: 'Alhaji Production Home was established with a mission to uplift communities through sustainable development and philanthropy.',
  },
  {
    year: '2016',
    title: 'First Charity Initiative',
    description: 'Launched our first major charity program, providing food, clothing, and educational materials to underserved communities.',
  },
  {
    year: '2018',
    title: 'Animal Rearing Program',
    description: 'Started our animal rearing program with poultry and goat farming, creating sustainable livelihoods for local families.',
  },
  {
    year: '2020',
    title: 'Water Factory Project',
    description: 'Broke ground on the boat and water factory project, aiming to provide clean, affordable drinking water to the region.',
  },
  {
    year: '2022',
    title: 'Expanded Community Impact',
    description: 'Reached over 10,000 beneficiaries across multiple communities with our combined charity and development programs.',
  },
  {
    year: '2024',
    title: 'Growing Stronger',
    description: 'Expanded animal rearing to include cattle and fish farming, while scaling our water production capacity significantly.',
  },
];

export const mission = "To empower communities through sustainable development, clean water access, agricultural innovation, and philanthropic initiatives that create lasting positive change.";

export const vision = "A future where every community has access to clean water, sustainable food sources, and the resources needed to thrive with dignity and self-sufficiency.";
