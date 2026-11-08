import { getAsset } from '../assets/assetUrl';

export const PRODUCT_DETAILS = {
  'metal-cards-website': {
    slug: 'metal-cards-website',
    aliasSlug: 'metal-business-cards',
    title: 'Metal Cards',
    category: 'Metal Cards',
    description: 'Premium metal cards crafted with a refined finish and lasting presence, made for organizations that want their identity to stand out.',
    heroImage: getAsset('product-detail-metal-hero.png'),
    stats: [
      { value: '100%', label: 'Premium finish' },
      { value: '2x', label: 'More distinctive' },
      { value: '100%', label: 'Custom made' }
    ],
    finishes: [
      {
        eyebrow: 'Metal Matte',
        headline: 'Premium Finish',
        description: 'Premium metal cards that turn everyday identification into a distinctive expression of your brand.',
        images: [
          getAsset('product-detail-metal-matte-1.jpg'),
          getAsset('product-detail-metal-matte-2.jpg')
        ]
      },
      {
        eyebrow: 'Gun metal',
        headline: 'Bold by design. Refined by nature.',
        description: 'A sleek gun metal finish that gives your organization’s identity a distinctive, professional presence built to stand out.',
        images: [
          getAsset('product-detail-metal-gunmetal-1.jpg'),
          getAsset('product-detail-metal-gunmetal-2.jpg')
        ]
      },
      {
        eyebrow: 'Titanium Steel',
        headline: 'Strength with a refined edge.',
        description: 'A sophisticated titanium steel finish that gives your organization’s identity a durable, modern presence built to be remembered.',
        images: [
          getAsset('product-detail-metal-titanium-1.jpg'),
          getAsset('product-detail-metal-titanium-2.jpg')
        ]
      }
    ],
    nextProject: {
      slug: 'plastic-cards',
      title: 'Corporate ID',
      description: 'Reliable, versatile cards designed for everyday staff, access, and organizational needs.',
      image: getAsset('product-detail-corporate-hero.png'),
      stats: [
        { value: '100%', label: 'Brand ready' },
        { value: '4+', label: 'Card applications' },
        { value: 'Full', label: 'Custom made' }
      ]
    }
  },

  'plastic-cards': {
    slug: 'plastic-cards',
    aliasSlug: 'corporate-id',
    title: 'Corporate ID',
    category: 'Corporate ID',
    description: 'Versatile plastic cards designed to carry your organization’s identity with clarity, consistency, and a polished finish.',
    heroImage: getAsset('product-detail-corporate-hero.png'),
    stats: [
      { value: '100%', label: 'Brand ready' },
      { value: '4+', label: 'Card applications' },
      { value: 'Full', label: 'Custom made' }
    ],
    finishes: [
      {
        eyebrow: 'Egg-shell',
        headline: 'Soft finish. Distinctive identity.',
        description: 'A smooth, understated finish that gives your organization’s cards a sophisticated look while keeping your brand identity clean and professional.',
        images: [
          getAsset('product-detail-corporate-eggshell-1.jpg'),
          getAsset('product-detail-corporate-eggshell-2.jpg')
        ]
      },
      {
        eyebrow: 'Frosted translux',
        headline: 'Subtle transparency. Standout identity.',
        description: 'A distinctive frosted finish that blends modern aesthetics with professional clarity, giving your organization’s cards a unique visual presence.',
        images: [
          getAsset('product-detail-corporate-frosted-1.jpg'),
          getAsset('product-detail-corporate-frosted-2.jpg')
        ]
      },
      {
        eyebrow: 'nubis',
        headline: 'Distinctive texture. Effortless sophistication.',
        description: 'A refined material finish that gives your organization’s cards a unique tactile feel and a polished identity that stands apart.',
        images: [
          getAsset('product-detail-corporate-nubis-1.jpg')
        ]
      }
    ],
    nextProject: {
      slug: 'smart-cards',
      title: 'Access & Smart Cards',
      description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
      image: getAsset('product-detail-smart-hero.jpg'),
      stats: [
        { value: '1-Tap', label: 'Easy interaction' },
        { value: '100%', label: 'Brand customized' },
        { value: '100%', label: 'Digital access' }
      ]
    }
  },

  'smart-cards': {
    slug: 'smart-cards',
    aliasSlug: 'access-smart-cards',
    title: 'Access & Smart Cards',
    category: 'Access & Smart Cards',
    description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
    heroImage: getAsset('product-detail-smart-hero.jpg'),
    stats: [
      { value: '1-Tap', label: 'Easy interaction' },
      { value: '100%', label: 'Brand customized' },
      { value: '100%', label: 'Digital access' }
    ],
    finishes: [
      {
        eyebrow: 'Black matte metal NFC business card',
        headline: 'Tap & Connect.',
        description: 'A premium black matte metal card that puts your brand forward while making it easy to share your professional identity with a simple tap.',
        images: [
          getAsset('product-detail-smart-black-nfc-1.png'),
          getAsset('product-detail-smart-black-nfc-2.png')
        ]
      },
      {
        eyebrow: 'De-titan smart card (3 in 1 multifunctional card)',
        headline: 'Brand research',
        description: 'The De-titan Card is a premium 3-in-1 multifunctional smart card designed for modern professionals and organizations. Combining ID card, access card, and smart business card functionalities, this innovative solution streamlines identity and connectivity.',
        images: [
          getAsset('product-detail-smart-detitan-1.jpeg')
        ]
      }
    ],
    nextProject: {
      slug: 'accessories',
      title: 'Accessories',
      description: 'Complete your identity system with premium accessories designed for everyday use.',
      image: getAsset('product-detail-accessories-hero.jpg'),
      stats: [
        { value: '5+', label: 'Accessory options' },
        { value: '100%', label: 'Brand matched' },
        { value: 'Built', label: 'For daily use' }
      ]
    }
  },

  'accessories': {
    slug: 'accessories',
    aliasSlug: 'accessories',
    title: 'Accessories',
    category: 'Accessories',
    description: 'Complete your identity system with premium accessories designed for everyday use.',
    heroImage: getAsset('product-detail-accessories-hero.jpg'),
    stats: [
      { value: '5+', label: 'Accessory options' },
      { value: '100%', label: 'Brand matched' },
      { value: 'Built', label: 'For daily use' }
    ],
    finishes: [
      {
        eyebrow: 'Card Holder & Lanyard',
        headline: 'Bespoke Card Holders',
        description: 'Carry your identity in style. Xtreme Cardz card holders and lanyards combine durability, comfort, and premium finishes to keep your ID secure while complementing your brand’s professional look.',
        images: [
          getAsset('product-detail-accessories-holder-1.jpg'),
          getAsset('product-detail-accessories-holder-2.jpg'),
          getAsset('product-detail-accessories-holder-3.jpg'),
          getAsset('product-detail-accessories-holder-4.jpg')
        ]
      }
    ],
    nextProject: {
      slug: 'corporate-id',
      title: 'Membership & Special Purpose Cards',
      description: 'Technology-enabled cards that bring convenience, connectivity and modern identity experiences together.',
      image: getAsset('product-detail-membership-hero.png'),
      stats: [
        { value: '+70%', label: 'Sleekness' },
        { value: '1 unified', label: 'Identity package' },
        { value: '7days', label: 'Delivery time' }
      ]
    }
  },

  'corporate-id': {
    slug: 'corporate-id',
    aliasSlug: 'membership-special',
    title: 'Membership Cards',
    category: 'Membership Cards',
    description: 'Premium corporate card designed to give your organization the correct representation of what you stand for.',
    heroImage: getAsset('product-detail-membership-hero.png'),
    stats: [
      { value: '+70%', label: 'Sleekness' },
      { value: '1 unified', label: 'Identity package' },
      { value: '7days', label: 'Delivery time' }
    ],
    finishes: [
      {
        eyebrow: 'VIP Card',
        headline: 'Elegant Finish',
        description: 'Make every pass feel exclusive. Xtreme Cardz VIP cards combine premium materials with refined finishes to give your members, guests, and special clients a card that reflects their status and makes every interaction memorable.',
        images: [
          getAsset('product-detail-membership-vip-1.png'),
          getAsset('product-detail-membership-vip-2.png')
        ]
      },
      {
        eyebrow: 'Event & special purpose card',
        headline: 'Memorable Touch',
        description: 'Make every occasion memorable with cards designed for the moment. From exclusive event passes to special access cards, Xtreme Cardz delivers premium finishes that elevate your event and leave a lasting impression.',
        images: [
          getAsset('product-detail-membership-event-1.jpeg'),
          getAsset('product-detail-membership-event-2.jpg')
        ]
      }
    ],
    nextProject: {
      slug: 'metal-cards-website',
      title: 'Metal Business Cards',
      description: 'Built for professionals and brands that want their identity to make a lasting impression.',
      image: getAsset('product-detail-metal-hero.png'),
      stats: [
        { value: '100%', label: 'Premium finish' },
        { value: '2x', label: 'More distinctive' },
        { value: '100%', label: 'Custom made' }
      ]
    }
  }
};

export function getProductBySlug(slug) {
  if (!slug) return null;
  const cleanSlug = slug.toLowerCase().trim();
  if (PRODUCT_DETAILS[cleanSlug]) return PRODUCT_DETAILS[cleanSlug];

  // Try alias mapping
  for (const item of Object.values(PRODUCT_DETAILS)) {
    if (item.aliasSlug.toLowerCase() === cleanSlug) return item;
  }
  return null;
}

