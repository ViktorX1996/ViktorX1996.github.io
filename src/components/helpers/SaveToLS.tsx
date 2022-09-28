import React from "react";
import { useNavigate} from "react-router";
import { useAppDispatch, useAppSelector } from "../../hooks/hooks";
import { setInputValue, setLsCity } from "../../redux/airQualityReducer";

const SaveToLS: React.FC = () => {
  const inputValue = useAppSelector((state) => state.airQuality.inputValue);
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const lsAction = (key?: any, value?: any) => {
    if (key && value) {
      localStorage.setItem(key, value);
      dispatch(setLsCity(value));
      alert("saved");
    } else {
      navigate("/");
      localStorage.clear();
      dispatch(setLsCity(""));
      dispatch(setInputValue(''))
    }
  };
  return (
    <div>
      <button className="btn-grad" onClick={() => lsAction("city", inputValue)}>
        Save city
      </button>
      <button className="btn-grad" onClick={() => lsAction()}>
        Clear city
      </button>
    </div>
  );
};

export default React.memo(SaveToLS);
