import { Product, CategoryInfo } from '../types/product';

export const CATEGORIES: CategoryInfo[] = [
  {
    id: 'domestic',
    name: 'Domestic Atta Chakki Machines',
    shortName: 'Domestic Mills',
    description: 'Compact home cabinet flour mills with decorative front panels, 100% copper motors, ISI certification, and smooth castor wheels.'
  },
  {
    id: 'commercial-mini',
    name: 'Commercial / Compact Mini Mills',
    shortName: 'Tabletop Mini Mills',
    description: 'Stainless steel tabletop mini mills for small grocery shops, home bakeries, or high-capacity kitchen grinding.'
  },
  {
    id: 'wet-grinder-combo',
    name: 'Wet Grinder & Flour Mill Combos',
    shortName: 'Wet & Dry Combos',
    description: 'Multipurpose heavy-duty grinding machines with stainless steel hoppers designed for both wet pulse grinding and dry flour milling.'
  },
  {
    id: 'heavy-duty',
    name: 'Heavy Duty / Industrial Flour Mills',
    shortName: 'Industrial Atta Mills',
    description: 'Floor-standing high-output flour mills with sturdy stands and drums engineered for flour shops, dhabas, and commercial units.'
  },
  {
    id: 'dust-free',
    name: 'Dust-Free Commercial Flour Mills',
    shortName: 'Dust-Free Mills',
    description: 'ISO 9001 certified commercial units featuring continuous bag-filter dust collectors for clean, flour-dust-free store environments.'
  }
];

