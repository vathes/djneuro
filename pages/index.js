import Layout from '../components/Layout.js';
import Slider from 'react-slick';
import React, { useState, useEffect } from 'react';


const homeTop = {
    backgroundImage: 'url("/static/images/artwork/3P_surface_bright.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#E1EBF7',
    padding: '17% 14%',
    lineHeight: '1.4em',
    textAlign: 'left'
}

const sliderSetup = {
    className: "slider variable-width",
    // centerMode: true,
    variableWidth: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    responsive: [
        {
            breakpoint: 768,
            settings: {
                arrows: true,
                centerPadding: '0px',
                slidesToShow: 1,
                swipeToSlide: true,
            }
        },
        {
            breakpoint: 545,
            settings: {
                arrows: false,
                centerPadding: '0px',
                slidesToShow: 1,
                swipeToSlide: true,
            }
        },
    ],
    speed: 500
}



class Index extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            noticeOpen: true,
            tagline1: true,
            tagline: 'neurophysiology'
        }
    }
    closeNotice(event) {
        this.setState({noticeOpen: false})
    }

    openNotice(event) {
        this.setState({ noticeOpen: true})
    }

    setTagline() {
        // still in works
        const [tagEndings] = useState(0);
        tagEndings = ['neurophysiology', 'machine learning', 'data analysis']

        useEffect(() => {
            const interval = setInterval(() => {
            this.setState.tagline = tagEndings[Math.floor(Math.random() * 3)];
            }, 2000);
            return () => clearInterval(interval);
        }, []);
    }

    render() {
        return (
            <Layout>
              <div className="content-container">
                {/* <div style={this.state.noticeOpen ? { display: 'block' }: { display: 'none'}} className='noticeContainer'>
                    <h2 className="noticeTitle">Looking for us at SfN?</h2>

                    <p className="noticeSubtitle">
                        We don't have a booth this year, but we're here and happy to meet with you anytime!
                    <br />
                        Contact us at <em><a target="_blank" href="https://twitter.com/datajointneuro">twitter/@DataJointNeuro</a></em> or <em><a target="_blank" href="mailto:info@vathes.com">info@vathes.com</a></em> to arrange a time or,
                    <br />
                        come see our team for their posters!
                    </p>
                    <p className="noticeSubtitle">
                        Shan @ Board DD45 October 21st (Mon) 1-5pm <a href="https://ativsoftware.com/appinfo.php?page=Session&project=SFN19&server=eventpilotadmin.com&id=P70068" target="_blank">[more info]</a>
                        <br />
                        Thinh @ Board DD27 October 21st (Mon) 1-5pm <a href="https://ativsoftware.com/appinfo.php?page=Session&project=SFN19&server=eventpilotadmin.com&id=P49650" target="_blank">[more info]</a>

                    </p>
                    <button className="closeNoticeButton" onClick={(e) => this.closeNotice(e)}>X</button>
                </div>
                <button style={this.state.noticeOpen ? { visibility: 'hidden' } : { visibility: 'visible' }} className="openNoticeButton" onClick={(e) => this.openNotice(e)}>SfN 2019 Notice</button> */}
                
                <div style={homeTop}>
                    {/* <h1 className="homeTopTagline">Data pipelines built by you.</h1> */}
                    <h1 className="homeTopTagline">Data pipelines built for {this.state.tagline}</h1>
                    <p className="homeTopSubtitle">
                        <br />
                        <b>DataJoint Neuro®</b> enables research teams to design scientific databases
                        and computational pipelines by providing support, resources, and services.
                        <br /><br />
                        Our focus is on neuroscience and AI.
                    </p>
                </div>
                <div className="partnerSection">
                    <h4>Partners</h4>
                    <ul>
                        {/* <li>Baylor College of Medicine</li> */}
                        <li>
                            <img className="partnerLogo" src="./static/images/logo/color/nwb_logo.png" alt="neurodata without borders logo" />
                        </li>
                        <li>
                            <img src="./static/images/logo/color/mathworks_logo.png" alt="mathworks logo" />
                        </li>
                        <li>
                            <img src="./static/images/logo/color/aws_logo.png" alt="amazon web services logo" />
                        </li>
                    </ul>
                </div>
                <div className="customerSection">
                    <h4>Our Projects and Customers</h4>
                    <div className="sliderContainer">
                        <Slider {...sliderSetup}>
                            <div className="sliderBooth">
                                {/* <img src="./static/images/logo/color/hhmi_janelia_logo.png" alt="HHMI Janelia Research Campus Logo" width="180px" /> */}
                                <img src="./static/images/logo/color/hhmi_janelia_logo.png" alt="HHMI Janelia Research Campus Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Svoboda Lab @ HHMI Janelia Research Campus</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                {/* <img src="./static/images/logo/color/ibl_logo.png" alt="International Brain Laboratory Logo" width="180px" /> */}
                                <img src="./static/images/logo/color/ibl_logo.png" alt="International Brain Laboratory Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>International Brain Laboratory</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                <img src="./static/images/logo/color/kavli_logo.png" alt="Kavli Institute for Systems Neuroscience Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Moser Lab @ Kavli Institute</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                <img src="./static/images/logo/color/bcm_logo.png" alt="Baylor College of Medicine Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Nuo lab @ Baylor College of Medicine</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                {/* <img src="./static/images/logo/color/pni_logo.png" alt="Princeton Neuroscience Institute Logo" width="100px" /> */}
                                <img src="./static/images/logo/color/pni_logo.png" alt="Princeton Neuroscience Institute Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Princeton Neuroscience Institute</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                <img src="./static/images/logo/color/ucsf_logo.png" alt="UCSF Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Frank lab @ University of California San Francisco</p>
                                </div>
                            </div>
                            <div className="sliderBooth">
                                <img src="./static/images/logo/color/columbia_logo.png" alt="Columbia University Logo" height="70px" />
                                <div className="customerDetail">
                                    <p>Columbia University</p>
                                </div>
                            </div>
                        </Slider>
                    </div>
                </div>
              </div>
              <style jsx>{`
                .contentContainer {
                  position: relative;
                }
                p {
                    margin: 0;
                }
                h1.homeTopTagline {
                    font-weight: 600;
                    font-size: 330%;
                    line-height: 1.2;
                }
                p.homeTopSubtitle {
                    // font-weight: 300;
                    font-size: 120%;
                    position: 'relative'
                }
                .partnerSection,
                .customerSection {
                    height: 100%;
                    position: relative;
                    text-align: center;
                    z-index: 150;
                }

                .partnerSection h4,
                .customerSection h4 {
                    font-size: 115%;
                    font-weight: 300;
                }

                .partnerSection {
                    background: linear-gradient(rgba(255,255,255,1.0), rgba(251,255,255,0.75));
                    padding: 4% 0 6% 0;
                }

                .partnerSection ul {
                    list-style: none;
                    display: inline-flex;
                    flex-direction: column;
                }
                .partnerSection li {
                    margin: 25px;
                }
                .partnerSection img {
                    height: 60px;
                    transform: translateX(-3%);
                }
                .customerSection {
                    padding: 4% 0 12% 0;
                    background-color: #E0E0E0;
                }
                .sliderContainer {
                    width: 70%;
                    margin-left: 15%;
                    margin-top: 4%;
                }
                

                .slick-center * {
                    transform: scale(1.4) !important;
                    // margin-left: auto;
                    // margin-right: auto;
                }

                .sliderBooth {
                    border-right: 1px solid lightgrey;
                    // border-left: 1px solid red;
                    // border-top: 1px solid red;
                    // border-bottom: 1px solid red;
                    margin: 0 20px;
                }

                .sliderBooth img {
                    display: inline-flex;
                }
                .sliderBooth .customerDetail {
                    color: rgb(120, 120, 120);
                    margin-top: 18px;
                    font-size: 0.8rem;
                }
                

                // .slick-prev:before,
                // .slick-next:before {
                //     color: blue !important;
                // }


                .customerLogoList {
                    width: 100%;
                }

                .noticeContainer {
                    // background-color: #e8f4f8;
                    background: linear-gradient(#0f040f, #0f040f, #001226);
                    // color: #e8f4f8;
                    padding: 15px 20px 10px;
                }
                .noticeTitle {
                    margin-top: 0;
                    color: #DDD;
                }
                .noticeSubtitle {
                    margin: 12px 0px;
                    line-height: 1.4;
                    color: #DDD;
                }

                .noticeSubtitle a {
                    text-decoration: none;
                    color: #dad2f7;
                    white-space: nowrap;
                }
                .noticeSubtitle a:hover {
                    color: #e8e3fa;
                }

                .closeNoticeButton {
                    background-color: blueviolet;
                    color: white;
                    border: none;
                    padding: 10px 20px;
                    position: absolute;
                    top: 80px;
                    right: 10px;
                }

                .closeNoticeButton:hover {
                    background-color: purple;
                }
                .openNoticeButton {
                    background-color: #0f040f;
                    border: 3px solid #DDD;
                    border-top: 0px solid #001226;
                    color: #DDD;
                    // background-color: #DDD;
                    padding: 5px 15px 8px;
                    // border: none;
                    position: absolute;
                    transform: translateX(-50%);
                    font-size: 150%;
                }

                @media (max-width: 1440px) {
                    h1.homeTopTagline {
                        font-size: 280%;
                    }
                    p.homeTopSubtitle {
                        font-size: 110%;
                        position: 'relative'
                    }
                }
               
                @media (max-width: 768px) {
                    h1.homeTopTagline {
                        font-weight: 600;
                        font-size: 240%;
                    }
                    p.homeTopSubtitle {
                        // font-weight: 300;
                        font-size: 100%;
                        position: 'relative'
                    }
                    .partnerSection {
                        padding: 7% 0;
                    }
                    .partnerSection img {
                        height: 50px;
                        transform: translateX(-5%);
                    }
                    .customerSection {
                        padding: 7% 0 120px 0;
                    }
                }
                @media (max-width: 480px) {
                    h1.homeTopTagline {
                        font-weight: 600;
                        font-size: 220%;
                    }
                    p.homeTopSubtitle {
                        font-weight: 300;
                        font-size: 100%;
                        position: 'relative'
                    }
                    .partnerSection {
                        padding: 7% 0;
                    }
                    .partnerSection img {
                        height: 40px;
                        transform: translateX(-10%);
                    }
                    .sliderContainer {
                        width: 90%;
                        margin-left: 4%;
                        margin-top: 4%;
                    }
                    .openNoticeButton {
                        padding: 3px 12px 6px;
                        font-size: 120%;
                    }
                    .noticeTitle {
                        font-size: 1.2rem;
                    }
                    .noticeSubtitle {
                        font-size: 0.9rem;
                    }
                  }
                }
              `}</style>
            </Layout>
        );

    }
}

export default Index;
    