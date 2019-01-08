import { delay } from 'dva/saga'// 不是在这里引用的dispatch 而使用的props传递
import { routerRedux } from 'dva/router'
import queryString from 'query-string'
var pathToRegexp = require('path-to-regexp')

export default {
  // 命名空间区分，用来隔离
  namespace: "counter",
  // 出事状态，等于任意类型的值
  state: {
    count: 12
  },
  subscriptions: {
    // 每个页面都会执行这些内容
    setup ({ dispatch}) {  // eslint-disable-line
      window.onresize = () => { dispatch({ type: 'add' }) }
    },
    setupHistory ({ dispatch,history}){
      history.listen(location=>{
        // console.log(location)
        // if (location.pathname==='/counter') {
        //   dispatch({ type: 'add' })
        //   // 路径进行判断
        // }
        const match = pathToRegexp('/counter').exec(location.pathname)
        if (match) {
          dispatch({ type: 'add' })
        }
      })
    }
  },
  // 异步方法
  effects: {
    // 不知道的参数都可以打印
    *asyncAdd ({ payload }, { call, put, select }) {  // eslint-disable-line
      // let counter = yield select(state => state.counter)
      // let { counter } = yield select(_ => _)
      let { counter } = yield select(state => state)
      // console.log(counter)
      yield call(delay, 2000)
      yield put({ type: 'add' });
      // this way can jump
      // yield put(routerRedux.push('/'))
      yield put(routerRedux.push({
        pathname: '/',
        hash: 'hello',
        search: queryString.stringify({
          from: 'testRouter'
        })
      }))
    },
  },
  // 同步方法
  reducers: {
    // add (state, action) {
    //   console.log(action)
    //   return {
    //     count:state.count+1
    //    };
    // },
    // 这样也可以
    "add/number" (state, action) {
      // console.log(action)
      return {
        count: state.count + 1
      };
    },
    "add" (state, action) {
      // console.log(action)
      return {
        count: state.count + 1
      };
    },
  },
}
