"use client";

import React from 'react';

// 主题配置
const themes = {
  orange: {
    name: '橙色主题',
    colors: {
      '--nav-primary': '22 93% 55%',
      '--nav-hover': '22 93% 50%',
      '--nav-active': '22 93% 40%',
      '--brand-primary': '22 93% 55%',
      '--brand-secondary': '215 100% 50%',
      '--brand-light': '22 93% 90%',
      '--brand-dark': '22 93% 40%',
    }
  },
  blue: {
    name: '蓝色主题',
    colors: {
      '--nav-primary': '215 100% 50%',
      '--nav-hover': '215 100% 45%',
      '--nav-active': '215 100% 40%',
      '--brand-primary': '215 100% 50%',
      '--brand-secondary': '22 93% 55%',
      '--brand-light': '215 100% 95%',
      '--brand-dark': '215 100% 35%',
    }
  },
  green: {
    name: '绿色主题',
    colors: {
      '--nav-primary': '142 76% 36%',
      '--nav-hover': '142 76% 32%',
      '--nav-active': '142 76% 28%',
      '--brand-primary': '142 76% 36%',
      '--brand-secondary': '271 81% 56%',
      '--brand-light': '142 76% 90%',
      '--brand-dark': '142 76% 25%',
    }
  },
  purple: {
    name: '紫色主题',
    colors: {
      '--nav-primary': '271 81% 56%',
      '--nav-hover': '271 81% 50%',
      '--nav-active': '271 81% 45%',
      '--brand-primary': '271 81% 56%',
      '--brand-secondary': '142 76% 36%',
      '--brand-light': '271 81% 95%',
      '--brand-dark': '271 81% 40%',
    }
  }
} as const;

type ThemeKey = keyof typeof themes;

