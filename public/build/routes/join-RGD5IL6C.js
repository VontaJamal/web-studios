import {
  require_user
} from "/build/_shared/chunk-BSRRWFSI.js";
import "/build/_shared/chunk-X4HKXXWQ.js";
import {
  require_session
} from "/build/_shared/chunk-XMI3USBO.js";
import {
  Form,
  Link,
  useActionData,
  useSearchParams
} from "/build/_shared/chunk-UKC4VJLO.js";
import {
  __toESM,
  init_react,
  require_react
} from "/build/_shared/chunk-NTN7YPXJ.js";

// browser-route-module:/Users/vonta/Documents/Code Repos/web-studios/app/routes/join.tsx?browser
init_react();

// app/routes/join.tsx
init_react();
var React = __toESM(require_react());
var import_session = __toESM(require_session());
var import_user = __toESM(require_user());
var meta = () => {
  return {
    title: "Sign Up"
  };
};
function Join() {
  var _a, _b, _c, _d, _e;
  const [searchParams] = useSearchParams();
  const redirectTo = (_a = searchParams.get("redirectTo")) != null ? _a : void 0;
  const actionData = useActionData();
  const emailRef = React.useRef(null);
  const passwordRef = React.useRef(null);
  React.useEffect(() => {
    var _a2, _b2, _c2, _d2;
    if ((_a2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _a2.email) {
      (_b2 = emailRef.current) == null ? void 0 : _b2.focus();
    } else if ((_c2 = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c2.password) {
      (_d2 = passwordRef.current) == null ? void 0 : _d2.focus();
    }
  }, [actionData]);
  return /* @__PURE__ */ React.createElement("div", {
    className: "flex min-h-full flex-col justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "mx-auto w-full max-w-md px-8"
  }, /* @__PURE__ */ React.createElement(Form, {
    method: "post",
    className: "space-y-6"
  }, /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "email",
    className: "block text-sm font-medium text-gray-700"
  }, "Email address"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    ref: emailRef,
    id: "email",
    required: true,
    autoFocus: true,
    name: "email",
    type: "email",
    autoComplete: "email",
    "aria-invalid": ((_b = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _b.email) ? true : void 0,
    "aria-describedby": "email-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_c = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _c.email) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "email-error"
  }, actionData.errors.email))), /* @__PURE__ */ React.createElement("div", null, /* @__PURE__ */ React.createElement("label", {
    htmlFor: "password",
    className: "block text-sm font-medium text-gray-700"
  }, "Password"), /* @__PURE__ */ React.createElement("div", {
    className: "mt-1"
  }, /* @__PURE__ */ React.createElement("input", {
    id: "password",
    ref: passwordRef,
    name: "password",
    type: "password",
    autoComplete: "new-password",
    "aria-invalid": ((_d = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _d.password) ? true : void 0,
    "aria-describedby": "password-error",
    className: "w-full rounded border border-gray-500 px-2 py-1 text-lg"
  }), ((_e = actionData == null ? void 0 : actionData.errors) == null ? void 0 : _e.password) && /* @__PURE__ */ React.createElement("div", {
    className: "pt-1 text-red-700",
    id: "password-error"
  }, actionData.errors.password))), /* @__PURE__ */ React.createElement("input", {
    type: "hidden",
    name: "redirectTo",
    value: redirectTo
  }), /* @__PURE__ */ React.createElement("button", {
    type: "submit",
    className: "w-full rounded bg-blue-500  py-2 px-4 text-white hover:bg-blue-600 focus:bg-blue-400"
  }, "Create Account"), /* @__PURE__ */ React.createElement("div", {
    className: "flex items-center justify-center"
  }, /* @__PURE__ */ React.createElement("div", {
    className: "text-center text-sm text-gray-500"
  }, "Already have an account?", " ", /* @__PURE__ */ React.createElement(Link, {
    className: "text-blue-500 underline",
    to: {
      pathname: "/login",
      search: searchParams.toString()
    }
  }, "Log in"))))));
}
export {
  Join as default,
  meta
};
//# sourceMappingURL=/build/routes/join-RGD5IL6C.js.map
