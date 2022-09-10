import { Link } from "@remix-run/react";

export default function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <Link to={"/"}>
                <img
                  className="hidden h-16 w-auto lg:block mt-4"
                  src="/assets/ws.svg"
                  alt="Workflow"
                />
              </Link>
              <Link to={"/"}>
                <img
                  className="block h-14 w-auto lg:hidden mt-4"
                  src="/assets/ws.svg"
                  alt="Workflow"
                />
              </Link>
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <button
                className="inline-flex items-center border-b-2 border-custom-primary px-1 pt-1 font-medium"
                aria-current="page"
              >
                Blog
              </button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}
