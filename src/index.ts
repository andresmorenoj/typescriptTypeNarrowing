function triple(value: string | number) {
  if (typeof value === "string") {
    return value.repeat(3);
  }

  return value * 3;
}
