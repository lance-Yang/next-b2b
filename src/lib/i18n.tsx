"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';
import zh from '@/locales/zh';
import en from '@/locales/en';

// 语言类型定义
export type Language = 'zh' | 'en';

// 语言配置
const languages = {
  zh: {
    code: 'zh',
    name: '中文',
    flag: '🇨🇳',
    data: zh
  },
  en: {
    code: 'en', 
    name: 'English',
    flag: '🇺🇸',
    data: en
  }
} as const;

// Context类型定义
interface I18nContextType {
  currentLang: Language;
  setLanguage: (lang: Language) => void;
  t: typeof zh;
  languages: typeof languages;
}

// 创建Context
const I18nContext = createContext<I18nContextType | undefined>(undefined);

// Provider组件
export function I18nProvider({ children }: { children: React.ReactNode }) {
  const [currentLang, setCurrentLang] = useState<Language>('zh');

  // 从localStorage读取保存的语言设置
  useEffect(() => {
    const savedLang = localStorage.getItem('language') as Language;
    if (savedLang && languages[savedLang]) {
      setCurrentLang(savedLang);
    }
  }, []);

  // 切换语言函数
  const setLanguage = (lang: Language) => {
    setCurrentLang(lang);
    localStorage.setItem('language', lang);
    
    // 设置HTML lang属性
    document.documentElement.lang = lang;
    
    console.log(`语言已切换到: ${languages[lang].name}`);
  };

  // 获取当前语言的翻译数据
  const t = languages[currentLang].data;

  const value: I18nContextType = {
    currentLang,
    setLanguage,
    t,
    languages
  };

  return (
    <I18nContext.Provider value={value}>
      {children}
    </I18nContext.Provider>
  );
}

// Hook
export function useI18n() {
  const context = useContext(I18nContext);
  if (context === undefined) {
    throw new Error('useI18n must be used within an I18nProvider');
  }
  return context;
}