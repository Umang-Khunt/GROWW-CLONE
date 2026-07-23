import React from "react";

export default function Footer() {
  return (
    <>
      <div className="container-fluid pt-5 mt-5  footer-container">
        <div className="row">
          <div className="col-1"></div>
          <div className="col-3">
            <img src="/media/images/logo.svg" className="footer-logo" />
            <p className="footer-copyrignt mt-4 ">
              © 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>
            <div className="fs-5 mb-3">
              <a href="#" style={{ color: "#424242" }}>
                <i className="fa-brands fa-x-twitter me-3 "></i>{" "}
              </a>
              <a href="#" style={{ color: "#6c757d" }}>
                <i className="fa-brands fa-facebook me-3"></i>{" "}
              </a>
              <a href="#" style={{ color: "#6c757d" }}>
                {" "}
                <i className="fa-brands fa-instagram me-3"></i>
              </a>
              <a href="#" style={{ color: "#6c757d" }}>
                <i className="fa-brands fa-linkedin "></i>
              </a>
            </div>
            <hr />
            <div className="fs-5 mt-3 ">
              <a href="#" style={{ color: "#6c757d" }}>
                <i className="fa-brands fa-youtube me-3"></i>{" "}
              </a>
              <a href="#" style={{ color: "#6c757d" }}>
                <i className="fa-brands fa-whatsapp me-3"></i>{" "}
              </a>
              <a href="#" style={{ color: "#6c757d" }}>
                <i className="fa-brands fa-telegram me-3"></i>
              </a>
            </div>
            <div className="mt-4">
              <img src="/media/images/appstoreBadge.svg" className="me-4" />
              <img src="/media/images/googlePlayBadge.svg" />
            </div>
          </div>
          <div className="col">
            <h1 className="fs-4">Account</h1>
            <ul style={{ listStyle: "none" }} className="mt-3 footer-ul ">
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Open demat account
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Minor demat account
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  NRI demat account
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  HUF demat account
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Commodity
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Dematerilazation
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Fund transfer
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  MTF
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1 className="fs-4">Support</h1>
            <ul style={{ listStyle: "none" }} className="mt-3 footer-ul ">
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Contact us
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Support portal
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  How to file a complaint?
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Status of your complaints
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Bulletin
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Circular
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Z-Connect blog
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Downloads
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1 className="fs-4">Company</h1>
            <ul style={{ listStyle: "none" }} className="mt-3 footer-ul ">
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  About
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Philosophy
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Press & media
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Careers
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Zerodha Cares (CSR)
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Zerodha.tech
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Open source
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Referral program
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h1 className="fs-4">Quick links</h1>
            <ul style={{ listStyle: "none" }} className="mt-3 footer-ul ">
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Upcoming IPOs
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Brokerage charges
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Market holidays
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Economic calendar
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Calculators
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Markets
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Sectors
                </a>
              </li>
              <li>
                {" "}
                <a href="#" style={{ textDecoration: "none" }}>
                  Gift Nifty
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="row">
            <div className="col-1"></div>
            <div className="col">        <p className="footer-p" >
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI – SEBI
            Registration no.: INZ000031633 CDSL/NSDL: Depository services
            through Zerodha Broking Ltd. – SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India. For any complaints pertaining
            to securities broking please write to complaints@zerodha.com, for DP
            related to dp@zerodha.com. Please ensure you carefully read the Risk
            Disclosure Document as prescribed by SEBI | ICF <br/>Procedure to file a
            complaint on SEBI SCORES: Register on SCORES portal. Mandatory
            details for filing complaints on SCORES: Name, PAN, Address, Mobile
            Number, E-mail ID. Benefits: Effective Communication, Speedy
            redressal of the grievances <br/>Smart Online Dispute Resolution |
            Grievances Redressal Mechanism <br/> Investments in securities market are
            subject to market risks; read all the related documents carefully
            before investing.<br/> Attention investors: 1) Stock brokers can accept
            securities as margins from clients only by way of pledge in the
            depository system w.e.f September 01, 2020. 2) Update your e-mail
            and phone number with your stock broker / depository participant and
            receive OTP directly from depository on your e-mail and/or mobile
            number to create pledge. 3) Check your securities / MF / bonds in
            the consolidated account statement issued by NSDL/CDSL every month.
            <br/>India's largest broker based on networth as per NSE. NSE broker
            factsheet <br/> "Prevent unauthorised transactions in your account. Update
            your mobile numbers/email IDs with your stock brokers/depository
            participants. Receive information of your transactions directly from
            Exchange/Depositories on your mobile/email at the end of the day.
            Issued in the interest of investors. KYC is one time exercise while
            dealing in securities markets - once KYC is done through a SEBI
            registered intermediary (broker, DP, Mutual Fund etc.), you need not
            undergo the same process again when you approach another
            intermediary." Dear Investor, if you are subscribing to an IPO,
            there is no need to issue a cheque. Please write the Bank account
            number and sign the IPO application form to authorize your bank to
            make payment in case of allotment. In case of non allotment the
            funds will remain in your bank account. As a business we don't give
            stock tips, and have not authorized anyone to trade on behalf of
            others. If you find anyone claiming to be part of Zerodha and
            offering such services, please create a ticket here. <br/>*Customers
            availing insurance advisory services offered by Ditto (Tacterial
            Consulting Private Limited | IRDAI Registered Corporate Agent
            (Composite) License No CA0738) will not have access to the exchange
            investor grievance redressal forum, SEBI SCORES/ODR, or arbitration
            mechanism for such products.<br/> Fixed deposit products offered on this
            platform are third-party products (TPP) and are not Exchange traded
            products. These are offered through Blostem Fintech Private Limited.
            Zerodha Broking Limited (SEBI Registration No.: INZ000031633) is
            acting solely as a distributor for these products. Any disputes
            arising with respect to such distribution activity will not have
            access to SEBI SCORES/ODR, Exchange Investor Grievance Redressal
            Forum, or Arbitration mechanism. Fixed deposits are regulated by the
            Reserve Bank of India (RBI).
          </p>
          </div>
          <div className="col-1"></div>
          <ul className="footer-bottomlist" >
            <li ><a> NSE </a></li>
                        <li ><a> BSE </a></li>
                                    <li ><a> MCX </a></li>
                                                <li ><a> MSEL </a></li>
                                                            <li ><a> Terms & conditions </a></li>
               <li ><a> Policies & procedures </a></li>
               <li ><a> Privacy policy </a></li>
               <li ><a> Disclosure </a></li>
               <li ><a> For investor's attention </a></li>
               <li ><a> Investor charter</a></li>
               <li ><a> Sitemap </a></li>                                             
          </ul>
          </div>
        </div>
     
    </>
  );
}
