/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useEffect } from 'react';
import Link from 'next/link';
import {
  Navbar, Container, Nav, Image,
} from 'react-bootstrap';
import { useProfile } from '../utils/context/ProfileProvider';

export default function NavBarAuth() {
  const { userHasProfile } = useProfile();

  useEffect(() => {
  }, [userHasProfile]);

  return (
    <div>
      { userHasProfile ? (

        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: 'white' }}>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto" style={{ backgroundColor: 'white', display: 'flex', alignItems: 'center' }}>
                {/* CLOSE NAVBAR ON LINK SELECTION: https://stackoverflow.com/questions/72813635/collapse-on-select-react-bootstrap-navbar-with-nextjs-not-working */}
                <Link passHref href="/">
                  <Nav.Link>Home</Nav.Link>
                </Link>
                <Link passHref href="/discover">
                  <Nav.Link>Discover</Nav.Link>
                </Link>
                <Link passHref href="/">
                  <Image src="/skill-logo.png" alt="Skill Logo" width="200" height="60" />
                </Link>
                <Link passHref href="/community">
                  <Nav.Link>Community</Nav.Link>
                </Link>
                <Link passHref href="/profile">
                  <Nav.Link>Profile</Nav.Link>
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      ) : (
        <Navbar collapseOnSelect expand="lg" variant="light" style={{ backgroundColor: 'white' }}>
          <Container style={{ display: 'flex', flexDirection: 'column' }}>
            <Link passHref href="/">
              <Image src="/skill-logo.png" alt="Skill Logo" width="200" height="50" />
            </Link>
          </Container>
        </Navbar>

      )}
    </div>
  );
}
