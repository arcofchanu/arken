# ARKEN

A futuristic static landing page with a premium dark purple and black aesthetic, featuring immersive 3D effects and real-time animations.

## ✨ Features

- **Immersive Welcome Animation**: Pixel-based animation with custom transitions
- **Dynamic Hero Section**: Real-time download counter with live updates via Firebase
- **3D Visual Effects**: Built with Three.js and post-processing effects
- **Responsive Design**: Fully optimized for all screen sizes
- **Modern UI Components**: 
  - Animated navigation bar
  - Feature cards with hover effects
  - Gradient backgrounds with dynamic blobs
  - Smooth transitions and animations

## 🚀 Tech Stack

- **React 19.2** - Latest React with modern features
- **TypeScript** - Type-safe development
- **Vite** - Lightning-fast build tool
- **Three.js** - 3D graphics and animations
- **Firebase** - Real-time database for download tracking
- **Tailwind CSS** - Utility-first styling
- **Lucide React** - Beautiful icon library

## 📦 Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd arken
```

2. Install dependencies:
```bash
npm install
```

3. Set up Firebase:
   - Create a Firebase project at [firebase.google.com](https://firebase.google.com)
   - Add your Firebase configuration to `firebase.ts`

4. Start the development server:
```bash
npm run dev
```

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Project Structure

```
arken/
├── assets/              # Static assets
├── components/          # React components
│   ├── Features.tsx     # Feature cards section
│   ├── Footer.tsx       # Footer component
│   ├── Hero.tsx         # Hero section with download counter
│   ├── Navbar.tsx       # Navigation bar
│   ├── PixelBlast.tsx   # 3D pixel animation component
│   └── WelcomePage.tsx  # Welcome animation page
├── contexts/            # React contexts
│   └── DownloadContext.tsx  # Download counter context
├── App.tsx              # Main application component
├── firebase.ts          # Firebase configuration
├── index.tsx            # Application entry point
├── metadata.json        # Project metadata
├── package.json         # Dependencies and scripts
├── tsconfig.json        # TypeScript configuration
└── vite.config.ts       # Vite configuration
```

## 🎨 Key Components

### WelcomePage
Displays an animated welcome screen with a 5-second transition effect before entering the main site.

### Hero
Features a live download counter synchronized with Firebase, displaying real-time statistics with animated effects.

### PixelBlast
Custom 3D animation component built with Three.js, providing immersive visual effects throughout the site.

### Features
Showcases key product features with interactive cards, including:
- Hyper-Performance capabilities
- Real-time Analytics dashboard

## 🔥 Firebase Integration

The application uses Firebase Realtime Database to track and display download counts in real-time. The counter updates automatically across all connected clients.

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is private and not licensed for public use.

## 🤝 Contributing

This is a private project. Contact the repository owner for contribution guidelines.

---

Built with ❤️ using React and Three.js
