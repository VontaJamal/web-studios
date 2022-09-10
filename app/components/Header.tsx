export default function Header() {
  return (
    <nav>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 justify-between">
          <div className="flex">
            <div className="flex flex-shrink-0 items-center">
              <img
                className="block h-8 w-auto lg:hidden"
                src="/assets/ws.svg"
                alt="Workflow"
              />
              <img
                className="hidden h-12 w-auto lg:block"
                src="/assets/ws.svg"
                alt="Workflow"
              />
            </div>
            <div className="hidden sm:-my-px sm:ml-6 sm:flex sm:space-x-8">
              <button
                className="inline-flex items-center border-b-2 border-custom-primary px-1 pt-1 text-sm font-medium text-gray-900"
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
