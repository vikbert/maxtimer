import classNames from 'classnames';
import CloseSvg from './CloseSvg';
import './index.css';

export default function Popup({hide, visible, children}) {
  return (
    <>
      <div class={classNames('overlay', {'scale-in-ver-center': visible})}>
        <div className="close-icon" onClick={() => hide()}>
          <CloseSvg width={40} height={40} />
        </div>
        {children}
      </div>
    </>
  );
}
