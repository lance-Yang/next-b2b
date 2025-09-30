'use client'

import React from 'react'
import { Palette, Check } from 'lucide-react'
import { cn } from '@/lib/utils'
import { AnimatedButton } from './animations'

// 主题配置
const themes = {
  orange: {
    name: "橙色主题",
    nameEn: "Orange",
    className: "theme-orange",
    primaryColor: "#F77220",
    description: "活力橙色，温暖友好"
  },
  blue: {
    name: "蓝色主题",
    nameEn: "Blue",
    className: "theme-blue",
    primaryColor: "#3366FF",
    description: "专业蓝色，稳重可信"
  },
  green: {
    name: "绿色主题",
    nameEn: "Green",
    className: "theme-green",
    primaryColor: "#10B981",
    description: "自然绿色，生机勃勃"
  },
  purple: {
    name: "紫色主题",
    nameEn: "Purple",
    className: "theme-purple",
    primaryColor: "#8B5CF6",
    description: "神秘紫色，优雅独特"
  },
} as const;

export type ThemeKey = keyof typeof themes;

interface ThemeContextValue {
  currentTheme: ThemeKey;
  setTheme: (theme: ThemeKey) => void;
  themes: typeof themes;
}

// 主题上下文
const ThemeContext = React.createContext<ThemeContextValue | undefined>(undefined);

// 主题Provider
export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [currentTheme, setCurrentTheme] = React.useState<ThemeKey>("orange");

  // 切换主题的函数
  const setTheme = React.useCallback((themeKey: ThemeKey) => {
    const theme = themes[themeKey];
    const htmlElement = document.documentElement;

    // 移除所有主题类
    Object.values(themes).forEach(t => {
      htmlElement.classList.remove(t.className);
    });

    // 添加新主题类
    htmlElement.classList.add(theme.className);

    // 动态更新CSS变量
    const style = htmlElement.style;

    if (themeKey === 'orange') {
      style.setProperty('--main-color-light', '22 93% 90%');
      style.setProperty('--main-color-normal', '22 93% 55%');
      style.setProperty('--main-color-deep', '22 93% 50%');
      style.setProperty('--nav-primary', '22 93% 55%');
      style.setProperty('--nav-hover', '22 93% 50%');
      style.setProperty('--nav-active', '22 93% 40%');
      style.setProperty('--brand-primary', '22 93% 55%');
      style.setProperty('--brand-light', '22 93% 90%');
      style.setProperty('--brand-dark', '22 93% 40%');
    } else if (themeKey === 'blue') {
      style.setProperty('--main-color-light', '215 100% 95%');
      style.setProperty('--main-color-normal', '215 100% 50%');
      style.setProperty('--main-color-deep', '215 100% 40%');
      style.setProperty('--nav-primary', '215 100% 50%');
      style.setProperty('--nav-hover', '215 100% 40%');
      style.setProperty('--nav-active', '215 100% 30%');
      style.setProperty('--brand-primary', '215 100% 50%');
      style.setProperty('--brand-light', '215 100% 95%');
      style.setProperty('--brand-dark', '215 100% 30%');
    } else if (themeKey === 'green') {
      style.setProperty('--main-color-light', '142 76% 90%');
      style.setProperty('--main-color-normal', '142 76% 36%');
      style.setProperty('--main-color-deep', '142 76% 30%');
      style.setProperty('--nav-primary', '142 76% 36%');
      style.setProperty('--nav-hover', '142 76% 30%');
      style.setProperty('--nav-active', '142 76% 25%');
      style.setProperty('--brand-primary', '142 76% 36%');
      style.setProperty('--brand-light', '142 76% 90%');
      style.setProperty('--brand-dark', '142 76% 25%');
    } else if (themeKey === 'purple') {
      style.setProperty('--main-color-light', '258 90% 95%');
      style.setProperty('--main-color-normal', '258 90% 66%');
      style.setProperty('--main-color-deep', '258 90% 58%');
      style.setProperty('--nav-primary', '258 90% 66%');
      style.setProperty('--nav-hover', '258 90% 58%');
      style.setProperty('--nav-active', '258 90% 50%');
      style.setProperty('--brand-primary', '258 90% 66%');
      style.setProperty('--brand-light', '258 90% 95%');
      style.setProperty('--brand-dark', '258 90% 50%');
    }

    // 保存到localStorage
    localStorage.setItem('preferred-theme', themeKey);
    setCurrentTheme(themeKey);
  }, []);

  // 组件挂载时从localStorage读取主题
  React.useEffect(() => {
    const savedTheme = localStorage.getItem('preferred-theme') as ThemeKey;
    if (savedTheme && themes[savedTheme]) {
      setTheme(savedTheme);
    } else {
      setTheme(currentTheme);
    }
  }, [setTheme, currentTheme]);

  const value: ThemeContextValue = {
    currentTheme,
    setTheme,
    themes
  };

  return (
    <ThemeContext.Provider value={value}>
      {children}
    </ThemeContext.Provider>
  );
}

