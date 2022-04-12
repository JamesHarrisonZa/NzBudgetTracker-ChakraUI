export const getCurrentDateThisMonth = (): Date => new Date();

export const getFirstOfDateThisMonth = (): Date => {
  return new Date(
    getCurrentDateThisMonth().getFullYear(),
    getCurrentDateThisMonth().getMonth(),
    1
  );
};

export const getFirstOfDateLastMonth = (): Date => {
  return new Date(
    getCurrentDateThisMonth().getFullYear(),
    getCurrentDateThisMonth().getMonth() - 1,
    1
  );
};

export const getLastOfDateLastMonth = (): Date => {
  const date = getFirstOfDateThisMonth();
  date.setDate(date.getDate() - 1);
  return date;
};
