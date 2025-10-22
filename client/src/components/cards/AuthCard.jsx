import { ROUTES } from '@/constants/router.constant';
import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../ui/card';
import { Button } from '../ui/button';
import { Link } from 'react-router';
import RegisterForm from '../forms/RegisterForm';
import LoginForm from '../forms/LoginForm';

const RegisterData = {
  title: 'Create an account',
  description: 'Enter your emil below to create a new account',
  actionText: 'Login',
  actionRote: ROUTES.LOGIN,
  form: <RegisterForm />,
};
const LoginData = {
  title: 'Login to your account',
  description: 'Enter your emil below to login a  account',
  actionText: 'Register',
  actionRote: ROUTES.REGISTER,
  form: <LoginForm />,
};

const AuthCardData = {
  register: RegisterData,
  login: LoginData,
};

export default function AuthCard({ type = 'register' }) {
  const { title, description, actionText, actionRote, form } =
    AuthCardData[type];

  return (
    <Card className="min-w-80">
      {/* header */}
      <CardHeader>
        <CardTitle>{title}</CardTitle>
        <CardDescription>{description}</CardDescription>
        <CardAction>
          <Button variant="link">
            <Link to={actionRote}>{actionText}</Link>
          </Button>
        </CardAction>
      </CardHeader>
      {/* content */}
      <CardContent>{form}</CardContent>
    </Card>
  );
}
