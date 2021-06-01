import {render} from 'preact';
import {useEffect} from 'preact/hooks';
import Popup from './components/popup';
import useVisibility from './hooks/useVisibility';
import useKeypress from './hooks/useKeyPress';
import TimeSlotGenerator from './services/TimeSlotGenerator';
import useLocalStorage, {APP_KEY_SLOTS} from './hooks/useLocalStorage';
import SlotList from './components/slot/SlotList';

const generator = new TimeSlotGenerator('06:00', '23:00');
const slots = generator.getSlots();

function App() {
    const {visible, show, hide} = useVisibility(false);
    const [storedValue, setValue] = useLocalStorage(APP_KEY_SLOTS, []);

    useKeypress('Escape', () => {
        hide();
    });

    const handleOpenPopup = () => {
        show();
    };

    useEffect(() => {
        const listObject = {};
        slots.forEach((item) => {
            listObject[item.start.getTime()] = item;
        });
        setValue(listObject);
    }, []);

    return slots.length > 0 && (
        <>
            <Popup
                title="add a new task"
                visible={visible}
                action={<h1>content</h1>}
            />
            <SlotList/>
        </>
    );
}

render(<App/>, document.getElementById('app'));
