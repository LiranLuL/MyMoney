export const convertForPieChart = (massive) => {
    const data = massive?.map((entry) => {
      return {
        id: entry.name,
        label: entry.name,
        value: entry.amount,
      };
    });
    return data ? data : [];
  };