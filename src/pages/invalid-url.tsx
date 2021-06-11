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
            title="Invalid Url - SaveRoid"
            canonical={typeof window !== 'undefined' ? window.location.href : ''}
            description="Invalid Url - SaveRoid"
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
            Invalid Url!! <b>{router.query.url}</b>. Check Supported Sites ⇣ Below or{' '}
            <b> Sometime Tools Does Not Work So Please Try Again By Pasting Link On The Box</b>
          </p>
        </div>
        <br />
        <AbSites></AbSites>
      </Main>
    </>
  );
};

export default invalid;
