"use client"
import { Outfit } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { Toaster } from "@/components/ui/sonner"
import { usePathname } from "next/navigation";
import { UpdateCartContext } from "./_context/UpdateCartContext";
import { useState } from "react";

const inter = Outfit({ subsets: ["latin"] });

// export const metadata = {
//   title: "Our Next App",
//   description: "Generated by create next app",
// };



export default function RootLayout({ children }) {
  const params=usePathname();
  const [updateCart,setUpdateCart]=useState(false);
  const showHeader=params=='/sign-in'||params=='/create-account' ?false:true;

  return (
    <html lang="en">
      <title>Bright Smart Shop</title>
      <body className={inter.className}>
        <UpdateCartContext.Provider value={{updateCart,setUpdateCart}}>
          {showHeader&&<Header />} 
          {children}
          <Toaster />
        </UpdateCartContext.Provider>
        </body>
    </html>
  );
}
