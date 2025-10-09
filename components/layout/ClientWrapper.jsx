'use client';

import { Suspense } from 'react';
import Loading from '@/components/layout/Loading';

export default function ClientWrapper({ children }) {
  return <Suspense fallback={<Loading />}>{children}</Suspense>;
}
