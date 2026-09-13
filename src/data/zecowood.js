/**
 * ZecoWood — Site Data
 * All content arrays used to drive the UI with .map()
 */

export const navLinks = [
  { label: 'Home', href: '/' },
  { label: 'Process', href: '/process' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

import imgStrength from '../Asstes/Strangth.png';
import imgStability from '../Asstes/stability.png';
import imgDurability from '../Asstes/Durability.png';
import imgConsistency from '../Asstes/consistency.png';
import imgVersatility from '../Asstes/Versatility.png';

export const whyFeatures = [
  {
    number: '01',
    title: 'Strength',
    desc: 'Built to handle more. High load-bearing capacity for stronger, more reliable spaces.',
    tabs: ['PLYWOOD', 'BUILT STRONGER'],
    image: imgStrength,
    imgLabel: 'STRENGTH IN EVERY LAYER'
  },
  {
    number: '02',
    title: 'Stability',
    desc: 'Engineered to resist warping and bending under varying temperatures and humidity.',
    tabs: ['ENGINEERED', 'STAYS FLAT'],
    image: imgStability,
    imgLabel: 'STRUCTURAL STABILITY'
  },
  {
    number: '03',
    title: 'Durability',
    desc: 'Designed for longevity. Withstands daily wear and tear for applications that need to last.',
    tabs: ['LONG LASTING', 'RESILIENT'],
    image: imgDurability,
    imgLabel: 'ENGINEERED TO ENDURE'
  },
  {
    number: '04',
    title: 'Consistency',
    desc: 'Uniform density and quality across every sheet, eliminating natural wood defects.',
    tabs: ['UNIFORMITY', 'PRECISION'],
    image: imgConsistency,
    imgLabel: 'PREDICTABLE PERFORMANCE'
  },
  {
    number: '05',
    title: 'Versatility',
    desc: 'Adaptable for any project, from structural architecture to fine bespoke furniture.',
    tabs: ['ADAPTABLE', 'MULTI-USE'],
    image: imgVersatility,
    imgLabel: 'LIMITLESS POSSIBILITIES'
  },
];

import imgAppFurniture from '../Asstes/furniture.png';
import imgAppInteriors from '../Asstes/interior.png';
import imgAppArchitecture from '../Asstes/Architecture.png';
import imgAppCommercial from '../Asstes/commercial.png';

export const applications = [
  {
    title: 'Furniture',
    desc: 'Crafted for everyday living.',
    image: imgAppFurniture,
  },
  {
    title: 'Interiors',
    desc: 'Warmth for every detail.',
    image: imgAppInteriors,
    bgColor: '#ddd8fd',
  },
  {
    title: 'Architecture',
    desc: 'Strength for bigger visions.',
    image: imgAppArchitecture,
  },
  {
    title: 'Commercial',
    desc: 'Reliable for every scale.',
    image: imgAppCommercial,
  },
];

export const specifications = [
  { label: 'Thickness', value: '12mm — 40mm' },
  { label: 'Dimensions', value: '2440mm × 1220mm (Standard)' },
  { label: 'Core', value: 'High-density engineered timber' },
  { label: 'Density', value: '750 — 800 kg/m³' },
  { label: 'Strength', value: 'Structural Grade (Customisable)' },
  { label: 'Bonding', value: 'Exterior Grade / Moisture Resistant' },
  { label: 'Moisture Resistance', value: 'High (EN 314-2 Class 3)' },
  { label: 'Certifications', value: 'FSC®, PEFC, CE Marked' },
];

export const resources = [
  { label: 'Product Catalogue', href: '#' },
  { label: 'Technical Datasheet', href: '#' },
  { label: 'Certifications', href: '#' },
  { label: 'Application Guide', href: '#' },
];
