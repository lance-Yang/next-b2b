'use client'

import React, { useEffect, useState } from 'react'

interface PerformanceMetric {
  name: string
  value: number
  timestamp: number
}

export function PerformanceMonitor() {
  const [metrics, setMetrics] = useState<PerformanceMetric[]>([])
  const [isVisible, setIsVisible] = useState(false)

  // 监听路由变化
  useEffect(() => {
    const handleRouteChange = (url: string) => {
      const startTime = performance.now()
      
      // 使用 requestAnimationFrame 确保在下一帧测量
      requestAnimationFrame(() => {
        const endTime = performance.now()
        const navigationTime = endTime - startTime
        
        setMetrics(prev => [
          ...prev.slice(-9), // 保留最近10条记录
          {
            name: `Navigation to ${url}`,
            value: navigationTime,
            timestamp: Date.now()
          }
        ])
      })
    }

    // 监听 Next.js 路由事件
    const originalPush = window.history.pushState
    window.history.pushState = function(...args) {
      handleRouteChange(args[2] as string)
      return originalPush.apply(this, args)
    }

    // 监听 popstate 事件（浏览器前进/后退）
    window.addEventListener('popstate', () => {
      handleRouteChange(window.location.pathname)
    })

    return () => {
      window.history.pushState = originalPush
      window.removeEventListener('popstate', () => {})
    }
  }, [])

  // 监听键盘快捷键 (Ctrl+Shift+P) 显示/隐藏性能面板
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.ctrlKey && e.shiftKey && e.key === 'P') {
        e.preventDefault()
        setIsVisible(prev => !prev)
      }
    }

    window.addEventListener('keydown', handleKeyDown)
    return () => window.removeEventListener('keydown', handleKeyDown)
  }, [])

  if (!isVisible) {
    return (
      <div className="fixed bottom-4 right-4 z-50">
        <button
          onClick={() => setIsVisible(true)}
          className="bg-gray-800 text-white px-3 py-1 rounded text-sm opacity-50 hover:opacity-100 transition-opacity"
        >
          📊 Perf
        </button>
      </div>
    )
  }

  return (
    <div className="fixed bottom-4 right-4 z-50 bg-white border border-gray-200 rounded-lg shadow-lg p-4 max-w-sm">
      <div className="flex justify-between items-center mb-3">
        <h3 className="font-semibold text-gray-900">Navigation Performance</h3>
        <button
          onClick={() => setIsVisible(false)}
          className="text-gray-400 hover:text-gray-600"
        >
          ✕
        </button>
      </div>
      
      <div className="space-y-2 max-h-60 overflow-y-auto">
        {metrics.map((metric, index) => (
          <div key={index} className="flex justify-between items-center text-sm">
            <span className="text-gray-600 truncate flex-1 mr-2">
              {metric.name}
            </span>
            <span className={`font-mono ${
              metric.value > 500 ? 'text-red-600' : 
              metric.value > 200 ? 'text-yellow-600' : 
              'text-green-600'
            }`}>
              {metric.value.toFixed(0)}ms
            </span>
          </div>
        ))}
        
        {metrics.length === 0 && (
          <p className="text-gray-500 text-sm italic">
            No navigation metrics yet. Navigate between pages to see performance data.
          </p>
        )}
      </div>
      
      <div className="mt-3 pt-3 border-t border-gray-200 text-xs text-gray-500">
        <p>Press Ctrl+Shift+P to toggle</p>
        <p className="mt-1">
          <span className="text-green-600">●</span> &lt; 200ms | 
          <span className="text-yellow-600">●</span> 200-500ms | 
          <span className="text-red-600">●</span> &gt; 500ms
        </p>
      </div>
    </div>
  )
}