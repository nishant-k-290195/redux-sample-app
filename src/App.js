import styleApp from './App.module.css';
import { useSelector, useDispatch } from 'react-redux'
import { lightBulb, turnOffBulb } from  './redux/actions'

function App() {
  const bulbState = useSelector(state => state.bulbState)
  const dispatch = useDispatch()

  const handleClick = () => {
    bulbState === 'OFF' ? dispatch(lightBulb()) : dispatch(turnOffBulb())
  }

  return (
    <div className={styleApp.App}>
        <h1>{ bulbState }</h1>
        <div className=
        {
          `${styleApp.bulb} ${bulbState === 'ON'? styleApp.bulbOn : styleApp.bulbOff}`
        }
      >
      </div>
      <button onClick={handleClick}>ON/OFF</button>
    </div>
  );
}

export default App;
