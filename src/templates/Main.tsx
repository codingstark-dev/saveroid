import React, { ReactNode } from 'react';
import NavBar from '../componets/NavBar';
import FooterBar from '../componets/FooterBar';
import Dlform from '../componets/Dlform';

// import { Config } from '../utils/Config';

type IMainProps = {
  meta: ReactNode;
  children: ReactNode;
  dlform?: boolean;
  defaultValue?: string;
};

const Main = (props: IMainProps) => (
  <div className="antialiased w-full text-gray-700">
    {props.meta}
    <NavBar></NavBar>
    {props.dlform ? <Dlform defaultValue={props.defaultValue as string}></Dlform> : <></>}
    <div className="max-w-screen-md mx-auto">
      <div className="border-b border-gray-300">
        {/* <div className="pt-16 pb-8">
          <div className="font-bold text-3xl text-gray-900">{Config.title}</div>
          <div className="text-xl">{Config.description}</div>
        </div> */}
        
      </div>

      <div className="py-5 text-xl content">{props.children}</div>
    </div>
    <FooterBar></FooterBar>
  </div>
);

export { Main };
