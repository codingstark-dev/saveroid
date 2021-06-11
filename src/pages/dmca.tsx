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
          <h1>SaveRoid - DMCA Policy</h1>
          <p>
           <a href="https://saveroid.com">SaveRoid.com</a>  is in compliance with 17 U.S.C. &sect; 512 and the Digital Millennium
            Copyright Act (&ldquo;DMCA&rdquo;). It is our policy to respond to any infringement
            notices and take appropriate actions under the Digital Millennium Copyright Act
            (&ldquo;DMCA&rdquo;) and other applicable intellectual property laws.
          </p>
          <p>
            If your copyrighted material has been posted on&nbsp;<span>Saveroid.com</span> or if
            links to your copyrighted material are returned through our search engine and you want
            this material removed, you must provide a written communication that details the
            information listed in the following section. Please be aware that you will be liable for
            damages (including costs and attorneys&rsquo; fees) if you misrepresent information
            listed on our site that is infringing on your copyrights. We suggest that you first
            contact an attorney for legal assistance on this matter.
          </p>
          <p>
            The following elements must be included in your copyright infringement claim:
            <br />
            Provide evidence of the authorized person to act on behalf of the owner of an exclusive
            right that is allegedly infringed.
          </p>

          <p>
            Provide sufficient contact information so that we may contact you. You must also include
            a valid email address.
            <br />
            You must identify in sufficient detail the copyrighted work claimed to have been
            infringed and including at least one search term under which the material appears
            in&nbsp;<span>Saveroid.com</span> search results.
          </p>
          <p>
            A statement that the complaining party has a good faith belief that use of the material
            in the manner complained of is not authorized by the copyright owner, its agent, or the
            law.
          </p>
          <p>
            A statement that the information in the notification is accurate, and under penalty of
            perjury, that the complaining party is authorized to act on behalf of the owner of an
            exclusive right that is allegedly infringed.
            <br />
            Must be signed by the authorized person to act on behalf of the owner of an exclusive
            right that is allegedly being infringed.
          </p>
          <p>
            Send the infringement notice at&nbsp;
            <a href="mailto:himanshu.debug@yahoo.com">himanshu.debug@yahoo.com</a>.
          </p>
          <p>
            Please allow 1-5 business days for an email response. Note that emailing your complaint
            to other parties such as our Internet Service Provider will not expedite your request
            and may result in a delayed response due to the complaint not properly being filed.
          </p>
        </div>
      </Main>
    </div>
  );
};

export default disclaimer;
