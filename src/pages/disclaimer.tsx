import React from 'react';
import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';

const disclaimer = () => {
  return (
    <div>
      {' '}
      <Main
        meta={
          <Meta
            title="Disclaimer | SaveRoid ⇣ - All in One Video Downloader"
            description="Disclaimer | SaveRoid ⇣ - All in One Video Downloader"
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
        // dlform={true}
        // title="All in One Video Downloader"
        // subtitle="Download video, Image and Gif online"
      >
        <div className="lg:max-w-2xl mx-auto px-7 sm:max-w-lg md:max-w-lg pt-14 prose prose-red">
          <h1>Disclaimer for SaveRoid </h1>

          <p>
            If you require any more information or have any questions about our site's disclaimer,
            please feel free to contact us by email at himanshu.debug@yahoo.com.
          </p>

          <h2>Disclaimers for SaveRoid</h2>

          <p>
            All the information on this website - https://saveroid.com/ - is published in good faith
            and for general information purpose only. SaveRoid does not make any warranties about
            the completeness, reliability and accuracy of this information. Any action you take upon
            the information you find on this website (SaveRoid), is strictly at your own risk.
            SaveRoid will not be liable for any losses and/or damages in connection with the use of
            our website.
          </p>

          <p>
            From our website, you can visit other websites by following hyperlinks to such external
            sites. While we strive to provide only quality links to useful and ethical websites, we
            have no control over the content and nature of these sites. These links to other
            websites do not imply a recommendation for all the content found on these sites. Site
            owners and content may change without notice and may occur before we have the
            opportunity to remove a link which may have gone 'bad'.
          </p>

          <p>
            Please be also aware that when you leave our website, other sites may have different
            privacy policies and terms which are beyond our control. Please be sure to check the
            Privacy Policies of these sites as well as their "Terms of Service" before engaging in
            any business or uploading any information.
          </p>

          <h2>Consent</h2>

          <p>By using our website, you hereby consent to our disclaimer and agree to its terms.</p>

          <h2>Update</h2>

          <p>
            Should we update, amend or make any changes to this document, those changes will be
            prominently posted here.
          </p>
        </div>
      </Main>
    </div>
  );
};

export default disclaimer;
