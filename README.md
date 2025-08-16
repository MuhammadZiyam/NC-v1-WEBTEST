# NanoCoders Website

A modern, dynamic educational platform website for NanoCoders - Building Future Creators Through Code and Play.

## 🚀 Features

- **Modern Design**: Futuristic, fun, and child-friendly design with dark theme and neon green accents
- **Responsive**: Fully responsive design that works on all devices
- **Interactive**: Smooth animations and micro-interactions using Framer Motion
- **Accessible**: Built with accessibility in mind
- **Fast**: Optimized performance with React and Tailwind CSS

## 📋 Pages

- **Home**: Landing page with hero section, featured courses, and call-to-actions
- **About**: Company story, mission, values, and timeline
- **Courses**: Comprehensive course catalog with filtering and search
- **Team**: Team member profiles with expertise and contact information
- **Join Us**: Application form for volunteers and collaborators
- **Contact**: Contact form, FAQ, and social media links

## 🛠️ Tech Stack

- **Frontend**: React.js 18
- **Styling**: Tailwind CSS
- **Routing**: React Router DOM
- **Icons**: Lucide React
- **Animations**: Framer Motion
- **Forms**: EmailJS (for form handling)

## 📦 Installation

### Prerequisites

Make sure you have Node.js installed on your system. You can download it from [nodejs.org](https://nodejs.org/).

### Setup Instructions

1. **Clone or navigate to the project directory**
   ```bash
   cd Websitedemo
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start the development server**
   ```bash
   npm start
   ```

4. **Open your browser**
   Navigate to `http://localhost:3000` to view the website.

## 🎨 Design System

### Colors
- **Primary**: `#00FF99` (Neon Green)
- **Dark Background**: `#0A0A0A`
- **Secondary Dark**: `#121212`
- **Text**: `#FFFFFF` (White)
- **Gray**: `#E0E0E0` (Light Gray)

### Typography
- **Primary Font**: Poppins
- **Secondary Font**: Inter
- **Accent Font**: Nunito Sans

### Components
- **Buttons**: Rounded corners with hover animations
- **Cards**: Dark background with subtle borders
- **Forms**: Consistent styling with focus states
- **Navigation**: Fixed header with smooth transitions

## 📁 Project Structure

```
src/
├── components/          # Reusable UI components
│   ├── Header.js       # Navigation header
│   ├── Footer.js       # Site footer
│   ├── HeroSection.js  # Home page hero
│   ├── WhatWeOffer.js  # Services section
│   ├── FeaturedCourses.js # Course carousel
│   ├── WhyNanoCoders.js # Value proposition
│   ├── JoinUsSection.js # CTA section
│   └── NewsletterSignup.js # Email subscription
├── pages/              # Page components
│   ├── Home.js         # Home page
│   ├── About.js        # About page
│   ├── Courses.js      # Courses page
│   ├── Team.js         # Team page
│   ├── Join.js         # Join us page
│   └── Contact.js      # Contact page
├── App.js              # Main app component
├── index.js            # Entry point
└── index.css           # Global styles
```

## 🚀 Deployment

### Build for Production
```bash
npm run build
```

### Deploy Options
- **Vercel**: Connect your GitHub repository to Vercel for automatic deployments
- **Netlify**: Drag and drop the `build` folder to Netlify
- **GitHub Pages**: Use `gh-pages` package for GitHub Pages deployment

## 📧 Form Integration

The contact and join forms are currently set up with simulated submissions. To integrate with real email services:

1. **EmailJS**: Sign up at [emailjs.com](https://www.emailjs.com/) and configure the service
2. **Formspree**: Use [formspree.io](https://formspree.io/) for simple form handling
3. **Custom Backend**: Build a custom API endpoint for form processing

## 🎯 Customization

### Adding New Courses
Edit the `allCourses` array in `src/pages/Courses.js` to add new courses.

### Updating Team Members
Modify the `teamMembers` array in `src/pages/Team.js` to update team information.

### Changing Colors
Update the color values in `tailwind.config.js` to match your brand colors.

### Adding New Pages
1. Create a new component in the `pages` directory
2. Add the route in `src/App.js`
3. Update the navigation in `src/components/Header.js`

## 🔧 Development

### Available Scripts

- `npm start` - Start development server
- `npm build` - Build for production
- `npm test` - Run tests
- `npm eject` - Eject from Create React App

### Code Style
- Use functional components with hooks
- Follow React best practices
- Use Tailwind CSS for styling
- Keep components modular and reusable

## 📱 Responsive Design

The website is fully responsive and optimized for:
- **Mobile**: 320px - 768px
- **Tablet**: 768px - 1024px
- **Desktop**: 1024px+

## 🌟 Features to Add

- [ ] Student dashboard
- [ ] Course enrollment system
- [ ] Payment integration
- [ ] Blog section
- [ ] Student progress tracking
- [ ] Interactive quizzes
- [ ] Video integration
- [ ] Multi-language support

## 📞 Support

For questions or support, contact:
- **Email**: infonanocoders@gmail.com
- **Phone**: +92 333 5986021

## 📄 License

This project is created for NanoCoders. All rights reserved.

---

**NanoCoders** - Building Future Creators Through Code and Play 🚀 