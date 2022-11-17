import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { Provider } from 'react-redux';
import * as serviceWorker from 'serviceWorker';
import App from 'App';
import { store } from 'store';

import config from 'config';
import 'assets/scss/style.scss';

// ==============================|| REACT DOM RENDER  ||============================== //
console.log(`---xxx(${config.appName} [${config.version}])xxx---`);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);

serviceWorker.unregister();
