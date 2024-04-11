export function formatDate(date: Date, separator = "/") {
  const day = String(date.getDate()).padStart(2, "0");
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const year = String(date.getFullYear()).slice(-2);

  return `${day}${separator}${month}${separator}${year}`;
}
