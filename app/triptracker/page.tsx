import { TripTrackingDashboard } from "@/components/triptracker/triptracker";
import { Metadata } from "next";
import { Suspense } from 'react';

type Props = {
    searchParams: { unique_code?: string };
};

export async function generateMetadata({ searchParams }: Props): Promise<Metadata> {
    const uniqueCode = searchParams.unique_code;
    
    if (!uniqueCode) {
        return {
            title: "TripTracker - SmartTruck",
            description: "Shipment No: SIN",
        };
    }

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

export default function TripTrackerPage({ searchParams }: Props) {
    const uniqueCode = searchParams.unique_code || '';

    if (!uniqueCode) {
        return (
            <div style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                color: '#666'
            }}>
                <p>No trip code provided.</p>
            </div>
        )
    }

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <Suspense fallback={<div style={{
                display: 'grid',
                placeContent: 'center',
                height: '100vh',
                fontSize: '18px'
            }}>Loading...</div>}>
                <TripTrackingDashboard uniqueCode={uniqueCode} />
            </Suspense>
        </div>
    );
}
