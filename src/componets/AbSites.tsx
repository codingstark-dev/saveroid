import React from 'react';
import Link from 'next/link';
const AbSites = () => {
  return (
    <div>
      <div className="text-center">
        <hr className="w-10 m-auto" />
        <h5 className="text-2xl px-2 text-current items-center font-medium">
          <span className="tracking-wide">【</span>
          <span className="text-red-500 tracking-wide"> Supported </span>
          <span>Sites </span>
          <span className="tracking-wide text-red-500">】</span>
        </h5>
        <hr className="w-10 m-auto mt-2" />
      </div>
      <br />
      <div className="grid md:grid-cols-3 grid-cols-2 break-normal   text-base">
        <div
          className="mx-2 relative px-4 py-3 shadow-inner leading-normal text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          <Link href="/tools/pinterest-video-downloader">
            <div className="flex m-auto text-center items-center">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fillRule="evenodd"
                strokeLinejoin="round"
                strokeMiterlimit="2"
                clipRule="evenodd"
                className="w-10"
                viewBox="0 0 512 512"
              >
                <g fillRule="nonzero">
                  <path
                    fill="#fff"
                    d="M511.999 256.002c0 141.373-114.606 255.979-255.98 255.979C114.646 511.981.04 397.375.04 256.002.04 114.628 114.646.022 256.019.022c141.374 0 255.98 114.606 255.98 255.98z"
                  ></path>
                  <path
                    fill="#e71d27"
                    d="M255.998.001C114.614.001 0 114.618 0 255.999 0 364.455 67.475 457.17 162.707 494.47c-2.24-20.255-4.261-51.405.889-73.518 4.65-19.978 30.018-127.248 30.018-127.248s-7.659-15.334-7.659-38.008c0-35.596 20.632-62.171 46.323-62.171 21.839 0 32.391 16.399 32.391 36.061 0 21.966-13.984 54.803-21.203 85.235-6.03 25.482 12.779 46.261 37.909 46.261 45.503 0 80.477-47.976 80.477-117.229 0-61.293-44.045-104.149-106.932-104.149-72.841 0-115.597 54.634-115.597 111.095 0 22.004 8.475 45.596 19.052 58.421 2.09 2.535 2.398 4.758 1.776 7.343-1.945 8.087-6.262 25.474-7.111 29.032-1.117 4.686-3.711 5.681-8.561 3.424-31.974-14.884-51.963-61.627-51.963-99.174 0-80.755 58.672-154.915 169.148-154.915 88.806 0 157.821 63.279 157.821 147.85 0 88.229-55.629 159.232-132.842 159.232-25.94 0-50.328-13.476-58.674-29.394 0 0-12.838 48.878-15.95 60.856-5.782 22.237-21.382 50.109-31.818 67.11C204.156 508.001 229.61 512 255.998 512c141.389 0 256.003-114.612 256.003-256.001C512.001 114.618 397.387.001 255.998.001z"
                  ></path>
                </g>
              </svg>
              <span className="pl-5">Pinterest</span>
            </div>
          </Link>
        </div>
        <div
          className="mx-2 relative px-4 py-3 shadow-inner leading-normal text-red-700 bg-red-100 rounded-lg"
          role="alert"
        >
          <div className="flex m-auto text-center items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="w-10" viewBox="0 0 32 32">
              <g>
                <path
                  fill="#FF8A80"
                  d="M23 29.5H9A6.5 6.5 0 012.5 23V9A6.5 6.5 0 019 2.5h14A6.5 6.5 0 0129.5 9v14a6.5 6.5 0 01-6.5 6.5z"
                ></path>
                <path
                  fill="#455A64"
                  d="M23 30H9c-3.86 0-7-3.14-7-7V9c0-3.86 3.14-7 7-7h14c3.86 0 7 3.14 7 7v14c0 3.86-3.14 7-7 7zM9 3C5.691 3 3 5.691 3 9v14c0 3.309 2.691 6 6 6h14c3.309 0 6-2.691 6-6V9c0-3.309-2.691-6-6-6H9z"
                ></path>
                <path
                  fill="#FFF"
                  d="M20 26h-8c-3.309 0-6-2.691-6-6v-8c0-3.309 2.691-6 6-6h8c3.309 0 6 2.691 6 6v8c0 3.309-2.691 6-6 6zM12 8c-2.206 0-4 1.794-4 4v8c0 2.206 1.794 4 4 4h8c2.206 0 4-1.794 4-4v-8c0-2.206-1.794-4-4-4h-8z"
                ></path>
                <path
                  fill="#FFF"
                  d="M21.5 11.75c-.689 0-1.25-.561-1.25-1.25s.561-1.25 1.25-1.25 1.25.561 1.25 1.25-.561 1.25-1.25 1.25zM16 21c-2.757 0-5-2.243-5-5s2.243-5 5-5 5 2.243 5 5-2.243 5-5 5zm0-8c-1.654 0-3 1.346-3 3s1.346 3 3 3 3-1.346 3-3-1.346-3-3-3z"
                ></path>
              </g>
            </svg>
            <span className="pl-5">Instagram</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AbSites;
