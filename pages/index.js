import Layout from '../components/Layout.js';

const homeTop1 = {
    // backgroundImage: 'url("/static/images/artwork/above_white_matter2.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'rgb(15, 15, 15)',
    padding: '17% 14%',
    lineHeight: '1.4em',
    textAlign: 'left',
    position: 'relative'
}


const homeTop2 = {
    backgroundImage: 'url("/static/images/artwork/3P_surface_bright.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#E1EBF7',
    padding: '17% 14%',
    lineHeight: '1.4em',
    textAlign: 'left'
}

const customerSection = {
    backgroundImage: 'url("/static/images/artwork/watermelon.jpg")',
    background: 'rgba(255,255,255,0.74)',
    position: 'relative',
    zIndex: '200',
    padding: '1% 0 8% 0',
    bottom: '50px'

}

const customerLogos = {
    // display: 'inline-flex',
    // flexDirection: 'row',
    // float: 'left',
    width: '100%',
    // border: '2px red solid'
    // overflow: 'scroll',
}

const logo = {
    display: 'block',
    maxHeight: '70px',
    // height: 'auto',
    // width: 'auto',
    padding: '0 1%',
    margin: '2% 0',
    float: 'left',
    // borderRight: '1px solid #d4d4d4'
}

const listStyle = {
    listStyle: 'none',
    transform: 'translateX(-1%)',
    lineHeight: '1.8',
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

            <div style={homeTop2}>
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
                <ul style={listStyle}>
                    <li>Baylor College of Medicine</li>
                    <li>Neurodata Without Borders</li>
                    <li>Mathworks</li>
                    <li>Amazon Web Services</li>
                </ul>
            </div>
            {/* <div style={customerSection}>
                <h4>Our Customers</h4>
                <div style={customerLogos}>
                    <img style={logo} src="./static/images/logo/color/hhmi_janelia_logo.png" alt="HHMI Janelia Research Campus Logo" width="180px" />
                    <img style={logo} src="./static/images/logo/color/pni_logo.png" alt="Princeton Neuroscience Institute Logo" width="100px" />
                    <img style={logo} src="./static/images/logo/color/ibl_logo.png" alt="International Brain Laboratory Logo" width="180px" />
                    <img style={logo} src="./static/images/logo/color/kavli_logo.png" alt="Kavli Institute for Systems Neuroscience Logo" height="70px" />
                    <img style={logo} src="./static/images/logo/color/harvard_logo_text.png" alt="Harvard University Logo" width="140px" />
                    <img style={logo} src="./static/images/logo/color/ucsd_logo.png" alt="UCSD Logo" width="140px" />
                    <img style={logo} src="./static/images/logo/color/bcm_logo.png" alt="Baylor College of Medicine Logo" />
                </div>
            </div> */}
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
                .partnerSection {
                    background: linear-gradient(rgba(255,255,255,1.0), rgba(251,255,255,0.75));
                    height: 100%;
                    position: relative;
                    text-align: center;
                    z-index: 150;
                    padding: 7% 0 12% 0;
                }

                @media (max-width: 1440px) {
                    .homeTopTagline {
                        font-size: 260%;
                    }
                    p.homeTopSubtitle {
                        font-size: 110%;
                        position: 'relative'
                    }
                }
               
                @media (max-width: 768px) {
                    .homeTopTagline {
                        font-weight: 500;
                        font-size: 190%;
                    }
                    p.homeTopSubtitle {
                        // font-weight: 300;
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
    