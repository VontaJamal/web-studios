import {
  useMatches
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// app/utils.ts
init_react();
var import_react2 = __toESM(require_react());
function useMatchesData(id) {
  const matchingRoutes = useMatches();
  const route = (0, import_react2.useMemo)(() => matchingRoutes.find((route2) => route2.id === id), [matchingRoutes, id]);
  return route == null ? void 0 : route.data;
}
function isUser(user) {
  return user && typeof user === "object" && typeof user.email === "string";
}
function useOptionalUser() {
  const data = useMatchesData("root");
  if (!data || !isUser(data.user)) {
    return void 0;
  }
  return data.user;
}
function useUser() {
  const maybeUser = useOptionalUser();
  if (!maybeUser) {
    throw new Error("No user found in root loader, but user is required by useUser. If user is optional, try useOptionalUser instead.");
  }
  return maybeUser;
}

export {
  useOptionalUser,
  useUser
};
//# sourceMappingURL=/build/_shared/chunk-FYBR2SDX.js.map
