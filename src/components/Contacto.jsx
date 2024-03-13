import { Link } from 'react-router-dom';
import 'animate.css';
import React from 'react';

export const Contacto = () => {
return (
<div className='text-center m-5 '>
    <h2 className='text-warning text-uppercase'>¡contactanos!</h2>
    <h4 className='text-secondary text-uppercase m-5 p-3 mx-auto'> aca te dejamos nuestras redes:</h4>
    <div className='m-5 p-1 justify-content-center   '>
        <ul className=' m-5 list-unstyled animate__animated animate__backInLeft animate__delay-800ms  justify-content-center d-flex flex-wrap'>

            <li className='icon-hover'>
                <Link to={'#'}>
                <i className=" m-5 text-warning bi bi-facebook"></i>
                </Link>
            </li>

            <li className='icon-hover'>
                <Link to={'#'}>
                <i className=" m-5  text-warning bi bi-whatsapp"></i>
                </Link>
            </li>

            <li className='icon-hover'>
                <Link to={'#'}>
                <i className="  m-5 text-warning bi bi-instagram"></i>
                </Link>
            </li>

            <li className='icon-hover'>
                <Link to={'#'}>
                <i className=" m-5  text-warning bi bi-twitter-x"></i>
                </Link>
            </li>

            <li className='icon-hover '>
                <Link to={'#'}>
                <i className=" m-5  text-warning bi bi-envelope-at"></i>
                </Link>
            </li>

        </ul>
    </div>
</div>
);
}