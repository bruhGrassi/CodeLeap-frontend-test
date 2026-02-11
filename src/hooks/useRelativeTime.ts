import { useState, useEffect, useMemo, useCallback } from 'react';

export const useRelativeTime = (datetime: string, locale = 'en'): string => {
  
  const rtf = useMemo(() => new Intl.RelativeTimeFormat(locale, { numeric: 'auto' }), [locale]);

  const calculateRelativeTime = useCallback((): string => {
    const now = new Date();
    const date = new Date(datetime);

    if (isNaN(date.getTime())) return 'Invalid date';

    const diffInSeconds = Math.floor((date.getTime() - now.getTime()) / 1000);

    
    const units: { unit: Intl.RelativeTimeFormatUnit; amount: number }[] = [
      { unit: 'year', amount: 31536000 },
      { unit: 'month', amount: 2592000 },
      { unit: 'week', amount: 604800 },
      { unit: 'day', amount: 86400 },
      { unit: 'hour', amount: 3600 },
      { unit: 'minute', amount: 60 },
      { unit: 'second', amount: 1 },
    ];

    for (const { unit, amount } of units) {
      if (Math.abs(diffInSeconds) >= amount || unit === 'second') {
        const value = Math.round(diffInSeconds / amount);
        return rtf.format(value, unit);
      }
    }

    return rtf.format(0, 'second');
  }, [datetime, rtf]);

  const [relativeTime, setRelativeTime] = useState<string>(() => calculateRelativeTime());

  useEffect(() => {
    const interval = setInterval(() => {
      setRelativeTime(calculateRelativeTime());
    }, 60000); 

    return () => clearInterval(interval);
  }, [calculateRelativeTime]);

  return relativeTime;
};