// client/src/components/ui/QueryInput.jsx

import { Input } from './input';
import { useSearchParams, useNavigate, useLocation } from 'react-router';
import { useDebouncedCallback } from 'use-debounce';

export default function QueryInput({
  queryKey = 'search',
  placeholder = 'ค้นหา...',
  debounceDelay = 500,
  className = '',
}) {
  const navigate = useNavigate();
  const location = useLocation();
  const [searchParams] = useSearchParams();
  const initialValue = searchParams.get(queryKey) || '';

  const debouncedSearchValue = useDebouncedCallback((value) => {
    // setSearchValue(value);
    const params = new URLSearchParams(location.search);
    if (value) {
      params.set(queryKey, value);
    } else {
      params.delete(queryKey);
    }
    navigate({ pathname: location.pathname, search: params.toString() });
  }, debounceDelay);

  return (
    <Input
      type="text"
      placeholder={placeholder}
      defaultValue={initialValue}
      onChange={(e) => debouncedSearchValue(e.target.value)}
      className={className}
    />
  );
}
