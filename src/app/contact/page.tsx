import Link from "next/link";
import Image from "next/image";

import {
  AnimatedTitle,
  AnimatedNav,
  AnimatedCard as AnimatedProductCard,
  AnimatedLinkArea,
} from "@/components/ui/animations";
import ContactForm from "@/components/contact/ContactForm";
import SectionTitle from "@/components/contact/SectionTitle";

// 类型定义
type ContactInfo = {
  email: string;
  phone: string;
  address: string;
};

type SocialLink = {
  name: string;
  iconName: string;
  href: string;
  color: string;
};

type Product = {
  id: string;
  name: string;
  category: string;
  image: string;
  bgColor: string;
};

// 页面元数据
export const metadata = {
  title: "Contact Us | Get in Touch with Our Team",
  description:
    "Contact our expert team for business solutions, support, or partnership opportunities. Multiple ways to reach us including phone, email, and office visits.",
  keywords:
    "contact us, business support, customer service, partnership, office location, get in touch",
  openGraph: {
    title: "Contact Us | Get in Touch with Our Team",
    description:
      "Contact our expert team for business solutions, support, or partnership opportunities.",
    type: "website",
  },
};

// 联系信息
const contactInfo: ContactInfo = {
  email: "kefu308@gmail.com",
  phone: "+86-17801460534",
  address: "No. 2875 Beichen West Road, Shaoxing, Zhejiang, China",
};

// 社交媒体链接
const socialLinks: SocialLink[] = [
  { name: "Facebook", iconName: "Facebook", href: "#", color: "text-blue-600" },
  { name: "Twitter", iconName: "Twitter", href: "#", color: "text-blue-400" },
  {
    name: "Instagram",
    iconName: "Instagram",
    href: "#",
    color: "text-pink-600",
  },
  { name: "Youtube", iconName: "Youtube", href: "#", color: "text-red-600" },
  { name: "LinkedIn", iconName: "LinkedIn", href: "#", color: "text-blue-700" },
  {
    name: "WhatsApp",
    iconName: "WhatsApp",
    href: "#",
    color: "text-green-600",
  },
];

// 推荐产品
const recommendedProducts: Product[] = [
  {
    id: "outdoor-adventure-essentials",
    name: "Outdoor Adventure Essentials",
    category: "Outdoor Adventure",
    image: "/home/1750126326881.webp",
    bgColor: "bg-gray-600",
  },
  {
    id: "active-lifestyle-gear",
    name: "Active Lifestyle Gear",
    category: "Fitness Essentials",
    image: "/home/1750126330116.webp",
    bgColor: "bg-gray-900",
  },
  {
    id: "style-meets-comfort",
    name: "Style Meets Comfort",
    category: "Trendy Apparel",
    image: "/home/1750126333491.webp",
    bgColor: "bg-gray-500",
  },
  {
    id: "elite-walker",
    name: "Elite Walker Elite Walker",
    category: "Sport Gear",
    image: "/home/1750126326881.webp",
    bgColor: "bg-pink-400",
  },
];

export default function ContactPage() {
  const containerStyles = "container mx-auto px-4 sm:px-6 lg:px-8";

  // 辅助组件
  const Hero = () => (
    <div className="relative bg-gradient-to-r from-orange-200/50 to-orange-100/50 py-20 overflow-hidden">
      {/* 背景图片 */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-gray-600/20" />
        <div className="w-full h-full bg-gradient-to-r from-orange-100/80 to-orange-50/60" />
      </div>

      <div className={`${containerStyles} relative z-10`}>
        <div className="text-center">
          <AnimatedTitle className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Contact Us
          </AnimatedTitle>

          {/* 面包屑导航 */}
          <AnimatedNav className="flex items-center justify-center space-x-2 text-sm text-gray-600">
            <Link
              href="/"
              className="hover:text-orange-600 transition-colors"
            >
              Home
            </Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Contact Us</span>
          </AnimatedNav>
        </div>
      </div>
    </div>
  );

  const ProductCard = ({ product }: { product: Product }) => (
    <AnimatedProductCard
      key={product.id}
      index={0}
      className="group"
    >
      <Link href={`/products/${product.id}`}>
        <div className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2">
          {/* 产品图片 */}
          <div className="relative aspect-square overflow-hidden">
            <div className={`absolute inset-0 ${product.bgColor} flex items-center justify-center`}>
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-700"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
              />
            </div>
          </div>

          {/* 产品信息 */}
          <div className="p-6 text-center">
            <h3 className="text-lg font-semibold text-gray-900 group-hover:text-orange-600 transition-colors duration-300 mb-2">
              {product.name}
            </h3>
            <p className="text-gray-500 text-sm">
              {product.category}
            </p>
          </div>
        </div>
      </Link>
    </AnimatedProductCard>
  );

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero区域 */}
      <Hero />

      {/* 主要内容区域 */}
      <div className="bg-brand-light py-16">
        <div className={containerStyles}>
          {/* Get In Touch 标题 */}
          <div className="text-center mb-12">
            <SectionTitle
              title="Get In Touch"
              subtitle="We're here to help and answer any question you might have"
            />
          </div>

          {/* 联系表单和信息区域 */}
          <ContactForm contactInfo={contactInfo} socialLinks={socialLinks} />
        </div>
      </div>

      {/* 推荐产品区域 */}
      <div className="bg-white py-20">
        <div className={containerStyles}>
          <div className="text-center mb-12">
            <SectionTitle
              title="Recommended For You"
              subtitle="Discover our most popular products that match your style and needs"
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {recommendedProducts.map((product, index) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          {/* 查看所有产品按钮 */}
          <div className="text-center">
            <AnimatedLinkArea>
              <Link
                href="/products"
                className="inline-flex items-center bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 rounded-lg font-semibold transition-colors duration-300 group"
              >
                VIEW ALL PRODUCTS
                <svg
                  className="ml-2 w-5 h-5 transform group-hover:translate-x-1 transition-transform duration-300"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
              </Link>
            </AnimatedLinkArea>
          </div>
        </div>
      </div>
    </div>
  );
}
