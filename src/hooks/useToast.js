import nativeToast from 'native-toast';

const useToast = () => {
  const notify = (options) => {
    nativeToast({
      type: options.type,
      message: options.message,
      position: 'north',
      timeout: 3000,
      edge: true,
    });
  };

  return notify;
};

export default useToast;
