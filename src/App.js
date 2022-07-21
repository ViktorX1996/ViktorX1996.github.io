import MainInfo from "./components/cityInfo/MainInfo";
import Input from "./components/input/Input";
import { useState, useEffect, useRef, useCallback } from 'react';
import CardMapper from "./components/CardMapWithParams/CardMapper";
import { useDispatch, useSelector } from "react-redux";
import { backgroundSelector, getForecastByCity, getWeatherByCity, statusSelector } from './redux/openWeatherReducer';
import Loader from "./components/helpers/Loader";
import { getDate } from './components/helpers/DateAndTimeConverter';


function App() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [highestTop, setHighestTop] = useState(0);
  const mainRef = useRef();
  const dispatch = useDispatch();
  const status = useSelector(statusSelector);
  const background = useSelector(backgroundSelector);
  const listenScrollEvent = useCallback(() => {
    let highest = mainRef.current.getBoundingClientRect();
    let highestTop = -highest.y.toFixed(0);
    setHighestTop(() => highestTop);
    // console.warn(highestTop);

    if (highestTop < 3 && isScrolled) {
      return setIsScrolled(() => false);
    } else if (highestTop > 2 && !isScrolled) {
      return setIsScrolled(() => true);
    }
  }, [isScrolled]);
  // console.log(isScrolled);

  useEffect(() => {
    console.log("useEffect listenScrollEvent");
    window.addEventListener("scroll", listenScrollEvent);
    return () => window.removeEventListener("scroll", listenScrollEvent);
  }, [listenScrollEvent]);

  useEffect(() => {
    
    dispatch(getWeatherByCity('Haifa')) // London, Dnipro, Kyiv, Haifa, Bangkok, Boston
    dispatch(getForecastByCity('Haifa'))
  }, [dispatch])
  return (
    <>
      {status === ('loading' || null) && <Loader />}
      {status === 'success' && (
        <div>
          <div ref={mainRef}></div>
          <Input />
          <MainInfo isScrolled={isScrolled} background={background}/>
          <CardMapper top={highestTop} isScrolled={isScrolled} />
        </div>
      )
      }
    </>
  );
}

export default App;
