import React, { useEffect } from 'react';
import { useRouter } from 'next/router';

const Home = () => {
  const router = useRouter();

  useEffect(() => {
    void router.push('/stocks');
  });

  return <></>;
};

export default Home;
