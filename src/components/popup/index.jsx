import classNames from 'classnames';
import './index.css';
import SvgClose from './SvgClose';

export default function Popup({hide, visible, children}) {
  return (
    <>
      <div class={classNames('overlay', {'scale-in-ver-center': visible})}>
        <div className="close-icon" onClick={() => hide()}>
          <SvgClose width={40} height={40} />
        </div>
        {children}
      </div>
    </>
  );
}
