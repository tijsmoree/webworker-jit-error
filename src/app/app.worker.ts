// NOTE: error disappears when importing from './doubler/double'
import { double } from './doubler';

addEventListener('message', ({ data }) => postMessage(double(data)));
