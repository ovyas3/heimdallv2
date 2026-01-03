"use client"

import { TripTrackingDashboard } from "@/components/triptracker/triptracker";
import { useSearchParams } from 'next/navigation';
import { Suspense } from 'react';

function TripTrackerContent() {
    const searchParams = useSearchParams();
    const uniqueCode = searchParams.get('unique_code') || '';

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
            <TripTrackingDashboard uniqueCode={uniqueCode} />
        </div>
    );
}

export default function TripTrackerPage() {
    return (
        <Suspense fallback={<div style={{
            display: 'grid',
            placeContent: 'center',
            height: '100vh',
            fontSize: '18px'
        }}>Loading...</div>}>
            <TripTrackerContent />
        </Suspense>
    );
}
