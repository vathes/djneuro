import Link from 'next/link';

const linkStyle = {
    marginRight: '8px',

};

const Navigation = () => (
    <div>
        <Link href="/">
            <a style={linkStyle}>Home</a>
        </Link>
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
);

export default Navigation;