import './mainlayout.scss';
import { Navigation } from '../Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import logo from '../../images/logo.svg';

export const MainLayout = () => {
    return(
        <div className="global-container">
            <img src={logo} />
            <div className='container'>
                <header className='header'>
                    <Navigation />
                </header>
                <Outlet />
                <footer>footer</footer>
            </div>
            
        </div>
    )
}