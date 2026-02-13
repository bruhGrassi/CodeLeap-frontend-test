import { useState, useEffect, useMemo } from "react";

const TIME_UNITS: { unit: Intl.RelativeTimeFormatUnit; amount: number }[] = [
  { unit: "year", amount: 31536000 },
  { unit: "month", amount: 2592000 },
  { unit: "week", amount: 604800 },
  { unit: "day", amount: 86400 },
  { unit: "hour", amount: 3600 },
  { unit: "minute", amount: 60 },
  { unit: "second", amount: 1 },
];

function getRelativeTime(
  datetime: string,
  rtf: Intl.RelativeTimeFormat,
): string {
  const date = new Date(datetime);
  if (isNaN(date.getTime())) return "Invalid date";

  const diffInSeconds = Math.floor((date.getTime() - Date.now()) / 1000);

  for (const { unit, amount } of TIME_UNITS) {
    if (Math.abs(diffInSeconds) >= amount || unit === "second") {
      return rtf.format(Math.round(diffInSeconds / amount), unit);
    }
  }

  return rtf.format(0, "second");
}

/**
 * Converts a datetime string into a relative time format
 *
 * @param {string} datetime - ISO 8601 formatted datetime string to convert
 *                            Example: "2025-02-10T14:30:00Z"
 * @returns {string} Relative time string formatted according to locale
 *                   Examples: "2 hours ago", "in 3 days", "Invalid date"
 */
export const useRelativeTime = (datetime: string, locale = "en"): string => {
  const rtf = useMemo(
    () => new Intl.RelativeTimeFormat(locale, { numeric: "auto" }),
    [locale],
  );

  const [, setTick] = useState(0);

  // Update every minute to keep the relative time accurate
  useEffect(() => {
    const interval = setInterval(() => setTick((t) => t + 1), 60000);
    return () => clearInterval(interval);
  }, []);

  return getRelativeTime(datetime, rtf);
};
