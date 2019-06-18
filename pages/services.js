import Layout from '../components/Layout.js';

const background = {
    backgroundImage: 'url("/static/images/artwork/nestin-cherry2.png")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    color: 'white'
};

const resourceSection = {
    padding: '40px 0 15px',
    background: 'linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7))'
}

const resourceSubtitle = {
    fontSize: '0.9em',
    lineHeight: '0.75'
}
const resourcesListRow = {
    display: 'flex',
    flexDirection: 'row',
    listStyle: 'none'
}

const resourcePanel = {
    width: '17%',
    borderRadius: '4px',
    backgroundColor: 'rgba(0, 0, 0, 0.6)',
    padding: '20px 8px',
    margin: '5px'
}

const resourceFooter = {
    fontSize: '0.85em',
    lineHeight: '0.75',
    textAlign: 'left',
    padding: '5px 5%'
}

const inlineLink = {
    display: 'inline-block',
    textDecoration: 'none',
    color: '#41B0F7' // muted blue
}

const servicesSection = {
    display: 'flex',
    flexDirection: 'row',
    marginLeft: '2%',
    marginTop: '3%',
    paddingBottom: '8%'
}

const supportType = {
    width: '31%',
    margin: '0 0.3%',
    listStyleType: 'disc',
    border: '3px solid rgba(255,255,255,0.75)',
    borderRadius: '5px',
    backgroundColor: 'rgba(0, 0, 0, 0.7)',
}

const textLeft = {

    padding: '10px 15px',
    textAlign: 'left',
    lineHeight: '1.2em',
    fontSize: '90%',
    fontWeight: '200'
}


const servicePanelTitle = {
    paddingTop: '15px',
    fontWeight: '400',
    height: '2.0em',
    borderBottom: '2px solid rgba(255,255,255,0.75'
}

const formContainer = {
    margin: '2% 10%',
    paddingBottom: '8%',
    paddingLeft: '2%',
    paddingTop: '2%',
    border: 'solid 2px white',
    background: 'rgba(0, 0, 0, 0.4)'
}

const formgroup = {
    display: 'block',
    textAlign: 'left',
    marginBottom: '2%'
}

const inputField = {
    borderRadius: '4px',
    height: '30px',
    width: '200px'
}

const radioField = {
    marginLeft: '15px'
}


class ApplyButton extends React.Component {
    constructor(props) {
        super(props);
        this.state = { 
            radioChecked: [false, false, false],
            id: this.props.id
        };
        this.check = this.check.bind(this);
    }

    check(id, e) {
        if (id === 1) {
            this.setState(state => ({
                radioChecked: [true, false, false]
            }));
        } else if (id === 2) {
            this.setState(state => ({
                radioChecked: [false, true, false]
            }));
        } else if (id === 3) {
            this.setState(state => ({
                radioChecked: [false, false, true]
            }));
        }
        
        console.log('custom service checked!');
        console.log('id is: ', id);
        console.log('e is: ', e);
    }

    render(id=this.state.id) {
        return (
            <div>
                <button onClick={(e) => this.check(id, e)}>Apply</button>
                <style jsx>{`
                    button {
                        border: 2px solid white;
                        background-color: transparent;
                        color: white;
                        padding: 12px 28px;
                        border-radius: 4px;
                    }
                `}</style>
            </div>
        );
    }
}

const radioChecked = [false, true, false];

