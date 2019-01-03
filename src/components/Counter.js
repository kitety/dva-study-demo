import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
// counter=props.counter
const Counter = ({ counter }) => {
  // 无状态组件不用加this
  console.log(counter)
  return (
    <div>
      <h2>Counter</h2>
      <h1>{counter.count}</h1>
      <button>+</button>
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
