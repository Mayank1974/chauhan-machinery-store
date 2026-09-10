import React, { useEffect } from 'react';

interface Props {
  title: string;
  description?: string;
}

export const SEOHead: React.FC<Props> = ({ title, description }) => {
  useEffect(() => {
    document.title = `${title} | Chauhan Machinery Store Bhiwani`;
    
    if (description) {
      const metaDescription = document.querySelector('meta[name="description"]');
      if (metaDescription) {
        metaDescription.setAttribute('content', description);
      }
    }
  }, [title, description]);

  return null;
};
