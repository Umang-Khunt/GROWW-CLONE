import React from 'react';

export default function Award() {
  
  
    return ( <>
    <div className="container mt-5 mb-4">
        <div className="row">
            <div className="col">
            <img src='/media/images/largestBroker.svg'/>
            </div>
            <div className="col">
            <h1 className='mt-5' >Largest Stock Broker of india</h1>
            <p>2 million+ zerodha clients contribute over 15% all retail order volume in india by trading and investing in:</p>
            <div className="row mt-3">
                <div className="col">
                    <ul>
                        <li className='mb-3'>Futures and options</li>
                        <li className='mb-3'>Comodity derivaties</li>
                        <li>Currency derivaties </li>
                    </ul>
                </div>
                <div className="col">
                    <ul>
                        <li className='mb-3'>Stock and IPOs</li>
                        <li className='mb-3'>Direct Mutual funds</li>
                        <li>Bonds and Govt. securities</li>
                    </ul>
                </div>
            </div>
            <img src='media/images/pressLogos.png' className='p-3 award-presslogos ' />
            </div>
        </div>
    </div>
    </> );
}



