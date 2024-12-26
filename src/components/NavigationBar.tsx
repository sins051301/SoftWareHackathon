import { useState } from "react";
import styled from "styled-components";
import { NavLink } from "react-router-dom";

const NavigationBar = () => {
  const [activeTab, setActiveTab] = useState("/overview");

  return (
    <NavContainer>
      <NavItem
        to="/"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setActiveTab("/overview")}
      >
        overview
      </NavItem>
      <NavItem
        to="/members"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setActiveTab("/member")}
      >
        Member
      </NavItem>
      <NavItem
        to="/leaderboard"
        className={({ isActive }) => (isActive ? "active" : "")}
        onClick={() => setActiveTab("/leaderboard")}
      >
        Leaderboard
      </NavItem>
      <ActiveIndicator activeTab={activeTab} />
    </NavContainer>
  );
};

export default NavigationBar;

// Styled Components
const NavContainer = styled.div`
  display: flex;
  align-items: center;
  position: relative;
  border-bottom: 1px solid #ddd;
  margin-bottom: 20px;
`;

const NavItem = styled(NavLink)`
  font-size: 14px;
  text-transform: capitalize;
  padding: 10px 20px;
  color: #333;
  text-decoration: none;
  position: relative;

  &:hover {
    color: #007bff;
  }

  &.active {
    color: #000;
    font-weight: bold;
  }
`;

interface ActiveIndicatorProps {
  activeTab: string;
}

const ActiveIndicator = styled.div<ActiveIndicatorProps>`
  position: absolute;
  bottom: 0;
  height: 3px;
  background-color: #007bff;
  width: 33.33%;
  transition: transform 0.3s ease-in-out;

  transform: ${({ activeTab }) =>
    activeTab === "/overview"
      ? "translateX(0%)"
      : activeTab === "/member"
      ? "translateX(100%)"
      : "translateX(200%)"};
`;
