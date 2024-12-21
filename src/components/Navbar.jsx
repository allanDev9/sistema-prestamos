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

export default function NavbarNav(args) {
  return (
    <div>
      <Navbar {...args}>
        <NavbarBrand className='text-white' href="/">Sistema Bancario</NavbarBrand>
        <Nav>
          <UncontrolledDropdown nav inNavbar>
            <DropdownToggle nav caret className='text-white'>
              Usuario
            </DropdownToggle>
            <DropdownMenu right>
              <DropdownItem>Mi perfil</DropdownItem>
              <DropdownItem>Configuración</DropdownItem>
              <DropdownItem divider />
              <DropdownItem>Cerrar sesión</DropdownItem>
            </DropdownMenu>
          </UncontrolledDropdown>
        </Nav>
      </Navbar>
    </div>
  );
}