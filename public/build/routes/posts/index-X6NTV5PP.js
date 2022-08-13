import {
  Link,
  useLoaderData
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/posts/index.tsx?browser
init_react();

// app/routes/posts/index.tsx
init_react();
function Posts() {
  const { posts } = useLoaderData();
  console.log(posts);
  return /* @__PURE__ */ React.createElement("main", null, /* @__PURE__ */ React.createElement("ul", null, posts.map((post) => /* @__PURE__ */ React.createElement("li", {
    key: post.slug
  }, /* @__PURE__ */ React.createElement(Link, {
    to: post.slug,
    className: "text-blue-600 underline"
  }, post.title)))));
}
export {
  Posts as default
};
//# sourceMappingURL=/build/routes/posts/index-X6NTV5PP.js.map
