import type { Metadata } from "next";
import { Indie_Flower } from "next/font/google";
import "./globals.css";

const indieFlower = Indie_Flower({
    subsets: ["latin"],
    weight: "400",
    variable: "--font-indie",
});

export const metadata: Metadata = {
    title: "Be My Valentine?",
    description: "A question for you ❤️",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={indieFlower.className}>{children}</body>
        </html>
    );
}
