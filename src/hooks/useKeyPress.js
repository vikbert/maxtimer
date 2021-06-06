import {useEffect} from 'preact/hooks';
export default function useKeyPress(key, action) {
  useEffect(() => {
    function onKeyup(event) {
      if (event.key === key) {
        action();
      }
    }

    window.addEventListener('keyup', onKeyup);

    return () => window.removeEventListener('keyup', onKeyup);
  }, []);
}
