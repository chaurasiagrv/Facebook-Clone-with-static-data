import { useState } from 'react';
import { homeicon } from '../../../db/asset';
import UserIcon from './user.png';
import FriendsIcon from './friends.png';
import GroupIcon from './group.png';
import StoreIcon from './store.png';
import SeriesIcon from './series.png';
import ClockIcon from './clock.png';
import BookmarkIcon from './bookmark.png';
import FlagIcon from './flag.png';
import EventIcon from './event.png';
import FavouriteIcon from './favourite.png';
import './user.css';
// import '../../marketside/marketside.css';


const User = () => {
    const [seemore, setseemore] = useState(false);
    return (
        <div className='user_container_1'>
            <div className='icons' >
                <img src={UserIcon} className='user_icon_home' />
                <div className='titles'>User Name</div>
            </div>
            <div className='icons' >
                <img src={FriendsIcon} className=
                    'user_icon_home' />
                <div className='titles'>Friends</div>
            </div>
            <div className='icons' >
                <img src={GroupIcon} className='user_icon_home' />
                <div className='titles'>Group</div></div>
            <div className='icons' >
                <img src={StoreIcon} className='user_icon_home' />
                <div className='titles'>Marketplace</div></div>
            <div className='icons' >
                <img src={SeriesIcon} className='user_icon_home' />
                <div className='titles'>Watch</div></div>
            <div className='icons' >
                <img src={ClockIcon} className='user_icon_home' />
                <div className='titles'>Memories</div></div>
            <div className='icons' >
                <img src={BookmarkIcon} className='user_icon_home' />
                <div className='titles'>Saved</div></div>
            <div className='icons' >
                <img src={FlagIcon} className='user_icon_home' />
                <div className='titles'>Pages</div></div>
            <div className='icons' ><img src={EventIcon} className='user_icon_home' />
                <div className='titles'>Event</div>
            </div>
            <div className='icons' >
                <img src={FavouriteIcon} className='user_icon_home' />
                <div className='titles'>Favorites</div>
            </div>
            {seemore && (<div>{homeicon.map(item => (
                <div className='container5'>
                    <div className='container6'>
                        <img src={item.icon} className='container_-7' />
                    </div>
                    <div className='container8'>{item.title}</div>
                </div>
            ))}
            </div>
            )
            }


            <div onClick={() => setseemore(preState => !preState)}>
                <div>  {seemore ? (<div className='container5'>
                    <div className='container6'>
                        <img src="https://icon-library.com/images/arrow-up-icon-png/arrow-up-icon-png-20.jpg"
                            className='container7' />
                    </div>
                    <div className='container8'>
                        See less
                    </div>
                </div>) :
                    (<div className='container5'>
                        <div className='container6'>
                            <img src="https://icons-for-free.com/download-icon-keyboard+arrow+down+24px-131985225788660182_512.png"
                                className='container7' />
                        </div>
                        <div className='container8'>
                            See more
                        </div>
                    </div>)}
                </div>
            </div>
            <div className='terms_condition'>Privacy  · Terms  · Advertising  · Ad choices   · Cookies  ·   · Meta © 2022</div>
        </div>
    )
}

export default User;