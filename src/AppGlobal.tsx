import { BrowserRouter } from 'react-router-dom';
import { Routes } from 'react-router-dom';
import { Route } from 'react-router-dom';
import { Navigate } from 'react-router-dom';
import Welcome from './components/Welcome/Welcome';
import App from './App';
import ErrorScreen from './components/ErrorScreen/ErrorScreen';
import { useEffect } from 'react';
import { useAppSelector, useAppDispatch } from './hooks/hooks';
import { lsCitySelector, setLsCity } from './redux/airQualityReducer';

const AppGlobal:React.FC = () => {
    const dispatch = useAppDispatch();
    const lsCityRedux = useAppSelector(lsCitySelector);
    const city = localStorage.getItem("city"); 
    const params = window.location.pathname.split('/')[1];
    // const params = useParams();
    useEffect(() => {
        if(city){
            dispatch(setLsCity(city));
        }
    }, []); //eslint-disable-line
    useEffect(() => {
        console.log(params, 'params');
        if(params){
            console.log(params, 'params');
            
            dispatch(setLsCity(''));
        }
      }, []); //eslint-disable-line
    useEffect(() => {
        console.log(lsCityRedux, "- city" );
    }, [lsCityRedux]); 


  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={lsCityRedux ? <Navigate to={`/${lsCityRedux}`} replace /> : <Welcome />}
        />
        {/* <Route path="/" element={<Welcome />} /> */}
        <Route path=":city" element={<App />} />
        <Route path="/error/:city" element={<ErrorScreen />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppGlobal;
