import {render} from 'preact';
import {useEffect} from 'preact/hooks';
import {useState} from 'preact/compat';
import SlotListContainer from './components/slot/SlotListContainer';
import 'native-toast/dist/native-toast.css';

import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://rfvuywxobqfyspzstpya.supabase.co'
const supabaseKey = import.meta.env.VITE_SUPABASE_KEY
const supabase = createClient(supabaseUrl, supabaseKey)

const fetchRecords = async () => {
  let { data, error } = await supabase
  .from('record')
  .select('*')

  if (error) {
    console.log('error', error)
  } else {
    console.log('fetched data: ', data)
  }
}



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

  useEffect(() => {
    fetchRecords();
  }, []);

  return <SlotListContainer />;
}

render(<App />, document.getElementById('app'));
