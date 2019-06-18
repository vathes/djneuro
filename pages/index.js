import Layout from '../components/Layout.js';

const homeTop1 = {
    // backgroundImage: 'url("/static/images/artwork/above_white_matter2.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: 'rgb(15, 15, 15)',
    padding: '17% 14%',
    lineHeight: '1.4em',
    textAlign: 'left'
}

const homeTop1Text = {
    position: 'relative',
    zIndex: '200',
}

const homeTop2Text = {
    position: 'relative',
    zIndex: '200',
}

const homeTop2 = {
    backgroundImage: 'url("/static/images/artwork/3P_surface.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#E1EBF7',
    padding: '17% 14%',
    lineHeight: '1.4em',
    textAlign: 'left',
    fontSize: '110%'
}

const partnerSection = {
    background: 'linear-gradient(rgba(255,255,255,1.0), rgba(251,255,255,0.75))',
    height: '100%',
    position: 'relative',
    textAlign: 'center',
    zIndex: '150',
    padding: '7% 0 12% 0'

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
    transform: 'translateX(-1%)'
}

export default function Index() {
    return (
        <Layout>
            <div style={homeTop1}>
                <div style={homeTop1Text}>
                    <h2>Catch copy about this length would be good.</h2>
                </div>
            </div>

            <div style={homeTop2}>
                <div style={homeTop2Text}>
                    <p><b>DataJoint Neuro®</b> enables research teams to design scientific databases and computational pipelines by providing support, resources, and services.</p>
                    <br />
                    <p>Our focus is on neuroscience and AI. </p>
                </div>
            </div>
            <div style={partnerSection}>
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
            `}</style>
        </Layout>
    );
}
    