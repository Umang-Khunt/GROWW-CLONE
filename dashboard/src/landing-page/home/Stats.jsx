import React from 'react';
function Stats() {
    return (
        <div className="container  stats-main ">
            <div className="row">
                <div className="col">
                    <h1 >Trust with confidence</h1>
                    <h2 className='mt-3  ' >Customer first always</h2>
                    <p className='text-muted' >That's why 1.3+ crore customers trust Zerodha with ?3.5+ lakh crores worth of equity investments.</p>
                    <h2 className='mt-1'>No spam or gimmicks</h2>
                    <p className='text-muted' >No gimmicks, spam, "gamification", or annoying push notifications. High quality apps that you use at your pace, the way you ike.</p>
                    <h2 className='mt-1'>The Zerodha universe</h2>
                    <p className='text-muted' >Not just an app, but a whole ecosystem. Our investments in 30+ fintech startups offer you tailored services specific to your needs.</p>
                    <h2 className='mt-1'>Do better with money</h2>
                    <p className='text-muted' >With initiatives like Nudge and Kill Switch, we don't just facilitate transactions, but actively help you do better with your money.</p>
                </div>
                <div className="col">
                    <img src='/media/images/ecosystem.png' className='home-stats-ecosystem ms-3' />

                   <div className='ps-5 ms-5' >
                    <a className='ms-5'></a>
                     <a href='#' style={{textDecoration:"none"}} className='me-4'>Explore our products<i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                <a href='#' style={{textDecoration:"none"}} >Try kite demo<i className="fa-solid fa-arrow-right-long ms-2"></i></a>
                   </div>
                </div>
                
            </div>
        </div>
    );
}

export default Stats;