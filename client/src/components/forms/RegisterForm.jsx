// client/src/components/forms/RegisterForm.jsx

import { useState } from 'react';
import { PasswordInput } from '../ui/PasswordInput';
import { Input } from '../ui/input';
import { Label } from '@radix-ui/react-label';
import { registerSchema } from '@/schema/user.schema';
import { Button } from '../ui/button';

const initialInputState = {
  email: '',
  password: '',
  confirmPassword: '',
};
export default function RegisterForm() {
  const [inputValue, setInputValue] = useState(initialInputState);
  const [errors, setErrors] = useState(initialInputState);

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setInputValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log(inputValue);
    const result = registerSchema.safeParse(inputValue);
    if (!result.success) {
      const formattedErrors = result.error.issues.reduce((acc, issue) => {
        const path = issue.path[0];
        if (!acc[path]) {
          acc[path] = issue.message;
        }
        return acc;
      }, {});
      setErrors(formattedErrors);
      return;
    }
    alert('Registered successfully!');
  };

  return (
    <form className="flex flex-col space-y-4 min-w-96" onSubmit={handleSubmit}>
      <div>
        <Label htmlFor="email" className="block mb-1">
          Email
        </Label>
        <Input
          name="email"
          value={inputValue.email}
          onChange={handleInputChange}
          placeholder="Email"
        />
        <span className="text-red-500 text-sm">{errors.email}</span>
      </div>
      <div>
        <Label htmlFor="password" className="block mb-1">
          Password
        </Label>
        <PasswordInput
          name="password"
          value={inputValue.password}
          onChange={handleInputChange}
          placeholder="Password"
        />
        <span className="text-red-500 text-sm">{errors.password}</span>
      </div>
      <div>
        <Label htmlFor="confirmPassword" className="block mb-1">
          Confirm Password
        </Label>
        <PasswordInput
          name="confirmPassword"
          value={inputValue.confirmPassword}
          onChange={handleInputChange}
          placeholder="Confirm Password"
        />
        <span className="text-red-500 text-sm">{errors.confirmPassword}</span>
      </div>
      <Button type="submit">Register</Button>
    </form>
  );
}
