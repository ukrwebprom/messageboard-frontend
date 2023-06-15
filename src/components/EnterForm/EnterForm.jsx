import './enterform.scss';
import { ErrorMessage, ErrorPlaceholder } from '../ErrorMessage/ErrorMessage';

export const EnterForm = ({onSubmit, title, error, btn}) => {
    return(
        <div>
            <h2 className='enter-form-title'>{title}</h2>
            <form className="enter-form" onSubmit={onSubmit}>
            
                <input type="email" placeholder="email" name="email" />
                <input type="password" placeholder="password. min 8 symbols" name="password" />
                <button type="submit">{btn}</button>
            </form>
            {error ? <ErrorMessage mes={error} /> : <ErrorPlaceholder />}
        </div>
        
    )
}