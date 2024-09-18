import ClockHeading from './COMPONANT/ClockHeading';
import ClockSlogan from './COMPONANT/ClockSlogan';
import CurrentTime from './COMPONANT/CurrentTime';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css'

function App() {
   return <div>
    <center className="container">
      <ClockHeading></ClockHeading>
      <ClockSlogan></ClockSlogan>
      <CurrentTime></CurrentTime>
    </center>
    </div>
   
}

export default App
