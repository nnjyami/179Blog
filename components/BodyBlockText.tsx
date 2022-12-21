import styled from '@emotion/styled';

type Props = {
  color: string,
  text: string,
}

const BodyBlockText = (props: Props) => {
  const DIV = styled('div')`
    margin: 1em 0;
    overflow-x: scroll;
    position: relative;
    width: 100%;
    writing-mode: vertical-rl;
    z-index: 10;
  `
  const P = styled('p')`
    color: ${props.color};
    font-size: 12px;
    font-feature-settings: 'pkna';
    height: calc(140px + 1em * 2);
    letter-spacing: .1em;
    line-height: 1.9;
    padding: 1em 0.5em 1em 0;
    text-align: justify;
    white-space: pre-wrap;
  `

  return (
    <DIV>
      <P>{props.text}</P>
    </DIV>
  );
}

export default BodyBlockText;