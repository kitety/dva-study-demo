import React from 'react'
import { connect } from 'dva'
// import { dispatch} from "dva/saga";

const User = (props) => {
  console.log(props.loading);
  const { error, user } = props.user
  // const { isFetching, error, user } = props.user

  // 下面两种都可以，global是全局，effects是针对的某个action
  // let isFetching = props.loading.effects['user/fetch']
  let isFetching = props.loading.global
  let data
  if (error) {
    data = error
    // console.dir(error.response.message);
  } else if (isFetching) {
    data = "Loading..."
  } else {
    data = user && user.data.length
  }
  return (
    <div>
      <h1>{data}</h1>
      <button onClick={() => { props.dispatch({ type: "user/fetch" }) }}>Get User</button>
      <button onClick={() => { props.dispatch({ type: "user/fetch/start" }) }}>Get User Start</button>
      {/* onEffect */}
      <button onClick={() => { props.dispatch({ type: "SHOW" }) }}>onEffect</button>
    </div>
  )
}
User.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user,
    loading: state.loading
  }
}
export default connect(mapStateToProps)(User);
