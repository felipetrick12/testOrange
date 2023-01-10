import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar, SideBar } from '../components/UI';
// import { DataResponse } from '../interfaces';
// import { GetServerSideProps } from 'next';
// import { clienteAxios } from '../config';
import { TabsComponent } from '../components/UI/TabsComponent';

// interface Props {
//   data: DataResponse;
// }

const Home = () => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Layout title="Test orange">
      <>
        <Navbar title={'asd'} setOpenMenu={setOpenMenu} />
        <TabsComponent />
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} />
      </>
    </Layout>
  );
};

export default Home;
