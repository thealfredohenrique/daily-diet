export function formatPercentage(value: number) {
  return `${value.toFixed(2).replace(".", ",")}%`;
}