export const PRODUCTS: Product[] = [
  // 1. Domestic Atta Chakki Machines
  {
    id: 'signature-series-domestic',
    name: 'Signature Series Domestic Flour Mill',
    category: 'domestic',
    categoryName: 'Domestic Atta Chakki',
    hp: '1 HP / 1.25 HP Motor',
    shortDescription: 'Elegant black cabinet body with red Signature Series decorative front panel, ISI marked high-torque motor, and smooth castor wheels.',
    fullDescription: 'The Signature Series Domestic Flour Mill is designed for modern households requiring fresh, unadulterated flour daily. Features a heavy-duty cabinet body with protective finish, automated child-lock safety sensor, cold-forged stainless steel grinding chambers, and durable castor wheels. Operates quietly with low power consumption.',
    bodyMaterial: 'Heavy Duty Cabinet Body with Protective Coating',
    specialFeature: 'ISI Marked Motor, Automatic Operation & Castor Wheels',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'black-gold',
    image: '/images/products/signature-series.jpg',
    badges: ['ISI Marked', '100% Copper Winding', 'Child Safety Lock', '1 Year Warranty'],
    isFeatured: true,
    specifications: {
      motorHp: '1.25 HP High-Torque Motor',
      windingType: '100% Pure Copper Winding',
      bodyMaterial: 'Black Cabinet Body with Signature Front Panel',
      grindingCapacity: '8 to 10 kg/hr',
      powerSource: '220V / 50Hz Single Phase',
      wheelsMobility: 'Heavy Duty 360° Castor Wheels',
      certification: 'ISI Certified',
      warranty: '1 Year Doorstep Warranty in Bhiwani',
      suitableFor: 'Wheat, Besan, Rice, Maize, Bajra, Spices (Home Use)'
    }
  },
  {
    id: 'floral-design-domestic',
    name: 'Floral Design Domestic Flour Mill',
    category: 'domestic',
    categoryName: 'Domestic Atta Chakki',
    hp: '1.0 HP Motor',
    shortDescription: 'Vibrant pink/orange floral printed front panel, sleek black cabinet body, compact kitchen footprint, and integrated air cooling vent.',
    fullDescription: 'Bring style and health into your kitchen with the Floral Design Domestic Flour Mill. Featuring an eye-catching floral printed front panel and compact cabinet design, this machine grinds cold-pressed flour preserving essential wheat germ nutrients. Features an efficient motor cooling vent to maintain continuous grinding temperature.',
    bodyMaterial: 'Vibrant Floral Front Panel with Matte Black Cabinet',
    specialFeature: 'Integrated Motor Cooling Vent & Compact Footprint',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'floral-pink',
    image: '/images/products/floral-design.jpg',
    badges: ['Floral Aesthetic', 'Low Power Consumption', 'Nutrient Retaining', 'Easy Clean'],
    isFeatured: false,
    specifications: {
      motorHp: '1.0 HP Energy Efficient Motor',
      windingType: 'Copper Winding',
      bodyMaterial: 'Printed Front Panel & Steel Alloy Frame',
      grindingCapacity: '7 to 9 kg/hr',
      powerSource: '220V Single Phase',
      wheelsMobility: 'Built-in Castor Wheels',
      certification: 'Quality Standard Approved',
      warranty: '1 Year Warranty',
      suitableFor: 'Home Kitchens, Grains & Pulses'
    }
  },
  {
    id: 'rose-design-domestic-2hp',
    name: 'Rose Design 2 H.P. Domestic Flour Mill',
    category: 'domestic',
    categoryName: 'Domestic Atta Chakki',
    hp: '2.0 HP Heavy Duty Motor',
    shortDescription: 'High-power 2 H.P. 100% Copper Winding motor with rose-pattern decorative panel, dual-tone white & black body, and castor wheels.',
    fullDescription: 'Built for high-volume domestic needs or joint family kitchens, this 2 H.P. Rose Design model offers rapid grinding capability without heating the flour. Features a sturdy dual-tone white and black body accented with an elegant golden rose pattern. Equipped with heavy-load castor wheels and 100% Copper Winding heavy-duty motor.',
    bodyMaterial: 'Dual-Tone White & Black Cabinet with Rose Motif',
    specialFeature: '2 H.P. 100% Copper Winding Motor & High Output Rate',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'rose-pattern',
    image: '/images/products/rose-design.jpg',
    badges: ['2.0 HP High Output', '100% Copper Winding', 'Heavy Duty Wheels', 'Fast Grinding'],
    isFeatured: true,
    specifications: {
      motorHp: '2.0 HP Heavy-Duty Motor',
      windingType: '100% Pure Copper Winding Guarantee',
      bodyMaterial: 'Dual-Tone White & Black Body',
      grindingCapacity: '12 to 15 kg/hr',
      powerSource: '220V Single Phase',
      wheelsMobility: 'Heavy Duty Metal Castor Base',
      certification: 'ISI Standard Build',
      warranty: '1 Year Comprehensive Warranty',
      suitableFor: 'Large Families, Multigrain Atta, Hard Grains'
    }
  },

  // 2. Commercial / Compact Mini Mills
  {
    id: 'tiny-mill-1-37hp',
    name: 'Tiny Mill 1.37 HP Tabletop Flour Mill',
    category: 'commercial-mini',
    categoryName: 'Tabletop Mini Mill',
    hp: '1.37 HP Motor',
    shortDescription: 'All-stainless steel tabletop mini flour mill with funnel-top loading hopper, illuminated on/off switch, compact for shops or home business.',
    fullDescription: 'The Tiny Mill 1.37 HP is a compact commercial power house. Crafted with high-grade food-safe stainless steel, it features a stainless steel funnel hopper on top and an intuitive control panel with rocker switch. Designed for small grocery outlets, dhabas, or home entrepreneurs seeking fast countertop grain milling.',
    bodyMaterial: 'Food-Grade Stainless Steel Body & Funnel Hopper',
    specialFeature: 'Compact Tabletop Footprint & Convenient Funnel Loading',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'silver-tabletop',
    image: '/images/products/tiny-mill.jpg',
    badges: ['Stainless Steel', 'Tabletop Model', 'Commercial Grade', 'Compact Size'],
    isFeatured: true,
    specifications: {
      motorHp: '1.37 HP Commercial Grade Motor',
      windingType: 'Heavy Duty Copper Motor',
      bodyMaterial: 'Food Grade Stainless Steel',
      grindingCapacity: '10 to 14 kg/hr',
      powerSource: '220V / 50Hz Standard Socket',
      wheelsMobility: 'Non-slip Rubberized Base',
      certification: 'Commercial Safety Standard',
      warranty: '1 Year Warranty',
      suitableFor: 'Small Retail Shops, Dhabas, Home Business, Kitchens'
    }
  },

  // 3. Wet Grinder / Flour Mill Combo Units
  {
    id: 'newbasics-wet-dry-flour-mill',
    name: 'NewBasics Wet & Dry Flour Mill Combo',
    category: 'wet-grinder-combo',
    categoryName: 'Wet & Dry Combo Unit',
    hp: '1.5 HP Dual-Purpose Motor',
    shortDescription: 'Full stainless steel body with funnel-top hopper, mobile castor wheel base, easy on/off panel, engineered for both wet batters & dry flour.',
    fullDescription: 'The NewBasics Flour Mill Combo is a versatile solution for food businesses and commercial kitchens needing wet batter preparation (idli, dosa, pulses) alongside fine dry grain milling. Features a high-capacity stainless steel hopper, reinforced wheel base, and easy-clean discharge outlet.',
    bodyMaterial: 'High Finish Stainless Steel Body & Steel Frame',
    specialFeature: 'Dual Wet & Dry Grinding Capability + Wheeled Base',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'stainless-combo',
    image: '/images/products/newbasics-combo.jpg',
    badges: ['Wet & Dry Grinding', 'Stainless Steel', 'Mobile Castor Base', 'Multipurpose'],
    isFeatured: true,
    specifications: {
      motorHp: '1.5 HP Heavy Duty Dual-Purpose Motor',
      windingType: '100% Copper Heavy Winding',
      bodyMaterial: 'Stainless Steel Hopper & Casing',
      grindingCapacity: '12 to 18 kg/hr',
      powerSource: '220V / 50Hz Single Phase',
      wheelsMobility: 'Mobile 4-Wheel Base',
      certification: 'Food Grade Hygienic Certified',
      warranty: '1 Year Warranty',
      suitableFor: 'Wet Pulse Batter, Dry Wheat, Chana Dal, Spices, Restaurants'
    }
  },
  {
    id: 'tabletop-wet-flour-mill-1-5hp',
    name: '1.5 HP Tabletop Wet Flour Mill',
    category: 'wet-grinder-combo',
    categoryName: 'Wet & Dry Combo Unit',
    hp: '1.5 HP Motor',
    shortDescription: 'Countertop wet & dry flour mill with stainless steel funnel hopper and heavy-duty mobile castor base for effortless repositioning.',
    fullDescription: 'Designed for commercial kitchens, sweet shops, and small caterers. The 1.5 HP Tabletop Wet Flour Mill combines a compact upper footprint with a mobile frame. Grinds thick pastes, wet pulse batters, and dry grains with high torque and low maintenance overhead.',
    bodyMaterial: 'Full Stainless Steel Casing with Chrome Trim',
    specialFeature: 'Deep Funnel Stainless Hopper & Mobile Castor Base',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'stainless-combo',
    image: '/images/products/tabletop-wet-mill.png',
    badges: ['1.5 HP Heavy Motor', 'Stainless Steel', 'Castor Wheel Base', 'Commercial Ready'],
    isFeatured: false,
    specifications: {
      motorHp: '1.5 HP High Output Motor',
      windingType: 'Copper Winding Motor',
      bodyMaterial: 'Stainless Steel Body & Hopper',
      grindingCapacity: '14 to 16 kg/hr',
      powerSource: '220V Single Phase',
      wheelsMobility: 'Castor Wheel Frame',
      certification: 'Quality Checked',
      warranty: '1 Year Warranty',
      suitableFor: 'Batter Preparation, Wet Grains, Commercial Kitchens'
    }
  },

  // 4. Heavy Duty / Industrial Flour Mills
  {
    id: 'heavy-duty-3hp-floor-standing-mill',
    name: '3 H.P. Floor-Standing Atta Mill with Stand',
    category: 'heavy-duty',
    categoryName: 'Industrial Flour Mill',
    hp: '3.0 HP High Torque Motor',
    shortDescription: 'Heavy-duty stainless steel industrial flour mill on elevated stand with large hopper, outlet drum, and branded "Atta Maker" build for shops & dhabas.',
    fullDescription: 'Engineered for continuous commercial operation in flour shops, dhabas, canteens, and small flour mills. This 3 H.P. floor-standing mill features a massive stainless steel hopper loading system, elevated vibration-isolated heavy steel stand, and a high-volume flour collection drum outlet.',
    bodyMaterial: 'Reinforced Stainless Steel Casing & Heavy Iron Stand',
    specialFeature: '3 H.P. High Output Motor, Elevated Stand & Outlet Drum',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'industrial-red',
    image: '/images/products/heavy-duty-3hp.png',
    badges: ['3.0 HP Industrial', 'Atta Maker Branding', 'High Capacity Drum', 'Continuous Duty'],
    isFeatured: true,
    specifications: {
      motorHp: '3.0 HP High-Torque Heavy Duty Motor',
      windingType: '100% Copper Commercial Winding',
      bodyMaterial: 'Heavy Gauge Stainless Steel & Industrial Stand',
      grindingCapacity: '25 to 35 kg/hr',
      powerSource: '220V Single Phase / 415V Three Phase Available',
      wheelsMobility: 'Fixed Heavy Duty Base with Anti-Vibration Pads',
      certification: 'Industrial Grade Quality',
      warranty: '1 Year Commercial Warranty',
      suitableFor: 'Atta Shops, Dhabas, Hotels, Small Commercial Flour Mills'
    }
  },

  // 5. Dust-Free Commercial Flour Mill
  {
    id: 'bag-filter-dust-free-commercial-mill',
    name: 'Bag-Filter Dust-Free Commercial Flour Mill',
    category: 'dust-free',
    categoryName: 'Dust-Free Commercial Mill',
    hp: '2.0 HP / 3.0 HP Commercial Motor',
    shortDescription: 'ISO 9001 certified stainless steel body with cloth dust-collection bag and sealed collection bin. Keeps shop 100% flour dust free.',
    fullDescription: 'The ultimate clean-environment solution for retail flour stores and sweet shops. Features an integrated multi-layer fabric dust-bag filter system that traps 99.9% of airborne flour particles during continuous grinding. Comes with ISO 9001 certification, Genuine Quality badges, and high-efficiency flour collection bin.',
    bodyMaterial: 'High Polish Stainless Steel with Integrated Dust Filtration Tower',
    specialFeature: 'Bag-Filter Dust Collector & Sealed Collection Bin (ISO 9001 Certified)',
    pricePlaceholder: 'Price on request via WhatsApp',
    visualTheme: 'dustfree-blue',
    image: '/images/products/dust-free-mill.png',
    badges: ['ISO 9001 Certified', '100% Dust-Free', 'Buyer Choice', '100% Genuine Quality'],
    isFeatured: true,
    specifications: {
      motorHp: '2.0 HP or 3.0 HP Heavy Commercial Motor',
      windingType: '100% Pure Copper Heavy Winding',
      bodyMaterial: 'SS 304 Grade Body with Cloth Dust Bag Filter',
      grindingCapacity: '20 to 30 kg/hr',
      powerSource: '220V / 50Hz Heavy Duty Socket',
      wheelsMobility: 'Heavy Duty Lockable Castor Wheels',
      certification: 'ISO 9001 Certified Manufacturer',
      warranty: '1 Year On-Site Commercial Warranty in Bhiwani',
      suitableFor: 'Clean Retail Flour Stores, Malls, Supermarkets, Bakery Shops'
    }
  }
];
