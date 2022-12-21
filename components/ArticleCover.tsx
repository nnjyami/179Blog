import styled from '@emotion/styled';

import ArticleImage from "./ArticleImage";
import ArticleTitleGroup from "./ArticleTitleGroup";
import ArticleTitleGroupCentered from "./ArticleTitleGroupCentered";

type Props = {
  date: string,
  img: string,
  sub: Array<string>,
  title: string,
  titleType?: string,
  textColor?: "#FFF",
}

const ArticleCover = (props: Props) => {
  const DIV = styled('div')`
    position: relative;
    figure {
      position: relative;
      z-index: 1;
    }
  `
  const TitleStyle = styled(ArticleTitleGroup)`
    bottom: 24px;
    color: ${props.textColor};
    left: 16px;
    position: absolute;
    z-index: 10;
  `
  const TitleCenteredStyle = styled(ArticleTitleGroupCentered)`
    top: 50%;
    color: ${props.textColor};
    left: 50%;
    position: absolute;
    transform: translate(-50%, -50%);
    z-index: 10;
  `
  return (
    <DIV>
      {props.titleType === 'centered' &&
        <TitleCenteredStyle
          className="TitleCenteredStyle"
          date={props.date}
          sub={props.sub.join('\n')}
          title={props.title} />
      }
      {props.titleType === 'leftBottom' &&
        <TitleStyle
          className="TitleStyle"
          date={props.date}
          sub={props.sub.join('\n')}
          title={props.title} />
      }
      <ArticleImage img={props.img} />
    </DIV>
  );
}

export default ArticleCover;