export default function CSSVariableTest() {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeKey>('orange');
  const [isAnimating, setIsAnimating] = React.useState(false);

  // 切换主题的函数
  const switchTheme = (themeKey: ThemeKey) => {
    const theme = themes[themeKey];
    const root = document.documentElement;
    
    setIsAnimating(true);
    
    // 更新CSS变量
    Object.entries(theme.colors).forEach(([property, value]) => {
      root.style.setProperty(property, value);
    });
    
    setCurrentTheme(themeKey);
    console.log(`切换到${theme.name}:`, theme.colors);
    
    // 动画效果
    setTimeout(() => setIsAnimating(false), 300);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* 控制面板 */}
      <div className="bg-white shadow-lg p-6 mb-8">
        <div className="max-w-6xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">
            🎨 CSS变量动态主题系统测试
          </h1>
          <p className="text-gray-600 mb-6">
            点击下方按钮切换主题，观察所有元素的颜色变化。所有颜色都通过CSS变量实现，支持实时动态切换。
          </p>
          
          <div className="flex flex-wrap gap-4 mb-6">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => switchTheme(key as ThemeKey)}
                className={`
                  px-6 py-3 rounded-lg font-semibold transition-all duration-300 transform
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
          
          <div className="bg-brand-light p-4 rounded-lg">
            <p className="text-brand-dark">
              <strong>当前主题:</strong> {themes[currentTheme].name}
            </p>
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto px-6 space-y-8">
        {/* 导航样式测试 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">导航栏样式测试</h2>
          <div className="space-y-4">
            <nav className="flex space-x-6 p-4 bg-gray-50 rounded">
              <a href="#" className="text-navPrimary hover:text-navHover transition-colors duration-200 font-medium">
                首页
              </a>
              <a href="#" className="text-gray-600 hover:text-navHover transition-colors duration-200 font-medium">
                产品
              </a>
              <a href="#" className="text-gray-600 hover:text-navHover transition-colors duration-200 font-medium">
                服务
              </a>
              <a href="#" className="text-gray-600 hover:text-navHover transition-colors duration-200 font-medium">
                关于我们
              </a>
              <a href="#" className="text-gray-600 hover:text-navHover transition-colors duration-200 font-medium">
                联系我们
              </a>
            </nav>
          </div>
        </section>

        {/* 品牌色彩展示 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">品牌色彩系统</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-primary rounded-lg mx-auto mb-2 transition-colors duration-300"></div>
              <p className="text-sm font-mono text-gray-600">brand-primary</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-secondary rounded-lg mx-auto mb-2 transition-colors duration-300"></div>
              <p className="text-sm font-mono text-gray-600">brand-secondary</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-light rounded-lg mx-auto mb-2 transition-colors duration-300"></div>
              <p className="text-sm font-mono text-gray-600">brand-light</p>
            </div>
            <div className="text-center">
              <div className="w-24 h-24 bg-brand-dark rounded-lg mx-auto mb-2 transition-colors duration-300"></div>
              <p className="text-sm font-mono text-gray-600">brand-dark</p>
            </div>
          </div>
        </section>

        {/* 交互元素测试 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">交互元素测试</h2>
          <div className="space-y-6">
            {/* 按钮测试 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">按钮样式</h3>
              <div className="flex flex-wrap gap-4">
                <button className="bg-brand-primary text-white px-6 py-2 rounded hover:bg-brand-dark transition-colors duration-200">
                  主要按钮
                </button>
                <button className="border-2 border-brand-primary text-brand-primary px-6 py-2 rounded hover:bg-brand-primary hover:text-white transition-all duration-200">
                  次要按钮
                </button>
                <button className="bg-brand-light text-brand-dark px-6 py-2 rounded hover:bg-brand-primary hover:text-white transition-all duration-200">
                  浅色按钮
                </button>
              </div>
            </div>

            {/* 卡片测试 */}
            <div>
              <h3 className="text-lg font-medium text-gray-900 mb-3">卡片样式</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="border-l-4 border-brand-primary bg-brand-light p-4 rounded-r">
                  <h4 className="text-brand-dark font-semibold mb-2">特色卡片</h4>
                  <p className="text-gray-600">这是一个使用品牌色彩的卡片示例</p>
                </div>
                <div className="bg-white border border-brand-primary/20 p-4 rounded hover:border-brand-primary hover:shadow-lg transition-all duration-200">
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
                  <a href="#" className="text-brand-primary hover:text-brand-dark underline transition-colors duration-200">
                    内联链接
                  </a> 
                  的文本示例。
                </p>
                <p>
                  这是另一个 
                  <a href="#" className="text-navPrimary hover:text-navHover font-medium transition-colors duration-200">
                    导航样式链接
                  </a> 
                  的例子。
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* 功能性颜色测试 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">功能性颜色</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="bg-custom-success/10 border border-custom-success/30 p-4 rounded">
              <div className="w-8 h-8 bg-custom-success rounded mb-2"></div>
              <p className="text-custom-success font-medium">成功状态</p>
            </div>
            <div className="bg-custom-warning/10 border border-custom-warning/30 p-4 rounded">
              <div className="w-8 h-8 bg-custom-warning rounded mb-2"></div>
              <p className="text-custom-warning font-medium">警告状态</p>
            </div>
            <div className="bg-custom-error/10 border border-custom-error/30 p-4 rounded">
              <div className="w-8 h-8 bg-custom-error rounded mb-2"></div>
              <p className="text-custom-error font-medium">错误状态</p>
            </div>
            <div className="bg-custom-info/10 border border-custom-info/30 p-4 rounded">
              <div className="w-8 h-8 bg-custom-info rounded mb-2"></div>
              <p className="text-custom-info font-medium">信息状态</p>
            </div>
          </div>
        </section>

        {/* CSS变量值显示 */}
        <section className="bg-white rounded-lg shadow p-6">
          <h2 className="text-2xl font-semibold text-gray-900 mb-4">当前CSS变量值</h2>
          <div className="bg-gray-900 text-gray-100 p-4 rounded font-mono text-sm overflow-x-auto">
            <pre>
{Object.entries(themes[currentTheme].colors).map(([key, value]) => 
  `${key}: ${value};`
).join('\n')}
            </pre>
          </div>
        </section>
      </div>
    </div>
  );
}