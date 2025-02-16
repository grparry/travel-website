# Luxury Travel Website

A modern luxury travel website built with React, TypeScript, and Material-UI. Features an intuitive drag-and-drop itinerary builder for creating custom multi-destination travel experiences.

## Features

- **Multi-Destination Itinerary Builder**
  - Drag-and-drop interface for planning daily activities
  - Visual timeline of your journey
  - Flexible duration planning for each destination

- **Destination Showcase**
  - Rich destination details with high-quality images
  - Curated luxury experiences
  - Premium accommodation options

- **Modern UI/UX**
  - Responsive design
  - Smooth page transitions
  - Material Design components
  - Interactive drag-and-drop interface

## Tech Stack

- React 19
- TypeScript
- Material-UI v6
- Vite
- @dnd-kit for drag-and-drop functionality
- Framer Motion for animations

## Getting Started

1. **Clone the repository**
   ```bash
   git clone https://github.com/grparry/travel-website.git
   cd travel-website
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm run dev
   ```

4. **Build for production**
   ```bash
   npm run build
   ```

## Project Structure

```
src/
├── components/         # Reusable UI components
│   ├── about/         # About page components
│   ├── destinations/  # Destination-related components
│   ├── itineraries/  # Itinerary builder components
│   ├── layout/       # Layout components (Navigation, Footer)
│   └── utils/        # Utility components
├── data/             # Mock data for destinations and itineraries
├── pages/            # Page components
├── types/            # TypeScript type definitions
└── theme.ts          # Material-UI theme configuration
```

## Development

- Run `npm run typecheck` to check for TypeScript errors
- Use `npm run preview` to preview the production build locally

## Browser Support

The website is optimized for modern browsers and has been tested on:
- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
