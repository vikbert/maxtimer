import SlotRow from './SlotRow';
import useLocalStorage, {APP_KEY_SLOTS} from '../../hooks/useLocalStorage';
import {useState, useEffect} from 'preact/hooks';

export default function SlotList() {
    const [storedValue, setValue] = useLocalStorage(APP_KEY_SLOTS);
    const [slots, setSlots] = useState(storedValue);

    const updateSlot = (id, slot) => {
        setSlots({
            ...slots,
            [id]: slot,
        })
    }

    useEffect(() => {
        setValue(slots);
    }, [slots])

    return (
        <>
            <div class="timeline">
                <ul>
                    {Object.keys(slots).map((id) => (
                        <SlotRow key={id} id={id} slot={slots[id]} updateSlotCallback={(id, slot) => updateSlot(id, slot)}/>
                    ))}
                </ul>
            </div>
        </>
    );
};

