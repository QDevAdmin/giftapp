import giftIcon from "../../../assets/gift.svg";
import TabBar from "../../tabbar/TabBar.jsx";

const Header = () => {
    return (
        <div style={{display: 'flex', flexDirection: 'column', gap: '8px', padding: '24px 0 16px', alignItems: 'center'}}>
            <div style={{display: 'flex', flexDirection: 'column', gap: '16px', alignItems: 'center'}}>
                <img src={giftIcon} alt={'Иконка'} width={'44px'} height={'48px'}></img>
                <p style={{
                    fontWeight: '600',
                    fontSize: '24px',
                    color: '#000000',
                    textAlign: 'center',
                    lineHeight: '32px'
                }}>Buy and Send Gifts</p>
            </div>
            <p style={{
                fontWeight: '400',
                fontSize: '17px',
                color: '#8E8E93',
                textAlign: 'center',
                lineHeight: '22px'
            }}>Unique gifts for everyone by Crypto Pay.</p>
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