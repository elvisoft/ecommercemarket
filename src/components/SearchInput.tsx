'use client';
import React from 'react';
import { useRouter, useSearchParams } from 'next/navigation';

export default function SearchInput({ initialValue }: { initialValue?: string }) {
  const [value, setValue] = React.useState(initialValue || '');
  const router = useRouter();
  const searchParams = useSearchParams();

  React.useEffect(() => {
    const timeout = setTimeout(() => {
      const params = new URLSearchParams(searchParams.toString());
      if (value) {
        params.set('search', value);
      } else {
        params.delete('search');
      }
      router.replace(`?${params.toString()}`);
    }, 400);

    return () => clearTimeout(timeout);
    // eslint-disable-next-line
  }, [value]);

  return (
    <input
      type="text"
      placeholder="Buscar por nombre o descripción..."
      value={value}
      onChange={e => setValue(e.target.value)}
      style={{ padding: '0.5rem', margin: '1rem 0', width: '100%' }}
    />
  );
}