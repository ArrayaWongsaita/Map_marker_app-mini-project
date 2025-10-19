// src/pages/home/HomePage.jsx

import { Button } from '@/components/ui/button';
import { ROUTES } from '@/constants/router.constant';
import { Link } from 'react-router';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen ">
      <h1 className="text-4xl font-bold text-primary mb-4">ยินดีต้อนรับ 🗺️</h1>
      <p className="text-lg text-foreground max-w-md text-center">
        ยินดีต้อนรับสู่ <span className="font-semibold">Marker Map </span>
        สร้างและบันทึกสถานที่โปรดของคุณ ปักหมุดบนแผนที่ แชร์ไอเดีย
        หรือค้นหาสถานที่ใหม่ ๆ ได้ง่าย ๆ ในคลิกเดียว
      </p>
      <br />
      <Button asChild>
        <Link className="text-white" to={ROUTES.MARKERS}>
          เริ่มต้นใช้งาน
        </Link>
      </Button>
    </main>
  );
}
