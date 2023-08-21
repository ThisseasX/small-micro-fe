import Button from './Button';
import { createRoot } from 'react-dom/client';

let root;

window.renderButton1 = (element, props) => {
  root = createRoot(element);
  root.render(<Button {...props} />);
};

window.unmountButton1 = () => {
  setTimeout(() => {
    root?.unmount();
  }, 0);
};
