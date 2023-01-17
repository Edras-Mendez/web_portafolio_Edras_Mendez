import React, {useState} from 'react';
import {Container, Wrapper, MainMenu, MenuItems, ItemLink, MobileIcon} from './navbar.elements.jsx';
import {BrowserRouter as Router} from 'react-router-dom';
import {FaBars} from 'react-icons/fa';
import { HiHome } from "react-icons/hi";
import { BsFillFilePersonFill, BsFillChatLeftDotsFill } from "react-icons/bs";
import { GiSkills } from "react-icons/gi";
import { IoAppsSharp } from "react-icons/io5";

function Navbar(){
  return(
    <>
    <Container>
      <Wrapper>
        <MobileIcon>
          <FaBars size="1.4em"/>
        </MobileIcon>

        <MainMenu>
          <Router>
            <MenuItems>
              <ItemLink to="#home" className='item_documen'>
              <HiHome siez=""/>
                Home
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink to="#aboutme">
                <BsFillFilePersonFill />
                About-me
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink to="#skills">
                <GiSkills />
                Skills
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink to="#projects">
              <IoAppsSharp />
                Projects
              </ItemLink>
            </MenuItems>
            <MenuItems>
              <ItemLink to="#contact">
                <BsFillChatLeftDotsFill />
                Contact
              </ItemLink>
            </MenuItems>
          </Router>
        </MainMenu>


      </Wrapper>
    </Container>
    </>
  );
}

export default Navbar;
