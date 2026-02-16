# Implementation Plan: Rural Direct Selling Leadership Platform (Vestage)

This plan outlines the steps to build the bilingual, voice-enabled static web application using React, TypeScript, and Tailwind CSS.

## Phase 1: Project Initialization & Configuration
- [ ] Initialize Vite project with React and TypeScript
- [ ] Install dependencies: `react-router-dom`, `react-i18next`, `i18next`, `lucide-react`, `framer-motion`, `clsx`, `tailwind-merge`
- [ ] Setup Tailwind CSS with the specific color palette from PRD
- [ ] Configure `i18next` for English and Telugu support
- [ ] Setup folder structure (components, pages, locales, assets, hooks)

## Phase 2: Core UI Components
- [ ] Create `Button` component (variant styles: primary, secondary, whatsapp, call)
- [ ] Create `Section` wrapper component (consistent padding/spacing)
- [ ] Create `AudioPlayer` component (custom controls, accessible)
- [ ] Create `LanguageToggle` component
- [ ] Develop `Navbar` (Logo, Mobile Menu, Lang Toggle)
- [ ] Develop `Footer` (Contact links, Disclaimer, Copyright)

## Phase 3: Page Sections (Home/Landing Page)
- [ ] **Hero Section**: Leader photo, Title, Audio/Call/WA buttons
- [ ] **About/Journey Section**: Timeline visualization, recognition photos
- [ ] **Business Explanation**: 3-step visual guide (Buy, Use, Earn) with audio triggers
- [ ] **Video Section**: Responsive YouTube embeds
- [ ] **Testimonials**: Grid layout reading from JSON data
- [ ] **Events/Recognition**: Gallery layout
- [ ] **Meeting Info**: Schedule card with Maps link
- [ ] **Contact Form**: Simple form with validation

## Phase 4: Localization & Content
- [ ] Create `en.json` and `te.json` translation files
- [ ] Extract all hardcoded strings to translation keys
- [ ] Ensure font compatibility for Telugu script
- [ ] implement `useTranslation` hook across all components

## Phase 5: Functionality & Interaction
- [ ] Implement Audio Playback logic (stop others when one starts)
- [ ] Form submission handling (Formspree/Netlify placeholder)
- [ ] Add `framer-motion` animations for "wow" factor (fade-ins, slide-ups)
- [ ] Ensure One-Click actions (Call, WhatsApp, Maps) work on mobile

## Phase 6: Performance & Optimization
- [ ] Optimize images (convert to WebP where possible/placeholder)
- [ ] Audit Accessibility (ARIAs, contrast, tap targets)
- [ ] Verify Responsive Design (Mobile First appraoch)
- [ ] Build & Test (Lighthouse check)

## Phase 7: Deployment Handling
- [ ] Ensure build script is correct
- [ ] Create `_redirects` file if needed for Netlify spa handling
