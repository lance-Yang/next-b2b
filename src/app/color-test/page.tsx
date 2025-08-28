export default function ColorTestPage() {
  return (
    <div className="p-8 space-y-8">
      <h1 className="text-3xl font-bold">颜色测试页面</h1>
      
      <div className="space-y-4">
        <h2 className="text-xl font-semibold">CSS变量测试</h2>
        <div className="grid grid-cols-3 gap-4">
          <div className="p-4 bg-mainColorLight text-gray-800 rounded">
            背景: mainColorLight
          </div>
          <div className="p-4 bg-mainColorNormal text-white rounded">
            背景: mainColorNormal
          </div>
          <div className="p-4 bg-mainColorDeep text-white rounded">
            背景: mainColorDeep
          </div>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">Hover效果测试</h2>
        <div className="space-y-2">
          <a href="#" className="block text-gray-600 hover:text-mainColorNormal transition-colors duration-200 text-lg">
            鼠标悬停测试 - 灰色 → 橙色 (mainColorNormal)
          </a>
          <a href="#" className="block text-mainColorNormal hover:text-mainColorDeep transition-colors duration-200 text-lg">
            鼠标悬停测试 - 橙色 → 深橙色 (mainColorDeep)
          </a>
          <a href="#" className="block text-gray-600 hover:text-[#F77220] transition-colors duration-200 text-lg">
            鼠标悬停测试 - 灰色 → 直接橙色 (#F77220)
          </a>
          <a href="#" className="block text-gray-600 hover:text-navHoverColor transition-colors duration-200 text-lg">
            鼠标悬停测试 - 灰色 → navHoverColor
          </a>
        </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-xl font-semibold">调试信息</h2>
        <div className="bg-gray-100 p-4 rounded text-sm font-mono">
          <p>--main-color-normal: 22 93% 55%</p>
          <p>--main-color-deep: 22 93% 50%</p>
          <p>navHoverColor: #F77220</p>
          <p>CSS变量应该对应橙色</p>
        </div>
      </div>
    </div>
  );
}