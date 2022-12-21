import styled from '@emotion/styled';

type Props = {
  color: string
}

const ArticleBackground = (props: Props) => {
  const DIV = styled('div')`
    background-color: ${props.color};
    height: 100%;
    left: 0;
    position: fixed;
    top: 0;
    width: 100%;
    z-index: 1;
  `
  return (
    <DIV></DIV>
  );
}

export default ArticleBackground;