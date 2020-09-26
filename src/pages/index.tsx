import React from "react"
import tw, { css, styled } from "twin.macro"

const NavRoot = tw.div``;
const NavBrand = tw.div``;
const NavLinks = tw.div``;
const NavLink = tw.div``;
const NavToggle = tw.div``;

const IndexPage: React.FC = () => {
  return (
    <NavRoot>
      <NavBrand>
        The Bible
      </NavBrand>
      <NavLinks>
        <NavLink>Link 1</NavLink>
        <NavLink>Link 2</NavLink>
        <NavLink>Link 3</NavLink>
      </NavLinks>
      <NavToggle>
        <svg
          css={[tw`fill-current h-3 w-3`]}
          viewBox="0 0 20 20"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
        </svg>
      </NavToggle>
    </NavRoot>
  )
}

export default IndexPage
