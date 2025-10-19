// client/src/components/providers/theme-provider.jsx
// นำเข้า dependencies ที่จำเป็นจาก React
import { createContext, useContext, useEffect, useState } from 'react';

// สร้าง Context สำหรับจัดการ theme โดยมี default value
const ThemeProviderContext = createContext({
  theme: 'system', // ค่า theme เริ่มต้น
  setTheme: () => null, // ฟังก์ชันสำหรับเปลี่ยน theme
});

// Component หลักสำหรับจัดการ theme ของแอป
export function ThemeProvider({
  children, // component ลูกที่จะถูก wrap
  defaultTheme = 'system', // theme เริ่มต้น (system, light, หรือ dark)
  storageKey = 'vite-ui-theme', // key สำหรับเก็บค่าใน localStorage
  ...props // props อื่นๆ ที่เหลือ
}) {
  // สร้าง state สำหรับเก็บค่า theme ปัจจุบัน
  const [theme, setTheme] = useState(
    // ดึงค่า theme จาก localStorage ถ้าไม่มีให้ใช้ defaultTheme
    () => localStorage.getItem(storageKey) || defaultTheme
  );

  // useEffect ที่ทำงานทุกครั้งที่ theme เปลี่ยน
  useEffect(() => {
    const root = window.document.documentElement; // อ้างอิง HTML root element
    root.classList.remove('light', 'dark'); // ลบ class light และ dark ออกก่อน

    // ถ้า theme เป็น 'system' ให้ตรวจสอบ system preference
    if (theme === 'system') {
      // ตรวจสอบว่า OS ใช้ dark mode หรือไม่
      const systemTheme = window.matchMedia('(prefers-color-scheme: dark)')
        .matches
        ? 'dark' // ถ้าใช่ให้ใช้ dark
        : 'light'; // ถ้าไม่ใช่ให้ใช้ light
      root.classList.add(systemTheme); // เพิ่ม class ตาม system theme
      return; // หยุดการทำงาน
    }

    // ถ้าไม่ใช่ system ให้เพิ่ม class ตาม theme ที่เลือก
    root.classList.add(theme);
  }, [theme]); // dependency array - ทำงานเมื่อ theme เปลี่ยน

  // สร้าง value object สำหรับ Context Provider
  const value = {
    theme, // ค่า theme ปัจจุบัน
    setTheme: (theme) => {
      // ฟังก์ชันสำหรับเปลี่ยน theme
      localStorage.setItem(storageKey, theme); // บันทึกค่าลง localStorage
      setTheme(theme); // อัพเดท state
    },
  };

  // return Provider component พร้อม value และ children
  return (
    <ThemeProviderContext.Provider {...props} value={value}>
      {children}
    </ThemeProviderContext.Provider>
  );
}

// Custom Hook สำหรับเข้าถึง theme context
export const useTheme = () => {
  const context = useContext(ThemeProviderContext); // ดึง context

  // ตรวจสอบว่าใช้ hook นี้ภายใน ThemeProvider หรือไม่
  if (context === undefined)
    throw new Error('useTheme must be used within a ThemeProvider'); // ถ้าไม่ใช่ให้ throw error

  return context; // คืนค่า context (theme และ setTheme)
};
