import { NextPage } from 'next';
import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/UI';
import { DataResponse } from '../interfaces';

interface Props {
  data: DataResponse;
}

const Home: NextPage<Props> = ({ data }) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <Layout title="Test orange">
      <>
        <Navbar title="haha" setOpenMenu={setOpenMenu} />
      </>
    </Layout>
  );
};

export default Home;
