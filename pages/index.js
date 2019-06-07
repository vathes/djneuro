import Layout from '../components/Layout.js';

const homeTop1 = {
    backgroundImage: 'url("/static/images/artwork/3P_surface.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    color: '#E1EBF7',
    padding: '14% 12%',
    lineHeight: '1.4em',
    textAlign: 'left'
}

const homeTop1Text = {
    position: 'relative',
    zIndex: '200',
}

const backdrop = {
    background: 'linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.75))',
    width: '100vw',
    position: 'absolute',
    zIndex: '100',
    height: '100vw',
    margin: '-14% -12%'
}

const homeTop2 = {

}

const homeTop3 = {

}

const customerSection = {
    backgroundImage: 'url("/static/images/artwork/watermelon.jpg")',
    background: 'rgba(255,255,255,0.74)',
    position: 'relative',
    zIndex: '200',
    padding: '8% 0%'

}

const customerLogos = {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    overflow: 'scroll',
}

const logo = {
    display: 'block',
    maxHeight: '70px',
    height: 'auto',
    width: 'auto',
    padding: '0 1%',
    borderRight: '1px solid #d4d4d4'
}
export default function Index() {
    return (
        <Layout>

            <div style={homeTop1}>

                <div style={backdrop}></div>
                <div style={homeTop1Text}>
                    <p><b>DataJoint Neuro®</b> enables research teams to design scientific databases and computational pipelines by providing support, resources, and services.</p>
                    <br />
                    <p>Our focus is on neuroscience and AI. </p>
                    <br />
                    <p>Our team comprises systems neuroscientists, data scientists, and software engineers with expertise in data acquisition and analysis 
                        systems neuroscience, data acquisition and analysis, databases, machine learning, and cloud computing.</p> 
                </div>
            </div>

            <div style={homeTop2}>

            </div>
            {/* <div style={homeTop3}>
                <h4>Partners</h4>
                <ul>
                    <li>Baylor College of Medicine</li>
                    <li>Neurodata Without Borders</li>
                    <li>Mathworks</li>
                    <li>Amazon Web Services</li>
                </ul>
            </div> */}
            <div style={customerSection}>
                <h4>Our Customers</h4>
                <div style={customerLogos}>
                    <img style={logo} src="./static/images/logo/color/hhmi_janelia_logo.png" alt="HHMI Janelia Research Campus Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/pni_logo.png" alt="Princeton Neuroscience Institute Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/ibl_logo.png" alt="International Brain Laboratory Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/kavli_logo.png" alt="Kavli Institute for Systems Neuroscience Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/harvard_logo_text.png" alt="Harvard University Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/ucsd_logo.png" alt="UCSD Logo" width="200px" />
                    <img style={logo} src="./static/images/logo/color/bcm_logo.png" alt="Baylor College of Medicine Logo" width="200px" />
                </div>
            </div>
            <style jsx>{`
                p {
                    margin: 0;
                }
            `}</style>
        </Layout>
    );
}
    