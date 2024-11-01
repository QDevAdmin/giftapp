import storeIcon from "../../assets/store.svg"
import giftsIcon from "../../assets/gifts.svg"
import leaderboardIcon from "../../assets/leaderboard.svg"
import profileIcon from "../../assets/profile.svg"
import TabBarButton from "./TabBarButton.jsx";

const TabBar = () => {
    return (
        <div style={{
            position: 'fixed',
            bottom: '0',
            padding: '8px 0 20px',
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            // background: '#F1F1F2BF',
            background: '#F1F1F2',
            width: '100%',
            borderTop: '0.33px solid #3C3C435C'
        }}>
            <TabBarButton icon={storeIcon} title={'Store'}/>
            <TabBarButton icon={giftsIcon} title={'Gifts'}/>
            <TabBarButton icon={leaderboardIcon} title={'Leaderboard'}/>
            <TabBarButton icon={profileIcon} title={'Profile'}/>
        </div>
    );
};

export default TabBar;