import {
  require_post
} from "/build/_shared/chunk-SUOXNGK2.js";
import {
  Form
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  React,
  __toESM,
  init_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/posts/admin/new.tsx?browser
init_react();

// app/routes/posts/admin/new.tsx
init_react();
var import_post = __toESM(require_post());
var inputClassName = `w-full rounded border border-gray-500 px-2 py-1 text-lg`;
function NewPost() {
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post"
  }, /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Title:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "title",
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", null, "Post Slug:", " ", /* @__PURE__ */ React.createElement("input", {
    type: "text",
    name: "slug",
    className: inputClassName
  }))), /* @__PURE__ */ React.createElement("p", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "markdown"
  }, "Markdown:"), /* @__PURE__ */ React.createElement("br", null), /* @__PURE__ */ React.createElement("textarea", {
    id: "markdown",
    rows: 20,
    name: "markdown",
    className: `${inputClassName} font-mono`
  })), /* @__PURE__ */ React.createElement("p", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400 disabled:bg-blue-300"
  }, "Create Post")));
}
export {
  NewPost as default
};
//# sourceMappingURL=/build/routes/posts/admin/new-A6CGODTB.js.map
