import { marketplaceicon1, marketplaceicon2 } from '../../db/asset';
import './marketside.css';

const MarketSide = () => {
    return (
        <div className='side_container'>
            <div className='container1'>
                <div className='container2'>
                    Marketplace
                </div>
                <div>
                    <img src='https://e7.pngegg.com/pngimages/409/860/png-clipart-gray-mechanical-gear-illustration-computer-icons-gear-settings-ico-miscellaneous-black.png'
                        className='setting_img' />
                </div>
            </div>
            <div className='container4'>
                <input type="text" placeholder='Search Marketplace' className='container3' />
            </div>
            <div className='container_market'>
                {marketplaceicon1.map(items => (
                    <div className='container5'>
                        <div className='container6'><img src={items.picture} className='container7' /></div>
                        <div className='container8'>{items.name}</div>
                        </div>
                ))}

                <div><button className='buttton_design'>+ Create new listing</button></div>
                <hr className='line_1' />
                <div className='container9'>Filters</div>
                <div className='container10'>Chakia, Uttar Pradesh- Within 60 KIlometers </div>
                <hr className='line_1' />
                <div className='container9'>Categories</div>
                {marketplaceicon2.map(items => (
                    <div className='container5'>
                        <div className='container6'><img src={items.picture} className='container7' /></div>
                        <div className='container8'>{items.name}</div></div>
                ))}

            </div>
        </div>
    )
}

export default MarketSide;