'use client'

import React from 'react'
import { motion } from 'framer-motion'

// 动画标题组件
export function AnimatedTitle({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
export function AnimatedNav({ children, className = "" }: { children: React.ReactNode; className?: string }) {
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
export function AnimatedContent({ children, className = "", direction = "left" }: {
  children: React.ReactNode;
  className?: string;
  direction?: "left" | "right";
}) {
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

// 动画标题区域组件
export function AnimatedHeading({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
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

// 动画按钮组件
export function AnimatedButton({ children, className = "", disabled = false, type = "button" }: {
  children: React.ReactNode;
  className?: string;
  disabled?: boolean;
  type?: "button" | "submit" | "reset";
}) {
  return (
    <motion.button
      type={type}
      disabled={disabled}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={className}
    >
      {children}
    </motion.button>
  )
}

// 动画产品卡片组件
export function AnimatedProductCard({ children, className = "", index = 0 }: {
  children: React.ReactNode;
  className?: string;
  index?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      className={className}
    >
      {children}
    </motion.div>
  )
}

// 动画链接区域组件
export function AnimatedLinkArea({ children, className = "" }: {
  children: React.ReactNode;
  className?: string;
}) {
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