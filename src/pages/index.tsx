import React from 'react';

import { Meta } from '../layout/Meta';
import { Main } from '../templates/Main';
const Index = () => {
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
        <h1 className="font-bold text-2xl">
          Boilerplate code for your Nextjs project with Tailwind CSS
        </h1>
       
      </Main>
    </>
  );
};

export default Index;
