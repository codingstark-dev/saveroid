import React, { ReactNode } from 'react';
import NavBar from '../componets/NavBar';
import FooterBar from '../componets/FooterBar';
import Link from 'next/link';
import Dlform from '../componets/Dlform';

// import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  dlform?: boolean;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <NavBar></NavBar>
    {props.dlform ? <Dlform></Dlform> : <></>}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        {/* <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div> */}
        <div>
          <ul className="flex flex-wrap text-xl">
            <li className="mr-6">
              <Link href="/">
                <a className="text-gray-700 border-none hover:text-gray-900">Home</a>
              </Link>
            </li>
            <li className="mr-6">
              <Link href="/about/">
                <a className="text-gray-700 border-none hover:text-gray-900">About</a>
              </Link>
            </li>
            <li className="mr-6">
              <a
                className="text-gray-700 border-none hover:text-gray-900"
                href="https://github.com/ixartz/Next-js-Boilerplate"
              >
                GitHub
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="py-5 text-xl content">{props.children}</div>
    </div>
    <FooterBar></FooterBar>
  </div>
);

export { Main };
