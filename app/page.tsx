import { TripTrackingDashboard } from "@/components/triptracker/triptracker";
import { Metadata } from "next";
import { Suspense } from 'react';

type Props = {
    searchParams: { code?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const uniqueCode = searchParams.code || 'UHR0002-8'; // default code for demo
    
    try {
        const response = await fetch(
            `https://live-api.instavans.com/api/raccoon/shipment?unique_code=${encodeURIComponent(uniqueCode)}`,
            { next: { revalidate: 3600 } }
        );
        
        if (!response.ok) throw new Error("API error");
        
        const data = await response.json();
        const sin = data?.shipment?.SIN || "SIN";
        
        return {
            title: `SmarTruck - TripTracker`,
            description: `Shipment No: ${sin}`,
            openGraph: {
                title: `Track Shipment ${sin}`,
                description: `Real-time tracking for Shipment ${sin}`,
            }
        };
    } catch (err) {
        return {
            title: "TripTracker - SmartTruck",
            description: "Shipment No: SIN",
        };
    }
}

export default function Home({ searchParams }: Props) {
    const uniqueCode = searchParams.code;

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Suspense fallback={<div style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>Loading TripTracker...</div>}>
                <TripTrackingDashboard uniqueCode={uniqueCode} />
            </Suspense>
        </div>
    );
}
