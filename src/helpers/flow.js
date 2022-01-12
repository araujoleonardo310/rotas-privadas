import { ROUTES } from "../constants/";

const goTo = (path, params) => {
  window.location.replace(
    decodeURIComponent((path || ROUTES.HOME) + (params ? params : ""))
  );
};

export const flowService = {
  goTo,
};
