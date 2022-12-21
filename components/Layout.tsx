import styled from '@emotion/styled';

import TheHeader from './TheHeader';
import TheFooter from './TheFooter';

type Props = {
  children: React.ReactNode
}

export default function Layout({ children }: Props) {
  const Article = styled('article')`
    max-width: 1200px;
    img {
      max-width: 100%;
    }
  `;
  return (
    <>
      <TheHeader />
      <Article>{children}</Article>
      <TheFooter />
    </>
  );
}