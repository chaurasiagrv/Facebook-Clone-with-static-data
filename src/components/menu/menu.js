import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import UserProfileMenu from "./user-profile";
import "./menu.css";
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';

const Menu = () => {
  const [isUserMenu, setIsUserMenu] = useState(false);
  const location = useLocation();
  const history = useHistory();
  const goHome = () => {
    history.push("/home");
  };


  const goMarketPlace = () => {
    history.push("/marketplace");
  };
  const goWatch = () => {
    history.push("/watch");
  };
  const goAccount = () => {
    // history.push('/account');
    setIsUserMenu((preState) => !preState);
  };

  return (
    <div className="main_menu ">
      <div className="fb_search">
        <div onClick={goHome}  >
          {" "}
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/2021_Facebook_icon.svg/2048px-2021_Facebook_icon.svg.png"
            className="facebook_icon"
          />
        </div>
        <div className="searchbar">
          <input
            type="text"
            placeholder="Search Facebook"
            className="searchbar_menu"
          />
        </div>
      </div>
      <div className="main1">
        <Tippy content='Home' delay={1000} arrow={false} placement="bottom">
          <div onClick={goHome}
            className={`menu_middle ${location.pathname === '/home' && "nohover"}`}
            style={{ borderBottom: location.pathname === '/home' ? '3px solid #1b74e4' : '' }}
          >
            {" "}
            <i class="ri-home-4-fill middle_icon"
              style={{ color: location.pathname === '/home' ? '#1b74e4' : '' }}
            >

            </i>
          </div>
        </Tippy>
        <Tippy content='Watch' delay={1000} arrow={false} placement="bottom">
          <div onClick={goWatch} className={`menu_middle ${location.pathname === '/watch' && "nohover"}`}
            style={{ borderBottom: location.pathname === '/watch' ? '3px solid #1b74e4' : '' }}>
            {" "}
            <i class="ri-youtube-fill middle_icon"
              style={{ color: location.pathname === '/watch' ? '#1b74e4' : '' }}

            ></i>
          </div>
        </Tippy>
        <Tippy content='Marketplace' delay={1000} arrow={false} placement="bottom">
          <div onClick={goMarketPlace} className={`menu_middle ${location.pathname === '/marketplace' && "nohover"}`}
            style={{ borderBottom: location.pathname === '/marketplace' ? '3px solid #1b74e4' : '' }}>
            {" "}
            <i class="ri-store-2-fill middle_icon"
              style={{ color: location.pathname === '/marketplace' ? '#1b74e4' : '' }}
            ></i>
          </div>
        </Tippy>
        <Tippy content='Groups' delay={1000} arrow={false} placement="bottom">
          <div className={`menu_middle ${location.pathname === '/group' && "nohover"}`}
            style={{ borderBottom: location.pathname === '/group' ? '3px solid #1b74e4' : '' }}>
            {" "}
            <i class="ri-group-2-fill middle_icon"></i>
          </div>
        </Tippy>
      </div>
      <div className="main2">
        <div className="main_rightside middle_icon">
          <img
            src="https://icon-library.com/images/dots-icon/dots-icon-5.jpg"
            className="img_container3"
          />
        </div>
        <div className="main_rightside">
          {/* <img
            src="https://cdns.iconmonstr.com/wp-content/releases/preview/2017/240/iconmonstr-facebook-messenger-1.png"
            className="img_container3"
          /> */}
          <i class="ri-messenger-fill img_container3"></i>
        </div>
        <div className="main_rightside">
          {" "}
          <img
            src="https://openclipart.org/image/400px/309476"
            className="img_container3"
          />{" "}
        </div>
        <div className="main_rightside" onClick={goAccount}>
          {" "}
          <img
            src="http://cdn.onlinewebfonts.com/svg/img_569204.png"
            className="img_container3"
          />
        </div>
      </div>

      {isUserMenu && <UserProfileMenu />}
    </div>
  );
};

export default Menu;
