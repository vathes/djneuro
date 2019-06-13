import Link from 'next/link';

const footerText = {
    fontSize: '75%',

}
const Footer = () => (
    <div>
        <p style={footerText}>DataJoint NEURO 2019 Copyrights Reserved</p>
    
    <style jsx>{`
        text-align: center;
        // height: 100%;
        width: 100%;
        bottom: 0;
        padding: 10px 0px;
        color: white;
        background: radial-gradient(#000B59, #00094C);
        position: fixed;
        z-index: 999;
    `}</style>
    </div>
);

export default Footer;