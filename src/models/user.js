
export default {

  namespace: 'user',

  state: {
    isFetching:false,
    error:null,
    user:null
  },

  subscriptions: {
    setup ({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch ({ payload }, { call, put }) {  // eslint-disable-line
      yield put({ type: 'save' });
    },
  },

  reducers: {
    save (state, action) {
      return { ...state, ...action.payload };
    },
  },

};
