// client/src/components/cards/AuthCard.jsx
import { Link } from 'react-router';
import { Button } from '../ui/button';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '../ui/card';
import RegisterForm from '../forms/RegisterForm';
import { ROUTES } from '@/constants/router.constant';
import LoginForm from '../forms/LoginForm';

const LoginData = {
  title: 'Login to your account',
  description: 'Enter your email below to login to your account',
  actionText: 'Register',
  actionRoute: ROUTES.REGISTER,
  form: <LoginForm />,
};

const RegisterData = {
  title: 'Create an account',
  description: 'Enter your email below to create a new account.',
  actionText: 'Login',
  actionRoute: ROUTES.LOGIN,
  form: <RegisterForm />,
};

const AuthCardData = {
  register: RegisterData,
  login: LoginData,
};

export default function AuthCard({ type = 'register' }) {
  const { title, description, actionText, actionRoute, form } =
    AuthCardData[type];

  return (
    <div>
      <Card className="min-w-80">
        {/* header */}
        <CardHeader>
          {/* title  */}
          <CardTitle>{title}</CardTitle>
          {/* description */}
          <CardDescription>{description}</CardDescription>
          {/* action button */}
          <CardAction>
            <Button variant="link">
              <Link to={actionRoute}>{actionText}</Link>
            </Button>
          </CardAction>
        </CardHeader>
        {/* content */}
        <CardContent>{form}</CardContent>
      </Card>
    </div>
  );
}
