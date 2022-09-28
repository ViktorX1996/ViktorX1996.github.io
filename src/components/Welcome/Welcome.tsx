import Input from "./../input/Input";
import useFetchAllAsyncData from "./../../hooks/useFetchAllAsyncData";
import { cities } from "./../../constants/cities";
import { setInputValue } from "../../redux/airQualityReducer";
import { useAppDispatch } from './../../hooks/hooks';
import { setReject } from "../../redux/openWeatherReducer";
const Welcome: React.FC = () => {
  const dispatch = useAppDispatch();
  useFetchAllAsyncData();
  function getRandomCityFromArray(array: string[]) {
    dispatch(setReject(null))
    return dispatch(
      setInputValue(array[Math.floor(Math.random() * array.length)])
    );
  }
  // const city = localStorage.getItem("city");
  // useEffect(() => {
  //     if(city) {
  //         dispatch(setInputValue(city));
  //     }
  // } ,[]) //eslint-disable-line
  return (
    <>
      <Input />
      <div>
      <button 
      className="btn-grad"
        onClick={() => console.log(getRandomCityFromArray(cities))}
      >
        random city
      </button>
      </div>
    </>
  );
};

export default Welcome;
