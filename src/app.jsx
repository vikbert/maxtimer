import {render} from 'preact';
import SlotList from './components/slot/SlotList';

function App() {
  return <SlotList />;
}

render(<App />, document.getElementById('app'));
