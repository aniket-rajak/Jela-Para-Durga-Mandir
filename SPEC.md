# Vihara Temple & Yoga Retreat Homepage Specification

## Project Overview
- **Project Name**: Vihara - Premium Spiritual Retreat Website
- **Type**: Single-page responsive website
- **Core Functionality**: Showcase temple/yoga retreat with hero slider, programs, gallery, donation widget, blog, and newsletter
- **Target Users**: People seeking yoga retreats, meditation programs, spiritual experiences

## UI/UX Specification

### Layout Structure
- Full-width edge-to-edge layout (no boxed container)
- 8 main sections in order: Hero → Programs → Experience → Gallery → Donation → Blog → Newsletter → Footer
- Smooth scroll navigation

### Responsive Breakpoints
- Desktop: 1200px+
- Tablet: 768px - 1199px
- Mobile: < 768px

### Color Palette
- **Background Beige**: #F4E6D9
- **Deep Spiritual Purple**: #5B2C3A
- **Soft Gradient Overlay**: linear-gradient(180deg, rgba(92,44,58,0.7), rgba(92,44,58,0.95))
- **Accent Orange Button**: #F05A4F
- **Text Dark**: #3A2A2A

### Typography
- **Headings**: Playfair Display (Google Fonts)
- **Body**: Poppins (Google Fonts)
- **Logo**: Playfair Display

### Visual Effects
- Smooth hover animations on buttons/cards
- Card hover lift effect (transform: translateY)
- Gallery image zoom on hover
- Hero slider fade transition
- Navbar shrink on scroll

## Section Specifications

### 1. Hero Header Section
- Full viewport height hero slider
- Dark gradient overlay on background
- Transparent navbar initially, solid on scroll
- Navbar items: Home, Features, About, Shop, Events, Donations, News, Contacts
- Center logo: "VIHARA"
- Right icons: Facebook, Twitter, YouTube
- Slider with left/right arrows, fade transition
- Centered title text

### 2. Programs Section
- Background: #F4E6D9
- Label: "PROGRAMS" (small uppercase)
- Heading: "Meditation, Yoga, Retreats, Free Programs & More…"
- 3 program cards in horizontal grid:
  - The Happiness Program
  - Sahaj Samadhi Meditation
  - Advanced Meditation Program
- Each card: image, title, description, rounded "More Info" button
- Soft shadow, hover scale animation, rounded corners

### 3. Experience Section
- Two column layout (60/40 split)
- Left: Large circular image with temple bells
- Right: Title + paragraph + "Read More" orange button
- Background: purple gradient (#5B2C3A)

### 4. Gallery Section
- Title: "View the Gallery of Our Temple"
- Masonry-style grid (mixed sizes)
- Hover: zoom image + overlay fade

### 5. Donation Section
- Two column layout
- Left: Heading "Dakshina: Yoga's Practice of Giving Back" + description
- Right: Donation widget with:
  - Progress bar ($0 of $16,000 raised)
  - Preset buttons: $25, $50, $100, Custom
  - Form: First Name, Last Name, Email
  - "Donate Now" red button

### 6. Blog Section
- 3 image cards
- Each: background image, dark gradient overlay, blog title, "Read More" button
- Titles:
  - Dealing with Uncertainty and Distress of Daily Routine
  - Indian Mantras for Meditation
  - Understand Concepts with the Orthodox Interpretation

### 7. Newsletter Section
- Heading: "Learn To Be Sustainably Happy!"
- Form: Name, Mobile Number, Email Address
- Checkbox: "I agree that my submitted data is being collected and stored."
- Button: "Register Now"

### 8. Footer
- Dark purple background (#5B2C3A)
- Center logo: "VIHARA"
- Footer nav links: Home, Ashram, Programs, Events, Donations, News, About, Contacts
- Copyright: "ThemeREX © 2024. All Rights Reserved."

## Image Sources
- Use Unsplash for placeholder images
- Reference from Google Business Profile concept

## Acceptance Criteria
- [ ] All 8 sections render correctly
- [ ] Color scheme matches specification exactly
- [ ] Fonts load correctly (Playfair Display, Poppins)
- [ ] Hero slider works with fade transition
- [ ] All hover animations function
- [ ] Mobile responsive (hamburger menu)
- [ ] Tablet responsive (2-column stacks)
- [ ] Smooth scroll navigation works
- [ ] No frameworks used - pure HTML/CSS/JS
