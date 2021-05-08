import Footer from "./Footer/Footer"
import Header from "./Header/Header"


function Layout({children}) {
    return (
        <main>
            <Header />
            {children}
            <Footer />
        </main>
    )
}

export default Layout
