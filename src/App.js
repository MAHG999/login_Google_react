import logo from './logo.svg';
import './App.css';
import { GoogleLogin } from 'react-google-login';



function App() {

  const responseGoogle = (response) => {
    console.log(response.Ts);
  }

  return (
    <div className="App">
      <GoogleLogin
        clientId="711997864220-r2km92v3p85mdodske1nshk6m1lmtu3l.apps.googleusercontent.com"
        buttonText="Login"
        onSuccess={responseGoogle}
        onFailure={responseGoogle}
        cookiePolicy={'single_host_origin'}
      />,
      document.getElementById('googleButton')
    </div>
  );
}

export default App;
