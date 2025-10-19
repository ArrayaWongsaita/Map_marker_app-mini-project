// src/pages/auth/LoginPage.jsx
import AuthCard from '@/components/cards/AuthCard';

export default function LoginPage() {
  return (
    <div className="flex justify-center items-center min-h-screen -mt-11">
      <AuthCard type="login" />
    </div>
  );
}
