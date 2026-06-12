import { Outlet } from "react-router"
import { Header } from "../Header.jsx/Header"
import { Footer } from "../Footer.jsx/Footer"
import styles from "./Layout.module.css";

export const Layout = () => {
    return(
        <>
        <div className={styles.app}>
        <Header/>
        <Outlet/>
        <Footer/>
        </div>
        </>
    )
}