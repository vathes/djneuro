import Layout from '../components/Layout.js';

const background = {
    backgroundImage: 'url("/static/images/artwork/LGN_injection.jpg")',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'top right',
    height: '800px'
};

const tabcard = {
    position: 'relative',
    width: '400px',
    height: '100px',
    borderRadius: '0 50px 50px 0',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: '10px 0',
    float: 'left',
    zIndex: '100'
}

const tabcard2 = {
    position: 'relative',
    width: '400px',
    height: '100px',
    borderRadius: '50px 0 0 50px',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    margin: '10px 0',
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

const Team = () => (
    <Layout>
        <div style={background}>
            {/* <img style={linesCenter} src="./static/images/artwork/networkLines.svg" /> */}
            {/* <img style={linesSide} src="./static/images/artwork/networkLinesWide.svg" /> */}
            {/* <img style={linesSide2} src="./static/images/artwork/networkLinesWide.svg" /> */}
            <div style={tabcard}>
                <p>Dimitri Yatsenko, PhD</p>
                <p style={role}>President</p>
                <img style={columnAimg} src="./static/images/team/dimitriyatsenko.jpg" />
            </div>
            <div style={tabcard2}>
                <p>Edgar Y. Walker, PhD</p>
                <p style={role}>Vice President, Engineering</p>
                <img style={columnBimg} src="./static/images/team/edgarwalker.jpg" />
            </div>
            <div style={tabcard}>
                <p>Andreas Tolias, PhD</p>
                <p style={role}>Scientific and Business Consultant</p>
                <img style={columnAimg} src="./static/images/team/andreastolias.jpg" />
            </div>
            <div style={tabcard2}>
                <p>Jake Reimer, PhD</p>
                <p style={role}>Application Specialist</p>
                <img style={columnBimg} src="./static/images/team/jakereimer.jpg" />
            </div>
            <div style={tabcard}>
                <p>Chris Turner</p>
                <p style={role}>Product Engineer</p>
                <img style={columnAimg} src="./static/images/team/christurner.jpg" />
            </div>
            <div style={tabcard2}>
                <p>Camila Lopez</p>
                <p style={role}>Project Manager</p>
                <img style={columnBimg} src="./static/images/team/camilalopez.jpg" />
            </div>
            <div style={tabcard}>
                <p>Shan Shen, PhD</p>
                <p style={role}>Data Scientist</p>
                <img style={columnAimg} src="./static/images/team/shanshen.jpg" />
            </div>
            <div style={tabcard2}>
                <p>Thinh Nguyen, PhD</p>
                <p style={role}>Data Scientist</p>
                <img style={columnBimg} src="./static/images/team/thinhnguyen.jpg" />
            </div>
            <div style={tabcard}>
                <p>Raphael Guzman</p>
                <p style={role}>Software Engineer</p>
                <img style={columnAimg} src="./static/images/team/raphaelguzman.jpg" />
            </div>
            <div style={tabcard2}>
                <p>Maho Sasaki</p>
                <p style={role}>Front-end Web Developer</p>
                <img style={columnBimg} src="./static/images/team/mahosasaki.jpg" />
            </div>
        </div>
        <style jsx>{`
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
        `}</style>
    </Layout>
);

export default Team;