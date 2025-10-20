# MAP MARKER APP - Client

React + Vite frontend application สำหรับแอปพลิเคชัน Map Marker ที่ใช้ React Router และ Zustand

## 📋 สารบัญ

- [ข้อกำหนด](#ข้อกำหนด)
- [การติดตั้ง](#การติดตั้ง)
- [การใช้งาน](#การใช้งาน)
- [โครงสร้าง Project](#โครงสร้าง-project)
- [Features](#features)
- [Environment Variables](#environment-variables)
- [หลักการออกแบบ](#หลักการออกแบบ)

## ⚙️ ข้อกำหนด

- Node.js >= 14.x
- npm หรือ pnpm
- Modern web browser (Chrome, Firefox, Safari, Edge)

## 📦 การติดตั้ง

```bash
# ติดตั้ง dependencies
npm install
# หรือ
pnpm install

# สร้าง .env ไฟล์
cp .env.example .env
# แก้ไข .env ตามต้องการ
```

## 🚀 การใช้งาน

### Development Server

```bash
npm run dev
```

ฟังที่ `http://localhost:5173`

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

### Lint Code

```bash
npm run lint
```

## 📁 โครงสร้าง Project

```
src/
├── App.jsx                      # Root component
├── main.jsx                     # Entry point
├── index.css                    # Global styles
│
├── assets/                      # Static assets
│
├── components/                  # Reusable components
│   ├── buttons/
│   │   ├── AuthButton.jsx
│   │   ├── ConfirmButton.jsx
│   │   └── IconButton.jsx
│   │
│   ├── cards/
│   │   ├── AuthCard.jsx
│   │   └── MarkerCard.jsx
│   │
│   ├── form-field/              # Form field components
│   │   ├── FormFieldButton.jsx
│   │   └── FormFieldInput.jsx
│   │
│   ├── forms/                   # Form components
│   │   ├── LoginForm.jsx
│   │   ├── RegisterForm.jsx
│   │   └── MarkerForm.jsx
│   │
│   ├── layouts/
│   │   ├── Header.jsx
│   │   └── MainLayout.jsx
│   │
│   ├── maps/                    # Map-related components
│   │   ├── Map.jsx
│   │   ├── MapAction.jsx
│   │   ├── MarkerDetail.jsx
│   │   └── MarkerPopup.jsx
│   │
│   ├── navigation/
│   │   ├── NavItem.jsx
│   │   └── NavList.jsx
│   │
│   └── ui/                      # UI library components
│       ├── button.jsx
│       ├── card.jsx
│       ├── input.jsx
│       ├── label.jsx
│       ├── alert-dialog.jsx
│       ├── dropdown-menu.jsx
│       ├── avatar.jsx
│       ├── skeleton.jsx
│       ├── spinner.jsx
│       ├── sonner.jsx
│       └── QueryInput.jsx       # Search input with debounce
│
├── pages/                       # Page components (routes)
│   ├── auth/
│   │   ├── LoginPage.jsx
│   │   └── RegisterPage.jsx
│   │
│   ├── home/
│   │   └── HomePage.jsx
│   │
│   └── marker/
│       ├── MarkersPage.jsx
│       ├── CreateMarkerPage.jsx
│       └── UpdateMarkerPage.jsx
│
├── router/
│   └── index.jsx                # React Router configuration
│
├── configs/
│   └── env.config.js            # Environment configuration
│
├── constants/
│   ├── map.constant.js          # Map-related constants
│   └── router.constant.js       # Route paths constants
│
├── hooks/
│   └── UseAuth.jsx              # Custom auth hook
│
├── services/                    # API services
│   ├── auth.service.js          # Authentication service
│   ├── marker.service.js        # Marker CRUD service
│   └── api/
│       └── axios.instance.js    # Axios configuration
│
├── stores/
│   └── auth.store.js            # Zustand auth store
│
├── schemas/                     # Validation schemas (Zod)
│   ├── auth.schema.js
│   ├── marker.schema.js
│   └── env.schema.js
│
├── lib/
│   ├── auth-guard.loader.js     # Route protection loader
│   └── utils.js                 # Utility functions
│
└── test/                        # Test files
    ├── loader.jsx
    └── temp.jsx
```

## ✨ Features

### 🔐 Authentication

- สมัครสมาชิก (Register)
- เข้าสู่ระบบ (Login)
- JWT token-based authentication
- Protected routes

### 🗺️ Marker Management

- ดูแผนที่ interactive
- สร้าง marker ใหม่
- แก้ไข marker ที่มีอยู่
- ลบ marker
- ค้นหา marker ด้วย debounce search

### 🎨 UI Components

- ใช้ component library (Shadcn UI)
- Responsive design
- Toast notifications (Sonner)
- Loading states & skeletons
- Alert dialogs

### 📍 Map Integration

- Leaflet map integration
- Interactive markers
- Popup information display

## 🔧 Environment Variables

สร้าง `.env` ไฟล์ในรูท directory:

```env
# API Configuration
VITE_API_BASE_URL=http://localhost:3000/api

# Map Configuration (if needed)
VITE_MAP_API_KEY=your_map_api_key

# App Settings
VITE_APP_NAME=Map Marker App
```

## 🛠️ Development Guide

### การสร้าง Component ใหม่

1. **สร้าง component file**

```jsx
// src/components/example/ExampleComponent.jsx
export default function ExampleComponent() {
  return <div>Example</div>;
}
```

2. **ใช้งาน component**

```jsx
import ExampleComponent from '@/components/example/ExampleComponent';
```

### การเพิ่ม Route ใหม่

1. สร้าง page ใน `src/pages/`
2. เพิ่ม route ใน `src/router/index.jsx`
3. เพิ่ม path constant ใน `src/constants/router.constant.js`

### การสร้าง Service

```jsx
// src/services/example.service.js
import api from './api/axios.instance';

export const getExample = async () => {
  const { data } = await api.get('/example');
  return data;
};
```

### State Management (Zustand)

```jsx
// src/stores/example.store.js
import { create } from 'zustand';

export const useExampleStore = create((set) => ({
  value: '',
  setValue: (value) => set({ value }),
}));
```

## 📚 Stack

- **Framework**: React 18
- **Build Tool**: Vite
- **Router**: React Router v6
- **State Management**: Zustand
- **API Client**: Axios
- **UI Components**: Shadcn UI
- **Styling**: Tailwind CSS
- **Validation**: Zod
- **Notifications**: Sonner
- **Map**: Leaflet

## 🎯 Folder Structure Conventions

- `pages/` - Full page components (route components)
- `components/` - Reusable components
- `services/` - API calls & external services
- `stores/` - Zustand state management
- `hooks/` - Custom React hooks
- `constants/` - App constants
- `schemas/` - Validation schemas
- `lib/` - Utility functions & helpers

## 🚀 Best Practices

1. **Component Organization** - แยก components ตามประเภท
2. **API Calls** - ใช้ services มากกว่า direct axios calls
3. **State Management** - ใช้ Zustand สำหรับ global state
4. **Validation** - ใช้ Zod schemas สำหรับ input validation
5. **Route Protection** - ใช้ auth-guard.loader.js
6. **Error Handling** - ใช้ try-catch และ toast notifications
