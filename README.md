# Chauhan Machinery Store - Business Website

A production-ready, mobile-first business website built for **Chauhan Machinery Store**, an authorized flour mill & atta chakki machine dealer based in Naya Bazar, Bhiwani, Haryana, India.

---

## 🌟 Tech Stack

- **React 18 + TypeScript** (Vite)
- **Tailwind CSS** (Industrial dark steel, slate, and golden wheat theme)
- **Lucide React** (High-quality modern icon set)
- **React Router DOM** (Single Page Application routing with deep links)
- **WhatsApp Web Integration** (Automated pre-filled inquiry messages)

---

## 🚀 How to Run Locally

1. **Clone / Open Directory**:
   ```bash
   cd "Chauhan Machinery Store"
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Local Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build Static Production Bundle**:
   ```bash
   npm run build
   ```
   The production files will be output to the `dist/` directory, ready to deploy to Netlify, Vercel, GitHub Pages, or Hostinger static hosting.

---

## 📱 How to Update Store Details & WhatsApp Number

### 1. Centralized Contact & Business Info
All contact details, store address, phone numbers, email, and Google Maps links are stored in:
📁 `src/config/siteConfig.ts`

```typescript
export const SITE_CONFIG = {
  businessName: "Chauhan Machinery Store",
  whatsappNumber: "+919812012345", // <-- Change your WhatsApp number here
  whatsappDisplayNumber: "+91 98120 12345",
  phoneNumber: "+91 98120 12345",
  email: "chauhanmachinery.bhiwani@gmail.com",
  // ...
};
```

### 2. Updating Products & Machinery Data
All 5 machinery categories and product models are managed in:
📁 `src/data/products.ts`

To add a new machine, simply add a new object to the `PRODUCTS` array in `products.ts` with specs, badges, and HP details.

### 3. Replacing Logos & Store Photos
- **Logo Placeholder**: Located in `src/components/Navbar.tsx` and `src/components/Footer.tsx`. Swap the SVG icon with `<img src="/your-logo.png" alt="Chauhan Machinery Logo" />`.
- **Product Photos**: The website currently uses responsive vector illustrations (`src/components/MachineryIllustration.tsx`). To use real photos, add your photos to the `public/` directory and update the image paths in `src/data/products.ts`.

---

## 🛍️ Included Machinery Categories & Models

1. **Domestic Atta Chakki Machines** (Cabinet design, wheels, ISI motor)
   - Signature Series Domestic Flour Mill (1.25 HP)
   - Floral Design Domestic Flour Mill (1.0 HP)
   - Rose Design 2 H.P. Domestic Flour Mill (2.0 HP, 100% Copper Winding)
2. **Commercial / Compact Mini Mills**
   - Tiny Mill 1.37 HP Tabletop Flour Mill (Stainless Steel)
3. **Wet Grinder / Flour Mill Combo Units**
   - NewBasics Wet & Dry Flour Mill Combo (1.5 HP)
   - 1.5 HP Tabletop Wet Flour Mill
4. **Heavy Duty / Industrial Flour Mills**
   - 3 H.P. Floor-Standing Atta Mill with Stand & Outlet Drum ("Atta Maker")
5. **Dust-Free Commercial Flour Mill**
   - Bag-Filter Dust-Free Commercial Flour Mill (ISO 9001 Certified)

---

## 📍 Store Location
- **Address**: Naya Bazar, Near Main Grain Market, Bhiwani, Haryana 127021, India
- **Dealer**: Chauhan Machinery Store
