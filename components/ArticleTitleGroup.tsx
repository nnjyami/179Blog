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
    font-size: 72px;
    margin: 8px 0;
    white-space: pre;
  `
  const SUBTEXT = styled('p')`
    font-size: 12px;
    line-height: 1.6;
    margin: 0;
    white-space: pre;
  `
  return (
    <div className={props.className}>
      <ArticleDate date={props.date} />
      <TITLE className="font-serif">{props.title}</TITLE>
      <SUBTEXT className="font-serif-italic">{props.sub}</SUBTEXT>
    </div>
  );
}

export default ArticleTitle;