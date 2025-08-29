export default function CustomColorsDemo() {
  return (
    <div className="min-h-screen p-8 space-y-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold mb-8 text-gray-900">Tailwind CSS 自定义颜色完整指南</h1>
        
        {/* 方法1: 直接十六进制颜色 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">方法1: 直接使用十六进制颜色</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-[#F77220] rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-[#F77220]</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#3399cc] rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-[#3399cc]</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#10B981] rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-[#10B981]</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-[#EF4444] rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-[#EF4444]</p>
              </div>
            </div>
            <p className="text-gray-600">直接在类名中使用方括号包裹颜色值</p>
          </div>
        </section>

        {/* 方法2: tailwind.config.js 中定义的命名颜色 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">方法2: 在 tailwind.config.js 中定义命名颜色</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-navHoverColor rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-navHoverColor</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-adminPrimaryColor rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-adminPrimaryColor</p>
              </div>
            </div>
            <p className="text-gray-600">在配置文件中定义后可以直接使用名称</p>
          </div>
        </section>

        {/* 方法3: 品牌色板 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">方法3: 品牌色板 (brand.*)</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-orange-light rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-orange-light</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-orange rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-orange</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-orange-dark rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-orange-dark</p>
                </div>
              </div>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-blue-light rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-blue-light</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-blue rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-blue</p>
                </div>
                <div className="text-center">
                  <div className="w-20 h-20 bg-brand-blue-dark rounded-lg mx-auto mb-2"></div>
                  <p className="text-sm font-mono">bg-brand-blue-dark</p>
                </div>
              </div>
            </div>
            <p className="text-gray-600">创建完整的品牌色板，包含不同深浅变化</p>
          </div>
        </section>

        {/* 方法4: 功能性颜色 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">方法4: 功能性颜色 (custom.*)</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-custom-success rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-custom-success</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-custom-warning rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-custom-warning</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-custom-error rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-custom-error</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-custom-info rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-custom-info</p>
              </div>
            </div>
            <p className="text-gray-600">定义具有语义的功能性颜色</p>
          </div>
        </section>

        {/* 方法5: CSS变量方式 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">方法5: CSS变量方式 (动态主题)</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="grid grid-cols-3 gap-4 mb-4">
              <div className="text-center">
                <div className="w-20 h-20 bg-mainColorLight rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-mainColorLight</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-mainColorNormal rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-mainColorNormal</p>
              </div>
              <div className="text-center">
                <div className="w-20 h-20 bg-mainColorDeep rounded-lg mx-auto mb-2"></div>
                <p className="text-sm font-mono">bg-mainColorDeep</p>
              </div>
            </div>
            <p className="text-gray-600">使用CSS变量实现动态主题切换</p>
          </div>
        </section>

        {/* Hover效果演示 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">Hover 效果演示</h2>
          <div className="bg-gray-50 p-6 rounded-lg">
            <div className="space-y-4">
              <a href="#" className="block p-4 bg-white rounded border text-gray-700 hover:text-brand-orange hover:border-brand-orange transition-all duration-200">
                鼠标悬停 - 使用品牌橙色 (hover:text-brand-orange)
              </a>
              <a href="#" className="block p-4 bg-white rounded border text-gray-700 hover:text-[#F77220] hover:border-[#F77220] transition-all duration-200">
                鼠标悬停 - 使用直接颜色 (hover:text-[#F77220])
              </a>
              <a href="#" className="block p-4 bg-white rounded border text-gray-700 hover:text-navHoverColor hover:border-navHoverColor transition-all duration-200">
                鼠标悬停 - 使用命名颜色 (hover:text-navHoverColor)
              </a>
            </div>
          </div>
        </section>

        {/* 代码示例 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">配置代码示例</h2>
          <div className="bg-gray-900 text-gray-100 p-6 rounded-lg">
            <pre className="text-sm overflow-x-auto">
{`// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        // 方法1: 简单命名颜色
        navHoverColor: '#F77220',
        
        // 方法2: 品牌色板
        brand: {
          orange: '#F77220',
          'orange-light': '#FFB366',
          'orange-dark': '#E55A00',
        },
        
        // 方法3: 功能性颜色
        custom: {
          success: '#10B981',
          warning: '#F59E0B',
        },
        
        // 方法4: CSS变量 (动态主题)
        mainColor: 'hsl(var(--main-color))',
      }
    }
  }
}`}
            </pre>
          </div>
        </section>

        {/* 使用建议 */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800">使用建议</h2>
          <div className="bg-blue-50 border-l-4 border-blue-400 p-6">
            <div className="space-y-2">
              <p><strong>✅ 推荐:</strong> 使用语义化的命名 (如 brand-primary, custom-success)</p>
              <p><strong>✅ 推荐:</strong> 为每个主色定义浅、中、深三个层次</p>
              <p><strong>✅ 推荐:</strong> 在 hover 状态下使用直接颜色值避免兼容问题</p>
              <p><strong>⚠️ 注意:</strong> CSS变量在某些情况下可能不生效，备用直接颜色</p>
              <p><strong>❌ 避免:</strong> 使用过多的自定义颜色，保持色板简洁</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}