import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';

const StyledPage = styled.div`
  margin-right: auto;
  margin-left: auto;
  max-width: 1200px;
  padding-top: 30px;
  ${media.lessThan('large')`
    max-width: 950px;
  `}
  ${media.lessThan('medium')`
    max-width: 700px;
  `}
  ${media.lessThan('small')`
    max-width: 330px;
  `}
`;

function Page(props) {
  return (
    <StyledPage>
      {props.children}
    </StyledPage>
  )
}

export default Page;