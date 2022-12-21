import styled from '@emotion/styled';

import ArticleDate from "./ArticleDate";

type Props = {
  className: string,
  date: string,
  sub: string,
  title: string,
}

const ArticleTitle = (props: Props) => {
  const TITLE = styled('h1')`
    font-size: 24px;
    letter-spacing: 0.4em;
    margin: 0 0 8px;
    white-space: pre;
    text-align: center;
  `
  const SUBTEXT = styled('p')`
    font-size: 12px;
    line-height: 1.6;
    margin: 0 0 8px;
    text-align: center;
    white-space: pre;
  `
  return (
    <div className={props.className}>
      <TITLE className="font-serif">{props.title}</TITLE>
      <SUBTEXT className="font-serif-italic">{props.date}</SUBTEXT>
      <SUBTEXT className="font-serif-italic">{props.sub}</SUBTEXT>
    </div>
  );
}

export default ArticleTitle;