export const formatDate = (datetime: string | Date) => {
  const myDatetime = new Date(datetime);

  const date = myDatetime.toLocaleDateString('AU', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });

  return date;
};

export const formatTime = (datetime: string | Date) => {
  const myDatetime = new Date(datetime);

  const time = myDatetime.toLocaleTimeString('AU', {
    hour: '2-digit',
    minute: '2-digit',
  });

  return time;
};
