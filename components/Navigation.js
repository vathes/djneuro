import Link from 'next/link';

const linkStyle = {
    marginRight: '8px',

};

const Navigation = () => (
    <div>
        <nav>
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
        </nav>
        <style jsx>{`
            nav {
                background: linear-gradient(#0f040f, #0f040f, #001226);
                padding: 15px 10px 15px 0;
            }
            a {
                color: white;
                text-decoration: none;
                padding: 15px 10px 12px 10px;
            }
            a:hover {
                border-bottom: solid 3px white;
            }
        `}</style>
    </div>
);

export default Navigation;