"use client";
import { Poppins } from "next/font/google";
// import "./globals.css";
// import "@/fonts/line-awesome-1.3.0/css/line-awesome.css";
// import "@/styles/index.scss";
// import "rc-slider/assets/index.css";
const poppins = Poppins({
    subsets: ["latin"],
    display: "swap",
    weight: ["300", "400", "500", "600", "700"],
});

export default function RootLayout({ children, params, }: { children: React.ReactNode; params: any; }) {


    return (
        <>
            {children}
        </>


    );
}
