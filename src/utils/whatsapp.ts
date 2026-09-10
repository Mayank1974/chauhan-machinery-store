import { SITE_CONFIG } from '../config/siteConfig';

/**
 * Clean phone number for WhatsApp wa.me API link
 */
export function getCleanWhatsAppNumber(): string {
  return SITE_CONFIG.whatsappNumber.replace(/[^0-9]/g, '');
}

/**
 * Generate direct pre-filled WhatsApp enquiry link for a product card or product detail page
 */
export function generateProductWhatsAppLink(productName: string, hp: string): string {
  const number = getCleanWhatsAppNumber();
  const text = `Hi Chauhan Machinery Store, I am interested in "${productName}" (${hp}). Please share the latest price, availability, and technical specifications.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Generate general WhatsApp enquiry link for floating widget or header contact button
 */
export function generateGeneralWhatsAppLink(customPrompt?: string): string {
  const number = getCleanWhatsAppNumber();
  const text = customPrompt || `Hi Chauhan Machinery Store, I am looking for a flour mill / atta chakki machine in Bhiwani. Please assist me with catalogue and price list.`;
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}

/**
 * Format custom user inquiry form into a WhatsApp message link
 */
export function formatFormToWhatsAppLink(formData: {
  name: string;
  phone: string;
  category: string;
  message: string;
}): string {
  const number = getCleanWhatsAppNumber();
  const text = `*New Machinery Inquiry from Website*\n\n` +
    `👤 *Name:* ${formData.name}\n` +
    `📞 *Phone:* ${formData.phone}\n` +
    `⚙️ *Category Interest:* ${formData.category || 'General Inquiry'}\n` +
    `💬 *Message:* ${formData.message}\n\n` +
    `Location: Bhiwani / Nearby Area`;
  
  return `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
}
