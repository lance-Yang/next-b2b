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