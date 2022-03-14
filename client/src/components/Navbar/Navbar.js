import React, {useState, useEffect} from 'react'
import {FaBars, FaTimes} from 'react-icons/fa'
import { IconContext } from 'react-icons/lib'
import {Button} from '../../globalStyles'
import TuLogo from '../../assets/tu-logo-xs.png'
import { 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  NavIcon,
  MobileIcon,
  NavMenu,
  NavItem,
  NavLinks,
  NavItmBtn,
  NavBtnLink 
} from './Navbar.elements'

const Navbar = () => {
  const [click, setClick] = useState(false)
  const [button, setButton] = useState(true)

  const handleClick = () => setClick(click => !click)
  const closeMobileMenu = () => setClick(false)

  const showButton = () => {
    if(window.innerWidth <= 960){
      setButton(false)
    } else {
      setButton(true)
    }
  }

  useEffect(() => {
    showButton()
  }, [])

  window.addEventListener('resize', showButton);

  return (
    <>
        <Nav>
          <NavbarContainer>
            <NavLogo to="/" onClick={closeMobileMenu}>
              <NavIcon src={TuLogo}/>
              Snowy Mountain Trout Unlimited
            </NavLogo>
            <MobileIcon onClick={handleClick}>
              {click ? <FaTimes /> : <FaBars />}
            </MobileIcon>
            <NavMenu onClick={handleClick} click={click}>
              <NavItem>
                <NavLinks to='/'>
                  Home
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/about'>
                  About Us
                </NavLinks>
              </NavItem>
              <NavItem>
                <NavLinks to='/history'>
                  Chapter History
                </NavLinks>
              </NavItem>
              <NavItmBtn>
                {button ? (
                  <NavBtnLink to='/join'>
                    <Button primary>Join TU Today</Button>
                  </NavBtnLink>
                ) : (
                  <NavBtnLink to='/join'>
                    <Button fontBig primary>
                      SIGN UP
                    </Button>
                  </NavBtnLink>
                )}
              </NavItmBtn>
            </NavMenu>
          </NavbarContainer>
        </Nav>
    </>
  )
}

export default Navbar