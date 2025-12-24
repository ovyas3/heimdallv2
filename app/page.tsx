"use client"

import { TripTrackingDashboard } from "@/components/triptracker/triptracker";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TripTrackerContent() {
    const searchParams = useSearchParams();
    const uniqueCode = searchParams.get('code') || 'UHR0002-8'; //default code for demo

    return (
        <div style={{ width: '100%', height: '100vh' }}>
            <TripTrackingDashboard uniqueCode={uniqueCode} />
        </div>
    );
}

export default function Home() {
    return (
        <Suspense fallback={<div style={{
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
            fontSize: '18px'
        }}>Loading TripTracker...</div>}>
            <TripTrackerContent />
        </Suspense>
    );
}
