import {useState} from 'preact/hooks';

export default function useVisibility(isVisible = false) {
  const [visible, setVisible] = useState(isVisible);

  const show = () => {
    setVisible(true);
  };

  const hide = () => {
    setVisible(false);
  };

  return {visible, show, hide};
}
