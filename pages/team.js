import Layout from '../components/Layout.js';


const tabcard = {
    position: 'relative',
    // width: '400px',
    width: '350px',
    height: '100px',
    // borderRadius: '0 50px 50px 0',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // margin: '10px 0',
    margin: '30px 50px 0',
    float: 'left',
    zIndex: '100'
}

const tabcard2 = {
    position: 'relative',
    // width: '400px',
    width: '350px',
    height: '100px',
    // borderRadius: '50px 0 0 50px',
    borderRadius: '50px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    // margin: '10px 0',
    margin: '30px 50px 0 50px',
    float: 'right',
    zIndex: '100'
}

const columnAimg = {
    float: 'right'
}

const columnBimg = {
    float: 'left'
}

const linesCenter = {
    height: '480px',
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(2.2, 1.35) translate(-23%,0)',
    position: 'absolute'
}

const linesSide = {
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(3.3, 1.68) translate(-127%,19%)',
    zIndex: '10',
    position: 'absolute'
}

const linesSide2 = {
    borderRadius: '0',
    border: 'none',
    marginTop: '60px',
    transform: 'scale(3.3, 1.68) translate(96%,19%) rotate(180deg)',
    zIndex: '10',
    position: 'absolute'
}

const role = {
    fontSize: '75%',
    fontWeight: '200',
    paddingTop: '2px',
}

const memberText = {
    transform: 'translateX(-10%)'
}

const memberText2 = {
    transform: 'translateX(10%)'
}



const Team = () => (
    <Layout>
        
        <div className="teamHead">
            <div className="teamHeadBackdrop">
                <h4>Our Team</h4>
                <p className="teamDescription">Our team comprises systems neuroscientists, data scientists, and software engineers with expertise in data acquisition and analysis
                            systems neuroscience, data acquisition and analysis, databases, machine learning, and cloud computing.</p> 
            </div>
        </div>
        <div className="memberBackground">
            {/* <img style={linesCenter} src="./static/images/artwork/networkLines.svg" /> */}
            {/* <img style={linesSide} src="./static/images/artwork/networkLinesWide.svg" /> */}
            {/* <img style={linesSide2} src="./static/images/artwork/networkLinesWide.svg" /> */}
            <div className="row">
                <div style={tabcard} className="animated fadeInLeft" >
                    <div style={memberText}>
                        <p>Dimitri Yatsenko, PhD</p>
                        <p style={role}>President</p>
                    </div>
                    <img style={columnAimg} src="./static/images/team/dimitriyatsenko.jpg" />
                </div>
                <div style={tabcard2} className="animated fadeInRight">
                    <div style={memberText2}>
                        <p>Edgar Y. Walker, PhD</p>
                        <p style={role}>Vice President, Engineering</p>
                    </div>
                    <img style={columnBimg} src="./static/images/team/edgarwalker.jpg" />
                </div>
            </div>
            <div className="row">
                <div style={tabcard} className="animated fadeInRight">
                    <div style={memberText}>
                        <p>Andreas Tolias, PhD</p>
                        <p style={role}>Scientific and Business Advisor</p>
                    </div>
                    <img style={columnAimg} src="./static/images/team/andreastolias.jpg" />
                </div>
                <div style={tabcard2} className="animated fadeInLeft">
                    <div style={memberText2}>
                        <p>Jake Reimer, PhD</p>
                        <p style={role}>Application Specialist</p>
                    </div>
                    <img style={columnBimg} src="./static/images/team/jakereimer.jpg" />
                </div>
            </div>
            <div className="row">
                <div style={tabcard} className="animated fadeInLeft">
                    <div style={memberText}>
                        <p>Chris Turner</p>
                        <p style={role}>Product Engineer</p>
                    </div>
                    <img style={columnAimg} src="./static/images/team/christurner.jpg" />
                </div>
                <div style={tabcard2} className="animated fadeInRight">
                    <div style={memberText2}>
                        <p>Camila Lopez</p>
                        <p style={role}>Project Manager</p>
                    </div>
                    <img style={columnBimg} src="./static/images/team/camilalopez.jpg" />
                </div>
            </div>
            <div className="row">
                <div style={tabcard} className="animated fadeInRight">
                    <div style={memberText}>
                        <p>Shan Shen, PhD</p>
                        <p style={role}>Data Scientist</p>
                    </div>
                    <img style={columnAimg} src="./static/images/team/shanshen.jpg" />
                </div>
                <div style={tabcard2} className="animated fadeInLeft">
                    <div style={memberText2}>
                        <p>Thinh Nguyen, PhD</p>
                        <p style={role}>Data Scientist</p>
                    </div>
                    <img style={columnBimg} src="./static/images/team/thinhnguyen.jpg" />
                </div>
            </div>
            <div className="row">
                <div style={tabcard} className="animated fadeInLeft">
                    <div style={memberText}>
                        <p>Raphael Guzman</p>
                        <p style={role}>Software Engineer</p>
                    </div>
                    <img style={columnAimg} src="./static/images/team/raphaelguzman.jpg" />
                </div>
                <div style={tabcard2} className="animated fadeInRight">
                    <div style={memberText2}>
                        <p>Maho Sasaki</p>
                        <p style={role}>Front-end Web Developer</p>
                    </div>
                    <img style={columnBimg} src="./static/images/team/mahosasaki.jpg" />
                </div>
            </div>
        </div>
        <style jsx>{`
            .teamHead {
                background-color: rgba(0, 0, 0, 0.9);
                background-image: url("./static/images/artwork/networkLines.svg");
                background-attachment: fixed;
                background-size: 180px;
                background-repeat: repeat;
                background-position: center;
                padding: 200px 300px 300px;
                color: #E1EBF7;
                position: relative;
                text-align: center;
            }
            .teamHeadBackdrop {
                background: linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85));
                position: absolute;
                top: 0;
                left: 0;
                right: 0;
                padding: 150px 200px 300px 200px;
                line-height: 1.8;
                font-size: 110%;
            }
            p.teamDescription {
                text-align: left;
            }
            .memberBackground {
                background-image: url("/static/images/artwork/LGN_injection.jpg");
                background-size: cover;
                background-repeat: no-repeat;
                background-position: left;
                height: 100%;
                position: relative;
                padding-bottom: 10%;
            }
            .row {
                width: 100%;
                max-width: 1000px;
                display: inline-block;
            }
            img {
                width: 96px;
                border-radius: 50px;
                border: 2px solid cyan;
                transform: translateY(-85%);
            }
            p {
                padding-top: 8px;
                color: white;
                // text-align: center;
                // transform: translate(-15%, 130%);
            }
            @media (max-width: 768px) {
                .teamHead {
                    padding: 40% 50% 8%;
                    height: fit-content;
                }
                .teamHeadBackdrop {
                    padding: 20px 25px;
                }
            }
        `}</style>
    </Layout>
);

export default Team;