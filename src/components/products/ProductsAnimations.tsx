'use client'

import React from 'react'
import { motion } from 'framer-motion'

// 动画标题组件 - 优化版本
export function AnimatedTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className={className}
    >
      {children}
    </motion.h1>
  )
}

// 动画导航组件 - 优化版本
export function AnimatedNav({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, delay: 0.1 }}
      className={className}
    >
      {children}
    </motion.nav>
  )
}

// 动画分类按钮组件
export function AnimatedCategoryButton({ children, className = "", onClick, active = false }: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
  active?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// 动画产品卡片组件 - 优化版本，减少延迟
export function AnimatedProductCard({ children, className = "", index = 0 }: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{
        duration: 0.4,
        delay: Math.min(index * 0.05, 0.3) // 限制最大延迟为 0.3s
      }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画分页按钮组件
export function AnimatedPaginationButton({ children, className = "", onClick, disabled = false }: { 
  children: React.ReactNode; 
  className?: string;
  onClick?: () => void;
  disabled?: boolean;
}) {
  return (
    <motion.button
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.05 } : {}}
      whileTap={!disabled ? { scale: 0.95 } : {}}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// 动画内容区域组件
export function AnimatedContent({ children, className = "" }: { 
  children: React.ReactNode; 
  className?: string;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}