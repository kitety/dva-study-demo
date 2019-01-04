import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'dva';
// 导入之后使用connect方法
import { counterAdd,counterAsyncAdd } from '../actions';


const CounterPage = props => {
  // console.log(props)
  // 这层引用就需要传递
  return (
    <div>
      <Counter dispatch={props.dispatch} counterAdd={props.counterAdd} counterAsyncAdd={props.counterAsyncAdd}/>
    </div>
  )
}
Counter.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps,{ counterAdd,counterAsyncAdd })(CounterPage);
