import {useMedia} from 'react-use';
import LayoutA from './LayoutA';
import LayoutB from './LayoutB';

export const Layouts = ({children}) => {
    const isDesktop = useMedia('(min-width:768px)');
    return(
        <>
            {isDesktop? <LayoutB children={children}/> : <LayoutA children={children}/>}
        </>
        
    )
}