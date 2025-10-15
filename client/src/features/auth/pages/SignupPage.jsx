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
import SignupForm from '../components/form/SignupForm';

export default function SignupPage() {
  return (
    <main>
      <div className="flex min-h-screen items-center justify-center bg-background">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle>Signup to your account</CardTitle>
            <CardDescription>
              Enter your credentials to create your account
            </CardDescription>
            <CardAction>
              <Button variant="link">Sign in</Button>
            </CardAction>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </div>
    </main>
  );
}
