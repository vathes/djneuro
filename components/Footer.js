import Link from 'next/link';

const footerText = {
    fontSize: '75%',
}

const snsLink = {
    right: '0',
    bottom: '12px',
    position: 'absolute'
}
const Footer = () => (
    <div>
        <footer>
            <p style={footerText}>DataJoint NEURO 2019 All Rights Reserved</p>
            <div style={snsLink}>
                <a target="_blank" href="https://www.linkedin.com/company/vathes-llc">
                    <img src="./static/images/icons/linkedin_white.png"/>
                </a>
                <a target="_blank" href="https://twitter.com/datajointneuro">
                    <img src="./static/images/icons/twitter_white.png" />
                </a>
            </div>
        </footer>
    <style jsx>{`
        footer {
            text-align: center;
            width: 100%;
            bottom: 0;
            padding: 10px 0px;
            color: white;
            // background: radial-gradient(#000B59, #00094C);
            background: linear-gradient( #001226,  #001226, #0f040f);
            position: fixed;
            z-index: 999;
        }

        img {
            width: 30px;
        }


    `}</style>
    </div>
);

export default Footer;