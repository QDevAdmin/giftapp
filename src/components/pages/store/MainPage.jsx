import giftIcon from "../../../assets/gift.svg";
import TabBar from "../../tabbar/TabBar.jsx";
import GiftCardToBuy from "../../giftcard/GiftCardToBuy.jsx";

import cakeIcon from "../../../assets/cake.svg";
import greenStarIcon from "../../../assets/green_star.svg";
import redStarIcon from "../../../assets/red_star.svg";
import blueStarIcon from "../../../assets/blue_star.svg";

import ethCurrencyIcon from "../../../assets/eth_currency.svg";
import tonCurrencyIcon from "../../../assets/ton_currency.svg";
import usdtCurrencyIcon from "../../../assets/usdt_currency.svg";


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
                <img src={giftIcon} alt={'Иконка'} width={'44px'} height={'48px'} style={{pointerEvents: 'none'}}/>
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

const Catalog = () => {
    return (
        <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(2, 1fr)',
            gridAutoRows: 'minmax(246px, auto)',
            gridColumnGap: '12px',
            gridRowGap: '12px',
            alignItems: 'center',
            justifyItems: 'stretch',
            padding: '16px',
            marginBottom: '80px'
        }}>
            <GiftCardToBuy icon={cakeIcon} title={'Delicious Cake'} iconBackgroundColor={'#FE9F41'} price={'10'} currency={'USDT'} currencyIcon={usdtCurrencyIcon} purchasedCount={3} totalCount={500}/>
            <GiftCardToBuy icon={greenStarIcon} title={'Green Star'} iconBackgroundColor={'#46D100'} price={'5'} currency={'TON'} currencyIcon={tonCurrencyIcon} purchasedCount={802} totalCount={'3K'}/>
            <GiftCardToBuy icon={blueStarIcon} title={'Blue Star'} iconBackgroundColor={'#007AFF'} price={'0.1'} currency={'ETH'} currencyIcon={ethCurrencyIcon} purchasedCount={458} totalCount={'5K'}/>
            <GiftCardToBuy icon={redStarIcon} title={'Red Star'} iconBackgroundColor={'#FF4747'} price={'10'} currency={'USDT'} currencyIcon={usdtCurrencyIcon} purchasedCount={'10K'} totalCount={'10K'}/>
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
    );
}

const MainPage = () => {
    return (
        <div style={{
            background: 'white',
            height: '100vh',
            overscrollBehaviorY: 'auto',
            overflowY: 'auto'
        }}>
            <Header/>
            <Catalog/>
            <TabBar/>
        </div>
    );
};

export default MainPage;