import React from 'react'
import { connect } from 'react-redux'
import { loadContacts } from '../actions'

class Contacts extends React.Component {
  componentDidMount() {
    const { contacts, dispatch } = this.props

    if (!contacts) {
      dispatch(loadContacts())
    }
  }

  render() {
    const { contacts } = this.props
    console.log(contacts)

    return (
      <div>
        Contact 1
      </div>
    )
  }
}

const mapStateToProps = state => ({
  contacts: state.rootReducer.contacts
})

export default connect(mapStateToProps, null)(Contacts);
