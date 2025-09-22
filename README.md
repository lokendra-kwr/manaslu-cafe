# Manaslu Cafe Website

A modern, responsive React website for Manaslu Cafe, 

## Location

<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d408.0911409096045!2d-73.90035088635268!3d40.74613567997584!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25fc30e6f9aeb%3A0x4aab272435307ec7!2sManaslu%20Cafe!5e1!3m2!1sen!2snp!4v1758079147490!5m2!1sen!2snp" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

## Features

- **Responsive Design**: Mobile-first approach with Tailwind CSS
- **Modern UI**: Clean, elegant design with smooth animations
- **Modular Components**: Well-organized React components
- **Interactive Menu**: Dynamic menu with categories and filtering
- **Image Gallery**: Beautiful gallery showcasing the cafe
- **Contact Information**: Complete contact details with embedded map
- **Smooth Scrolling**: Navigation with smooth scroll behavior

## Sections

1. **Navbar** - Logo and navigation links with mobile menu
2. **Hero Section** - Full-width background with call-to-action
3. **Menu Section** - Categorized menu items with images and prices
4. **Gallery Section** - Responsive grid of cafe images
5. **Contact Section** - Address, phone, email, and Google Map
6. **Footer** - Social links and additional information

## Tech Stack

- **React 18** - Frontend framework
- **Tailwind CSS** - Utility-first CSS framework
- **JavaScript** - Programming language
- **HTML5** - Markup language

## Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone or download the project files**

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website

### Building for Production

```bash
npm run build
```

This creates a `build` folder with optimized production files.

## Project Structure

```
src/
├── components/
│   ├── Navbar.js          # Navigation component
│   ├── Hero.js            # Hero section component
│   ├── Menu.js            # Menu section component
│   ├── Gallery.js         # Gallery section component
│   ├── Contact.js         # Contact section component
│   └── Footer.js          # Footer component
├── data/
│   └── menuData.json      # Menu items data
├── App.js                 # Main app component
├── index.js               # React entry point
└── index.css              # Global styles and Tailwind imports
```

## Customization

### Colors
The color scheme is defined in `tailwind.config.js`:
- `cafe-brown`: #8B4513 (Primary brown)
- `cafe-cream`: #F5F5DC (Cream background)
- `cafe-gold`: #DAA520 (Accent gold)

### Menu Data
Edit `src/data/menuData.json` to update menu items:
- Add/remove categories
- Update prices and descriptions
- Change image URLs

### Images
Replace placeholder images with your own:
- Hero background image
- Menu item images
- Gallery images

### Contact Information
Update contact details in `src/components/Contact.js`:
- Address: 3906-64st Woodside, Woodside, NY 11377, United States
- Phone number: 1 (347) 527-1202
- Email: email.manaslucafe@gmail.com
- Google Maps embed URL

## Features in Detail

### Responsive Design
- Mobile-first approach
- Breakpoints: sm (640px), md (768px), lg (1024px), xl (1280px)
- Flexible grid layouts
- Touch-friendly navigation

### Animations
- Hover effects on buttons and cards
- Smooth transitions
- Transform animations
- Scroll-triggered animations

### Accessibility
- Semantic HTML structure
- Alt text for images
- Keyboard navigation support
- High contrast colors

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## License

This project is open source and available under the [MIT License](LICENSE).

## Credits

- Images from Unsplash
- Icons from Heroicons
- Fonts from Google Fonts

---

**Manaslu Cafe** - Fresh, Quality Food from the Heart of Kathmandu
