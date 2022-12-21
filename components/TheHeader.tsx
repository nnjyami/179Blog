import styled from '@emotion/styled';

export default function Header() {

  const Header = styled.header`
    color: #FFF;
    font-size: 14px;
    left: 16px;
    letter-spacing: 0.2em;
    position: fixed;
    top: 8px;
    z-index: 100;
    width: 100%;
  `;

  return (
    <Header>
      <p className="font-serif">179 Blog</p>
    </Header>
  );
}