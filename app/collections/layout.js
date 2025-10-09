'use client'
import Loading from '@/components/layout/Loading';
import { Suspense } from 'react';

export default function CollectionsLayout({children}) {
  return (
    <Suspense fallback={<Loading/>}>
          {children}
    </Suspense>
  );
}