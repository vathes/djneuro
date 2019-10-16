import Layout from '../components/Layout.js';
import Slider from 'react-slick';


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
    className: "center",
    // centerMode: true,
    dots: true,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerPadding: "0px",
    // responsive: [
    //     {
    //         breakpoint: 768,
    //         settings: {
    //             arrows: false,
    //             centerMode: true,
    //             centerPadding: '40px',
    //             slidesToShow: 3
    //         }
    //     },
    // ],
    speed: 500
}



export default function Index() {
    return (
        <Layout>
            {/* <div style={homeTop1}>
                <h1 className="homeTopTagline">Data science for research teams</h1>
                
                    
                <p className="homeTopSubtitle">
                    <br />
                    <b>DataJoint Neuro®</b> enables research teams to design scientific databases 
                    and computational pipelines by providing support, resources, and services.
                    <br /><br />
                    Our focus is on neuroscience and AI. 
                </p>
            </div> */}

            <div style={homeTop}>
                <h1 className="homeTopTagline">Data pipelines built by you.</h1>
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
                    </Slider>
                </div>
            </div>
            <style jsx>{`
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
                    height: 80px;
                }
                .customerSection {
                    padding: 4% 0 12% 0;
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
                    // border-top: 1px solid red;
                    // border-bottom: 1px solid red;
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
                        padding: 7% 0 20% 0;
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
                        padding: 7% 0 20% 0;
                }
            }
            `}</style>
        </Layout>
    );
}
    