import React, { FC } from 'react';
import Head from 'next/head';
import { Box } from '@mui/material';
import { Container } from '../../styles/styles';

interface Props {
  title?: string;
  children: JSX.Element;
}

export const Layout: FC<Props> = ({ title, children }: Props) => {
  return (
    <Container>
      <Head>
        <title>{title}</title>
      </Head>
      <Box
        sx={{
          padding: '10px 20px',
        }}>
        {children}
      </Box>
    </Container>
  );
};
