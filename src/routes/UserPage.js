import React from 'react'
import { connect } from 'dva'
// import { dispatch} from "dva/saga";

const User = (props) => {
  console.log(props);
  const { isFetching, error, user } = props.user
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
      <button onClick={() => { props.dispatch({type:"user/fetch"})}}>Get User</button>
    </div>
  )
}
User.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps)(User);
