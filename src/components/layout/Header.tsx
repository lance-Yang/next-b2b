"use client";

import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ShoppingCart, User, Search } from "lucide-react";
import { cn } from "@/lib/utils";

const navigationItems = [
  { name: "首页", href: "/" },
  { name: "产品", href: "/products" },
  { name: "服务", href: "/services" },
  { name: "关于我们", href: "/about" },
  { name: "联系我们", href: "/contact" },
];

// 主题配置
const themes = {
  orange: {
    name: "橙色主题",
    className: "theme-orange",
  },
  blue: {
    name: "蓝色主题",
    className: "theme-blue",
  },
  green: {
    name: "绿色主题",
    className: "theme-green",
  },
  purple: {
    name: "紫色主题",
    className: "theme-purple",
  },
} as const;

type ThemeKey = keyof typeof themes;

export function Header() {
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false);
  const [currentTheme, setCurrentTheme] = React.useState<ThemeKey>("orange");

  // 切换主题的函数
  const switchTheme = (themeKey: ThemeKey) => {
    const theme = themes[themeKey];

    // 移除所有主题类
    Object.values(themes).forEach((t) => {
      document.documentElement.classList.remove(t.className);
    });

    // 添加新主题类
    document.documentElement.classList.add(theme.className);

    setCurrentTheme(themeKey);
    console.log(`切换到${theme.name}: ${theme.className}`);
  };

  // 组件挂载时设置默认主题
  React.useEffect(() => {
    switchTheme("orange");
  }, []);

  return (
    <div className="sticky top-0 z-50">
      {/* 测试标题栏 */}
      {/* <div className="bg-brand-light border-b border-brand-primary/20 px-4 theme-transition">
        <div className="max-w-7xl mx-auto py-2 flex justify-between items-center">
          <h1 className="text-brand-primary font-semibold theme-transition">
            🎨 自定义CSS主题测试 - 当前: {themes[currentTheme].name}
          </h1>
          <div className="flex gap-2">
            {Object.entries(themes).map(([key, theme]) => (
              <button
                key={key}
                onClick={() => switchTheme(key as ThemeKey)}
                className={cn(
                  "px-3 py-1 rounded text-sm theme-transition theme-button",
                  currentTheme === key
                    ? "bg-brand-primary text-white"
                    : "bg-white text-brand-primary border border-brand-primary hover:bg-brand-primary hover:text-white"
                )}
              >
                {theme.name}
              </button>
            ))}
          </div>
        </div>
      </div>
       */}
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
              {/* <img
                alt="logo"
                src="upload/img/logo.png.jpeg"
                className="h-12 w-auto"
              /> */}
              Logo
            </a>
          </div>
          <div className="hidden lg:-ml-20 lg:flex lg:flex-1 items-center justify-center">
            <Link
              className="px-0 flex items-center justify-center nav-primary hover:text-navHover theme-transition text-base/6 font-semibold nav-item"
              href="/"
            >
              Home
            </Link>
            <div className="h-full relative group ml-14">
              <Link
                className="px-0 text-gray-900 hover:text-mainColorNormal theme-transition cursor-pointer h-full flex items-center gap-x-0.5 text-base/6 font-semibold nav-item"
                href="product.html"
              >
                Product
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
              className="px-0 flex items-center justify-center text-gray-900 nav-hover theme-transition text-base/6 font-semibold ml-14 nav-item"
              href="about.html"
            >
              About Us
            </Link>
            <Link
              className="px-0 flex items-center justify-center text-gray-900 nav-hover theme-transition text-base/6 font-semibold ml-14 nav-item"
              href="contact.html"
            >
              Contact Us
            </Link>
          </div>
          <div className="flex ml-auto lg:hidden">
            {/* <button
              type="button"
              className="-m-2.5 bg-transparent inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                aria-hidden="true"
                data-slot="icon"
                className="size-6"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                ></path>
              </svg>
            </button> */}
          </div>
        </nav>
      </header>
    </div>
  );
}
