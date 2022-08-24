import { watchicon1, watchicon2 } from '../../db/asset';
import './marketside.css';

const WatchSideBar = () => {
    return (
        <div className='side_container'>
            <div className='container1'>
                <div className='container2'>Watch</div>
                <div>
                    <img src='https://e7.pngegg.com/pngimages/409/860/png-clipart-gray-mechanical-gear-illustration-computer-icons-gear-settings-ico-miscellaneous-black.png' className='setting_img' />
                </div>
            </div>
            <div className='container4'>
                <input type="text" placeholder='Search videos' className='container3' />
            </div>
            <div className='container_market'>
                {watchicon1.map(items => (
                    <div className='container5'>
                        <div className='container6'>
                            <img src={items.picture} className='container7' />
                        </div>
                        <div className='container8'>{items.name}</div></div>
                ))}
                <hr className='line_1' />
                <div className='container11'>
                    <div className='container9'>Following</div>
                    <div>Manage</div>
                    </div>
                {watchicon2.map(items => (
                    <div className='container5'>
                        <div className='container6'>
                            <img src={items.picture} className='container6' />
                        </div>
                        <div className='container8'>{items.name}</div></div>
                ))}

            </div>
        </div>
    )
}

export default WatchSideBar;