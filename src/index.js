import dva from 'dva';
import './index.css';
import RouterConfig from './router'
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'

// 1. Initialize
const app = dva({
  history: createHistory(),
});

// 2. Plugins
// app.use({});
app.use(createLoading());

// 3. Model
// 多个调用就用多个
require('./models').default.forEach(key => app.model(key.default))
// app.model(require('./models/counter').default);
// app.model(require('./models/example').default);

// 可以先打印
// console.log(require('./router'))
// console.log(RouterConfig)
// 4. Router
// app.router(require('./router').default);
app.router(RouterConfig);

// 5. Start
app.start('#root');
// 里面有很多方法
// console.log(app);
// console.log(app._store.getState());
