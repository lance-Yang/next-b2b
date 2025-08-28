"use client";

import Script from "next/script";

export default function ThemeScript() {
  const templateId = process.env.NEXT_PUBLIC_TEMPLATE_ID || "001";

  const themeScript = `
        (function() {
            console.log('主题脚本开始执行，模板ID:', '${templateId}');
            
            // 获取CSS变量值并设置主题变量
            const rootStyles = getComputedStyle(document.documentElement);
            
            // 获取对应模板的颜色值
            const lightColor = rootStyles.getPropertyValue('--main-color-light-${templateId}').trim();
            const normalColor = rootStyles.getPropertyValue('--main-color-normal-${templateId}').trim();
            const deepColor = rootStyles.getPropertyValue('--main-color-deep-${templateId}').trim();
            
            console.log('获取到的颜色值:', { lightColor, normalColor, deepColor });
            
            // 设置当前激活的主题颜色
            if (lightColor) {
                document.documentElement.style.setProperty('--main-color-light', lightColor);
                console.log('设置 --main-color-light:', lightColor);
            }
            if (normalColor) {
                document.documentElement.style.setProperty('--main-color-normal', normalColor);
                console.log('设置 --main-color-normal:', normalColor);
            }
            if (deepColor) {
                document.documentElement.style.setProperty('--main-color-deep', deepColor);
                console.log('设置 --main-color-deep:', deepColor);
            }
            
            // 验证设置是否成功
            const verifyNormal = getComputedStyle(document.documentElement).getPropertyValue('--main-color-normal').trim();
            console.log('验证设置结果 --main-color-normal:', verifyNormal);
        })();
    `;

  return (
    <Script id="theme-initializer" strategy="beforeInteractive">
      {themeScript}
    </Script>
  );
}
