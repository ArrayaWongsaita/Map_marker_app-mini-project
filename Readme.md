# 🗺️ MAP MARKER APP

Full-stack web application สำหรับสร้างและจัดการ markers บนแผนที่ แบบ real-time ด้วย React + Express.js + Prisma

## 📋 สารบัญ

- [Overview](#overview)
- [Tech Stack](#tech-stack)
- [Project Structure](#project-structure)
- [Getting Started](#getting-started)
- [Development](#development)
- [API Documentation](#api-documentation)
- [Features](#features)
- [Configuration](#configuration)

## 🎯 Overview

MAP MARKER APP เป็นแอปพลิเคชันที่อนุญาตให้ผู้ใช้:

- 📍 สร้าง, แก้ไข, ลบ markers บนแผนที่
- 🔐 ล็อกอินและสมัครสมาชิก
- 🔍 ค้นหา markers ด้วย debounce search
- 📊 ดูข้อมูล markers ในรูปแบบ cards
- 🎨 UI responsive ที่สวยงาม

## 🛠️ Tech Stack

### Frontend

- **React 18** - UI library
- **Vite** - Build tool
- **React Router v6** - Client-side routing
- **Zustand** - State management
- **Tailwind CSS** - Styling
- **Shadcn UI** - Component library
- **Leaflet** - Map library
- **Axios** - HTTP client
- **Zod** - Validation schema
- **use-debounce** - Debounce hook

### Backend

- **Express.js** - Web framework
- **Node.js** - Runtime
- **Prisma** - ORM
- **PostgreSQL** - Database
- **JWT** - Authentication
- **Zod** - Validation
- **Swagger** - API documentation

## 📁 Project Structure

```
MAP_MARKER_APP/
├── client/                      # Frontend React application
│   ├── src/
│   │   ├── components/          # Reusable components
│   │   ├── pages/               # Page components
│   │   ├── services/            # API services
│   │   ├── stores/              # Zustand stores
│   │   ├── hooks/               # Custom hooks
│   │   ├── schemas/             # Validation schemas
│   │   ├── constants/           # App constants
│   │   ├── lib/                 # Utilities
│   │   ├── router/              # Route configuration
│   │   └── App.jsx
│   ├── package.json
│   ├── vite.config.js
│   └── README.md
│
├── server/                      # Backend Express application
│   ├── src/
│   │   ├── controllers/         # Request handlers
│   │   ├── services/            # Business logic
│   │   ├── routes/              # API routes
│   │   ├── schemas/             # Validation schemas
│   │   ├── middlewares/         # Express middlewares
│   │   ├── dto/                 # Data transfer objects
│   │   ├── libs/                # Utility libraries
│   │   ├── configs/             # Configuration files
│   │   ├── documents/           # Swagger docs
│   │   ├── app.js
│   │   └── server.js
│   ├── prisma/
│   │   ├── schema.prisma        # Database schema
│   │   └── seed.js              # Database seed
│   ├── package.json
│   └── README.md
│
└── Readme.md                    # This file
```

## 🚀 Getting Started

### Prerequisites

- Node.js >= 14.x
- npm หรือ pnpm
- PostgreSQL database

### Installation

#### 1. Clone Repository

```bash
git clone <your-repo-url>
cd MAP_MARKER_APP
```

#### 2. Setup Server

```bash
cd server

# ติดตั้ง dependencies
npm install

# สร้าง .env file
cp .env.example .env

# แก้ไข .env ด้วยข้อมูลของคุณ
# DATABASE_URL=postgresql://user:password@localhost:5432/map_marker_db
# JWT_SECRET=your_secret_key
# PORT=3000

# รัน migrations
npx prisma migrate dev

# (Optional) Seed database
npm run seed
```

#### 3. Setup Client

```bash
cd ../client

# ติดตั้ง dependencies
npm install

# สร้าง .env file
cp .env.example .env

# แก้ไข .env
# VITE_API_BASE_URL=http://localhost:3000/api
```

## 💻 Development

### Start Development Servers

**Terminal 1 - Backend:**

```bash
cd server
npm run dev
# Server จะทำงานที่ http://localhost:3000
```

**Terminal 2 - Frontend:**

```bash
cd client
npm run dev
# Client จะทำงานที่ http://localhost:5173
```

### Build for Production

**Backend:**

```bash
cd server
npm run build
```

**Frontend:**

```bash
cd client
npm run build
```

### Available Scripts

#### Server

```bash
npm run dev      # Development server
npm run build    # Build for production
npm start        # Start production server
npm run seed     # Seed database
npx prisma studio  # Open Prisma Studio
```

#### Client

```bash
npm run dev      # Development server
npm run build    # Build for production
npm run preview  # Preview production build
npm run lint     # Run ESLint
```

## 🔌 API Documentation

### Swagger UI

ดูเอกสาร API ที่: `http://localhost:3000/api-docs`

### Main Endpoints

#### Authentication

- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/logout` - ออกจากระบบ

#### Markers

- `GET /api/markers` - ดูรายการ markers (พร้อม search & pagination)
- `GET /api/markers/:id` - ดูรายละเอียด marker
- `POST /api/markers` - สร้าง marker ใหม่
- `PUT /api/markers/:id` - แก้ไข marker
- `DELETE /api/markers/:id` - ลบ marker

#### Health

- `GET /api/health` - ตรวจสอบสถานะ server

## ✨ Features

### 🔐 Authentication

- ✅ User registration
- ✅ User login with JWT
- ✅ Protected routes
- ✅ Session management

### 📍 Marker Management

- ✅ Create markers with coordinates
- ✅ Edit existing markers
- ✅ Delete markers
- ✅ View marker details
- ✅ Search markers with debounce
- ✅ Pagination support

### 🗺️ Map Features

- ✅ Interactive Leaflet map
- ✅ Drag & drop markers
- ✅ Marker popups with info
- ✅ Real-time marker updates

### 🎨 UI/UX

- ✅ Responsive design
- ✅ Modern component library (Shadcn UI)
- ✅ Toast notifications
- ✅ Loading states
- ✅ Error handling

## 🔧 Configuration

### Environment Variables

**Server (.env)**

```env
NODE_ENV=development
PORT=3000
DATABASE_URL=postgresql://user:password@localhost:5432/map_marker_db
JWT_SECRET=your_jwt_secret_key
JWT_EXPIRE=7d
CORS_ORIGIN=http://localhost:5173
SWAGGER_ENABLED=true
```

**Client (.env)**

```env
VITE_API_BASE_URL=http://localhost:3000/api
VITE_APP_NAME=Map Marker App
```

## 📊 Database Schema

### User Table

```prisma
model User {
  id        String   @id @default(cuid())
  email     String   @unique
  password  String
  name      String
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
  markers   Marker[]
}
```

### Marker Table

```prisma
model Marker {
  id        String   @id @default(cuid())
  title     String
  description String
  latitude  Float
  longitude Float
  userId    String
  user      User     @relation(fields: [userId], references: [id])
  createdAt DateTime @default(now())
  updatedAt DateTime @updatedAt
}
```

## 🐛 Error Handling

### Server

- JWT validation errors
- Database (Prisma) errors
- Input validation (Zod) errors
- Not found errors
- Default error middleware

### Client

- API error responses
- Form validation errors
- Loading states
- Toast notifications

## 📝 Development Guidelines

### Code Structure

- Follow component-based architecture
- Keep components small and reusable
- Use custom hooks for logic
- Separate concerns (UI, Logic, API)

### Naming Conventions

- Components: PascalCase (e.g., `MarkerCard.jsx`)
- Hooks: camelCase with 'use' prefix (e.g., `useAuth.jsx`)
- Services: camelCase with 'service' suffix (e.g., `marker.service.js`)
- Stores: camelCase with 'store' suffix (e.g., `auth.store.js`)

### Git Workflow

```bash
# Create feature branch
git checkout -b feature/feature-name

# Commit changes
git commit -m "feat: add feature description"

# Push to remote
git push origin feature/feature-name

# Create pull request
```

## 📚 Additional Resources

- [React Documentation](https://react.dev)
- [Express.js Guide](https://expressjs.com)
- [Prisma Documentation](https://www.prisma.io/docs)
- [React Router Documentation](https://reactrouter.com)
- [Tailwind CSS](https://tailwindcss.com)
- [Leaflet Documentation](https://leafletjs.com)

**Happy Coding! 🚀**
