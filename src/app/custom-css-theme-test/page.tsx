"use client";

import React from 'react';

// 主题配置
const themes = {
  orange: {
    name: '橙色主题',
    className: 'theme-orange'
  },
  blue: {
    name: '蓝色主题',
    className: 'theme-blue'
  },
  green: {
    name: '绿色主题',
    className: 'theme-green'
  },
  purple: {
    name: '紫色主题',
    className: 'theme-purple'
  }
} as const;

type ThemeKey = keyof typeof themes;

export default function CustomCSSThemeTest() {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeKey>('orange');
  const [isAnimating, setIsAnimating] = React.useState(false);

  // 切换主题的函数
  const switchTheme = (themeKey: ThemeKey) => {
    const theme = themes[themeKey];
    
    setIsAnimating(true);
    
    // 移除所有主题类
    Object.values(themes).forEach(t => {
      document.documentElement.classList.remove(t.className);
    });
    
    // 添加新主题类
    document.documentElement.classList.add(theme.className);
    
    setCurrentTheme(themeKey);
    console.log(`切换到${theme.name}: ${theme.className}`);
    
    // 动画效果
    setTimeout(() => setIsAnimating(false), 300);
  };

  // 组件挂载时设置默认主题
  React.useEffect(() => {
    switchTheme('orange');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 控制面板 */}
      <div className="bg-white shadow-lg p-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎨 自定义CSS主题系统测试
          </h1>
          <p className="text-gray-600 mb-6">
            点击下方按钮切换主题，观察所有元素的颜色变化。所有样式都通过自定义CSS类实现，更加稳定可靠。
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => switchTheme(key as ThemeKey)}
                className={`
                  px-6 py-3 rounded-lg font-semibold theme-transition theme-button
                  ${currentTheme === key
                    ? 'bg-brand-primary text-white shadow-lg scale-105'
                    : 'bg-white text-brand-primary border-2 border-brand-primary hover:bg-brand-primary hover:text-white hover:scale-105'
                  }
                  ${isAnimating ? 'animate-pulse' : ''}
                `}
              >
                {theme.name}
              </button>
            ))}
          </div>
          
          <div className="bg-brand-light p-4 rounded-lg theme-transition">
            <p className="text-brand-dark">
              <strong>当前主题:</strong> {themes[currentTheme].name}
            </p>
            <p className="text-gray-600 text-sm mt-1">
              <strong>CSS类:</strong> {themes[currentTheme].className}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* 导航样式测试 */}
        <section className="bg-white rounded-lg shadow p-6 theme-card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">导航栏样式测试</h2>
          <div className="space-y-4">
            <nav className="flex space-x-6 p-4 bg-gray-50 rounded">
              <a href="#" className="nav-primary nav-hover theme-transition font-medium nav-item">
                首页
              </a>
              <a href="#" className="text-gray-600 nav-hover theme-transition font-medium nav-item">
                产品
              </a>
              <a href="#" className="text-gray-600 nav-hover theme-transition font-medium nav-item">
                服务
              </a>
              <a href="#" className="text-gray-600 nav-hover theme-transition font-medium nav-item">
                关于我们
              </a>
              <a href="#" className="text-gray-600 nav-hover theme-transition font-medium nav-item">
                联系我们
              </a>
            </nav>
          </div>
        </section>

        {/* 品牌色彩展示 */}
        <section className="bg-white rounded-lg shadow p-6 theme-card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">品牌色彩系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-primary rounded-lg mx-auto mb-2 theme-transition"></div>
              <p className="text-sm font-mono text-gray-600">brand-primary</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-light rounded-lg mx-auto mb-2 theme-transition"></div>
              <p className="text-sm font-mono text-gray-600">brand-light</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-dark rounded-lg mx-auto mb-2 theme-transition"></div>
              <p className="text-sm font-mono text-gray-600">brand-dark</p>
            </div>
          </div>
        </section>

        {/* 交互元素测试 */}
        <section className="bg-white rounded-lg shadow p-6 theme-card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">交互元素测试</h2>
          <div className="space-y-6">
            {/* 按钮测试 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">按钮样式</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-brand-dark theme-transition theme-button">
                  主要按钮
                </button>
                <button className="border-2 border-brand-primary text-brand-primary px-6 py-2 rounded hover:bg-brand-primary hover:text-white theme-transition theme-button">
                  次要按钮
                </button>
                <button className="bg-brand-light text-brand-dark px-6 py-2 rounded hover:bg-brand-primary hover:text-white theme-transition theme-button">
                  浅色按钮
                </button>
              </div>
            </div>

            {/* 卡片测试 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">卡片样式</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-brand-primary bg-brand-light p-4 rounded-r theme-transition theme-card">
                  <h4 className="text-brand-dark font-semibold mb-2">特色卡片</h4>
                  <p className="text-gray-600">这是一个使用品牌色彩的卡片示例</p>
                </div>
                <div className="bg-white border border-brand-primary/20 p-4 rounded hover:border-brand-primary hover:shadow-lg theme-transition theme-card">
                  <h4 className="text-brand-primary font-semibold mb-2">悬停卡片</h4>
                  <p className="text-gray-600">鼠标悬停查看边框颜色变化</p>
                </div>
              </div>
            </div>

            {/* 链接测试 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">链接样式</h3>
              <div className="space-y-2">
                <p>
                  这是一段包含 
                  <a href="#" className="text-brand-primary hover:text-brand-dark underline theme-transition">
                    内联链接
                  </a> 
                  的文本示例。
                </p>
                <p>
                  这是另一个 
                  <a href="#" className="nav-primary nav-hover font-medium theme-transition">
                    导航样式链接
                  </a> 
                  的例子。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 高级效果测试 */}
        <section className="bg-white rounded-lg shadow p-6 theme-card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">高级效果测试</h2>
          <div className="space-y-4">
            {/* 渐变效果 */}
            <div className="bg-gradient-to-r from-brand-light to-brand-primary p-6 rounded-lg theme-transition">
              <h3 className="text-white font-semibold text-lg mb-2">渐变背景</h3>
              <p className="text-white/90">这是一个使用品牌色彩的渐变背景效果</p>
            </div>
            
            {/* 阴影效果 */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-brand-primary p-4 rounded-lg shadow-lg text-white theme-transition hover:shadow-2xl">
                <h4 className="font-semibold mb-2">阴影卡片1</h4>
                <p className="text-sm opacity-90">鼠标悬停看阴影变化</p>
              </div>
              <div className="bg-brand-light p-4 rounded-lg shadow-md theme-transition hover:shadow-xl border-l-4 border-brand-primary">
                <h4 className="text-brand-dark font-semibold mb-2">阴影卡片2</h4>
                <p className="text-gray-600 text-sm">带有左侧边框的设计</p>
              </div>
              <div className="bg-white p-4 rounded-lg shadow border border-brand-primary/30 theme-transition hover:border-brand-primary hover:shadow-lg">
                <h4 className="text-brand-primary font-semibold mb-2">阴影卡片3</h4>
                <p className="text-gray-600 text-sm">带有边框的简洁设计</p>
              </div>
            </div>
          </div>
        </section>

        {/* 技术说明 */}
        <section className="bg-white rounded-lg shadow p-6 theme-card">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">技术说明</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>
{`// 自定义CSS主题切换原理
const switchTheme = (themeKey) => {
  // 移除所有主题类
  Object.values(themes).forEach(t => {
    document.documentElement.classList.remove(t.className);
  });
  
  // 添加新主题类
  document.documentElement.classList.add(theme.className);
};

// CSS类定义示例
.theme-orange .nav-primary { color: rgb(247, 114, 32); }
.theme-blue .nav-primary { color: rgb(51, 102, 255); }
.theme-green .nav-primary { color: rgb(16, 185, 129); }
.theme-purple .nav-primary { color: rgb(139, 92, 246); }`}
            </pre>
          </div>
          <div className="mt-4 p-4 bg-blue-50 border-l-4 border-blue-400 rounded-r">
            <p className="text-blue-800">
              <strong>优势:</strong> 自定义CSS方式比CSS变量更稳定，兼容性更好，不会出现某些浏览器或场景下不生效的问题。
            </p>
          </div>
        </section>
      </div>
    </div>
  );
}