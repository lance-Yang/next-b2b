/** @type {import('tailwindcss').Config} */
module.exports = {
    darkMode: ["class"],
    content: [
        "./pages/**/*.{js,jsx}",
        "./components/**/*.{js,jsx}",
        "./app/**/*.{js,jsx}",
        "./src/**/*.{js,jsx,ts,tsx}",
        "./src/app/**/*.{js,ts,jsx,tsx}",
        "./src/components/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            keyframes: {
                fadeInUp: {
                    '0%': {
                        opacity: '0',
                        transform: 'translateY(20px)'
                    },
                    '100%': {
                        opacity: '1',
                        transform: 'translateY(0)'
                    }
                }
            },
            animation: {
                fadeInUp: 'fadeInUp 0.5s ease-out forwards'
            },
            colors: {
                background: 'hsl(var(--background))',
                foreground: 'hsl(var(--foreground))',
                card: {
                    DEFAULT: 'hsl(var(--card))',
                    foreground: 'hsl(var(--card-foreground))'
                },
                popover: {
                    DEFAULT: 'hsl(var(--popover))',
                    foreground: 'hsl(var(--popover-foreground))'
                },
                primary: {
                    DEFAULT: 'hsl(var(--primary))',
                    foreground: 'hsl(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'hsl(var(--secondary))',
                    foreground: 'hsl(var(--secondary-foreground))'
                },
                muted: {
                    DEFAULT: 'hsl(var(--muted))',
                    foreground: 'hsl(var(--muted-foreground))'
                },
                accent: {
                    DEFAULT: 'hsl(var(--accent))',
                    foreground: 'hsl(var(--accent-foreground))'
                },
                destructive: {
                    DEFAULT: 'hsl(var(--destructive))',
                    foreground: 'hsl(var(--destructive-foreground))'
                },
                border: 'hsl(var(--border))',
                input: 'hsl(var(--input))',
                ring: 'hsl(var(--ring))',
                chart: {
                    '1': 'hsl(var(--chart-1))',
                    '2': 'hsl(var(--chart-2))',
                    '3': 'hsl(var(--chart-3))',
                    '4': 'hsl(var(--chart-4))',
                    '5': 'hsl(var(--chart-5))'
                },
                // ========== 主题色 - 使用CSS变量，可通过JavaScript动态修改 ==========
                // 导航栏主题色
                navPrimary: 'hsl(var(--nav-primary))',
                navHover: 'hsl(var(--nav-hover))',
                navActive: 'hsl(var(--nav-active))',
                
                // 品牌主题色板 - 使用CSS变量
                brand: {
                    primary: 'hsl(var(--brand-primary))',
                    secondary: 'hsl(var(--brand-secondary))',
                    accent: 'hsl(var(--brand-accent))',
                    light: 'hsl(var(--brand-light))',
                    dark: 'hsl(var(--brand-dark))',
                },
                
                // 功能性颜色 - 使用CSS变量
                custom: {
                    success: 'hsl(var(--color-success))',
                    warning: 'hsl(var(--color-warning))',
                    error: 'hsl(var(--color-error))',
                    info: 'hsl(var(--color-info))',
                },
                // 主题色 - 使用CSS变量，可通过JavaScript动态修改
                mainColorLight: 'hsl(var(--main-color-light))',
                mainColorNormal: 'hsl(var(--main-color-normal))',
                mainColorDeep: 'hsl(var(--main-color-deep))',
                // 添加主题色透明度变体
                mainColorNormalAlpha: {
                    80: 'hsla(var(--main-color-normal), 0.8)',
                    70: 'hsla(var(--main-color-normal), 0.7)',
                    50: 'hsla(var(--main-color-normal), 0.5)',
                    30: 'hsla(var(--main-color-normal), 0.3)',
                    20: 'hsla(var(--main-color-normal), 0.2)',
                    10: 'hsla(var(--main-color-normal), 0.1)'
                }
            },
            fontFamily: {},
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            }
        }
    },
    // eslint-disable-next-line @typescript-eslint/no-require-imports
    plugins: [require("tailwindcss-animate")],
}