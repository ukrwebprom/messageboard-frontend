import { BiErrorCircle } from 'react-icons/bi';
import './errormessage.scss';

export const ErrorMessage = ({mes}) => {
    return(
        <div className='errormessage'>
            <BiErrorCircle size={25}/>
            <p>{mes}</p>
        </div>
    )
}
export const ErrorPlaceholder = () => {
    return(
        <div className='errorplaceholder'>

        </div>
    )
}