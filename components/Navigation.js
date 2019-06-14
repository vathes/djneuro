import Link from 'next/link';

const navLeft = {
    position: 'relative',
    float: 'left'
};

const navRight = {
    position: 'relative',
    float: 'right',
    top: '42px'
};
const linkStyle = {
    marginRight: '8px',

};

const linkHomeStyle = {
    borderBottom: 'none',
    paddingBottom: '0'
};

const linkLogoStyle = {
    height: '65px',
    display: 'inline-block',
};

const Navigation = () => (
    <div>
        <nav>
            <div style={navLeft}>
                <Link href="/">
                    <a style={linkHomeStyle}><img style={linkLogoStyle} src="./static/images/logo/djneuroLogo.png" /></a>
                </Link>
            </div>
            <div style={navRight}>
                <Link href="/about">
                    <a style={linkStyle}>About</a>
                </Link>
                <Link href="/services">
                    <a style={linkStyle}>Services</a>
                </Link>
                <Link href="/team">
                    <a style={linkStyle}>Team</a>
                </Link>
                <Link href="/newsIndex">
                    <a style={linkStyle}>News</a>
                </Link>
            </div>
        </nav>
        <style jsx>{`
            nav {
                position: relative;
                display: inline-block;
                width: 100%;
                background: linear-gradient(#0f040f, #0f040f, #001226);
                padding: 0px 10px 0 0;
            }
            a {
                color: white;
                text-decoration: none;
                padding: 15px 10px 9px 10px;
            }
            a:hover {
                border-bottom: solid 4px black;
            }
            div {
                padding: 0;
                margin: 0;
            }
        `}</style>
    </div>
);

export default Navigation;