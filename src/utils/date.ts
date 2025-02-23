
export const formatDate = (date: Date): string => {
  const monthMap: string[] = [
    'Jan', 'Fev', 'Mar', 'Avr', 'Mai', 'Juin', 'Juil', 'Aou', 'Sep', 'Oct', 'Nov', 'Dec'
  ];

  const day = date.getDate();
  const month = monthMap[date.getMonth()];
  const year = date.getFullYear();

  return `${day} ${month} ${year}`;
};