import React from 'react'
import styled from 'styled-components'
import Link from 'gatsby-link'

const BackgroundHeader = styled.div`
  background: linear-gradient(to right, #b3ffab, #12fff7);
  margin-bottom: 1.45rem;
`

const LogoWrapper = styled.div`
  margin: 0 auto;
  max-width: 960px;
  padding: 1.45rem 1.0875rem;
`

const Logo = styled.h1`
  margin: 0;
`

const StyledLink = styled(Link)`
  color: white;
  text-decoration: none;
`

const Header = ({ siteTitle }) => (
  <BackgroundHeader>
    <LogoWrapper>
      <Logo>
        <StyledLink to="/">{siteTitle}</StyledLink>
      </Logo>
    </LogoWrapper>
  </BackgroundHeader>
)

export default Header
