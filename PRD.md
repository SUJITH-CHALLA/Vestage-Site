# PRODUCT REQUIREMENTS DOCUMENT (PRD)

## Product Name: Rural Direct Selling Leadership Platform
## Product Type: Static Web Application
## Deployment Type: Static hosting with CDN
## Primary Audience: Village-based prospects (literate and illiterate), existing team members

### 1. Product Purpose

Provide a simple, voice-enabled, bilingual web platform that:

* Explains the business model clearly.
* Communicates through audio and visual elements.
* Builds credibility using real proof.
* Allows direct contact without complex forms.
* Supports low-literacy users.

### 2. Product Goals

* Enable understanding without heavy reading.
* Provide bilingual communication (English and Telugu).
* Showcase real achievements and recognition.
* Provide clear meeting information.
* Allow one-click contact via phone and WhatsApp.
* Maintain professional and compliant presentation.

### 3. Target Users

**Primary:**
* Village-based individuals with limited literacy.
* Individuals comfortable only in Telugu.

**Secondary:**
* Literate prospects reviewing proof and structure.
* Existing team members sharing link for referrals.

### 4. Functional Requirements

#### 4.1 Home Page

**Components:**
* Leader photo
* Title and designation
* Two large buttons:
  * Listen in Telugu
  * Listen in English
* Direct Call button
* WhatsApp button
* Meeting Today button

**Audio:**
* Pre-recorded explanation files (MP3)
* Playable in-browser
* Clear play/pause controls

#### 4.2 About / Journey Section

* Leader journey timeline (visual format)
* Recognition photos
* Short bilingual text blocks
* Audio summary option

#### 4.3 Business Explanation Section

Three-step visual explanation:
1. Buy products
2. Use and recommend
3. Earn commission

Each step:
* Large icon
* Short text
* Optional audio explanation

#### 4.4 Video Section

* Embedded YouTube videos (unlisted)
* Introductory video
* Work process video
* Who should join video

#### 4.5 Testimonials Section

* Real photos (with consent)
* Short statements
* Optional short video testimonials
* Stored in static JSON
* Manual monthly update

#### 4.6 Events / Recognition Section

* Event photos gallery
* Certificate images
* Stage recognition photos
* Date captions

#### 4.7 Meeting Information Section

* Daily or weekly meeting time
* Location details
* Google Maps link
* Google Meet link (if applicable)

#### 4.8 Contact Section

* Direct call button (tel link)
* WhatsApp link (wa.me)
* Basic contact form (optional)
  * Name
  * Phone
  * Language preference
* Third-party static form handler integration

#### 4.9 Language Toggle

* EN | తెలుగు toggle button
* Stored in browser localStorage
* JSON-based translation files
* All static text translatable

#### 4.10 Disclaimer Section

* Income disclaimer
* Results may vary notice
* Compliance statement
* Clear separation from main content

### 5. Non-Functional Requirements

#### 5.1 Performance

* Total page size under 1.5MB
* Lazy loading for images
* Compressed WebP images
* Lighthouse score above 85

#### 5.2 Accessibility

* Semantic HTML
* Large tap targets
* Minimum 16px body text
* High color contrast
* Audio alternative for text sections

#### 5.3 Compatibility

* Latest two versions of Chrome, Edge, Firefox
* Android mobile browser optimization
* Responsive layout for all screen sizes

#### 5.4 Security

* HTTPS enforced
* No sensitive data storage
* No backend database
* Input validation for form fields

### 6. Content Management

* Testimonials stored in JSON file
* Audio files stored in public/assets/audio
* Images stored in public/assets/images
* Manual update and redeploy workflow

### 7. Professional Color Palette

**Primary Colors:**
* Deep Blue: #1F3A8A
* Soft White: #F9FAFB

**Secondary Colors:**
* Muted Gold: #C8A951
* Slate Gray: #374151

**Accent Colors:**
* WhatsApp Green: #25D366
* Soft Red (alerts): #DC2626

**Background:**
* Light neutral background: #F3F4F6

**Typography Colors:**
* Primary text: #111827
* Secondary text: #4B5563

**Design Rules:**
* Maximum 3 primary colors per page
* No gradient backgrounds
* High contrast for readability
* Clean white sections with spacing

### 8. UI Design Structure

**Global Layout:**
* Header with logo and language toggle
* Main content container (max width 1200px)
* Footer with contact and legal links

**Button Styles:**
* Rounded corners (8px)
* Primary button: Deep Blue background, white text
* Secondary button: White background, Deep Blue border
* Call/WhatsApp: Green background

**Spacing:**
* Section padding: 60px vertical
* Consistent grid spacing

**Icons:**
* Simple line icons
* Large size for visual clarity

### 9. Technical Stack

**Frontend Framework:**
* React with Vite (static build)

**Language:**
* TypeScript (recommended)

**Styling:**
* Tailwind CSS
* Framer Motion (for animations)

**Routing:**
* React Router (static mode)

**Internationalization:**
* react-i18next
* Static JSON translation files

**Forms:**
* Netlify Forms or Formspree

**Media:**
* YouTube embed
* Native HTML5 audio

**Image Optimization:**
* WebP format
* Lazy loading
* Compression before upload

**Hosting:**
* Netlify or Vercel (static hosting)
* Custom domain
* Automatic HTTPS

**Version Control:**
* Git + GitHub

**Build Output:**
* Fully static site
* No backend logic
* No database
* No server-side processing

### 10. Deployment Workflow

* Code pushed to GitHub
* Connected to Netlify/Vercel
* Automatic production build
* CDN distribution enabled

### 11. Acceptance Criteria

* Audio plays correctly in both languages
* Language toggle switches all static content
* Direct call and WhatsApp links function
* Images load efficiently
* Responsive across devices
* Disclaimer clearly visible
* Page loads under 3 seconds on 4G network
