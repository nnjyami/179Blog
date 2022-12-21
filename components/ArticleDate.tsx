import styled from '@emotion/styled';

type Props = {
  date: string
}

const ArticleDate = (props: Props) => {
  const P = styled('p')`
    font-size: 28px;
    margin: 0;
  `
  return (
    <P className="font-cochin">{props.date}</P>
  );
}

export default ArticleDate;