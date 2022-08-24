import UserIcon from './user.png';
import { stauts, timeline } from '../../db/home/timeline';
import { useState } from 'react';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import './home.css';

const Home = () => {

    const [like, setlike] = useState('');


    const onLikeBtn = (id) => {
        if (id === like) {
            setlike('');

        } else {

            setlike(id);
        }
    };

    return (
        <div className='home_container'>
            <div className="story_container">
                {stauts.map(item =>
                    <div>
                        <img src={item.img} className='story' />
                    </div>
                )}
            </div>
            <div className='lkjhg'>
                <div className='q2w3e4'>
                    <div className='timeline_search' >
                        <div>
                            <img src={UserIcon} className="icon__img" /></div>
                        <div>
                            <input type="text" placeholder="What's on your mind, User?" className='u_s_e_r' />
                        </div>
                    </div>
                    <hr className='line_1' />
                    <div className='live_bar'>
                        <div className='icon_title'>
                            <i class="ri-live-fill livebar_icon"></i>
                            <div className='icon_title'>Live vedio </div>
                        </div>
                        <div className='icon_title'>
                            <i class="ri-gallery-fill photobar_icon "></i>
                            <div className='icon_title'>  Photo/vedio</div>
                        </div>
                        <div className='icon_title'>
                            <i class="ri-emotion-laugh-line feelbar_icon "></i>
                            <div className='icon_title'>Feeling/Activity </div>
                        </div>
                    </div>
                </div>
                <div className='create_room'>
                    <div className='poiuyt'>
                        <div><i class="ri-video-add-fill createroom_logo"></i></div>
                        <div className='create_room_title'>Create Room</div>
                    </div>
                    <i class="ri-user-add-fill adduser"></i>
                    <i class="ri-user-add-fill adduser"></i>
                    <i class="ri-user-add-fill adduser"></i>
                    <i class="ri-user-add-fill adduser"></i>
                    <i class="ri-user-add-fill adduser"></i>

                </div>


                {timeline.map(item => (
                    <div className='profile_content'>
                        <div className='bar_container'>
                            <div >
                                <img src={item.logo} className='porfile_img' />
                            </div>
                            <div>
                                <div className='profile_name'><b>{item.name}</b></div>
                                <div className='profile_date'>{item.date} . 
                                <Tippy content='Public' arrow={false} delay={1000} >
                                <i class="ri-earth-fill"></i>
                                </Tippy>
                                </div>
                            </div>

                        </div>
                        <div className='caption'>{item.caption}</div>
                        <div><img src={item.photo} className='photo_img' /></div>
                        <div><img src='https://iconape.com/wp-content/png_logo_vector/facebook-reaction-like.png'
                            className='like_img' />  {like}</div>
                        <hr className='line_1' />
                        <div className='qwert'>

                            <div onClick={() => onLikeBtn(item.id)}
                                style={{
                                    color: item.id === like ? 'blue' : "#65676b"
                                }} className='like_button1'><i class="ri-thumb-up-fill"></i> Like </div>
                                <div className='like_button1'><i class="ri-chat-2-line"></i>  Comment</div>
                                <div className='like_button1'><i class="ri-share-forward-line"></i> Share</div>
                        
                        </div>
                        <hr className='line_1' />

                    </div>
                ))}
            </div>
        </div>
    )
}
export default Home;

