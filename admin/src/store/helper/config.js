export const getConfig = () => {
  const config = {
    headers: {
      authorization: localStorage.getItem("token"), //TODO to change it to recoil
    },
  };
  return config;
};
