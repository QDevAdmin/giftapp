import {useEffect} from "react";
import MainPage from "./components/pages/store/MainPage.jsx";

const App = () => {
    const tg = window.Telegram.WebApp;

    tg.setHeaderColor('#ffffff');
    tg.setBackgroundColor('#ffffff');
    tg.setBottomBarColor('#F1F1F2BF');

    // disable context menu
    useEffect(() => {
        const handleContextMenu = (e) => e.preventDefault();
        document.addEventListener("contextmenu", handleContextMenu)
        return () => document.removeEventListener("contextmenu", handleContextMenu)
    }, [])

    return (
        <>
            <MainPage/>
        </>
    );
};

export default App;
