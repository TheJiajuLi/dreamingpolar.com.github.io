import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import {
  FiHome,
  FiUpload,
  FiSearch,
  FiMusic,
  FiSettings,
} from "react-icons/fi";

const NavBar: React.FC = () => {
  const location = useLocation();

  return (
    <NavContainer
      initial={{ y: -60 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.3 }}
    >
      <NavList>
        <NavItem
          $isActive={
            location.pathname === "/" || location.pathname === "/explorer"
          }
        >
          <NavLink to="/explorer">
            <FiHome size={20} />
            <NavText>Home</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isActive={location.pathname === "/search"}>
          <NavLink to="/search">
            <FiSearch size={20} />
            <NavText>Search</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isActive={location.pathname === "/library"}>
          <NavLink to="/library">
            <FiMusic size={20} />
            <NavText>Library</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isActive={location.pathname === "/community-upload"}>
          <NavLink
            to="/community-upload"
            aria-label="Upload music to community"
          >
            <FiUpload size={20} />
            <NavText>Upload</NavText>
          </NavLink>
        </NavItem>

        <NavItem $isActive={location.pathname === "/settings"}>
          <NavLink to="/settings">
            <FiSettings size={20} />
            <NavText>Settings</NavText>
          </NavLink>
        </NavItem>
      </NavList>

      <Logo>Dreaming Polar</Logo>
    </NavContainer>
  );
};

const NavContainer = styled(motion.nav)`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  height: 60px;
  background: ${({ theme }) =>
    theme.background?.nav || "rgba(20, 20, 30, 0.8)"};
  backdrop-filter: blur(10px);
  z-index: 100;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 20px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
`;

const Logo = styled.div`
  font-size: 18px;
  font-weight: 700;
  background: linear-gradient(to right, #5e35b1, #1e88e5);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  gap: 10px;
  padding: 0;
`;

const NavItem = styled.li<{ $isActive: boolean }>`
  position: relative;

  &::after {
    content: "";
    position: absolute;
    bottom: -5px;
    left: 0;
    width: 100%;
    height: 2px;
    background: ${({ theme, $isActive }) =>
      $isActive ? theme.accent?.primary || "#5e35b1" : "transparent"};
    transition: background-color 0.3s ease;
  }
`;

const NavLink = styled(Link)`
  display: flex;
  align-items: center;
  gap: 8px;
  padding: 8px 12px;
  color: ${({ theme }) => theme.text?.primary || "#ffffff"};
  text-decoration: none;
  transition: color 0.3s ease;

  &:hover {
    color: ${({ theme }) => theme.accent?.primary || "#5e35b1"};
  }
`;

const NavText = styled.span`
  font-size: 14px;
  font-weight: 500;

  @media (max-width: 768px) {
    display: none;
  }
`;

export default NavBar;
