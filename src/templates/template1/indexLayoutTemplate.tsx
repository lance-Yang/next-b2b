import { GoogleAnalytics } from "@next/third-parties/google";
import NavBar from "./sections/navBar";
// import NavBar from "@/components/index/sections/template01/navBar";
// import Footer from "@/components/index/sections/template01/footer";
// import ScrollBar from "@/components/index/sections/scrollBar";
// import SendMessage from "@/components/index/sections/sendMessage";
// import TipBar from "@/components/index/sections/tipbar";

// 定义组件的 props 类型
interface IndexLayoutTemplateProps {
  navSectionData: any;
  footerSectionData: any;
  children: React.ReactNode;
}

export default function IndexLayoutTemplate({
  navSectionData,
  footerSectionData,
  children,
}: IndexLayoutTemplateProps) {
  return (
    <>
      <div className="flex flex-col min-h-screen">
        <NavBar sectionData={null} />
        <main className="flex-grow">{children}</main>
        {/* <Footer sectionData={footerSectionData} />
        <ScrollBar />
        <SendMessage />
        <TipBar sectionData={navSectionData} /> */}
      </div>
      {/*谷歌分析*/}
      {/* <GoogleAnalytics gaId={navSectionData.basicSite.site_gaid} /> */}
    </>
  );
}
