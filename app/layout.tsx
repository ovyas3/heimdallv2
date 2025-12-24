import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
    title: "TripTracker - SmartTruck",
    description: "Real-time shipment tracking with Kepler map integration",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
