import { Wrench, Truck, Headphones, Shield, Clock, Award } from "lucide-react";

const services = [
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

const stats = [
  { value: "10+", label: "年行业经验" },
  { value: "500+", label: "服务客户" },
  { value: "50+", label: "国家和地区" },
  { value: "98%", label: "客户满意度" }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-blue-600 to-blue-800 text-white py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              专业的B2B服务解决方案
            </h1>
            <p className="text-xl opacity-90 mb-8">
              我们提供全方位的商务服务，助力您的业务在全球市场中取得成功
            </p>
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              立即咨询
            </button>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">我们的服务</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              专注于为B2B客户提供高品质、全方位的商务服务
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <div key={index} className="bg-white rounded-lg shadow-lg p-8 hover:shadow-xl transition-shadow">
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
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            准备开始您的B2B之旅了吗？
          </h2>
          <p className="text-xl mb-8 max-w-2xl mx-auto">
            联系我们的专业团队，让我们为您提供最适合的解决方案
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button className="bg-white text-blue-600 px-8 py-3 rounded-lg font-semibold hover:bg-gray-100 transition-colors">
              获取免费咨询
            </button>
            <button className="border-2 border-white px-8 py-3 rounded-lg font-semibold hover:bg-white hover:text-blue-600 transition-colors">
              查看案例
            </button>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">服务流程</h2>
            <p className="text-xl text-gray-600">简单高效的合作流程</p>
          </div>
          
          <div className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "需求咨询", desc: "了解您的具体需求和期望" },
              { step: "02", title: "方案制定", desc: "定制专属的解决方案" },
              { step: "03", title: "合作执行", desc: "专业团队全程跟进" },
              { step: "04", title: "持续服务", desc: "提供长期支持和优化" }
            ].map((item, index) => (
              <div key={index} className="text-center">
                <div className="w-20 h-20 bg-blue-600 text-white rounded-full flex items-center justify-center text-2xl font-bold mx-auto mb-4">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}