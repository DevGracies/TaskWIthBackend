export const serializeUser = (user) => {
  const { password, ...rest } = user;
  return rest;
};
