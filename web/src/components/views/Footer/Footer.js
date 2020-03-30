import React from 'react'
import {GiHealthNormal} from 'react-icons/gi'
import {FaRegCopyright} from 'react-icons/fa';

function Footer() {
    return (
        <div style={{
            height: '50px', display: 'flex',
            flexDirection: 'column', alignItems: 'center',
            justifyContent: 'center', fontSize:'1rem'
        }}>
           <p>  <GiHealthNormal size={16} color='red' /> Direitos <FaRegCopyright /> </p>
        </div>
    )
}

export default Footer
