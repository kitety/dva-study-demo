import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'dva';
// 导入之后使用connect方法
import { counterAdd,counterAsyncAdd } from '../actions';


const CounterPage = props => {
  // connect不指定mapDispatchToProps就可以取出来
  console.log(props.dispatch)
  // 这层引用就需要传递
  return (
    <div>
      <Counter dispatch={props.dispatch} counterAdd={props.counterAdd} counterAsyncAdd={props.counterAsyncAdd} history={props.history}/>
    </div>
  )
}
Counter.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
// 如果不指定mapDispatchToProps就可以在props中取出props
export default connect(mapStateToProps,{ counterAdd,counterAsyncAdd })(CounterPage);
