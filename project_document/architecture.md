# B2B网站架构设计文档

## 1. 项目概述
本项目是一个现代化的B2B企业网站，采用Next.js 15.5.2构建，重点关注性能、SEO优化和用户体验。

## 2. 技术架构

### 2.1 前端架构
- **框架**: Next.js 15.5.2 (App Router)
- **UI库**: React 19.1.0
- **样式方案**: Tailwind CSS 4.0
- **组件库**: Radix UI (无样式组件)
- **动画**: Framer Motion
- **图标**: Lucide React
- **状态管理**: React Context API (轻量级)
- **表单处理**: React Hook Form
- **工具函数**: clsx, tailwind-merge

### 2.2 项目结构
```
next-b2b/
├── src/
│   ├── app/                    # Next.js App Router
│   │   ├── layout.tsx          # 根布局
│   │   ├── page.tsx            # 首页
│   │   ├── globals.css         # 全局样式
│   │   ├── products/           # 产品页面
│   │   ├── services/           # 服务页面
│   │   ├── about/              # 关于我们
│   │   ├── contact/            # 联系我们
│   │   └── api/                # API路由
│   ├── components/             # React组件
│   │   ├── layout/            # 布局组件
│   │   │   ├── Header.tsx
│   │   │   ├── Footer.tsx
│   │   │   └── Navigation.tsx
│   │   ├── ui/                # 通用UI组件
│   │   │   ├── Button.tsx
│   │   │   ├── Card.tsx
│   │   │   └── Modal.tsx
│   │   └── sections/          # 页面模块
│   │       ├── Hero.tsx
│   │       ├── Features.tsx
│   │       └── Testimonials.tsx
│   ├── lib/                   # 工具库
│   │   ├── utils.ts          # 通用工具函数
│   │   └── cn.ts             # className工具
│   ├── hooks/                # 自定义Hooks
│   ├── types/                # TypeScript类型定义
│   └── styles/               # 额外样式文件
├── public/                   # 静态资源
└── project_document/         # 项目文档
```

## 3. 页面结构设计

### 3.1 首页 (/)
- Hero区域：公司价值主张
- 产品/服务展示
- 核心优势
- 客户案例
- CTA区域

### 3.2 产品页面 (/products)
- 产品分类导航
- 产品网格展示
- 产品详情模态框
- 询价表单

### 3.3 服务页面 (/services)
- 服务类别
- 服务流程
- 案例研究
- 咨询表单

### 3.4 关于我们 (/about)
- 公司介绍
- 团队介绍
- 发展历程
- 企业文化
- 资质认证

### 3.5 联系我们 (/contact)
- 联系表单
- 公司地址地图
- 联系方式
- 常见问题

## 4. 组件设计原则

### 4.1 组件分类
- **布局组件**: 负责页面结构
- **UI组件**: 可复用的基础组件
- **业务组件**: 特定业务逻辑组件
- **页面组件**: 完整页面组装

### 4.2 设计规范
- 遵循单一职责原则
- 使用TypeScript确保类型安全
- 组件props明确定义
- 支持响应式设计
- 注重可访问性

## 5. 性能优化策略

### 5.1 图片优化
- 使用Next.js Image组件
- 实现懒加载
- 提供WebP格式
- 响应式图片

### 5.2 代码分割
- 动态导入非关键组件
- 路由级别代码分割
- 第三方库按需加载

### 5.3 SEO优化
- 使用Next.js Metadata API
- 结构化数据
- 语义化HTML
- 性能优化

## 6. 响应式设计断点
```css
/* Tailwind CSS默认断点 */
sm: 640px   /* 手机横屏 */
md: 768px   /* 平板竖屏 */
lg: 1024px  /* 平板横屏/小笔记本 */
xl: 1280px  /* 桌面显示器 */
2xl: 1536px /* 大屏显示器 */
```

## 7. 配色方案
- 主色：专业蓝 (#1e40af)
- 辅助色：科技灰 (#6b7280)
- 强调色：活力橙 (#f97316)
- 背景色：纯白 (#ffffff)
- 文字色：深灰 (#111827)