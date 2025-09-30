"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Globe, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { useI18n, Language } from "@/lib/i18n";
import { ThemeToggle } from "@/components/ui/ThemeToggle";

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [langDropdownOpen, setLangDropdownOpen] = React.useState(false);

  // 国际化
  const { currentLang, setLanguage, t, languages } = useI18n();

  // 检查当前路径是否匹配导航链接
  const isActive = React.useCallback((path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(path);
  }, [pathname]);

  // 语言下拉菜单的ref
  const langDropdownRef = React.useRef<HTMLDivElement>(null);

  // 点击外部关闭语言下拉菜单
  React.useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        langDropdownRef.current &&
        !langDropdownRef.current.contains(event.target as Node)
      ) {
        setLangDropdownOpen(false);
      }
    }

    if (langDropdownOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }
  }, [langDropdownOpen]);

  return (
    <div className="sticky top-0 z-50">
      <header
        className="bg-white shadow-sm px-4 lg:px-4 md:px-4"
        style={{ position: "relative", zIndex: 55 }}
      >
        <nav
          aria-label="Global"
          className="h-20 mx-auto max-w-7xl lg:px-8 flex items-stretch"
        >
          <div className="flex items-center">
            <a className="-m-1.5 p-1.5" href="index.html">
              <span className="sr-only">Logo</span>
              Logo
            </a>
          </div>
          <div className="hidden lg:-ml-20 lg:flex lg:flex-1 items-center justify-center">
            <Link
              className={cn(
                "px-0 flex items-center justify-center  hover:text-mainColorNormal theme-transition text-base/6 font-semibold nav-item",
                isActive('/') && "text-mainColorNormal"
              )}
              href="/"
              prefetch={true}
            >
              {t.Home}
            </Link>
            <div className="h-full relative group ml-14">
              <Link
                className={cn(
                  "px-0 text-gray-900 hover:text-mainColorNormal theme-transition cursor-pointer h-full flex items-center gap-x-0.5 text-base/6 font-semibold nav-item",
                  isActive('/products') && "text-mainColorNormal"
                )}
                href="/products"
                prefetch={true}
              >
                {t.Products}
              </Link>
              <div className="absolute left-0 top-full mt-0.5 z-10 min-w-[200px] w-max bg-white shadow-[0_0_15px_rgba(0,0,0,0.1)] ring-1 ring-gray-900/5 rounded-none transition-all duration-200 opacity-0 invisible translate-y-2">
                <div className="p-0">
                  <div className="grid grid-cols-1 gap-0">
                    <div className="group relative">
                      <a
                        className="flex items-center gap-x-4 text-gray-900 nav-hover hover:bg-gray-50 theme-transition whitespace-nowrap relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-current before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
                        href="product/category/41.html"
                      >
                        <div className="w-full">
                          <div className="p-3 text-sm w-full font-medium transition-transform duration-200 hover:translate-x-2">
                            Sport Gear
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="group relative">
                      <a
                        className="flex items-center gap-x-4 text-gray-900 nav-hover hover:bg-gray-50 theme-transition whitespace-nowrap relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-current before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
                        href="product/category/40.html"
                      >
                        <div className="w-full">
                          <div className="p-3 text-sm w-full font-medium transition-transform duration-200 hover:translate-x-2">
                            Outdoor Adventure
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="group relative">
                      <a
                        className="flex items-center gap-x-4 text-gray-900 nav-hover hover:bg-gray-50 theme-transition whitespace-nowrap relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-current before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
                        href="product/category/8.html"
                      >
                        <div className="w-full">
                          <div className="p-3 text-sm w-full font-medium transition-transform duration-200 hover:translate-x-2">
                            Trendy Apparel
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="group relative">
                      <a
                        className="flex items-center gap-x-4 text-gray-900 nav-hover hover:bg-gray-50 theme-transition whitespace-nowrap relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-current before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
                        href="product/category/7.html"
                      >
                        <div className="w-full">
                          <div className="p-3 text-sm w-full font-medium transition-transform duration-200 hover:translate-x-2">
                            Fitness Essentials
                          </div>
                        </div>
                      </a>
                    </div>
                    <div className="group relative">
                      <a
                        className="flex items-center gap-x-4 text-gray-900 nav-hover hover:bg-gray-50 theme-transition whitespace-nowrap relative before:absolute before:left-0 before:top-0 before:bottom-0 before:w-0.5 before:bg-current before:opacity-0 hover:before:opacity-100 before:transition-all before:duration-200"
                        href="product/category/46.html"
                      >
                        <div className="w-full">
                          <div className="p-3 text-sm w-full font-medium transition-transform duration-200 hover:translate-x-2">
                            Nature Gear
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <Link
              className={cn(
                "px-0 flex items-center justify-center text-gray-900 nav-hover theme-transition text-base/6 font-semibold ml-14 nav-item",
                isActive('/about') && "text-mainColorNormal"
              )}
              href="/about"
              prefetch={true}
            >
              {t.AboutUs}
            </Link>
            <Link
              className={cn(
                "px-0 flex items-center justify-center text-gray-900 nav-hover theme-transition text-base/6 font-semibold ml-14 nav-item",
                isActive('/contact') && "text-mainColorNormal"
              )}
              href="/contact"
              prefetch={true}
            >
              {t.ContactUs}
            </Link>
          </div>

          {/* 右侧操作区 */}
          <div className="flex items-center ml-auto space-x-4">
            {/* 主题切换 */}
            <div className="hidden lg:block">
              <ThemeToggle variant="compact" />
            </div>

            {/* 语言切换 */}
            <div className="relative" ref={langDropdownRef}>
              <button
                type="button"
                onClick={() => setLangDropdownOpen(!langDropdownOpen)}
                className="flex items-center gap-2 px-3 py-2 text-sm text-gray-700 hover:text-gray-900 theme-transition rounded-md hover:bg-gray-50"
                aria-expanded={langDropdownOpen}
                aria-haspopup="true"
              >
                <Globe className="w-4 h-4" />
                <span className="text-lg">{languages[currentLang].flag}</span>
                <span className="hidden sm:inline">
                  {languages[currentLang].name}
                </span>
                <ChevronDown
                  className={cn(
                    "w-4 h-4 transition-transform duration-200",
                    langDropdownOpen && "rotate-180"
                  )}
                />
              </button>

              {/* 语言下拉菜单 */}
              {langDropdownOpen && (
                <div className="absolute right-0 top-full mt-2 w-44 bg-white border border-gray-200 rounded-lg shadow-lg z-50 py-1">
                  {Object.entries(languages).map(([code, lang]) => (
                    <button
                      key={code}
                      onClick={() => {
                        setLanguage(code as Language);
                        setLangDropdownOpen(false);
                      }}
                      className={cn(
                        "w-full flex items-center gap-3 px-4 py-2.5 text-sm text-left theme-transition first:rounded-t-lg last:rounded-b-lg",
                        currentLang === code
                          ? "bg-orange-50 text-orange-700 font-medium"
                          : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                      )}
                    >
                      <span className="text-lg">{lang.flag}</span>
                      <span className="flex-1">{lang.name}</span>
                      {currentLang === code && (
                        <span className="text-orange-600">✓</span>
                      )}
                    </button>
                  ))}
                </div>
              )}
            </div>
          </div>

          <div className="flex ml-4 lg:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="-m-2.5 bg-transparent inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-gray-900"
            >
              <span className="sr-only">Open main menu</span>
              {mobileMenuOpen ? (
                <X className="h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </nav>

        {/* 移动端菜单 */}
        {mobileMenuOpen && (
          <MobileMenu
            isActive={isActive}
            languages={languages}
            currentLang={currentLang}
            setLanguage={setLanguage}
            setMobileMenuOpen={setMobileMenuOpen}
            t={t}
          />
        )}
      </header>
    </div>
  );
}

// 移动端菜单组件
function MobileMenu({
  isActive,
  languages,
  currentLang,
  setLanguage,
  setMobileMenuOpen,
  t
}: {
  isActive: (path: string) => boolean;
  languages: Record<string, { flag: string; name: string }>;
  currentLang: string;
  setLanguage: (lang: Language) => void;
  setMobileMenuOpen: (open: boolean) => void;
  t: Record<string, string>;
}) {
  return (
    <div className="lg:hidden bg-white border-t border-gray-200">
      <div className="px-6 py-4 space-y-4">
        <div className="space-y-2">
          <Link
            href="/"
            className={cn(
              "block px-3 py-2 text-base font-medium nav-hover theme-transition rounded-md",
              isActive('/')
                ? "text-mainColorNormal bg-mainColorNormal/10"
                : "text-gray-900 hover:text-mainColorNormal"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.Home}
          </Link>
          <Link
            href="/products"
            className={cn(
              "block px-3 py-2 text-base font-medium nav-hover theme-transition rounded-md",
              isActive('/products')
                ? "text-mainColorNormal bg-mainColorNormal/10"
                : "text-gray-900 hover:text-mainColorNormal"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.Products}
          </Link>
          <Link
            href="/about"
            className={cn(
              "block px-3 py-2 text-base font-medium nav-hover theme-transition rounded-md",
              isActive('/about')
                ? "text-mainColorNormal bg-mainColorNormal/10"
                : "text-gray-900 hover:text-mainColorNormal"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.AboutUs}
          </Link>
          <Link
            href="/contact"
            className={cn(
              "block px-3 py-2 text-base font-medium nav-hover theme-transition rounded-md",
              isActive('/contact')
                ? "text-mainColorNormal bg-mainColorNormal/10"
                : "text-gray-900 hover:text-mainColorNormal"
            )}
            onClick={() => setMobileMenuOpen(false)}
          >
            {t.ContactUs}
          </Link>
        </div>

        {/* 移动端主题切换 */}
        <div className="border-t border-gray-200 pt-4">
          <ThemeToggle variant="detailed" />
        </div>

        {/* 移动端语言切换 */}
        <div className="border-t border-gray-200 pt-4">
          <div className="px-3 py-2 text-sm font-medium text-gray-500 uppercase tracking-wide">
            Language / 语言
          </div>
          <div className="space-y-1">
            {Object.entries(languages).map(([code, lang]: [string, { flag: string; name: string }]) => (
              <button
                key={code}
                onClick={() => {
                  setLanguage(code as Language);
                  setMobileMenuOpen(false);
                }}
                className={cn(
                  "w-full flex items-center gap-3 px-3 py-2 text-left rounded-md transition-colors",
                  currentLang === code
                    ? "bg-orange-50 text-orange-700 font-medium"
                    : "text-gray-700 hover:bg-gray-50 hover:text-gray-900"
                )}
              >
                <span className="text-lg">{lang.flag}</span>
                <span className="flex-1">{lang.name}</span>
                {currentLang === code && (
                  <span className="text-orange-600">✓</span>
                )}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
