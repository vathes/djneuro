import Navigation from './Navigation';
import Head from './Head';

const layoutStyle = {
    padding: '0',
    textAlign: 'center',
    fontFamily: 'sans-serif'
};

const Layout = props => (
    <div>
        <Head />
        <Navigation />
        <div style={layoutStyle}>
            { props.children }
        </div>
    </div>
)
export default Layout;