import { useState } from 'react';
import { watchcontent } from '../../db/watchvideo.js';
import Tippy from "@tippyjs/react";
import 'tippy.js/dist/tippy.css';
import './watch.css';

const Watch = () => {

    const [like, setlike] = useState('');


    const onLikeBtn = (id) => {
        if (id === like) {
            setlike('');

        } else {

            setlike(id);
        }
    };
    return (
        <div className='watch_1'>
            {watchcontent.map(item => (
                <div className='watch_detail'>
                    <div className='bar_container'>
                        <div><img src={item.logo} className="watch_logo" /></div>
                        <div className='watch_2'>
                            <div className='watch_name'>
                                <div className='watch_name_1'>  {item.name}</div>
                                <div className='watch_name_2'> Follow</div></div>
                            <div className='watch_name_3'>{item.date}
                            <Tippy content='Public' arrow={false} delay={1000} >
                             <i class="ri-earth-fill webicon"></i>
                             </Tippy>
                             </div>
                        </div>
                    </div>
                    <div className='watch_caption'>{item.caption}</div>
                    <div><iframe width="740" height="400" src={item.vedio} title="YouTube video player" frameborder="0" allow=" autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></div>
                    <div className='watch_like'>
                        <div onClick={() => onLikeBtn(item.id)}
                            style={{
                                color: item.id === like ? 'blue' : "#65676b"
                            }} className='like_button2'> <i class="ri-thumb-up-fill"></i> Like </div>
                        <div className='like_button2'><i class="ri-chat-2-line"></i>  Comment</div>
                        <div className='like_button2'><i class="ri-share-forward-line"></i> Share</div>
                    </div>
                </div>

            ))}
        </div>

    )
}
export default Watch;