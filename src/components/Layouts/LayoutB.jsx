import './layouts.scss';
import { Navigation } from '../Navigation/Navigation';
import logo from '../../images/logo.svg';

const LayoutB = ({children}) => {
    return(
        <div className="global-container b">
            <img src={logo} />
            <div className='container'>
                <header className='header'>
                    <Navigation />
                </header>
                {children}
                <footer>footer</footer>
            </div>
            
        </div>
    )
}

export default LayoutB;