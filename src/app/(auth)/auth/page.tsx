"use client"
import React, { useEffect } from 'react';
import { useRouter } from 'next/navigation';

const Page = () => {
  const router = useRouter();

  useEffect(() => {
    // Redirect to home when the component mounts
    router.push('/');
  }, [router]);

  return (
    <div>
      
    </div>
  );
};

export default Page;
