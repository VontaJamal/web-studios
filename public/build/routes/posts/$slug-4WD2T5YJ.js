import {
  require_post
} from "/build/_shared/chunk-SUOXNGK2.js";
import {
  useLoaderData
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
var import_post = __toESM(require_post());
function PostSlug() {
  const { post } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto max-w-4xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "my-6 border-b-2 text-center text-3xl"
  }, post.title));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-4WD2T5YJ.js.map
