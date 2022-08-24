import { useState } from 'react';
import { contacts } from '../../../db/profile/contact';
import './notification.css';

const Notification = () => {
    const [SearchContact, setSearchContact] = useState("");
    const [sort, setSort] = useState("none");
    const sortMethods = {
        none: { method: (a, b) => null },
        ascending: { method: undefined },
        descending: { method: (a, b) => (a > b ? -1 : 1) },
    };

    return (
        <div className="notificaion_bar">
            <div className='birthday'><b>Birthdays</b></div>
            <div className='birthday_name'>
                <div> <i class="ri-gift-2-fill gift_icon"></i>  </div>
                <div>  <b>Gaurav Chaurasia</b> and <b>2 other</b> have their birthday today</div>
            </div>
            <hr />
            <div className='asdf'>
                <div className='contact'><b>Contacts</b></div>
                <div>
                    <select defaultValue={'DEFAULT'} onChange={(e) => setSort(e.target.value)}>
                        <option value="DEFAULT" disabled>Sort by</option>
                        <option value="ascending">Ascending</option>
                        <option value="descending">Descending</option>
                    </select>
                </div>
            </div>
            <div><input type="text" placeholder='Search Contact' className='Search_Contact' onChange={(event) => {
                setSearchContact(event.target.value)
            }} />
            </div>
            {contacts.filter((val) => {
                if (SearchContact == "") {
                    return val
                } else if (val.toLowerCase().includes(SearchContact.toLowerCase())) {
                    return val
                }

            }
            ).sort(sortMethods[sort].method)
                .map(name => (
                    <div className='contact_lists'>
                        <img src="https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460__480.png" className='contact_img' />
                        <div>{name}</div>
                    </div>))}

        </div>
    )
};
export default Notification;