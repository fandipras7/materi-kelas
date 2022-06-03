export const createNewDate = () => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      const dateCreated = new Date().toLocaleTimeString();
      resolve(dateCreated);
    }, 2000);
  });
};
