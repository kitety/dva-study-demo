import axios from 'axios'
export default {

  namespace: 'user',

  state: {
    // 有了dva loading就不用isFetching
    // isFetching: false,
    error: null,
    user: null
  },

  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch (_, { call, put }) {  // eslint-disable-line
      yield put({ type: 'fetch/start' });
      try {
        const user = yield call(axios.get, "https://jsonplaceholder.typicode.com/users")
        yield put({ type: "fetch/success", user: user })
      } catch (error) {
        yield put({ type: "fetch/fail", error: error.message })
      }
    },
  },

  reducers: {
    "fetch/start" (state, action) {
      return {
        // isFetching: true,
        error: null,
        user: null
      }
    },
    "fetch/success" (state, action) {
      return {
        // isFetching: false,
        error: null,
        user: action.user
      }
    },
    "fetch/fail" (state, action) {
      return {
        // isFetching: false,
        error: action.error,
        user: null
      }
    },
  },

};
