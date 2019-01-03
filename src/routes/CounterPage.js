import React from 'react'
import Counter from '../components/Counter'
import { connect } from 'dva';

const CounterPage = props => {
  // console.log(props)
  // 这层引用就需要传递
  return (
    <div>
      <Counter dispatch={props.dispatch}/>
    </div>
  )
}
Counter.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    counter: state.counter
  }
}
export default connect(mapStateToProps)(CounterPage);
