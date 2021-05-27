import React       from 'react';
import styled      from 'styled-components';

const HamburgerBar = ({logout, toggleHamburger }) => {
  return(
      <Hamburger 
        name="toggleHamburger" 
        onClick={(e) => toggleHamburger(e)}
      >
        <section></section>
        <section></section>
        <section></section>
      </Hamburger>
    );
};

// const NavContainer = styled.div`
//   width: ;
 
//  `;

const Hamburger = styled.div`
  display: inline-block;
  margin: 0 0 0 0;
  section {
    margin: 3px 0;
    width: 20px;
    height: 2px;
    transition: .3s ease;
    background-color: var(--purple);
  }
  &:hover > section {
    background-color: #669F35;
    cursor: pointer;
  }
  @media screen and (max-width: 945px) {

  }
`;




export default HamburgerBar;