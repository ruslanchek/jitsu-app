export function getTimestampWithZoneOffset(date: Date | string | number) {
  const dateParsed = new Date(date);
  return new Date(dateParsed.getTime() - dateParsed.getTimezoneOffset() * 60 * 1000);
}
