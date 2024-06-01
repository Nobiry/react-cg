export default function Tabs({ children, buttons, BtnContainer = "menu" }) {
    // const BtnContainer = btnContainer;
    return (
        <>
            <BtnContainer>
                { buttons }
            </BtnContainer>
            { children }
        </>
    ); 
}
export default function Button({ children, mode = "filled", Icon, ...props }) {
    let modeClass;
    switch (mode) {
        case 'outline':
            modeClass = "outline-button";
            break;
        case 'text':
            modeClass = "text-button";
            break;
        default: 
            modeClass = "filled-button";
            break;
    }
    
    return (
        <button {...props} className={`button ${modeClass} ${Icon ? 'button-icon' : ''}`}>
            ${Icon ? <span>{Icon}</span> : ''}
            <span>{ children }</span>
        </button>    
    );
 // Todo: Build this component!
 
 // !!! Important: 
 // Wrap the icon with a <span className="button-icon"> to achieve the target look
 // Also wrap the children prop with a <span>
}
