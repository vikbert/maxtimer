import './index.css';
import classNames from 'classnames';

export default function Popup(props) {
    const {title = 'Popup title', content, visible} = props;

    return (
        <>
            <div class={classNames('overlay', {'open': visible})}>
                <div class="popup">
                    <div class="title">{title}</div>
                    <div class="content">{content}</div>
                </div>
            </div>
        </>
    );
}
