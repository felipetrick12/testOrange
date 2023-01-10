import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar, SideBar } from '../components/UI';
import { DataResponse } from '../interfaces';
import { GetServerSideProps } from 'next';
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
        <Navbar
          title={data ? data.data[0].namePage : ''}
          setOpenMenu={setOpenMenu}
        />
        <TabsComponent />
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} data={data} />
      </>
    </Layout>
  );
};

export const getServerSideProps: GetServerSideProps = async () => {
  const { data } = await clienteAxios.get<DataResponse>('/information');

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
