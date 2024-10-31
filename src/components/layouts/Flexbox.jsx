import styled from "styled-components";

const Flexbox = styled.div`
    display: flex;
    flex-direction: ${props => props.flexDirection || 'column'};
    justify-content: ${props => props.justifyContent || 'center'};
    align-items: ${props => props.alignItems || 'center'};
    align-content: ${props => props.alignContent || 'center'};
    flex-wrap: ${props => props.flexWrap || 'nowrap'};
    margin: ${props => props.margin || '0'};
    padding: ${props => props.padding || '0'};
    gap: ${props => props.gap || '0'};
    width: ${props => props.width || 'auto'};
    height: ${props => props.height || 'auto'};
`;

export default Flexbox;