import React, { useState } from 'react';
import { Layout } from '../components/layouts';
import { Navbar } from '../components/UI';
import { DataResponse } from '../interfaces';
import { GetStaticProps } from 'next';
import { clienteAxios } from '../config';

interface Props {
  data: DataResponse;
}

const Home = ({ data }: Props) => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);

  return (
    <Layout title="Test orange">
      <>
        <Navbar title={data.data[0].namePage} setOpenMenu={setOpenMenu} />
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
