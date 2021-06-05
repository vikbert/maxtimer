import {render} from 'preact';
import {useEffect} from 'preact/hooks';
import {useState} from 'preact/compat';
import SlotListContainer from './components/slot/SlotListContainer';
import 'native-toast/dist/native-toast.css';

const AUTO_REFRESH_minutes = 3;
function App() {
  const [time, setTime] = useState(Date.now());

  useEffect(() => {
    const interval = setInterval(
      () => setTime(Date.now()),
      AUTO_REFRESH_minutes * 60 * 1000,
    );
    return () => {
      clearInterval(interval);
    };
  }, []);

  return <SlotListContainer />;
}

render(<App />, document.getElementById('app'));
