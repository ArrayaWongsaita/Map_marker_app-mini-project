// src/features/home/pages/HomePage.jsx
import { Button } from '@/shared/components/ui/button';

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
      <Button className="text-foreground">เริ่มต้นใช้งาน</Button>
    </main>
  );
}
