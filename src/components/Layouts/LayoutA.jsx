import './layouts.scss';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

const LayoutA = ({children}) => {
    return(
        <div className="global-container">
            <header className='header'>
                <img src={logo} />
                <Navigation />
            </header>
            <div className='container'>
                {children}
            </div>
            <footer>footer</footer>
        </div>
    )
}

export default LayoutA;