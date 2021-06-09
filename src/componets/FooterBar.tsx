import React from 'react';
// import Link from 'next/link';

const FooterBar = () => {
  return (
    <footer className="flex justify-center px-4 text-white bg-gradient-to-r from-red-500 to-red-700">
      <div className=" py-6 max-w-7xl mx-auto">
        <div className="text-md font-bold  lg:text-2xl text-center">◉ Disclamier ◉</div>
        <h6 className="text-md font-bold text-center lg:text-md">
          All company names or logos are ® trademarks of their respective holders. The use of them
          does not imply any affiliation with or endorsement by them & we don't host any copyright
          images or videos on this website, all rights belong to their respective owners.
        </h6>

        <hr className="h-px mt-6 " />

        <div className="flex flex-col items-center justify-between mt-6 md:flex-row">
          <div>
            <a
              href="#"
              className="text-xl font-bold text-white hover:text-gray-700 dark:hover:text-gray-300"
            >
              ➤ Pages
            </a>
          </div>

          <div className=" mt-4 md:m-0">
            <div className="-mx-4 ">
              <a
                href="#"
                className="px-2 text-sm font-medium text-white hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                DMCA
              </a>
              <a
                href="#"
                className="px-4 text-sm font-medium text-white dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Disclamier
              </a>
              <a
                href="#"
                className="px-2 text-sm font-medium text-white dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="px-2 text-sm font-medium text-white dark:text-gray-200 hover:text-gray-700 dark:hover:text-gray-400 hover:underline"
              >
                Contact
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default FooterBar;
