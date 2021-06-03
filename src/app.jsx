import {render} from 'preact';
import {useEffect} from 'preact/hooks';
import SlotList from './components/slot/SlotList';
import {useState} from 'preact/compat';

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

  return <SlotList />;
}

render(<App />, document.getElementById('app'));
