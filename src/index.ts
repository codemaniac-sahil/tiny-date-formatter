export function formatDate(
  date: Date,
  format: string,
  locale: string = "en"
): string {
  const pad = (n: number) => n.toString().padStart(2, "0");

  const formatter = new Intl.DateTimeFormat(locale, {
    day: "2-digit",
    month: "long",
    year: "numeric",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });

  const parts = Object.fromEntries(
    formatter.formatToParts(date).map(({ type, value }) => [type, value])
  );

  const map: Record<string, string> = {
    YYYY: date.getFullYear().toString(),
    MM: pad(date.getMonth() + 1),
    DD: pad(date.getDate()),
    HH: pad(date.getHours()),
    mm: pad(date.getMinutes()),
    ss: pad(date.getSeconds()),
    MMMM: parts.month || "", // Localized month name
  };

  return format.replace(
    /YYYY|MMMM|MM|DD|HH|mm|ss/g,
    (match) => map[match] || match
  );
}
