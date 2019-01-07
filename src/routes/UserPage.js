import React from 'react'
import { connect } from 'dva'
const User = (props) => {
  return (
    <div>
      <button>Get User</button>
    </div>
  )
}
User.propTypes = {}
const mapStateToProps = (state, ownProps) => {
  return {
    user: state.user
  }
}
export default connect(mapStateToProps, {})(User);
