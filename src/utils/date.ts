export const getFormattedDate = (date: Date) => {
  return `${date.getMonth() + 1}-${date.getDate()}-${date.getFullYear()}`;
};
