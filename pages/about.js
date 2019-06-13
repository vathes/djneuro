import Layout from '../components/Layout.js';

const background0 = {
    backgroundImage: 'url("/static/images/artwork/above_white_matter.jpg")',
    
};

const background1 = {
    backgroundColor: 'rgba(0, 0, 0, 0.65)',
    padding: '60px 40px',
    color: '#E1EBF7',
    position: 'relative',
    zIndex: '10'
};

const djWire = {
    width: '380px',
    position: 'absolute',
    zIndex: '5',
    left: '-55px',
    bottom: '2px',
    opacity: '0.3'
}

const background2 = {
    backgroundColor: 'rgba(0, 0, 0, 0.45)',
    padding: '60px 40px',
    color: '#E1EBF7',
    position: 'relative'
};

const sphereWire = {
    width: '540px',
    position: 'absolute',
    zIndex: '5',
    right: '0',
    bottom: '0',
    opacity: '0.4'
}

const background3 = {
    backgroundImage: 'url("/static/images/artwork/pipette.png")',
    backgroundColor: 'rgba(0, 0, 0, 0.75)',
    padding: '60px 40px',
    backgroundPosition: 'bottom',
    color: '#E1EBF7'
};

const background4 = {
    // backgroundImage: 'linear-gradient(white, white, white,  #E6FF42)',
    // backgroundColor: '#E1EBF7',
    padding: '60px 40px',
    color: 'black'
};




const About = () => (
    <Layout>
        <div style={background0}>
            <div class="section" style={background1}>
                <img style={djWire} src="/static/images/icons/djIcon-wire-white.png" />
                <h4>The DataJoint experts</h4>
                <p>Our team is the principal developer of <a href="https://datajoint.io">DataJoint®</a> — a free, open-source framework 
                for shared scientific databases and computational data pipelines programmed and accessed directly from MATLAB and Python. </p>
            </div>
            <div class="section" style={background2}>
                <img style={sphereWire} src="/static/images/icons/sphere_white.png" />
                <h4>We work with top neuroscience labs worldwide</h4>
                <p>We help neuroscientists use DataJoint to accelerate their research.  DataJoint Neuro provides solutions for project planning, 
                    training, data infrastructure, as well as tools and resources for maximizing the productivity of individual labs and large 
                    consortia. We lead in providing comprehensive solutions for custom scientific data pipelines in neuroscience.</p>
            </div>
        </div>
        <div class="section" style={background3}>
            <h4>Committed to data integrity and reproducibility</h4>
            <p>DataJoint Neuro works closely with the <a href="https://www.imagwiki.nibib.nih.gov/working-groups/other-nih-brain-initiative-u19-data-science-consortium">NIH 
            BRAIN Initiative U19 Data Science Consortium</a> and <a href="https://www.nwb.org/">Neurodata Without Borders</a> to ensure 
            smooth integration with the NIH BRAIN Initiative Informatics infrastructure. DataJoint is endorsed as a neuroinformatics data 
            standard by the <a href="https://www.incf.org/">International Neuroinformatics Coordinating Facility</a> (INCF).</p>
        </div >
        <div class="section" style={background4}>
            <h4>Bringing scientific rigor to AI research</h4>
            <p>DataJoint has also gained popularity in AI research as a data framework for model selection and parameter optimization. DataJoint 
                Neuro offers expertise and solutions to support AI research.
            <br /><br />
                DataJoint Neuro is run by Vathes LLC based in Houston, Texas. Vathes LLC spun off from the Lab of Andreas Tolias at Baylor 
                College of Medicine in 2017 after receiving initial SBIR funding from DARPA and  is a BCM family company.</p>
        </div >
        <style jsx>{`
            a {
                text-decoration: none;
                color: #CAE7FF; // light bluish grey
            }

            a:hover {
                color: #41B0F7 ; 
            }

            div {
                background-repeat: no-repeat;
                background-size: cover;
                color: #E1EBF7;  // blueish muted white
            }

            h4 {
                margin-top: 10%;
                font-size: 24px;
            }

            p {
                text-align: left;
                padding: 10px 15% 10%;
                font-size: 18px;
                line-height: 1.9rem;
            }

        `}</style>
        </Layout>
);

export default About;