export const validateLengthText = (text: string, min: number, max: number) => {
  if (text.length < min || text.length > max) {
    return false;
  }
  return true;
};
