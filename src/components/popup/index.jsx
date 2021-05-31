import { render } from 'preact';
import './index.css'


export default function Popup(props) {
  const { title = 'Popup title', content, visible } = props;

  return (
    <>
      <div className={'overlay ' + (visible ? 'open' : '')}>
        <div className="popup">
          <div className="title">{title}</div>
          <div className="content">{content}</div>
        </div>
      </div>
    </>
  );
};

