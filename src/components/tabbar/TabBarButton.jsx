const TabBarButton = (props) => {
    return (
        <button style={{
            display: 'flex',
            flexDirection: 'column',
            gap: '4px',
            padding : '4px',
            alignItems: 'center',
            borderColor: 'transparent',
            background: 'transparent'
        }}>
            <img src={props.icon} alt={'Иконка'} width={'26px'} height={'26px'}></img>
            <p style={{
                fontWeight: '500',
                fontSize: '10px',
                textAlign: 'center',
                color: '#545458A6'
            }}>{props.title}</p>
        </button>

    );
};

export default TabBarButton;