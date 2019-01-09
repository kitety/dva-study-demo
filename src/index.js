import dva from 'dva';
import './index.css';
import RouterConfig from './router'
import createHistory from 'history/createBrowserHistory';
import createLoading from 'dva-loading'
import { createLogger } from 'redux-logger';

// 自己的中间件
const logger = store => next => action => {
  console.log('dispating', action);
  let result = next(action);
  console.log('next State', store.getState());
  return result
}
const error = store => next => action => {
  try {
    next(action);
  } catch (error) {
    console.log('error:' + error)
  }
}

// 1. Initialize
const app = dva({
  history: createHistory(),
  // onAction: createLogger()
  // 在 action 被 dispatch 时触发，用于注册 redux 中间件。支持函数或函数数组格式
  onAction: [logger, error]
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
