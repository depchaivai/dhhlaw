import React, { useState } from 'react'
import { Avatar, Popup, BoxU, ItemPop } from './Userpopup.element'

const Userpopup = (props) => {

    const [show, setShow] = useState(false);

    return (
        <BoxU onClick={() => setShow(!show)} >
            <Avatar src={'https://ui-avatars.com/api/?name=' + props.Uname} alt='image' />
            { show && <Popup>
                <ItemPop>{props.Uname}</ItemPop>
                <ItemPop onClick={props.DashBoard}>Dashboard</ItemPop>
                <ItemPop onClick={props.Logout}>logout</ItemPop>
            </Popup>}

        </BoxU>
    )
}

export default Userpopup
