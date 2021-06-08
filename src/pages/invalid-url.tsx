import React from 'react';
import { useRouter } from 'next/router';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
import AbSites from '../componets/AbSites';
const invalid = () => {
  const router = useRouter();
  return (
    <>
      <Main
        meta={
          <Meta
            title="Next.js Boilerplate Presentation"
            description="Next js Boilerplate is the perfect starter code for your project. Build your React application with the Next.js framework."
          />
        }
        dlform={true}
        title="All in One Video Downloader"
        subtitle="Download video, Image and Gif online"
      >
        <br />
        <div
          className=" shadow-inner   mx-2 relative px-4 py-3 leading-normal text-white bg-red-500 rounded-lg"
          role="alert"
        >
          <p className="break-words">
            Invalid Url!! <b>{router.query.url}</b>. Check Supported Sites ⇣ Below.
          </p>
        </div>
        <br />
        <AbSites></AbSites>
      </Main>
    </>
  );
};

export default invalid;
