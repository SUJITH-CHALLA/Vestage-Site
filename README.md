# Vestage: Rural Direct Selling Leadership Platform

A bilingual (English/Telugu), voice-enabled static web application for direct selling leadership.

## Technical Stack
- **Framework**: React + Vite
- **Language**: TypeScript
- **Styling**: Tailwind CSS v3
- **Icons**: Lucide React
- **Internationalization**: react-i18next (EN | TE)

## Getting Started

1.  **Install Dependencies**:
    ```bash
    npm install
    ```

2.  **Start Development Server**:
    ```bash
    npm run dev
    ```
    Open [http://localhost:5173](http://localhost:5173) in your browser.

3.  **Build for Production**:
    ```bash
    npm run build
    ```
    The output will be in `dist/` folder.

## Project Structure
- `src/components`: UI components (Navbar, Footer, AudioPlayer, etc.)
- `src/pages`: Page components (Home.tsx)
- `src/locales`: JSON translation files (en.json, te.json)
- `src/i18n.ts`: i18n configuration
- `public/assets`: Static assets (images, audio)

## Features Implemented
- **Bilingual Interface**: Toggle between English and Telugu.
- **Audio Support**: `AudioPlayer` component for voice explanations.
- **Responsive Design**: Mobile-first layout using Tailwind CSS.
- **Home Page Sections**: Hero, Business Model, Testimonials, Contact.

## Audio Assets
Place your `mp3` files in `public/assets/audio/`:
- `intro_en.mp3`
- `intro_te.mp3`

## Image Assets
Place your images in `public/assets/images/`. Currently using placeholders.
