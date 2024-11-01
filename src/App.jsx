import {useEffect} from "react";
import MainPage from "./components/pages/store/MainPage.jsx";

const App = () => {
    const tg = window.Telegram.WebApp;

    tg.setHeaderColor('#FFFFFF');
    tg.setBackgroundColor('#FFFFFF');
    tg.setBottomBarColor('#F1F1F2');

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
