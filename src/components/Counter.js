import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import {withRouter} from 'dva/router'

// counter=props.counter
const Counter = (props) => {
  // 无状态组件不用加this
  console.log(props)
  return (
    <div>
      <h2>Counter</h2>
      <h1>{props.counter.count}</h1>
      {/*counter中的 */}
      <p>
      <button onClick={() => { props.dispatch({type:"counter/add",name:"test_name"})}}>+</button>
      <button onClick={() => { props.dispatch({ type:"counter/asyncAdd",name:"test_name"})}}>async +</button>
      </p>
      <p>
      <button onClick={() => { props.counterAdd()}}>+</button>
      <button onClick={() => { props.counterAsyncAdd()}}>async +</button>
      </p>
      <button onClick={()=>{props.history.push('/')}}>Go Index</button>
      <a href="/">A Link</a>
    </div>
  );
};
// 类型检查
Counter.propTypes = {
  counter:PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
export default withRouter(connect(mapStateToProps)(Counter));
