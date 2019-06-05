import Navigation from './Navigation';

const layoutStyle = {

};

// const Layout = Page => {
//     return () => (
//         <div style={layoutStyle}>
//             <Navigation />
//             <Page />
//         </div>
//     );
// };

const Layout = props => (
    <div style={layoutStyle}>
        <Navigation />
        { props.children }
    </div>
)
export default Layout;