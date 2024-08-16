import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";


export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="bg-white" style={{ zIndex: 10 }}>
        <TopNav />
      </div>
      <div className="">
        <div className="flex flex-row">
          <div className="w-[200px] shadow-xl bg-white min-h-screen bg-opacity-0">
            <SideNav />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
