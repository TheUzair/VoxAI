import localFont from "next/font/local";
import "./globals.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata = {
  title: "Agent Management System", // Replace with your app name
  description: "A powerful platform for managing and monitoring agents", // Replace with your app description
  keywords: ["agents", "management", "monitoring", "dashboard"], // Add relevant keywords
  authors: [{ name: "Your Name/Company" }],
  viewport: "width=device-width, initial-scale=1",
  openGraph: {
    title: "Agent Management System",
    description: "A powerful platform for managing and monitoring agents",
    url: "https://vox-ai-one.vercel.app/",
    siteName: "Agent Management System",
    images: [
      {
        url: "https://vox-ai-one.vercel.app/og-image.jpg", 
        width: 1200,
        height: 630,
      },
    ],
    locale: "en-US",
    type: "website",
  },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-blue-50`}
      >
        {children}
      </body>
    </html>
  );
}
