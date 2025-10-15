// src/features/auth/pages/SignupPage.jsx

import { Button } from '@/shared/components/ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/shared/components/ui/card';
import SigninForm from '../components/form/SigninForm';

export default function SigninPage() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Signin to your account</CardTitle>
            <CardDescription>
              Enter your credentials to access your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign up</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <SigninForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
