import MainInfo from "./components/cityInfo/MainInfo";
import Input from "./components/input/Input";
import { useState, useEffect, useRef } from "react";
import CardMapper from "./components/CardMapWithParams/CardMapper";
import Loader from "./components/helpers/Loader";
import {
  setIsScrolledToRedux,
} from "./redux/airQualityReducer";
import { useAppDispatch, useAppSelector } from "./hooks/hooks";
// import useDebounce from "./hooks/useDebounce";
// import { useParams } from 'react-router';
import { backgroundSelector, rejectSelector, statusSelector } from "./redux/openWeatherReducer";
import useFetchAllAsyncData from './hooks/useFetchAllAsyncData';
import { useNavigate } from 'react-router';
import SaveToLS from "./components/helpers/SaveToLS";
import Authors from "./components/Authors/Authors";

const App: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [highestTop] = useState<number>(0);
  const mainRef = useRef<HTMLDivElement>(null);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
 
  const status = useAppSelector(statusSelector);
  // const cod = useAppSelector(codSelector);
  const reject = useAppSelector(rejectSelector);
  const background = useAppSelector(backgroundSelector);
  const inputValue = useAppSelector((state) => state.airQuality.inputValue);
  // const debouncedValue = useDebounce<string>(inputValue, 1500);
   useFetchAllAsyncData();
  useEffect(() => {

    //вызов юзЭффекта при изменении статуса
    const handleScroll = () => {
      if (window.scrollY > highestTop) {
        setIsScrolled(() => true);
        dispatch(setIsScrolledToRedux(true));
      } else {
        setIsScrolled(() => false);
        dispatch(setIsScrolledToRedux(false));
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
    //if localstorage is not empty, set inputValue to localstorage value

  }, []); //eslint-disable-line

  useEffect(() => {
    if(reject===404){
      navigate('/error/'+inputValue);
    }
  }, [reject]);//eslint-disable-line

  return (
    <>
      {status === ("loading" || null) && <Loader />}
      {status === "success" && (
        <div>
          <div ref={mainRef} />
          <Input />
          <MainInfo isScrolled={isScrolled} background={background!} />
          <CardMapper />
          <SaveToLS />
          <Authors />
        </div>
      )}
    </>
  );
};

export default App;
