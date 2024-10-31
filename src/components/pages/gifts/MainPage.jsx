import TabBar from "../../tabbar/TabBar.jsx";

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '24px 0 28px',
            alignItems: 'center'
        }}>
            <p style={{
                fontWeight: '600',
                fontSize: '24px',
                color: '#000000',
                textAlign: 'center',
                lineHeight: '32px'
            }}>Send Gifts in Telegram</p>
            <p style={{
                fontWeight: '400',
                fontSize: '17px',
                color: '#8E8E93',
                textAlign: 'center',
                lineHeight: '22px'
            }}>Send gifts to users that can be stored<br/>in their app profile.</p>
        </div>
    );
};

const MainPage = () => {
    return (
        <>
            <Header/>
            <TabBar/>
        </>
    );
};

export default MainPage;