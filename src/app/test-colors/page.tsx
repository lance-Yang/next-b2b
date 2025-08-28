export default function TestColorsPage() {
  return (
    <div className="container mx-auto p-8">
      <h1 className="text-2xl font-bold mb-6">颜色测试页面</h1>
      
      <div className="space-y-4">
        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">主题色测试</h2>
          <p className="text-mainColorLight">这是 mainColorLight 浅色文字</p>
          <p className="text-mainColorNormal">这是 mainColorNormal 正常色文字</p>
          <p className="text-mainColorDeep">这是 mainColorDeep 深色文字</p>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">背景色测试</h2>
          <div className="flex gap-4">
            <div className="p-4 bg-mainColorLight text-gray-800 rounded">浅色背景</div>
            <div className="p-4 bg-mainColorNormal text-white rounded">正常色背景</div>
            <div className="p-4 bg-mainColorDeep text-white rounded">深色背景</div>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">Hover 效果测试</h2>
          <div className="space-y-2">
            <a href="#" className="block text-mainColorNormal hover:text-mainColorDeep transition-colors duration-200">
              鼠标悬停查看颜色变化（正常 → 深色）
            </a>
            <a href="#" className="block text-gray-600 hover:text-mainColorNormal transition-colors duration-200">
              鼠标悬停查看颜色变化（灰色 → 正常色）
            </a>
            <a href="#" className="block text-gray-600 hover:text-navHoverColor transition-colors duration-200">
              鼠标悬停查看颜色变化（灰色 → 橙色 #F77220）
            </a>
          </div>
        </div>

        <div className="p-4 border rounded">
          <h2 className="text-lg font-semibold mb-2">CSS 变量值</h2>
          <div className="text-sm font-mono space-y-1">
            <p>--main-color-light: 22 93% 90% (橙色浅色)</p>
            <p>--main-color-normal: 22 93% 55% (橙色正常色)</p>
            <p>--main-color-deep: 22 93% 50% (橙色深色)</p>
            <p>navHoverColor: #F77220 (直接使用的橙色)</p>
          </div>
        </div>
      </div>
    </div>
  );
}