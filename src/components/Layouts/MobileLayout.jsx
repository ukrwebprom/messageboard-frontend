import './mainlayout.scss';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const MobileLayout = () => {
    return(
        <div className="global-container">
            <header className='header'>
                <img src={logo} />
                <Navigation />
            </header>
            <div className='container'>
                <Outlet />
            </div>
            <footer>footer</footer>
        </div>
    )
}