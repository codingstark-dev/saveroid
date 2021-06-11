import React from 'react';
import AbSites from '../componets/AbSites';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
const Index = () => {
  return (
    <>
      <Main
        meta={
          <Meta
            title="SaveRoid ⇣ - All in One Video Downloader for free 2021"
            description="Download your favorite site videos free with SaveRoid with many features - All in One Video Downloader for free 2021"
            canonical={typeof window !== 'undefined' ? window.location.href : ''}
            ogimg={{
              url: 'https://saveroid.com/android-icon-192x192.png',
              width: 192,
              height: 192,
              alt: 'SaveRoid - All in one downloader',
            }}
            keyword={
              'SaveRoid, Save Roid, Pinterest Video Downloader, Instagram Reels Downloader, Pinterest Story Downloader'
            }
          />
        }
        dlform={true}
        title="All in One Video Downloader"
        subtitle="Download video, Image and Gif online"
      >
        <br />
        <AbSites></AbSites>
      </Main>
    </>
  );
};

export default Index;
