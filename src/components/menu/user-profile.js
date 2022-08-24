import { useHistory } from "react-router-dom";
import { userSettingOptions } from "../../db/profile/userProfileMenu";
import "./user-profile.css";

const UserProfileMenu = () => {
  // =====================START=======

  const history = useHistory();
  // const this.handle = () => {
  //     history.push("this.link")};

  const handleNAvigate = (navigate) => {
    // console.log('HELLO', navigate);
    history.push(navigate);
    // switch (navigate) {
    //     case '/settingapple':
    //         history.push('/setting')
    //         break;
    //     case '/help':
    //         history.push('/help')
    //         break;
    //     case '/feedback':
    //         history.push('/feedback')
    //         break;
    //     case '/logout':
    //         history.push('/logout')
    //         break;

    //     default:
    //         break;
    // }
  };

  // =============END==================
  return (
    <div className="profile__bar">
      <div className="aat">
        <div className="td">
          <div>
            <img
              src="https://cdn-icons-png.flaticon.com/512/149/149071.png"
              className="profile_bar_img"
            />
          </div>
          <div className="profile_bar_name">User Name</div>
        </div>
        <hr className="line" />
        <div className="ftf">See All Profiles</div>
      </div>
      <div className="bar_container5">
        {userSettingOptions.map((item) => (
          <div
            className="bar_container4"
            onClick={() => handleNAvigate(item.navigate)}
          >
            <div className="bar_container6">
              <img src={item.picture} className="bar_container7" />
            </div>
            <div className="bar_container8">{item.name}</div>
          </div>
        ))}
      </div>
      <div className='terms_condition'>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2022</div>
    </div>
  );
};

export default UserProfileMenu;
