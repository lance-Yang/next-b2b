import { ProductDetailPage } from '../../../components/products/ProductDetailPage'
import { notFound } from 'next/navigation'

// 示例产品数据 - 实际项目中应该从API或数据库获取
const productData = {
  'outdoor-adventure-essentials': {
    id: 'outdoor-adventure-essentials',
    name: 'Outdoor Adventure Essentials',
    price: '$99.99',
    category: 'Outdoor Adventure',
    images: [
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Discover a perfect blend of quality craftsmanship and value with our latest product, designed to enhance your daily life. Carefully crafted using premium materials and innovative techniques, this remarkable item delivers exceptional performance while incorporating user-friendly features that ease operation for both beginners and experts, making it an ideal choice for homes, offices, and on-the-go lifestyles. The thoughtful design reflects a commitment to both functionality and style.`,
    specifications: {
      'Material': 'Premium synthetic leather with breathable mesh',
      'Sole': 'Non-slip rubber sole with enhanced grip',
      'Weight': 'Lightweight construction (280g per shoe)',
      'Sizes': 'Available in sizes 6-12 (US)',
      'Colors': 'White, Black, Gray',
      'Care': 'Hand wash with mild soap, air dry'
    },
    features: [
      'Ergonomically designed for all-day comfort',
      'Water-resistant materials',
      'Breathable mesh lining',
      'Durable construction',
      'Slip-resistant sole',
      'Lightweight design'
    ],
    relatedProducts: [
      {
        id: 'modern-pathway',
        name: 'Modern Pathway',
        category: 'Outdoor Adventure',
        image: '/products/modern-pathway.jpg',
        price: '$79.99'
      },
      {
        id: 'ultimate-sports-gear',
        name: 'Ultimate Sports Gear',
        category: 'Outdoor Adventure', 
        image: '/products/sports-gear.jpg',
        price: '$149.99'
      }
    ]
  },
  'hydration-nation': {
    id: 'hydration-nation',
    name: 'Hydration Nation',
    price: '$29.99',
    category: 'Health & Wellness',
    images: [
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Stay hydrated in style with our premium water bottle collection. Designed for active lifestyles, these bottles combine functionality with modern aesthetics. Perfect for gym sessions, outdoor adventures, or daily office use.`,
    specifications: {
      'Material': 'BPA-free Tritan plastic',
      'Capacity': '750ml / 25oz',
      'Weight': '180g when empty',
      'Temperature': 'Suitable for cold beverages',
      'Cleaning': 'Dishwasher safe (top rack)',
      'Lid': 'Leak-proof sport cap'
    },
    features: [
      'BPA-free and eco-friendly',
      'Leak-proof design',
      'Easy-grip ergonomic shape',
      'Wide mouth for easy filling',
      'Measurement markings',
      'Dishwasher safe'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      }
    ]
  },
  'active-lifestyle-gear': {
    id: 'active-lifestyle-gear',
    name: 'Active Lifestyle Gear',
    price: '$149.99',
    category: 'Fitness & Sports',
    images: [
      '/products/outdoor-shoes-3.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
    ],
    description: `Elevate your fitness journey with our comprehensive active lifestyle gear. Designed for versatility and performance, this gear adapts to various workout routines and outdoor activities.`,
    specifications: {
      'Material': 'High-performance synthetic blend',
      'Weight': 'Ultra-lightweight design',
      'Durability': 'Tested for 10,000+ usage cycles',
      'Versatility': 'Multi-sport compatibility',
      'Maintenance': 'Machine washable',
      'Warranty': '2-year manufacturer warranty'
    },
    features: [
      'Multi-sport compatibility',
      'Moisture-wicking technology',
      'Durable construction',
      'Ergonomic design',
      'Easy maintenance',
      'Stylish appearance'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      }
    ]
  },
  'modern-pathway': {
    id: 'modern-pathway',
    name: 'Modern Pathway',
    price: '$79.99',
    category: 'Urban Lifestyle',
    images: [
      '/products/modern-pathway.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
    ],
    description: `Navigate urban landscapes with confidence using our Modern Pathway collection. Combining contemporary design with practical functionality for the modern urbanite.`,
    specifications: {
      'Design': 'Contemporary urban styling',
      'Comfort': 'All-day wearability',
      'Durability': 'Urban-tested materials',
      'Style': 'Versatile for multiple occasions',
      'Size Range': 'Available in multiple sizes',
      'Care': 'Easy maintenance'
    },
    features: [
      'Contemporary design',
      'Urban-ready durability',
      'Comfortable fit',
      'Versatile styling',
      'Quality construction',
      'Modern aesthetics'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      }
    ]
  },
  'ultimate-sports-gear': {
    id: 'ultimate-sports-gear',
    name: 'Ultimate Sports Gear',
    price: '$149.99',
    category: 'Sport Gear',
    images: [
      '/products/sports-gear.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
    ],
    description: `Experience the pinnacle of athletic performance with our Ultimate Sports Gear. Designed for professionals and enthusiasts alike, this gear combines cutting-edge technology with superior comfort to enhance your sporting experience.`,
    specifications: {
      'Material': 'Advanced performance fabrics',
      'Weight': 'Ultra-lightweight construction',
      'Durability': 'Professional-grade materials',
      'Design': 'Ergonomic athletic fit',
      'Breathability': 'Advanced moisture-wicking',
      'Maintenance': 'Machine washable'
    },
    features: [
      'Professional-grade performance',
      'Advanced moisture-wicking',
      'Ergonomic design',
      'Lightweight construction',
      'Durable materials',
      'Enhanced breathability'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      },
      {
        id: 'elite-walker',
        name: 'Elite Walker',
        category: 'Sport Gear',
        image: '/products/outdoor-shoes-3.jpg',
        price: '$129.99'
      }
    ]
  },
  'cool-outdoor-attire': {
    id: 'cool-outdoor-attire',
    name: 'Cool Outdoor Attire',
    price: '$89.99',
    category: 'Outdoor Adventure',
    images: [
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Stay comfortable and stylish during your outdoor adventures with our Cool Outdoor Attire. Designed for various weather conditions, this attire offers both functionality and fashion.`,
    specifications: {
      'Material': 'Weather-resistant fabric blend',
      'Weight': 'Lightweight for all-day wear',
      'Protection': 'UV protection rating 50+',
      'Comfort': 'Breathable and quick-drying',
      'Fit': 'Relaxed outdoor fit',
      'Care': 'Machine washable'
    },
    features: [
      'Weather-resistant design',
      'UV protection',
      'Breathable fabric',
      'Quick-drying technology',
      'Multiple pockets',
      'Stylish outdoor design'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      },
      {
        id: 'dynamic-step',
        name: 'Dynamic Step',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-2.jpg',
        price: '$79.99'
      }
    ]
  },
  'trendy-fashion-hub': {
    id: 'trendy-fashion-hub',
    name: 'Trendy Fashion Hub',
    price: '$69.99',
    category: 'Trendy Apparel',
    images: [
      '/products/modern-pathway.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
    ],
    description: `Make a fashion statement with our Trendy Fashion Hub collection. Featuring the latest styles and trends, this apparel is perfect for those who want to stand out from the crowd.`,
    specifications: {
      'Material': 'Premium fashion fabrics',
      'Fit': 'Contemporary slim fit',
      'Style': 'Latest fashion trends',
      'Comfort': 'All-day comfort',
      'Care': 'Dry clean recommended',
      'Origin': 'Ethically sourced materials'
    },
    features: [
      'Latest fashion trends',
      'Premium quality materials',
      'Contemporary design',
      'Comfortable fit',
      'Versatile styling',
      'Ethically sourced'
    ],
    relatedProducts: [
      {
        id: 'modern-pathway',
        name: 'Modern Pathway',
        category: 'Urban Lifestyle',
        image: '/products/modern-pathway.jpg',
        price: '$79.99'
      },
      {
        id: 'street-spirit',
        name: 'Street Spirit',
        category: 'Trendy Apparel',
        image: '/products/outdoor-shoes-3.jpg',
        price: '$59.99'
      }
    ]
  },
  'style-meets-comfort': {
    id: 'style-meets-comfort',
    name: 'Style Meets Comfort',
    price: '$79.99',
    category: 'Fitness Essentials',
    images: [
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Discover the perfect balance of style and comfort with our collection. Designed for modern lifestyles, these pieces offer versatility without compromising on comfort or aesthetics.`,
    specifications: {
      'Material': 'Comfort-stretch fabric blend',
      'Fit': 'Comfortable regular fit',
      'Style': 'Versatile modern design',
      'Care': 'Easy care machine washable',
      'Durability': 'Reinforced stitching',
      'Breathability': 'Advanced air circulation'
    },
    features: [
      'Perfect style-comfort balance',
      'Versatile design',
      'Easy care maintenance',
      'Durable construction',
      'Breathable fabric',
      'Modern aesthetic'
    ],
    relatedProducts: [
      {
        id: 'active-lifestyle-gear',
        name: 'Active Lifestyle Gear',
        category: 'Fitness & Sports',
        image: '/products/outdoor-shoes-3.jpg',
        price: '$149.99'
      },
      {
        id: 'elite-walker',
        name: 'Elite Walker',
        category: 'Sport Gear',
        image: '/products/outdoor-shoes-3.jpg',
        price: '$129.99'
      }
    ]
  },
  'elite-walker': {
    id: 'elite-walker',
    name: 'Elite Walker',
    price: '$129.99',
    category: 'Sport Gear',
    images: [
      '/products/outdoor-shoes-3.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
    ],
    description: `Step into excellence with our Elite Walker collection. Designed for those who demand the best in comfort and performance, these shoes are perfect for both athletic activities and casual wear.`,
    specifications: {
      'Material': 'Premium synthetic and mesh',
      'Sole': 'Advanced cushioning technology',
      'Weight': 'Ultra-lightweight (260g per shoe)',
      'Sizes': 'Available in sizes 6-13 (US)',
      'Colors': 'Multiple color options',
      'Care': 'Easy clean surface'
    },
    features: [
      'Advanced cushioning',
      'Lightweight design',
      'Breathable mesh upper',
      'Durable construction',
      'Versatile styling',
      'Superior comfort'
    ],
    relatedProducts: [
      {
        id: 'ultimate-sports-gear',
        name: 'Ultimate Sports Gear',
        category: 'Sport Gear',
        image: '/products/sports-gear.jpg',
        price: '$149.99'
      },
      {
        id: 'style-meets-comfort',
        name: 'Style Meets Comfort',
        category: 'Fitness Essentials',
        image: '/products/outdoor-shoes-2.jpg',
        price: '$79.99'
      }
    ]
  },
  'dynamic-step': {
    id: 'dynamic-step',
    name: 'Dynamic Step',
    price: '$79.99',
    category: 'Outdoor Adventure',
    images: [
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Conquer any terrain with our Dynamic Step collection. Engineered for outdoor enthusiasts, these shoes provide the perfect combination of durability, comfort, and performance.`,
    specifications: {
      'Material': 'Rugged outdoor materials',
      'Sole': 'All-terrain grip technology',
      'Weight': 'Lightweight hiking design (300g per shoe)',
      'Sizes': 'Available in sizes 5-12 (US)',
      'Colors': 'Earth tone options',
      'Care': 'Water-resistant, easy clean'
    },
    features: [
      'All-terrain performance',
      'Water-resistant design',
      'Superior grip technology',
      'Lightweight construction',
      'Durable materials',
      'Outdoor styling'
    ],
    relatedProducts: [
      {
        id: 'outdoor-adventure-essentials',
        name: 'Outdoor Adventure Essentials',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$99.99'
      },
      {
        id: 'cool-outdoor-attire',
        name: 'Cool Outdoor Attire',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-2.jpg',
        price: '$89.99'
      }
    ]
  },
  'pure-motion': {
    id: 'pure-motion',
    name: 'Pure Motion',
    price: '$39.99',
    category: 'Nature Gear',
    images: [
      '/products/outdoor-shoes-2.jpg',
      '/products/outdoor-shoes-1.jpg',
      '/products/outdoor-shoes-3.jpg',
    ],
    description: `Experience freedom of movement with our Pure Motion collection. Designed for nature lovers and outdoor enthusiasts, this gear provides unmatched comfort and flexibility.`,
    specifications: {
      'Material': 'Flexible eco-friendly materials',
      'Weight': 'Ultra-lightweight design',
      'Flexibility': 'Maximum range of motion',
      'Sustainability': 'Recycled materials',
      'Care': 'Easy maintenance',
      'Design': 'Nature-inspired aesthetics'
    },
    features: [
      'Maximum flexibility',
      'Eco-friendly materials',
      'Lightweight construction',
      'Nature-inspired design',
      'Easy maintenance',
      'Sustainable production'
    ],
    relatedProducts: [
      {
        id: 'hydration-nation',
        name: 'Hydration Nation',
        category: 'Health & Wellness',
        image: '/products/outdoor-shoes-2.jpg',
        price: '$29.99'
      },
      {
        id: 'dynamic-step',
        name: 'Dynamic Step',
        category: 'Outdoor Adventure',
        image: '/products/outdoor-shoes-1.jpg',
        price: '$79.99'
      }
    ]
  },
  'street-spirit': {
    id: 'street-spirit',
    name: 'Street Spirit',
    price: '$59.99',
    category: 'Trendy Apparel',
    images: [
      '/products/outdoor-shoes-3.jpg',
      '/products/modern-pathway.jpg',
      '/products/outdoor-shoes-1.jpg',
    ],
    description: `Express your individuality with our Street Spirit collection. Inspired by urban culture and street fashion, these pieces are perfect for those who want to make a statement.`,
    specifications: {
      'Material': 'Urban street fabrics',
      'Fit': 'Contemporary street fit',
      'Style': 'Urban-inspired design',
      'Comfort': 'All-day wearability',
      'Care': 'Machine washable',
      'Origin': 'Street culture inspired'
    },
    features: [
      'Urban street style',
      'Contemporary design',
      'Comfortable fit',
      'Easy care',
      'Street culture inspired',
      'Versatile styling'
    ],
    relatedProducts: [
      {
        id: 'trendy-fashion-hub',
        name: 'Trendy Fashion Hub',
        category: 'Trendy Apparel',
        image: '/products/modern-pathway.jpg',
        price: '$69.99'
      },
      {
        id: 'modern-pathway',
        name: 'Modern Pathway',
        category: 'Urban Lifestyle',
        image: '/products/modern-pathway.jpg',
        price: '$79.99'
      }
    ]
  }
}

interface ProductDetailProps {
  params: Promise<{
    id: string
  }>
}

export default async function ProductDetail({ params }: ProductDetailProps) {
  const { id } = await params
  const product = productData[id as keyof typeof productData]
  
  if (!product) {
    notFound()
  }

  return <ProductDetailPage product={product} />
}

export function generateStaticParams() {
  return Object.keys(productData).map((id) => ({
    id,
  }))
}

export async function generateMetadata({ params }: ProductDetailProps) {
  const { id } = await params
  const product = productData[id as keyof typeof productData]
  
  if (!product) {
    return {
      title: 'Product Not Found',
    }
  }

  return {
    title: `${product.name} - B2B Solutions`,
    description: product.description.substring(0, 160),
    openGraph: {
      title: product.name,
      description: product.description.substring(0, 160),
      images: [product.images[0]],
    },
  }
}