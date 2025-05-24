'use client'

import type { Metadata } from "next";
import "./globals.css";
import { store, persistor } from '@/src/lib/store';
import { Provider } from 'react-redux';
import { Toaster } from "@/components/ui/sonner";
import { PersistGate } from 'redux-persist/integration/react';


// export const metadata: Metadata = {
//   title: "Project Management System",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="">
        <Provider store={store}>
          <PersistGate loading={null} persistor={persistor}>
            {children}
          </PersistGate>
        </Provider>
        <Toaster />
      </body>
    </html>
  );
}
