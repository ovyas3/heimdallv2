# TripTracker - Next.js Application

A standalone version of the TripTracker feature with complete trip-tracking logic and Kepler map integration.

## Features

- 📍 Real-time shipment tracking
- 🗺️ Interactive Kepler map with multiple data layers
- 📊 Trip statistics and analytics
- 🚛 Vehicle and driver information
- 📝 Trip timeline and toll history
- 📄 ePOD (Electronic Proof of Delivery) viewing
- 🎯 Route deviations and stoppages tracking
- 📱 Responsive design

## Getting Started

### Installation

```bash
npm install
```

### Development

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

### Using with a Shipment Code

The TripTracker accepts a `code` query parameter to load specific shipment data:

```
http://localhost:3000?code=YOUR_SHIPMENT_CODE
```

Default demo code: `UHR0002-8`

### Build for Production

```bash
npm run build
npm start
```

## Project Structure

```
triptracker/
├── app/
│   ├── layout.tsx          # Root layout
│   ├── page.tsx           # Main page with TripTracker
│   └── globals.css        # Global styles
├── components/
│   └── triptracker/
│       ├── triptracker.tsx         # Main TripTracker component
│       ├── triptracker.css        # TripTracker styles
│       ├── help-modal.tsx         # Help modal component
│       └── map/
│           ├── Kepler-map.tsx      # Kepler map integration
│           └── Kepler-map.module.css
├── assets/
│   ├── SmartTruck_tracker.svg
│   ├── toll_gate_icon_passed.svg
│   └── mapMarker.svg
├── package.json
├── tsconfig.json
└── next.config.js
```

## Technologies Used

- **Next.js 14.2.3** - React framework
- **React 18.3** - UI library
- **TypeScript** - Type safety
- **Leaflet & React-Leaflet** - Map rendering
- **Lucide React** - Icons
- **Tailwind CSS** - Styling
- **@turf/turf** - Geospatial analysis

## API Integration

The TripTracker integrates with the following APIs:

- `/api/raccoon/shipment` - Shipment details
- `/api/raccoon/toll_history` - Toll history
- `/api/raccoon/trails` - Trip trails
- `/api/raccoon/epods` - ePOD documents
- `/api/raccoon/halt` - Halt/stoppage data

Base API URL: `https://live-api.instavans.com`

## Configuration

The application can be configured through `next.config.js` for:
- SVG handling
- Environment-specific settings
- Build optimizations

## License

Proprietary - All rights reserved

## Support

For support, email support@instavans.com
