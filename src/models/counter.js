import { delay } from 'dva/saga'
export default {
  // 命名空间区分，用来隔离
  namespace: "counter",
  // 出事状态，等于任意类型的值
  state: {
    count: 12
  },
  // 异步方法
  effects: {
    // 不知道的参数都可以打印
    *asyncAdd ({ payload }, { call, put }) {  // eslint-disable-line
      yield call(delay, 2000)
      yield put({ type: 'add' });
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
      console.log(action)
      return {
        count: state.count + 1
      };
    },
    "add" (state, action) {
      console.log(action)
      return {
        count: state.count + 1
      };
    },
  },
}
