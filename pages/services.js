import Layout from '../components/Layout.js';

const background = {
    backgroundImage: 'url("/static/images/artwork/blue-cherry-flicker.gif")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    color: 'white'
};

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
        
            <div className="resourceSection">
                <h3>Free Resources</h3>
                <p className="subtitle1">DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                <ul className="resourcesListRow">
                    <li className="resourcePanel">DataJoint Reference Documentation  
                        <a href="https://docs.datajoint.org" target="_blank"><img src="/static/images/icons/doc_white.png"/></a></li>
                    <li className="resourcePanel">DataJoint <br />Tutorials  
                        <a href="https://tutorials.datajoint.org" target="_blank"><img src="/static/images/icons/blackboard_white.png" /></a></li>
                    <li className="resourcePanel">DataJoint Server Configuration 
                        <a href="https://github.com/datajoint/mysql-docker" target="_blank"><img src="/static/images/icons/server-config-white.png" /></a></li>
                    <li className="resourcePanel">DataJoint <br />Python Client  
                        <a href="https://github.com/datajoint/datajoint-python" target="_blank"><img src="/static/images/icons/python-logo-monoc.png" /></a></li>
                    <li className="resourcePanel">DataJoint <br />MATLAB Client  
                        <a href="https://github.com/datajoint/datajoint-matlab" target="_blank"><img src="/static/images/icons/matlab-logo-monoc.png" /></a></li>
                </ul>
                <p className="subtitle2">In collaboration with Karel Svoboda's Lab and Lawrence Berkeley Lab, DataJoint Neuro is preparing a set of "Canonical Data 
                    Pipelines for Neurophysiology" to be presented at the <a style={inlineLink} href="https://www.sfn.org/Meetings/Neuroscience-2019">Society for 
                    Neuroscience Conference in November 2019</a>.</p>
            </div>
            <div className="construction">
                <hr />
                <h3>Support Type</h3>
                <h4>Under Construction</h4>
            </div>
            {/* <div style={servicesSection}>
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
            </div> */}
        </div>
        <style jsx>{`
            .construction {
                height: 500px;
            }
            .construction h3 {
                padding-top: 80px;
            }
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

            .resourceSection {
                padding: 40px 0 15px;
                background: linear-gradient(rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0), rgba(0,0,0,0.7));
            }
            .subtitle1, .subtitle2 {
                line-height: 0.8;
                font-size: 0.85em;
                padding: 5px 5%;
            }

            .subtitle1 {
                text-align: center;
            }

            .subtitle2 {
                text-align: left;
            }

            .resourcePanel {
                width: 17%;
                border-radius: 4px;
                border: 1px solid transparent;
                background-color: rgba(0, 0, 0, 0.6);
                padding: 20px 8px;
                margin: 5px;
            }
            .resourcePanel:hover {
                border: 1px solid white;
                // background-color: rgba(100, 0, 126, 0.6);
                background-color: rgba(0, 0, 0, 0.75);
            }

            .resourcesListRow {
                display: flex;
                flex-direction: row;
                list-style: none;
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

            @media (max-width: 768px) {
                .subtitle {
                    line-height: 1;
                    font-size: 0.82em;
                }

                img {
                    height: 50px;
                }

                .resourcePanel {
                    font-size: 82%;
                }

        `}</style>
    </Layout>
);

export default Services;