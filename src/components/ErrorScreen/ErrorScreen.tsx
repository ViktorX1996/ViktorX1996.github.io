import { useEffect } from "react";
import { useParams, useNavigate } from "react-router";
import { setInputValue } from "../../redux/airQualityReducer";
import { useAppDispatch } from './../../hooks/hooks';

const ErrorScreen: React.FC = () => {
  const navigate = useNavigate();
  const params = useParams();
  const dispatch = useAppDispatch();

const onNavigate = () => {
    dispatch(setInputValue(''))
    navigate("/");
  }
  useEffect(() => {
    console.log(params.city, 'params');
    
  }, [params]); //eslint-disable-line
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          paddingTop: "20%",
        }}
      >
        {" "}
        <p>"{params.city}"</p> City not found :({" "}
        <p>
          <button
          onClick = {onNavigate}
          style={{ height: "50px", cursor:'pointer' }}>
            Go Back
          </button>
        </p>
      </h1>
    </div>
  );
};

export default ErrorScreen;
