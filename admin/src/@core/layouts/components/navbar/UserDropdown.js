// ** React Imports
import { Link, useHistory } from "react-router-dom";
import { useState } from "react";

// ** Custom Components
import Avatar from "@components/avatar";

// ** Utils
// import { isUserLoggedIn } from '@utils'

// ** Third Party Components
import {
  User,
  Mail,
  CheckSquare,
  MessageSquare,
  Settings,
  CreditCard,
  HelpCircle,
  Power,
} from "react-feather";

// ** Reactstrap Imports
import {
  UncontrolledDropdown,
  DropdownMenu,
  DropdownToggle,
  DropdownItem,
} from "reactstrap";

// ** Default Avatar Image
import defaultAvatar from "@src/assets/images/portrait/small/avatar-s-11.jpg";
import { useSetRecoilState } from "recoil";
import { adminState } from "../../../../store/auth/state";

const UserDropdown = () => {
  // ** State
  const [userData] = useState(null);
  const history = useHistory();
  const setAuth = useSetRecoilState(adminState);

  //** Vars
  const userAvatar = (userData && userData.avatar) || defaultAvatar;

  const logout = async () => {
    setAuth({ isAuth: false, admin: null, errors: false });
    localStorage.removeItem("token");
    history.push("/login");
  };

  return (
    <UncontrolledDropdown tag="li" className="dropdown-user nav-item">
      <DropdownToggle
        tag="a"
        className="nav-link dropdown-user-link"
        onClick={(e) => e.preventDefault()}
      >
        <div className="user-nav d-sm-flex d-none">
          <span className="user-name fw-bold">
            {(userData && userData["username"]) || "John Doe"}
          </span>
          <span className="user-status">
            {(userData && userData.role) || "Admin"}
          </span>
        </div>
        <Avatar img={userAvatar} imgHeight="40" imgWidth="40" status="online" />
      </DropdownToggle>
      <DropdownMenu end>
        <DropdownItem
          tag="a"
          href="/pages/profile"
          onClick={(e) => e.preventDefault()}
        >
          <User size={14} className="me-75" />
          <span className="align-middle">Profile</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/email"
          onClick={(e) => e.preventDefault()}
        >
          <Mail size={14} className="me-75" />
          <span className="align-middle">Inbox</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/todo"
          onClick={(e) => e.preventDefault()}
        >
          <CheckSquare size={14} className="me-75" />
          <span className="align-middle">Tasks</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/apps/chat"
          onClick={(e) => e.preventDefault()}
        >
          <MessageSquare size={14} className="me-75" />
          <span className="align-middle">Chats</span>
        </DropdownItem>
        <DropdownItem divider />
        <DropdownItem
          tag="a"
          href="/pages/account-settings"
          onClick={(e) => e.preventDefault()}
        >
          <Settings size={14} className="me-75" />
          <span className="align-middle">Settings</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/pages/pricing"
          onClick={(e) => e.preventDefault()}
        >
          <CreditCard size={14} className="me-75" />
          <span className="align-middle">Pricing</span>
        </DropdownItem>
        <DropdownItem
          tag="a"
          href="/pages/faq"
          onClick={(e) => e.preventDefault()}
        >
          <HelpCircle size={14} className="me-75" />
          <span className="align-middle">FAQ</span>
        </DropdownItem>
        <DropdownItem onClick={logout}>
          <Power size={14} className="me-75" />
          <span className="align-middle">Logout</span>
        </DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
};

export default UserDropdown;
