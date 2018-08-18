function toPercentage(input) {
  const numericPercent = Math.round(input * 100);
  return `${numericPercent}%`;
}

export {
  toPercentage
}