// 使用主题的Hook
export function useTheme() {
  const context = React.useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
}

// 主题切换器组件 - 圆形色块版本
interface ThemeToggleProps {
  variant?: 'compact' | 'detailed';
  showLabel?: boolean;
  className?: string;
}

export function ThemeToggle({ variant = 'compact', showLabel = false, className }: ThemeToggleProps) {
  const { currentTheme, setTheme, themes } = useTheme();
  const [isOpen, setIsOpen] = React.useState(false);
  const dropdownRef = React.useRef<HTMLDivElement>(null);

  // 点击外部关闭下拉菜单
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      return () => document.removeEventListener('mousedown', handleClickOutside);
    }
  }, [isOpen]);

  if (variant === 'compact') {
    return (
      <div className={cn("relative", className)} ref={dropdownRef}>
        <AnimatedButton
          onClick={() => setIsOpen(!isOpen)}
          className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 theme-transition rounded-md hover:bg-gray-50"
        >
          <Palette className="w-4 h-4" />
          {showLabel && (
            <span className="hidden sm:inline">主题</span>
          )}
          <div
            className="w-4 h-4 rounded-full border border-gray-300"
            style={{ backgroundColor: themes[currentTheme].primaryColor }}
          />
        </AnimatedButton>

        {isOpen && (
          <div className="absolute right-0 top-full mt-2 w-56 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-2">
            <div className="px-3 py-2 text-xs font-medium text-gray-500 uppercase tracking-wide border-b border-gray-100">
              选择主题
            </div>
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => {
                  setTheme(key as ThemeKey);
                  setIsOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2.5 text-sm text-left theme-transition",
                  currentTheme === key
                    ? "bg-gray-50 text-gray-900 font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <div
                  className="w-5 h-5 rounded-full border-2 flex-shrink-0"
                  style={{
                    backgroundColor: theme.primaryColor,
                    borderColor: currentTheme === key ? '#374151' : '#D1D5DB'
                  }}
                >
                  {currentTheme === key && (
                    <Check className="w-3 h-3 text-white m-auto mt-0.5" />
                  )}
                </div>
                <div className="flex-1">
                  <div className="font-medium">{theme.name}</div>
                  <div className="text-xs text-gray-500">{theme.description}</div>
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    );
  }

  // detailed 版本
  return (
    <div className={cn("space-y-2", className)}>
      <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">
        Theme / 主题
      </div>
      <div className="grid grid-cols-2 gap-3">
        {Object.entries(themes).map(([key, theme]) => (
          <AnimatedButton
            key={key}
            onClick={() => setTheme(key as ThemeKey)}
            className={cn(
              "flex items-center gap-3 p-3 rounded-lg border-2 theme-transition text-left",
              currentTheme === key
                ? "border-gray-900 bg-gray-50"
                : "border-gray-200 hover:border-gray-300 hover:bg-gray-50"
            )}
          >
            <div
              className="w-6 h-6 rounded-full flex-shrink-0 flex items-center justify-center"
              style={{ backgroundColor: theme.primaryColor }}
            >
              {currentTheme === key && (
                <Check className="w-4 h-4 text-white" />
              )}
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-medium text-sm">{theme.name}</div>
              <div className="text-xs text-gray-500 truncate">{theme.description}</div>
            </div>
          </AnimatedButton>
        ))}
      </div>
    </div>
  );
}

// 简单的主题色块切换器
export function ThemeColorPicker({ className }: { className?: string }) {
  const { currentTheme, setTheme, themes } = useTheme();

  return (
    <div className={cn("flex items-center gap-2", className)}>
      {Object.entries(themes).map(([key, theme]) => (
        <AnimatedButton
          key={key}
          onClick={() => setTheme(key as ThemeKey)}
          className={cn(
            "w-6 h-6 rounded-full border-2 theme-transition",
            currentTheme === key
              ? "border-gray-900 scale-110"
              : "border-gray-300 hover:border-gray-500"
          )}
          style={{ backgroundColor: theme.primaryColor }}
          title={theme.name}
        />
      ))}
    </div>
  );
}