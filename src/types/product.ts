export type ProductCategory = 
  | 'domestic'
  | 'commercial-mini'
  | 'wet-grinder-combo'
  | 'heavy-duty'
  | 'dust-free';

export interface CategoryInfo {
  id: ProductCategory;
  name: string;
  shortName: string;
  description: string;
}

export interface ProductSpecification {
  motorHp: string;
  windingType: string;
  bodyMaterial: string;
  grindingCapacity: string;
  powerSource: string;
  wheelsMobility?: string;
  certification?: string;
  warranty: string;
  suitableFor: string;
}

export interface Product {
  id: string;
  name: string;
  category: ProductCategory;
  categoryName: string;
  hp: string;
  shortDescription: string;
  fullDescription: string;
  bodyMaterial: string;
  specialFeature: string;
  specifications: ProductSpecification;
  badges: string[];
  isFeatured?: boolean;
  pricePlaceholder: string;
  image: string; // Real product image path
  visualTheme?: 'black-gold' | 'floral-pink' | 'rose-pattern' | 'silver-tabletop' | 'stainless-combo' | 'industrial-red' | 'dustfree-blue';
}
