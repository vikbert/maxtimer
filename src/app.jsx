import { render } from 'preact';
import TaskSegment from "./components/task/TaskSegment";
import Popup from "./components/popup";
import useVisibility from "./hooks/useVisibility";
import useKeypress from "./hooks/useKeyPress";

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

  return (
    <>
        <div className="timeline">
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
