# MAP MARKER APP - Server

Express.js backend server สำหรับแอปพลิเคชัน Map Marker ที่มี Prisma ORM และ Swagger documentation

## 📋 สารบัญ

- [ข้อกำหนด](#ข้อกำหนด)
- [การติดตั้ง](#การติดตั้ง)
- [การใช้งาน](#การใช้งาน)
- [โครงสร้าง Project](#โครงสร้าง-project)
- [API Documentation](#api-documentation)
- [Environment Variables](#environment-variables)

## ⚙️ ข้อกำหนด

- Node.js >= 14.x
- npm หรือ pnpm
- PostgreSQL หรือ Database อื่น ๆ ที่ Prisma รองรับ

## 📦 การติดตั้ง

```bash
# ติดตั้ง dependencies
npm install
# หรือ
pnpm install

# สร้าง .env ไฟล์
cp .env.example .env

# รัน Prisma migrations
npx prisma migrate dev

# (เลือก) Seed database
npm run seed
```

## 🚀 การใช้งาน

### โหลด Development Server

```bash
npm run dev
```

Server จะทำงานที่ `http://localhost:3000`

### Build for Production

```bash
npm run build
```

### Start Production Server

```bash
npm start
```

### Prisma Studio

ดูและจัดการ database ผ่าน UI

```bash
npx prisma studio
```

## 📁 โครงสร้าง Project

```
src/
├── app.js                 # Express app configuration
├── server.js              # Server entry point
│
├── configs/               # การตั้งค่า
│   ├── env.config.js      # Environment variables validation
│   ├── prisma.config.js   # Prisma client configuration
│   └── swagger.config.js  # Swagger/OpenAPI documentation
│
├── controllers/           # Request handlers
│   ├── auth.controller.js
│   ├── health.controller.js
│   └── marker.controller.js
│
├── routes/                # API routes
│   ├── auth.route.js
│   ├── health.route.js
│   └── marker.route.js
│
├── services/              # Business logic
│   ├── auth.service.js
│   ├── health.service.js
│   └── marker.service.js
│
├── middlewares/           # Express middlewares
│   ├── auth.middleware.js
│   ├── validate.middleware.js
│   ├── notfound.middleware.js
│   └── errors/            # Error handling middlewares
│       ├── default-error.middleware.js
│       ├── jwt-error.middleware.js
│       ├── prisma-error.middleware.js
│       └── zod-error.middleware.js
│
├── schemas/               # Validation schemas (Zod)
│   ├── env.schema.js      # Environment variables validation
│   ├── user.schema.js     # User validation schemas
│   ├── marker.schema.js   # Marker validation schemas
│   └── query.schema.js    # Query parameters validation
│
├── documents/             # Swagger documentation
│   ├── auth.doc.js
│   ├── health.doc.js
│   └── marker.doc.js
│
├── dto/                   # Data Transfer Objects
│   ├── auth.dto.js
│   └── maker.dto.js
│
└── libs/                  # Utility libraries
    ├── hash.lib.js        # Password hashing utilities
    └── jwt.lib.js         # JWT token utilities

prisma/
├── schema.prisma          # Database schema definition
└── seed.js                # Database seeding script
```

## 🔌 API Documentation

### Swagger UI

ดูเอกสาร API ที่ `http://localhost:3000/api-docs`

### Authentication Endpoints

- `POST /api/auth/register` - สมัครสมาชิก
- `POST /api/auth/login` - เข้าสู่ระบบ
- `POST /api/auth/logout` - ออกจากระบบ

### Marker Endpoints

- `GET /api/markers` - ดูรายการ markers
- `GET /api/markers/:id` - ดูรายละเอียด marker
- `POST /api/markers` - สร้าง marker ใหม่
- `PUT /api/markers/:id` - แก้ไข marker
- `DELETE /api/markers/:id` - ลบ marker

### Health Check

- `GET /api/health` - ตรวจสอบสถานะ server

## 🔐 Environment Variables

สร้าง `.env` ไฟล์ในรูท directory:

```env
# Server Configuration
NODE_ENV=development
PORT=3000

# Database
DATABASE_URL=postgresql://user:password@localhost:5432/map_marker_db

# JWT
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRE=7d

# CORS
CORS_ORIGIN=http://localhost:5173

# API Documentation
SWAGGER_ENABLED=true
```

## 🛠️ Development

### เพิ่ม Routes ใหม่

1. สร้าง route file ใน `src/routes/`
2. สร้าง controller ใน `src/controllers/`
3. สร้าง service ใน `src/services/` (ถ้าจำเป็น)
4. สร้าง validation schema ใน `src/schemas/`
5. เพิ่ม route ใน `src/app.js`

### Prisma Migrations

```bash
# สร้าง migration ใหม่
npx prisma migrate dev --name add_new_field

# Reset database (ระวัง: ลบข้อมูลทั้งหมด)
npx prisma migrate reset
```

## 📚 Stack

- **Framework**: Express.js
- **Database ORM**: Prisma
- **Validation**: Zod
- **Authentication**: JWT
- **API Documentation**: Swagger/OpenAPI
- **Password Hashing**: bcryptjs

## 🐛 Error Handling

Server มี error handling middlewares ที่จัดการ:

- JWT errors
- Prisma database errors
- Zod validation errors
- Default error responses
