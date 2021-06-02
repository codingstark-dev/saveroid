import React from 'react';
import { Meta } from '../../layout/Meta';
import { Main } from '../../templates/Main';
import { GetServerSidePropsContext } from 'next';
import axios, { AxiosRequestConfig } from 'axios';
let getPinData = (id: string) => {
  const pinID = id.split('/')[4];
  var config1: AxiosRequestConfig = {
    method: 'get',
    url: 'https://api.saveroid.com/pin',
    headers: {
      id: pinID,
    },
  };
  return axios(config1)
    .then((result) => {
      if (result.data !== {} && result.data != null && result.data != '') {
        // console.log(result.data);
        return result.data;
        // this.dataUrls = result.data;
        // this.errorAPi = true;
        // this.randomNumber = Math.floor(Math.random() * 1000) + 1;
      } else {
        alert("Error")
        // this.dataUrls = result.data;
        // this.errorAPi = false;
        // this.randomNumber = Math.floor(Math.random() * 1000) + 1;
      }
    })
    .catch((err) => {
      console.error(err);
      alert(err)
      // this.errorAPi = false;s
    });
};
const pinterest = ({ apidata }: any) => {
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
      >
        <br />
        <div className="flex justify-center mx-10 items-center content-center m-6">
          <video
            src={apidata.video.url}
            controls
            className="w-auto rounded-lg shadow-lg focus:outline-transparent "
          ></video>
        </div>

        <h1 className="font-bold text-2xl">
          Boilerplate code for your Nextjs project with Tailwind CSS
        </h1>
        <p>
          <span role="img" aria-label="rocket">
            🚀
          </span>{' '}
          Next.js Boilerplate is a starter code for your Next js project by putting developer
          experience first .{' '}
          <span role="img" aria-label="zap">
            ⚡️
          </span>{' '}
          Made with{' '}
          <a href="https://nextjs.org" rel="nofollow">
            Next.js
          </a>
          ,{' '}
          <a href="https://eslint.org" rel="nofollow">
            ESLint
          </a>
          ,{' '}
          <a href="https://prettier.io" rel="nofollow">
            Prettier
          </a>
          ,{' '}
          <a href="https://postcss.org" rel="nofollow">
            PostCSS
          </a>
          ,{' '}
          <a href="https://tailwindcss.com" rel="nofollow">
            Tailwind CSS
          </a>
          .
        </p>
        <h2 className="font-semibold text-lg">Next js Boilerplate Features</h2>
        <p>Developer experience first:</p>
        <ul>
          <li>
            <span role="img" aria-label="fire">
              🔥
            </span>{' '}
            <a href="https://nextjs.org" rel="nofollow">
              Next.js
            </a>{' '}
            for Static Site Generator
          </li>
          <li>
            <span role="img" aria-label="art">
              🎨
            </span>{' '}
            Integrate with{' '}
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="nail_care">
              💅
            </span>{' '}
            <a href="https://postcss.org" rel="nofollow">
              PostCSS
            </a>{' '}
            for processing{' '}
            <a href="https://tailwindcss.com" rel="nofollow">
              Tailwind CSS
            </a>
          </li>
          <li>
            <span role="img" aria-label="tada">
              🎉
            </span>{' '}
            Type checking Typescript
          </li>
          <li>
            <span role="img" aria-label="pencil2">
              ✏️
            </span>{' '}
            Linter with{' '}
            <a href="https://eslint.org" rel="nofollow">
              ESLint
            </a>
          </li>
          <li>
            <span role="img" aria-label="hammer_and_wrench">
              🛠
            </span>{' '}
            Code Formatter with{' '}
            <a href="https://prettier.io" rel="nofollow">
              Prettier
            </a>
          </li>
          <li>
            <span role="img" aria-label="fox_face">
              🦊
            </span>{' '}
            SEO metadata,{' '}
            <a
              href="https://developers.google.com/search/docs/guides/intro-structured-data"
              rel="nofollow"
            >
              JSON-LD
            </a>{' '}
            and{' '}
            <a href="https://ogp.me/" rel="nofollow">
              Open Graph
            </a>{' '}
            tags with <a href="https://github.com/garmeeh/next-seo">Next SEO</a>
          </li>
          <li>
            <span role="img" aria-label="rainbow">
              🌈
            </span>{' '}
            Include a FREE minimalist theme
          </li>
          <li>
            <span role="img" aria-label="hundred">
              💯
            </span>{' '}
            Maximize lighthouse score
          </li>
        </ul>
        <p>Built-in feature from Next.js:</p>
        <ul>
          <li>
            <span role="img" aria-label="coffee">
              ☕
            </span>{' '}
            Minify HTML &amp; CSS
          </li>
          <li>
            <span role="img" aria-label="dash">
              💨
            </span>{' '}
            Live reload
          </li>
          <li>
            <span role="img" aria-label="white_check_mark">
              ✅
            </span>{' '}
            Cache busting
          </li>
        </ul>
        <h2 className="font-semibold text-lg">Our Stater code Philosophy</h2>
        <ul>
          <li>Minimal code</li>
          <li>SEO-friendly</li>
          <li>
            <span role="img" aria-label="rocket">
              🚀
            </span>{' '}
            Production-ready
          </li>
        </ul>
        <p>
          Check our GitHub project for more information about{' '}
          <a href="https://github.com/ixartz/Next-js-Boilerplate">Nextjs Boilerplate</a>.
        </p>
      </Main>
    </>
  );
};
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  let apidata: JSON = await getPinData(context.query.dl as string);
  console.log(context.query.dl, apidata);
  return { props: { apidata } };
  // ...
};
export default pinterest;
