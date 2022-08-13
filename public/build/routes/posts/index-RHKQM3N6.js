import {
  require_post
} from "/build/_shared/chunk-SUOXNGK2.js";
import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
var import_post = __toESM(require_post());
function Posts() {
  const { posts } = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement(Link, {
    to: "admin",
    className: "text-red-600 underline"
  }, "Admin"), /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug,
    className: "text-blue-600 underline"
  }, post.title)))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-RHKQM3N6.js.map
