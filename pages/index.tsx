import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar, SideBar } from '../components/UI';
import { DataResponse } from '../interfaces';
import { GetStaticProps } from 'next';
import { clienteAxios } from '../config';
import { TabsComponent } from '../components/UI/TabsComponent';

interface Props {
  data: DataResponse;
}

const Home = ({ data }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Layout title="Test orange">
      <>
        <Navbar title={'asd'} setOpenMenu={setOpenMenu} />
        <TabsComponent />
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} data={data} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  try {
    const { data } = await clienteAxios.get<DataResponse>('/information');
    return {
      props: {
        data,
      },
    };
  } catch (error) {
    return {
      props: {
        error: 'there was an error',
      },
    };
  }
};

export default Home;
