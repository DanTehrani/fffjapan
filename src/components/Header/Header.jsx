import React from 'react';
import styled from 'styled-components';
import media from 'styled-media-query';
import { useMediaQuery } from 'react-responsive';
import { Link } from 'react-router-dom';
import LinkItem from '../LinkItem';
import MobileLinkItem from './MobileLinkItem';
import LinkMenu from '../LinkMenu';
import ExternalLinkItem from '../ExternalLinkItem';
import MobileExternalLinkItem from './MobileExternalLinkItem';
import LabelText from '../LabelText';
import RoundLogo from '../RoundLogo';
import Logo from '../Logo';
import { DIGITAL_MARCH_URL } from '../../constants';

const StyledHeader = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  max-width: 100%;
`;

const StyledLinkItems = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  & a {
    margin-left: 30px;
  }
`;

const StyledLogos = styled.div`
  & img:first-child {
    margin-right: 12px;
  }
`;

function Header (props) {
  const isMobileOrTablet = useMediaQuery({ query: '(max-width: 768px)' });
  const roundLogoWidth = isMobileOrTablet ? '30px' : '50px';
  const logoWidth = isMobileOrTablet ? '231px' : '385px';
  const fontSize = isMobileOrTablet ? '25px' : '18px';

  return (
    <StyledHeader>
      <Link to='/'>
        <StyledLogos>
          <RoundLogo width={roundLogoWidth}/>
          <Logo width={logoWidth}/>
        </StyledLogos>
      </Link>
      {
        isMobileOrTablet ?
        <LinkMenu fontSize={fontSize}>
          <MobileLinkItem fontSize={fontSize} to='/about-us'>About Us</MobileLinkItem>
          <MobileLinkItem fontSize={fontSize} to='/faq'>FAQ</MobileLinkItem>
          <MobileExternalLinkItem fontSize={fontSize} href={DIGITAL_MARCH_URL} target='_blank'>アクションに参加する</MobileExternalLinkItem>
        </LinkMenu>
        :
        <StyledLinkItems>
          <LinkItem fontSize={fontSize} to='/about-us'>About Us</LinkItem>
          <LinkItem fontSize={fontSize} to='/faq'>FAQ</LinkItem>
          <ExternalLinkItem fontSize={fontSize} target='_blank' href='https://ja.globalclimatestrike.net/0424digitalstrike/'>アクションに参加する</ExternalLinkItem>
        </StyledLinkItems>
      }
    </StyledHeader>
  )
}

export default Header;