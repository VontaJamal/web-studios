import {
  require_note
} from "/build/_shared/chunk-ATZBVMZP.js";
import {
  require_session
} from "/build/_shared/chunk-XMI3USBO.js";
import {
  Form,
  useActionData
} from "/build/_shared/chunk-NIR6ZYUP.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/notes/new.tsx?browser
init_react();

// app/routes/notes/new.tsx
init_react();
var React = __toESM(require_react());
var import_note = __toESM(require_note());
var import_session = __toESM(require_session());
function NewNotePage() {
  var _a, _b, _c, _d, _e, _f;
  const actionData = useActionData();
  const titleRef = React.useRef(null);
  const bodyRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.title) {
      (_b2 = titleRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.body) {
      (_d2 = bodyRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    style: {
      display: "flex",
      flexDirection: "column",
      gap: 8,
      width: "100%"
    }
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("span", null, "Title: "), /* @__PURE__ */ React.createElement("input", {
    ref: titleRef,
    name: "title",
    className: "flex-1 rounded-md border-2 border-blue-500 px-3 text-lg leading-loose",
    "aria-invalid": ((_a = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a.title) ? true : void 0,
    "aria-errormessage": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.title) ? "title-error" : void 0
  })), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.title) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "title-error"
  }, actionData.errors.title)), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    className: "flex w-full flex-col gap-1"
  }, /* @__PURE__ */ React.createElement("span", null, "Body: "), /* @__PURE__ */ React.createElement("textarea", {
    ref: bodyRef,
    name: "body",
    rows: 8,
    className: "w-full flex-1 rounded-md border-2 border-blue-500 py-2 px-3 text-lg leading-6",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.body) ? true : void 0,
    "aria-errormessage": ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.body) ? "body-error" : void 0
  })), ((_f = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _f.body) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "body-error"
  }, actionData.errors.body)), /* @__PURE__ */ React.createElement("div", {
    className: "text-right"
  }, /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "rounded bg-blue-500 py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Save")));
}
export {
  NewNotePage as default
};
//# sourceMappingURL=/build/routes/notes/new-3HWX7HRW.js.map
