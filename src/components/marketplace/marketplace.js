import { product } from '../../db/market/products';
import './marketplace.css'

const MarketPlace = () => {
    return (
        <div>
            <div className='product_header'>
                <div className='product_header1' ><b>Today's picks</b></div>
                <div className='product_header2'><i class="ri-map-pin-2-fill"></i>
                 <div className="product_header22"> 
                Chakia.60Km</div></div>
            </div>
            <div className='product_details'>
                {product.map(items => (
                    <div className='product_content' >
                        <img src={items.picture} className="product_img" />
                        <div className='product_price'>₹{items.price}</div>
                        <div className='product_caption'>{items.caption}</div>
                        <div className='product_location'>{items.location}</div>
                    </div>
                )
                )}
            </div>
        </div>
    )
}
export default MarketPlace;