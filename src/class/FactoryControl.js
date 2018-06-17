import Keydown from './Keydown';
import Swipe from './Swipe';
import Mouse from './Mouse';

const classes = {
  Keydown,
  Swipe,
  Mouse,
};
export default control => classes[control];

