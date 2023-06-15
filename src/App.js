/* import logo from './logo.svg'; */
import './App.scss';
import { Routes, Route } from "react-router-dom";

import { PrivateRoute, PublicRoute } from './utils/PrivateRout';
import { SignIn } from './pages/SignIn';
import { SignUp } from './pages/SignUp';
import { VerifyEmail } from './pages/VerifyEmail';
import { UserSettings } from './pages/UserSettings';
import { Application } from './pages/Application';

function App() {

  return (
    <div className='mainscreen'>
      <Routes>
        <Route path='/' element={<Application />} />
{/*         <Route path='/' element={<PrivateRoute />}>
          <Route path='user/settings' element={<UserSettings />} />
        </Route>
        <Route path='/user' element={<PublicRoute />}>
          
          <Route path='signin' element={<SignIn/>} />
          <Route path='signup' element={<SignUp/>} />
          <Route path='verify/:verificationToken' element={<VerifyEmail />} />
        </Route> */}
      </Routes>
    </div>
  );
}
/*
/               страница приложения
/signup         страница регистрации
/signin         страница логина
/welcome        страница презентации для незалогиненых пользователей
/verify         проверка имейла
/usersettings   обновление данных пользователя

*/
export default App;
