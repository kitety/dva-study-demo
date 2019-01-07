import React from 'react';
import { connect } from 'dva';
import PropTypes from 'prop-types'
import {withRouter,Link ,routerRedux} from 'dva/router'

// counter=props.counter
const Counter = (props,context) => {
  // 无状态组件不用加this
  // console.log(props)
  // console.log(context)
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
      <button onClick={()=>{props.history.push('/')}}>Props Go Index</button>
      <br/>
      <a href="/">To Home(a标签重渲染)</a>
      <br/>
      <Link to="/">Link To Home</Link>
      <br/>
      <button onClick={()=>{context.router.history.push('/')}}>Context Go Back</button>
      <br/>
      <button onClick={() => { props.dispatch(routerRedux.push('/'))}}>routerRedux Go Back</button>
    </div>
  );
};
// 类型检查
Counter.propTypes = {
  counter:PropTypes.object
};
Counter.contextTypes = {
  router:PropTypes.object
};
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
export default withRouter(connect(mapStateToProps)(Counter));
