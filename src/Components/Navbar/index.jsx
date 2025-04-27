import AnchorLink from "react-anchor-link-smooth-scroll";
function Navbar() {
  return (
    <nav class="relative w-full z-20 top-0 left-0">
      <div class="max-w-screen-xl flex flex-wrap items-center justify-normal mx-auto mt-6 ml-10">
        <div
          class="items-center justify-normal hidden h-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul class="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg md:flex-row md:space-x-8 md:mt-0 md:border-0 dark:border-gray-700">
            <li>
              <AnchorLink
                href="#Experiences"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Experiences
              </AnchorLink>
            </li>
            <li>
              <AnchorLink
                href="#Projects"
                className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700"
                aria-current="page"
              >
                Projects
              </AnchorLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
