'use client'

import React from 'react'
import { motion } from 'framer-motion'

// 基础动画组件接口
interface BaseAnimationProps {
  children: React.ReactNode;
  className?: string;
}

interface IndexedAnimationProps extends BaseAnimationProps {
  index?: number;
}

interface ButtonAnimationProps extends BaseAnimationProps {
  onClick?: () => void;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
  active?: boolean;
}

interface ContentAnimationProps extends BaseAnimationProps {
  direction?: "left" | "right";
}

// 动画标题组件
export function AnimatedTitle({ children, className = "" }: BaseAnimationProps) {
  return (
    <motion.h1
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.h1>
  )
}

// 动画导航组件
export function AnimatedNav({ children, className = "" }: BaseAnimationProps) {
  return (
    <motion.nav
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className={className}
    >
      {children}
    </motion.nav>
  )
}

// 动画内容区域组件
export function AnimatedContent({ children, className = "", direction = "left" }: ContentAnimationProps) {
  const initialX = direction === "left" ? -50 : 50;

  return (
    <motion.div
      initial={{ opacity: 0, x: initialX }}
      whileInView={{ opacity: 1, x: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画按钮组件
export function AnimatedButton({ children, className = "", disabled = false, type = "button", onClick }: ButtonAnimationProps) {
  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      whileHover={!disabled ? { scale: 1.02 } : {}}
      whileTap={!disabled ? { scale: 0.98 } : {}}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// 动画分类按钮组件
export function AnimatedCategoryButton({ children, className = "", onClick, active = false }: ButtonAnimationProps) {
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

// 动画卡片组件（通用）
export function AnimatedCard({ children, className = "", index = 0 }: IndexedAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: Math.min(index * 0.1, 0.3) }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画产品卡片组件（专用，性能优化版本）
export function AnimatedProductCard({ children, className = "", index = 0 }: IndexedAnimationProps) {
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
export function AnimatedPaginationButton({ children, className = "", onClick, disabled = false }: ButtonAnimationProps) {
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

// 动画标题区域组件
export function AnimatedHeading({ children, className = "" }: BaseAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画图片组件
export function AnimatedImage({ children, className = "", index = 0 }: IndexedAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.05 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画区域组件（通用）
export function AnimatedSection({ children, className = "" }: BaseAnimationProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画链接区域组件（别名）
export const AnimatedLinkArea = AnimatedSection;