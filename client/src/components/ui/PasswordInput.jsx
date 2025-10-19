// client/src/components/ui/PasswordInput.jsx
import React, { useState } from 'react';
import { Input } from '@/components/ui/input';
import { EyeIcon, EyeOffIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

const PasswordInput = React.forwardRef(({ className, ...props }, ref) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <div className={cn('relative', className)}>
      <Input type={showPassword ? 'text' : 'password'} ref={ref} {...props} />
      <div className="absolute inset-y-0 right-0 flex items-center pr-3">
        {showPassword ? (
          <EyeOffIcon
            className="h-5 w-5 text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        ) : (
          <EyeIcon
            className="h-5 w-5 text-gray-400 cursor-pointer"
            onClick={togglePasswordVisibility}
          />
        )}
      </div>
    </div>
  );
});

PasswordInput.displayName = 'PasswordInput';

export { PasswordInput };
