import {
  useLoaderData
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  React,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/posts/$slug.tsx?browser
init_react();

// app/routes/posts/$slug.tsx
init_react();
function PostSlug() {
  const { slug } = useLoaderData();
  return /* @__PURE__ */ React.createElement("main", {
    className: "mx-auto max-w-4xl"
  }, /* @__PURE__ */ React.createElement("h1", {
    className: "my-6 border-b-2 text-center text-3xl"
  }, "Some Post ", slug));
}
export {
  PostSlug as default
};
//# sourceMappingURL=/build/routes/posts/$slug-U6ORY6K7.js.map
