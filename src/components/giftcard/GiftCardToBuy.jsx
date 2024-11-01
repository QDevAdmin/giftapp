import pattern from '../../assets/pattern.svg';

const GiftCardToBuy = (props) => {
    return (
        <div style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            borderRadius: '12px',
            padding: '8px 24px 16px',
            backgroundImage: `url(${pattern}), linear-gradient(to bottom, ${props.iconBackgroundColor}33, ${props.iconBackgroundColor}1A)`
        }}>
            <p style={{
                alignSelf: 'flex-end',
                marginRight: '-12px',
                fontWeight: '400',
                fontSize: '13px',
                color: '#8E8E93',
                textAlign: 'center',
                lineHeight: '18px',
            }}>{`${props.purchasedCount} of ${props.totalCount}`}</p>
            <div style={{height: '12px'}}/>
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center'
            }}>
                <img src={props.icon} alt={'Иконка'} width={'128px'} height={'128px'}
                     style={{pointerEvents: 'none'}}/>
                <p style={{
                    fontWeight: '600',
                    fontSize: '17px',
                    color: '#000000',
                    textAlign: 'center',
                    lineHeight: '22px',
                }}>{props.title}</p>
            </div>
            <div style={{height: '12px'}}/>
            <button style={{
                display: 'flex',
                flexDirection: 'row',
                alignItems: 'center',
                borderRadius: '100px',
                padding: '6px 12px',
                border: '0 none transparent',
                background: '#007AFF',
                gap: '2px',
                height: '30px'
            }}>
                <img src={props.currencyIcon} alt={'Иконка'} style={{
                    width: '24px',
                    height: '24px',
                    alignContent: 'center',
                    pointerEvents: 'none'
                }}/>

                <p style={{
                    fontWeight: '600',
                    fontSize: '13px',
                    color: '#FFFFFF',
                    textAlign: 'center',
                    lineHeight: '18px',
                }}>{`${props.price} ${props.currency}`}</p>
            </button>
        </div>
    );
};

export default GiftCardToBuy;