import Navbar from "./Navbar/Navbar"
import Footer from "./Footer/Footer"
import MainPage from "./MainPage/Main"

export default function Layout({children}) {
    return(
        <div>
            <Navbar/>
            <MainPage/>
            {children}
            <Footer/>
        </div>
    )
}