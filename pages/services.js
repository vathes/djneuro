import Layout from '../components/Layout.js';


const Services = () => (
    <Layout>
        <h2>Services</h2>
        <p><b>DataJoint Neuro®</b> provides support, resources, and services.</p>
        <h3>Free Resources</h3>
        <p>DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
        <ul>
            <li>DataJoint Reference Documentation:  <a href="https://docs.datajoint.org">https://docs.datajoint.org</a></li>
            <li>DataJoint Tutorials:  <a href="https://tutorials.datajoint.org">https://tutorials.datajoint.org</a></li>
            <li>DataJoint Server configuration: <a href="https://github.com/datajoint/mysql-docker">https://github.com/datajoint/mysql-docker</a></li>
            <li>DataJoint Python Client:  <a href="https://github.com/datajoint/datajoint-python">https://github.com/datajoint/datajoint-python</a></li>
            <li>DataJoint MATLAB Client:  <a href="https://github.com/datajoint/datajoint-matlab">https://github.com/datajoint/datajoint-matlab</a></li>
        </ul>
        <p>In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of "Canonical Data Pipelines for Neurophysiology" to be presented at the <a href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for Neuroscience Conference in November 2019</a>.</p>
        <h3>Basic Support</h3>
        <p>Basic Support is a service subscription intended for groups who use DataJoint and require occasional or semi-regular support and assistance. 
            <br />The subscription includes:</p>
        <ul>
            <li>Automated billing — $625/quarter</li>
            <li>Priority support for general technical questions and troubleshooting </li>
            <li>Availability of on-demand services (additional cost):</li>
            <ul>
                <li>Training workshops (on-site or remote)</li>
                <li>Assistance with administration and configuration of IT resources (on premises or on cloud)</li>
            </ul>
        </ul>
        <button>Apply</button>
        <h3>Managed Database Hosting (Beta)</h3>
        <p>DataJoint Neuro offers managed DataJoint-optimized cloud database hosting as an option with Basic Support. This is offered as a limited beta service to qualified partners at the price of $1250/quarter.</p>
        <ul>
            <li>High-performance database server + large object storage on cloud</li>
            <li>Secure connection, user authentication, access control, and backups</li>
            <li>Predictable pricing</li>
            <li>Performance monitoring and optimization</li>
            <li>Integration with cloud computing</li>
        </ul>
        <button>Apply</button>
        <h3>Custom Service and Development</h3>
        <p>For more demanding projects, DataJoint Neuro offers development services to neuroscience projects under direct custom contracts. These projects commonly include: </p>
        <ul>
            <li>Design of data science plans and data sharing plans for neuroscience for projects</li>
            <li>Integration with instrumentation and lab information management systems</li>
            <li>Joint pipeline development</li>
            <li>Web interfaces </li>
            <li>Data export, migration, sharing, and publishing</li>
        </ul>
        <button>Contact Us</button>
    </Layout>
);

export default Services;