import dva from 'dva';
import './index.css';
import RouterConfig from './router'
import createHistory from 'history/createBrowserHistory';

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});

// 3. Model
// app.model(require('./models/example').default);

// 可以先打印
// console.log(require('./router'))
// console.log(RouterConfig)
// 4. Router
// app.router(require('./router').default);
app.router(RouterConfig);

// 5. Start
app.start('#root');
