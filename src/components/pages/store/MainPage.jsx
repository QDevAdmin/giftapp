import giftIcon from "../../../assets/gift.svg";
import TabBar from "../../tabbar/TabBar.jsx";

const Header = () => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '8px',
            padding: '24px 0 16px',
            alignItems: 'center'
        }}>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '16px',
                alignItems: 'center'
            }}>
                <img src={giftIcon} alt={'Иконка'} width={'44px'} height={'48px'} style={{pointerEvents: 'none'}}></img>
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
        <div style={{background: 'white', height: '100vh', overscrollBehaviorY: 'auto', overflowY: 'auto'}}>
            <Header/>
            <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px'}}>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
                <p>test1</p>
                <p>test2</p>
                <p>test3</p>
                <p>test4</p>
                <p>test6</p>
                <p>test7</p>
                <p>test8</p>
                <p>test9</p>
                <p>test0</p>
            </div>
            <TabBar/>
        </div>
    );
};

export default MainPage;