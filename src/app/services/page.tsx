import { Wrench, Truck, Headphones, Shield, Clock, Award } from "lucide-react";
import Link from "next/link";

// 类型定义
type Service = {
  icon: React.FC<{ className?: string }>;
  title: string;
  description: string;
  features: string[];
};

type Stat = {
  value: string;
  label: string;
};

type ProcessStep = {
  step: string;
  title: string;
  desc: string;
};

// 服务数据
const services: Service[] = [
  {
    icon: Wrench,
    title: "定制化解决方案",
    description: "根据您的具体需求，我们提供量身定制的B2B解决方案，确保满足您的业务目标。",
    features: ["需求分析", "方案设计", "技术支持", "持续优化"]
  },
  {
    icon: Truck,
    title: "全球物流配送",
    description: "覆盖全球的物流网络，提供快速、安全、可靠的货物配送服务。",
    features: ["国际运输", "仓储管理", "订单跟踪", "清关服务"]
  },
  {
    icon: Headphones,
    title: "24/7 客户支持",
    description: "专业的客户服务团队全天候待命，随时为您解答疑问和处理问题。",
    features: ["在线咨询", "电话支持", "技术指导", "售后服务"]
  },
  {
    icon: Shield,
    title: "质量保证体系",
    description: "严格的质量控制流程，确保每一件产品都符合国际标准和您的期望。",
    features: ["质量检测", "认证服务", "供应商审核", "品质追溯"]
  },
  {
    icon: Clock,
    title: "快速响应机制",
    description: "高效的业务流程和专业团队，确保您的需求得到及时响应和处理。",
    features: ["快速报价", "订单处理", "紧急响应", "实时更新"]
  },
  {
    icon: Award,
    title: "行业专业咨询",
    description: "拥有丰富行业经验的专家团队，为您提供专业的市场分析和商业建议。",
    features: ["市场调研", "趋势分析", "战略规划", "风险评估"]
  }
];

// 统计数据
const stats: Stat[] = [
  { value: "10+", label: "年行业经验" },
  { value: "500+", label: "服务客户" },
  { value: "50+", label: "国家和地区" },
  { value: "98%", label: "客户满意度" }
];

// 流程步骤
const processSteps: ProcessStep[] = [
  { step: "01", title: "需求咨询", desc: "了解您的具体需求和期望" },
  { step: "02", title: "方案制定", desc: "定制专属的解决方案" },
  { step: "03", title: "合作执行", desc: "专业团队全程跟进" },
  { step: "04", title: "持续服务", desc: "提供长期支持和优化" }
];

// 可复用组件
const SectionTitle = ({
  title,
  subtitle
}: {
  title: string;
  subtitle?: string
}) => (
  <div className="text-center mb-16">
    <h2 className="text-3xl md:text-4xl font-bold mb-4">{title}</h2>
    {subtitle && <p className="text-xl text-gray-600 max-w-2xl mx-auto">{subtitle}</p>}
  </div>
);

const ActionButton = ({
  children,
  isPrimary = false,
  href,
  onClick
}: {
  children: React.ReactNode;
  isPrimary?: boolean;
  href?: string;
  onClick?: () => void;
}) => {
  const primaryStyles = "bg-white text-blue-600 hover:bg-gray-100";
  const secondaryStyles = "border-2 border-white hover:bg-white hover:text-blue-600";
  const baseStyles = "px-8 py-3 rounded-lg font-semibold transition-colors";

  const buttonContent = (
    <span className={`${isPrimary ? primaryStyles : secondaryStyles} ${baseStyles}`}>
      {children}
    </span>
  );

  if (href) {
    return <Link href={href}>{buttonContent}</Link>;
  }

  return (
    <button onClick={onClick} className={`${isPrimary ? primaryStyles : secondaryStyles} ${baseStyles}`}>
      {children}
    </button>
  );
};

export default function ServicesPage() {
  // 常量定义
  const containerStyles = "container mx-auto px-4";

  // 组件定义
  const ServiceCard = ({ service }: { service: Service }) => {
    const Icon = service.icon;
    return (
      <div className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
        <div className="w-16 h-16 bg-blue-100 rounded-lg flex items-center justify-center mb-6">
          <Icon className="w-8 h-8 text-blue-600" />
        </div>
        <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
        <p className="text-gray-600 mb-6">{service.description}</p>
        <ul className="space-y-2">
          {service.features.map((feature, idx) => (
            <li key={idx} className="flex items-center text-gray-700">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3"></div>
              {feature}
            </li>
          ))}
        </ul>
      </div>
    );
  };

  const StatItem = ({ stat }: { stat: Stat }) => (
    <div className="text-center">
      <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
      <div className="text-gray-600">{stat.label}</div>
    </div>
  );

  const ProcessStepItem = ({ step }: { step: ProcessStep }) => (
    <div className="text-center">
      <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
        {step.step}
      </div>
      <h3 className="text-xl font-bold mb-2">{step.title}</h3>
      <p className="text-gray-600">{step.desc}</p>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className={containerStyles}>
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              专业的B2B服务解决方案
            </h1>
            <p className="text-xl opacity-90 mb-8">
              我们提供全方位的商务服务，助力您的业务在全球市场中取得成功
            </p>
            <ActionButton isPrimary href="/contact">
              立即咨询
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className={containerStyles}>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <StatItem key={index} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className={containerStyles}>
          <SectionTitle
            title="我们的服务"
            subtitle="专注于为B2B客户提供高品质、全方位的商务服务"
          />

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <ServiceCard key={index} service={service} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className={`${containerStyles} text-center`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的B2B之旅了吗？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，让我们为您提供最适合的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <ActionButton isPrimary href="/contact">
              获取免费咨询
            </ActionButton>
            <ActionButton href="/about">
              查看案例
            </ActionButton>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className={containerStyles}>
          <SectionTitle
            title="服务流程"
            subtitle="简单高效的合作流程"
          />

          <div className="grid md:grid-cols-4 gap-8">
            {processSteps.map((step, index) => (
              <ProcessStepItem key={index} step={step} />
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}