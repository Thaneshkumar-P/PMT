import TopNav from "../ui/TopNav";
import SideNav from "../ui/SideNav";
import { cookies } from 'next/headers';
import { redirect } from 'next/navigation';
import jwt from 'jsonwebtoken'
import { GetServerSidePropsContext } from "next";
import { jwtVerification } from "./actions";

export default async function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {

  const cookieStore = cookies();
  const token = cookieStore.get('token')?.value as string;

  if (!token || !(await jwtVerification(token))) {
    redirect('/login');
  }

  return (
    <>
      <div className="bg-white" style={{ zIndex: 10 }}>
        <TopNav />
      </div>
      <div className="">
        <div className="flex flex-row custom-scrollbar">
          <div className="w-[200px] shadow-xl bg-white min-h-screen bg-opacity-0">
            <SideNav />
          </div>
          {children}
        </div>
      </div>
    </>
  );
}