const Services = () => (
    <Layout>
        <div style={background}>
        
            <div style={resourceSection}>
                <h3>Free Resources</h3>
                <p style={resourceSubtitle}>DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                <ul style={resourcesListRow}>
                    <li style={resourcePanel}>DataJoint Reference Documentation  
                        <a href="https://docs.datajoint.org"><img src="static/images/icons/doc_white.png"/></a></li>
                    <li style={resourcePanel}>DataJoint <br />Tutorials  
                        <a href="https://tutorials.datajoint.org"><img src="static/images/icons/blackboard_white.png" /></a></li>
                    <li style={resourcePanel}>DataJoint Server Configuration 
                        <a href="https://github.com/datajoint/mysql-docker"><img src="static/images/icons/server-config-white.png" /></a></li>
                    <li style={resourcePanel}>DataJoint <br />Python Client  
                        <a href="https://github.com/datajoint/datajoint-python"><img src="static/images/icons/python-logo-monoc.png" /></a></li>
                    <li style={resourcePanel}>DataJoint <br />MATLAB Client  
                        <a href="https://github.com/datajoint/datajoint-matlab"><img src="static/images/icons/matlab-logo-monoc.png" /></a></li>
                </ul>
                <p style={resourceFooter}>In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of "Canonical Data 
                    Pipelines for Neurophysiology" to be presented at the <a style={inlineLink} href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for 
                    Neuroscience Conference in November 2019</a>.</p>
            </div>
            <div style={servicesSection}>
                <div style={supportType}>
                    <h3 style={servicePanelTitle}>Basic Support</h3>
                    <div style={textLeft}>
                        <p>Basic Support is a subscription service offered to qualified research groups who use DataJoint 
                            and require occasional or semi-regular support and assistance.</p> 
                        <p><b>Cost: </b>$1200/year</p>
                        <ul>
                            <li>Includes a free online <b>"Interactive Course for DataJoint  Practitioners"</b> (10 seats).</li>
                            <li>Access to on-demand training workshops for novice, intermediate, or advanced practitioners:</li>
                            <ul>
                                <li>on-site workshops: $1500/day/instructor + travel expenses. Each day includes six hours of instruction 
                                    and interactive hands-on tutorials with the rest of the time for questions and discussion. 
                                    Limit 15 trainees/instructor.</li>
                                <li>remote workshops: $500 per 3-hour block (10 seats)</li>
                            </ul>
                            <li>Access to ticket-based priority support:</li>
                            <ul>
                                <li>Assistance with pipeline design and execution: $95/hour/engineer in 1-hour blocks</li>
                                <li>Assistance with local IT configuration: $95/hour/engineer in 4-hour blocks</li>
                                <li>Administration of cloud storage and servers: $95/hour/engineer in 4-hour blocks</li>
                            </ul>
                        </ul>
                    </div>
                    <ApplyButton id="1" />
                    {/* <button onClick={(e) => this.check(1, e)}>Apply</button> */}
                </div>
                <div style={supportType}>
                    <h3 style={servicePanelTitle}>Managed Database Hosting (Beta)</h3>
                    <div style={textLeft}>
                        <p><b>DataJoint Neuro</b> offers managed DataJoint-optimized cloud hosting for an additional $4,800/year 
                            introductory pricing. This service is an option offered to qualified groups with a Basic Support subscription.</p>
                        <p>Features</p>
                        <ul>
                            <li>DataJoint-optimized relational Database Server + object storage</li>
                            <li>up to 1 TiB relational storage + 10 TiB object storage</li>
                            <li>unlimited transfers in and up to 2 TiB / month transfers out</li>
                            <li>unlimited transfers to AWS compute</li>
                                <li>Database access URL  &lt;yourlab&gt;.djhub.io</li>
                            <li>Secure connection</li>
                            <li>High performance and uptime </li>
                            <li>Unlimited data pipelines and schemas</li>
                                
                        </ul>
                        <p>Support</p>
                        <ul>
                            <li>User access management (10 users)</li>
                            <li>Snapshot-based backups</li>
                            <li>Availability and performance monitoring</li>
                        </ul>
                    </div>
                    <ApplyButton id="2" />
                    {/* <button onClick={(e) => this.check(2, e)}>Apply</button> */}
                </div>
                <div style={supportType}>
                    <h3 style={servicePanelTitle}>Custom Service and Development</h3>
                    <div style={textLeft}>
                        <p>For more demanding projects, DataJoint Neuro offers development services to neuroscience projects under 
                            direct custom contracts. These projects commonly include: </p>
                        <ul>
                            <li>Design of data science plans and data sharing plans for neuroscience for projects</li>
                            <li>Integration with instrumentation and lab information management systems</li>
                            <li>Joint pipeline development</li>
                            <li>Web interfaces </li>
                            <li>Data export, migration, sharing, and publishing</li>
                        </ul>
                    </div>
                    <ApplyButton id="3" />
                    {/* <button onClick={(e) => this.check(3, e)}>Contact Us</button> */}
                </div>
            </div>
            <div style={formContainer}>
                <form action="https://datajoint.io/djNeuroInquiry" method="POST">
                    <div style={formgroup}>
                        <label>Contact Person</label>
                        <input style={inputField} type="text" name="name" placeholder="Contact Person" />
                    </div>
                    <div style={formgroup}>
                        <label>Email</label>
                        <input style={inputField} type="email" name="email" placeholder="Email" />
                    </div>
                    <div style={formgroup}>
                        <label>Principal Investigator</label>
                        <input style={inputField} type="text" name="pi" placeholder="Principal Investigator" />
                    </div>
                    <div style={formgroup}>
                        <label>Department</label>
                        <input style={inputField} type="text" name="department" placeholder="Department" />
                    </div>
                    <div style={formgroup}>
                        <label>Institution</label>
                        <input style={inputField} type="text" name="institution" placeholder="Institution" />
                    </div>
                    <div style={formgroup}>
                        <label>Project Description</label>
                        <textarea id="descriptionField" type="text" name="project" placeholder="Project Description"></textarea>
                    </div>
                    <div style={formgroup}>
                        <input style={radioField} type="radio" checked={radioChecked[0]} name="subscription_type" value="basic" /> Basic Support
                        <input style={radioField} type="radio" checked={radioChecked[1]} name="subscription_type" value="managed db hosting" /> Managed Database Hosting (beta)
                        <input style={radioField} type="radio" checked={radioChecked[2]} name="subscription_type" value="custom service" /> Custom Service and Development
                    </div>
                    <button type="submit" value="Send">Send</button>
                </form>
            </div>
        </div>
        <style jsx>{`
            h3 {
                margin: 0;
            }

            img {
                // width: 75px;
                height: 70px;
            }

            a {
                display: block;
                margin-top: 13px;
            }

            button {
                border: 2px solid white;
                background-color: transparent;
                color: white;
                padding: 12px 28px;
                border-radius: 4px;
            }
            label {
                margin-right: 14px;
                font-size: 90%;
                vertical-align: top;
            }

            #descriptionField {
                width: 400px;
                height: 150px;
                border-radius: 4px;
            }


        `}</style>
    </Layout>
);

export default Services;