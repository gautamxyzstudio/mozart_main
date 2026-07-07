'use client';
import { useEffect } from 'react';
import clarity from '@microsoft/clarity';

const ClarityTracker = () => {
  useEffect(() => {
    clarity.init(process.env.NEXT_PUBLIC_CLARITY_ID ?? '');
  }, []);

  return null;
};

export default ClarityTracker;
 