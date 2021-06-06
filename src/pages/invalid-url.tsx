import React from 'react';
import { useRouter } from 'next/router';

const invalidurl = () => {
  const router = useRouter();

  return <div>Error in {router.query.dl}</div>;
};

export default invalidurl;
