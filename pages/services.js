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


const radioField = {
    // marginLeft: '15px'
}


class ApplyButton extends React.Component {

    onClickApply(id, e) {
        this.props.check(id);
    }

    render(id=this.props.id) {
        return (
            <div>
                <button onClick={(e) => this.onClickApply(id, e)}>Apply</button>
                <style jsx>{`
                    button {
                        border: 2px solid black;
                        background-color: transparent;
                        color: black;
                        padding: 12px 28px;
                        border-radius: 4px;
                        margin-top: 2px;
                    }
                    button:hover {
                        color: white;
                        background-color: rgba(100, 0, 121, 0.9);
                        border: 2px solid rgba(100, 0, 121, 0.9);
                    }
                `}</style>
            </div>
        );
    }
}

class Services extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            radioChecked: [false, false, false],
            formLoaded: false
        };
        this.check = this.check.bind(this);
    }

    check(id) {
        if (id === 1) {
            this.setState(state => ({
                radioChecked: [true, false, false],
                formLoaded: true
            }));
        } else if (id === 2) {
            this.setState(state => ({
                radioChecked: [false, true, false],
                formLoaded: true
            }));
        } else if (id === 3) {
            this.setState(state => ({
                radioChecked: [false, false, true],
                formLoaded: true
            }));
        }

    }
    formContainerStyle() {
        const hidden = {
            display: 'none'
        }
        const show = {
            display: 'block'
        }
        return this.state.formLoaded ? show: hidden;
    }

    pullUpForm() {
        return this.state.formLoaded ? 'animated fadeInDown' : '';
    }
    render() {
        return (
            <Layout>
                <div style={background}>

                    <div className="resourceSection">
                        <h3>Free Resources</h3>
                        <p className="subtitle1">DataJoint Neuro is the principal contributor to the free, community-oriented, open-source tools comprising the DataJoint ecosystem:</p>
                        <ul className="resourcesListRow">
                            <li className="resourcePanel">DataJoint Reference Documentation
                        <a href="https://docs.datajoint.org" target="_blank"><img src="/static/images/icons/doc_white.png" /></a></li>
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
                            Neuroscience Conference in November 2019</a>.
                        </p>
                    </div>
                    <br /><br /><br />
                    <h3>Support Types</h3>
                    <div style={servicesSection}>
                        <div className="servicePanel">
                            <h3 className="servicePanelTitle">Basic Support</h3>
                            <div className="servicePanelText">
                                <p>Basic Support is a subscription service offered to qualified research groups who use DataJoint 
                                    and require occasional or semi-regular support and assistance.</p> 
                                <p><b>Price: </b>$1200/year</p>
                                <ul>
                                    <li>Includes a free online <b>"Interactive Course for DataJoint  Practitioners"</b> (10 seats).</li>
                                    <li>Access to on-demand, targeted training workshops for novice, intermediate, or advanced practitioners:</li>
                                    <ul>
                                        <li>on-site workshops: $1500/day/instructor + travel expenses. Each day includes six hours of instruction 
                                            and interactive hands-on tutorials with the rest of the time for questions and discussion. 
                                            Limit 15 students/instructor.</li>
                                        <li>remote interactive workshops: $500 per 3-hour block (10 students)</li>
                                    </ul>
                                    <li>Access to ticket-based priority support ($95/hour/engineer):</li>
                                    <ul>
                                        <li>Assistance with pipeline design and execution</li>
                                        <li>Assistance with local IT configuration</li>
                                        <li>Administration of cloud storage and servers</li>
                                    </ul>
                                </ul>
                            </div>
                            <div className="servicePanelFooter">
                                <ApplyButton id="1" check={() => this.check(1)} />
                            </div>
                            
                        </div>
                        <div className="servicePanel">
                            <h3 className="servicePanelTitle">Managed Database Hosting (Beta)</h3>
                            <div className="servicePanelText">
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
                            <div className="servicePanelFooter">
                                <ApplyButton id="2" check={() => this.check(2)} />
                            </div>
                            
                        </div>
                        <div className="servicePanel">
                            <h3 className="servicePanelTitle">Custom Service and Development</h3>
                            <div className="servicePanelText">
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
                            <div className="servicePanelFooter">
                                <ApplyButton id="3" check={() => this.check(3)} />
                            </div>
                            
                        </div>
                    </div>
                    <div style={this.formContainerStyle()} className={'formContainer ' + this.pullUpForm()} >
                        <form action="http://localhost:3000/djneuro-service-inquiry" method="POST">
                            <div className="formgroup">
                                <label>Contact Person</label>
                                <input className="inputField" type="text" name="name" placeholder="Contact Person" />
                            </div>
                            <div className="formgroup">
                                <label>Email</label>
                                <input className="inputField" type="email" name="email" placeholder="Email" />
                            </div>
                            <div className="formgroup">
                                <label>Principal Investigator</label>
                                <input className="inputField" type="text" name="pi" placeholder="Principal Investigator" />
                            </div>
                            <div className="formgroup">
                                <label>Department</label>
                                <input className="inputField" type="text" name="department" placeholder="Department" />
                            </div>
                            <div className="formgroup">
                                <label>Institution</label>
                                <input className="inputField" type="text" name="institution" placeholder="Institution" />
                            </div>
                            <div className="formgroup">
                                <label>Project Description</label>
                                <textarea className="descriptionField" type="text" name="project" placeholder="Project Description"></textarea>
                            </div>
                            <div className="formgroup">
                                <input className="radioField" style={radioField} type="radio" checked={this.state.radioChecked[0]} onChange={() => this.check(1)} name="subscription_type" value="basic" /> Basic Support
                                <input className="radioField" style={radioField} type="radio" checked={this.state.radioChecked[1]} onChange={() => this.check(2)} name="subscription_type" value="managed db hosting" /> Managed Database Hosting (beta)
                                <input className="radioField" style={radioField} type="radio" checked={this.state.radioChecked[2]} onChange={() => this.check(3)} name="subscription_type" value="custom service" /> Custom Service and Development
                            </div>
                            <button type="submit" value="Send">Send</button>
                        </form>
                    </div>
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

                    
                    div.formContainer {
                        margin: -6% 10% 0;
                        padding: 2% 2% 8%;
                        background: rgba(0, 0, 0, 0.4);
                    }

                    form {
                        margin-top: 0;
                        padding: 3%;
                        border: solid 2px white;
                    }

                    div.formgroup {
                        display: block;
                        text-align: left;
                        margin-bottom: 2%;
                    }

                    .formgroup label {
                        margin-right: 14px;
                        font-size: 90%;
                        vertical-align: top;
                        min-width: 150px;
                        text-align: right;
                        display: inline-block;
                    }

                    .formgroup input.inputField {
                        borde-radius: 4px;
                        height: 30px;
                        width: 400px;
                    }

                    .formgroup textarea.descriptionField {
                        width: 400px;
                        height: 150px;
                        border-radius: 4px;
                    }

                    .formgroup .radioField {
                        margin-left: 15px;
                    }

                    .servicePanel {
                        width: 31%;
                        margin: 0 0.3%;
                        list-style-type: disc;
                        border: 3px solid rgba(255,255,255,0.95);
                        border-radius: 5px;
                        background-color: rgba(0, 0, 0, 0.7);
                        position: relative;
                    }

                    .servicePanelTitle {
                        color: black;
                        background-color: rgba(255,255,255,1);
                        padding-top: 15px;
                        font-weight: 400;
                        height: 2.0em;
                        border-bottom: 2px solid rgba(255,255,255,0.75);
                    }

                    .servicePanelText {
                        padding: 10px 15px 15%;
                        text-align: left;
                        line-height: 1.2em;
                        font-size: 90%;
                        font-weight: 200;
                        height: 350px;
                        overflow: scroll;
                        position: relative;
                    }

                    .servicePanelText li {
                        margin-top: 12px;
                    }
                    .servicePanelText li:first-of-type {
                        margin-top: 4px;
                    }

                    .servicePanelFooter {
                        position: absolute;
                        bottom: 0;
                        text-align: center;
                        background-color: white;
                        width: 100%;
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
    }

}

export default Services;