import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
// counter=props.counter
const Counter = ({ counter,dispatch,counterAsyncAdd,counterAdd }) => {
  // 无状态组件不用加this
  // console.log(counter, dispatch,counterAsyncAdd,counterAdd)
  return (
    <div>
      <h2>Counter</h2>
      <h1>{counter.count}</h1>
      {/*counter中的 */}
      <p>
      <button onClick={() => { dispatch({type:"counter/add",name:"test_name"})}}>+</button>
      <button onClick={() => { dispatch({ type:"counter/asyncAdd",name:"test_name"})}}>async +</button>
      </p>
      <p>
      <button onClick={() => { counterAdd()}}>+</button>
      <button onClick={() => { counterAsyncAdd()}}>async +</button>
      </p>
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
export default connect(mapStateToProps)(Counter);
