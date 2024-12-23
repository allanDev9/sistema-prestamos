import React from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
} from 'reactstrap';
import { useNavigate } from "react-router-dom";

export default function NavbarNav({ isUsername ,...args }) {
  const navigate = useNavigate();

  const logout = () => {
    navigate('/login');
  };
  
  return (
    <div>
      <Navbar style={{ height: '80px'}} {...args}>
        <NavbarBrand style={{ marginLeft: '5%'}} className='fw-bold text-white fs-2' href="/">Sistema Bancario</NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className='text-white fw-bold'>
              {isUsername}
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Mi perfil</DropdownItem>
              <DropdownItem>Configuración</DropdownItem>
              <DropdownItem divider />
              <DropdownItem onClick={logout}>Cerrar sesión</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}