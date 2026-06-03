import { AnimalCategory, ContactInfo, StatItem } from '@/types';

export const animalCategories: AnimalCategory[] = [
  {
    id: 'poultry',
    name: 'Poultry',
    slug: 'poultry',
    description: 'Our poultry farming program is one of our most successful initiatives, producing eggs and meat while creating sustainable employment for community members.',
    image: '/images/animals/poultry.jpg',
    details: [
      'Over 2,000 birds including layers and broilers',
      'Daily egg production serving local markets',
      'Employment for 15+ community members',
      'Training programs for aspiring poultry farmers',
      'Modern housing and feeding systems',
      'Veterinary care and disease prevention programs',
    ],
    stats: [
      { label: 'Birds', value: '2,000+' },
      { label: 'Daily Eggs', value: '500+' },
      { label: 'Employees', value: '15' },
      { label: 'Trainees', value: '50+' },
    ],
  },
  {
    id: 'cattle',
    name: 'Cattle',
    slug: 'cattle',
    description: 'Our cattle ranching program focuses on sustainable breeding and dairy production, providing affordable beef and milk to local communities.',
    image: '/images/animals/cattle.jpg',
    details: [
      'Herd of 100+ cattle including dairy and beef breeds',
      'Daily milk production for local distribution',
      'Breeding program to improve livestock quality',
      'Pasture management and rotational grazing',
      'Community training in animal husbandry',
      'Veterinary services for the entire herd',
    ],
    stats: [
      { label: 'Cattle', value: '100+' },
      { label: 'Daily Milk (L)', value: '200+' },
      { label: 'Ranch Area', value: '50 acres' },
      { label: 'Workers', value: '20' },
    ],
  },
  {
    id: 'goat-farming',
    name: 'Goat Farming',
    slug: 'goat-farming',
    description: 'Community-based goat farming empowers families with sustainable income through breeding, dairy production, and meat supply.',
    image: '/images/animals/goats.jpg',
    details: [
      'Distribution of breeding stock to 200+ families',
      'Community-managed breeding centers',
      'Goat milk and cheese production training',
      'Disease prevention and vaccination programs',
      'Market linkage support for farmers',
      'Cooperative formation and group marketing',
    ],
    stats: [
      { label: 'Goats', value: '500+' },
      { label: 'Families Served', value: '200+' },
      { label: 'Breeding Centers', value: '5' },
      { label: 'Communities', value: '12' },
    ],
  },
  {
    id: 'fish-farming',
    name: 'Fish Farming',
    slug: 'fish-farming',
    description: 'Our aquaculture project establishes sustainable fish ponds producing tilapia and catfish to meet local protein needs and create employment.',
    image: '/images/animals/fish.jpg',
    details: [
      '10 fish ponds across 3 communities',
      'Tilapia and catfish production',
      'Employment for 50+ community members',
      'Training in modern aquaculture techniques',
      'Feed production and management',
      'Water quality monitoring and management',
    ],
    stats: [
      { label: 'Fish Ponds', value: '10' },
      { label: 'Monthly Harvest (kg)', value: '1,000+' },
      { label: 'Employees', value: '50+' },
      { label: 'Communities', value: '3' },
    ],
  },
];

export const impactStats: StatItem[] = [
  {
    id: '1',
    value: 15000,
    suffix: '+',
    label: 'Lives Impacted',
    icon: 'heart',
  },
  {
    id: '2',
    value: 25,
    suffix: '+',
    label: 'Projects Completed',
    icon: 'target',
  },
  {
    id: '3',
    value: 30,
    suffix: '+',
    label: 'Communities Served',
    icon: 'users',
  },
  {
    id: '4',
    value: 500,
    suffix: '+',
    label: 'Jobs Created',
    icon: 'briefcase',
  },
];

export const contactInfo: ContactInfo = {
  phone: ['+1 (703) 832-6858'],
  email: ['Sugarpro2015@gmail.com'],
  address: 'Freetown, Sierra Leone, West Africa',
  mapUrl: 'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d253682.46525817557!2d-13.37221655!3d8.4656765!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xf04c5e2b569e579%3A0x1e9dcd187e11c1d!2sFreetown%2C%20Sierra%20Leone!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus',
  socials: {
    facebook: 'https://facebook.com/alhajiproductionhome',
    twitter: 'https://twitter.com/alhajiprodhome',
    instagram: 'https://instagram.com/alhajiproductionhome',
    youtube: 'https://youtube.com/@alhajiproductionhome',
  },
};
