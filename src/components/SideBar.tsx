import { useState } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import styled from "styled-components";
import { getUserId, logout } from "@/utils/auth.ts";
import { useGetGroupListById } from "@/hooks/queries/group.query";

// Styled Components
const Container = styled.div`
  box-sizing: border-box;
  width: 240px;
  height: 100vh;
  display: flex;
  position: sticky;
  left: 0;
  top: 0;
  flex-direction: column;
  justify-content: space-between;
  background-color: #fff;
  border-right: 1px solid #ddd;
  padding: 20px;
`;

const Title = styled.h1`
  font-size: 32px;
  font-weight: 900;
  padding-left: 10px;
  margin-bottom: 60px;
`;

const MenuItem = styled.div`
  display: flex;
  align-items: center;
  font-size: 16px;
  padding: 10px 0;
  cursor: pointer;

  &:hover {
    color: #007bff;
  }
`;

const Icon = styled.div`
  width: 20px;
  height: 20px;
  background-color: #ddd;
  border-radius: 4px;
  margin-right: 10px;
`;

const Divider = styled.hr`
  border: none;
  border-top: 1px solid #ddd;
  margin: 20px 0;
`;

const SubMenu = styled.div``;

const DropdownIndicator = styled.span`
  margin-left: auto;
  font-size: 14px;
  color: #666;
`;

const SubmenuItems = styled.div`
  margin-left: 30px;
  margin-top: 10px;
`;

const SubmenuItem = styled.div`
  font-size: 14px;
  padding: 5px 0;

  &:hover {
    color: #007bff;
  }
`;

const UserInfo = styled.div`
  display: flex;
  align-items: center;
`;

const UserIcon = styled.div`
  width: 40px;
  height: 40px;
  background-color: #ddd;
  border-radius: 50%;
  margin-right: 10px;
`;

const UserName = styled.div`
  font-size: 16px;
  font-weight: bold;
`;

const Logout = styled.button`
  font-size: 12px;
  color: #666;
  margin-top: 5px;
`;

const NavMenuUrls = [
  {
    title: "홈",
    url: "/",
  },
  {
    title: "둘러보기",
    url: "/explorer",
  },
  {
    title: "랭킹",
    url: "/ranking",
  },
  {
    title: "내 정보",
    url: "/profile",
  },
];

const Sidebar = () => {
  const id = getUserId() ?? "14";

  const { data } = useGetGroupListById(id);
  console.log("!!", data);
  // data를 활용한 로직 작성

  const navigate = useNavigate();
  const [isSubmenuOpen, setIsSubmenuOpen] = useState(false);

  const toggleSubmenu = () => {
    setIsSubmenuOpen(!isSubmenuOpen);
  };

  const LogoutHandler = () => {
    logout();
    navigate("/login");
  };

  return (
    <Container>
      <div>
        <Title>Teach me</Title>
        <div>
          {NavMenuUrls.map(
            (menu, index) => (
              <NavLink to={menu.url} key={index} className="sidebar-menu">
                <MenuItem>
                  <Icon />
                  {menu.title}
                </MenuItem>
              </NavLink>
            ),
            []
          )}

          <Divider />
          <SubMenu>
            <MenuItem onClick={toggleSubmenu}>
              <Icon />
              나의 클래스
              <DropdownIndicator>{isSubmenuOpen ? "▲" : "▼"}</DropdownIndicator>
            </MenuItem>
            {isSubmenuOpen && (
              <SubmenuItems>
                {data.map(
                  (menu, index) => (
                    <Link
                      to={`/team/${menu.groupName}`}
                      key={index}
                      className="sidebar-menu"
                    >
                      <SubmenuItem>{menu.groupExplain}</SubmenuItem>
                    </Link>
                  ),
                  []
                )}
              </SubmenuItems>
            )}
          </SubMenu>
        </div>
      </div>
      <UserInfo>
        <UserIcon />
        <div>
          <UserName>김지용</UserName>
          <Logout onClick={LogoutHandler}>로그아웃</Logout>
        </div>
      </UserInfo>
    </Container>
  );
};

export default Sidebar;
