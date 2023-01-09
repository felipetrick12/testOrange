import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar, SideBar } from '../components/UI';
import { DataResponse } from '../interfaces';
import { GetStaticProps } from 'next';
import { clienteAxios } from '../config';

interface Props {
  data: DataResponse;
}

const Home = ({ data }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(false);

  return (
    <Layout title="Test orange">
      <>
        <Navbar title={data.data[0].namePage} setOpenMenu={setOpenMenu} />
        <SideBar openMenu={openMenu} setOpenMenu={setOpenMenu} data={data} />
      </>
    </Layout>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const { data } = await clienteAxios.get<DataResponse>('/information');

  return {
    props: {
      data: data,
    },
  };
};

export default Home;
