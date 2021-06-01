import { render } from 'preact';
import TaskSegment from "./components/task/TaskSegment";
import Popup from "./components/popup";
import useVisibility from "./hooks/useVisibility";
import useKeypress from "./hooks/useKeyPress";
import classNames from 'classnames';

const segmentData = [
  {
    start: '11:30',
    end: '11:45',
    title: 'What Is Lorem Ipsum',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },

  {
    start: '11:30',
    end: '11:45',
    title: 'What Is Lorem Ipsum',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },

  {
    start: '11:30',
    end: '11:45',
    title: 'What Is Lorem Ipsum',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },

  {
    start: '11:30',
    end: '11:45',
    title: 'What Is Lorem Ipsum',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },

  {
    start: '11:30',
    end: '11:45',
    title: 'What Is Lorem Ipsum',
    info: 'Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry\'s standard dummy text ever since the 1500s.',
  },
]

function App() {
  const {visible, show, hide} = useVisibility(false)
  useKeypress('Escape', () => {
    hide();
  });

  const handleOpenPopup = () => {
    show();
  }

  return (
    <>
      <Popup title='add a new task' visible={visible} action={(
        <h1>content</h1>
      )}/>
      <button onClick={ handleOpenPopup }>add new task</button>
        <div className={classNames('timeline')}>
          <ul>
            {segmentData.map((item, index) => (
                <TaskSegment key={index} task={item}/>
            ))}
          </ul>

        </div>
    </>
  )
}

render(<App />, document.getElementById('app'));
