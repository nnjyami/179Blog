import styled from '@emotion/styled';

type Props = {
  frameSize?: 0,
  img: string,
  isFrame?: false,
}

const ArticleImage = (props: Props) => {
  const FIGURE = styled('figure')`
    margin: 0;
    max-width: 100%;
    padding: 0;
    img {
      width: 100%;
    }
  `
  return (
    <FIGURE>
      <img src={props.img} />
    </FIGURE>
  );
}

export default ArticleImage;