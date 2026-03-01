# Smart Tour DavOr

A tourism recommendation system for Davao Oriental that helps travelers plan their trips easily. By entering their budget and preferences, users receive personalized suggestions for tourist spots, accommodations, and itineraries.

## Tech Stack

- **Next.js 15** (App Router)
- **TypeScript**
- **Tailwind CSS**

## Folder Tree

```
SmartTour-DavOr/
├── app/
│   ├── api/
│   │   ├── accommodations/route.ts   # GET accommodations
│   │   ├── recommendations/route.ts # POST get recommendations
│   │   └── spots/route.ts           # GET tourist spots
│   ├── admin/page.tsx               # Protected admin dashboard
│   ├── explore/page.tsx             # Browse tourist spots
│   ├── itinerary/page.tsx           # View day-by-day itinerary
│   ├── recommend/page.tsx           # Recommendation form
│   ├── results/page.tsx             # Recommendation results
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx                     # Home
├── lib/
│   ├── data.ts                      # Sample spots & accommodations
│   └── recommendation.ts           # Rules-based recommendation logic
├── types/
│   └── index.ts                     # TypeScript interfaces
├── next.config.ts
├── package.json
├── tailwind.config.ts
├── tsconfig.json
└── README.md
```

## Setup Instructions

### 1. Install dependencies

```bash
npm install
```

### 2. Run development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### 3. Build for production

```bash
npm run build
npm start
```

## Routes

| Route | Description |
|-------|-------------|
| `/` | Home page |
| `/explore` | Browse all tourist spots |
| `/recommend` | Recommendation form (budget, preferences) |
| `/results` | View recommendation results |
| `/itinerary` | Day-by-day itinerary |
| `/admin` | Admin dashboard (password: `admin123`) |

## API Endpoints

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/spots` | List tourist spots |
| GET | `/api/accommodations` | List accommodations |
| POST | `/api/recommendations` | Get personalized recommendations |

## Recommendation Logic

The current logic in `lib/recommendation.ts` is **rules-based**:

1. Derives budget level from daily budget (budget / moderate / luxury)
2. Filters spots by user preferences and budget
3. Selects accommodation within budget
4. Builds a simple day-by-day itinerary

**Improve later:** Replace with ML models, collaborative filtering, or more sophisticated rules (e.g., distance optimization, weather, seasonal factors).

## Data Types

See `types/index.ts` for interfaces:

- `TouristSpot` – name, category, budget level, cost
- `Accommodation` – type, price, amenities
- `RecommendationFormInput` – form payload
- `RecommendationResult` – spots, accommodations, itinerary, total cost
