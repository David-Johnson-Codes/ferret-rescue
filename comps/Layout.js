import Footer from "./Footer"
import NavBar from "./NavBar"
import Donate from "./Donate"

const Layout = ({ children }) => {
    return (
        <div className="content">
            <NavBar />
            <Donate />
            {children}
            <Footer />
        </div>
    );
}

export default Layout;