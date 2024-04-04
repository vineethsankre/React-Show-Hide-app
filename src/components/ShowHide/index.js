import {Component} from 'react'
import './index.css'

class ShowHide extends Component {
  state = {hiddenFirstName: true, hiddenLastName: true}

  firstNameVisibility = () => {
    this.setState(prevState => ({hiddenFirstName: !prevState.hiddenFirstName}))
  }

  lastNameVisibility = () => {
    this.setState(prevState => ({hiddenLastName: !prevState.hiddenLastName}))
  }

  render() {
    const {hiddenFirstName, hiddenLastName} = this.state
    return (
      <div className="bg-container">
        <h1 className="heading">Show/Hide</h1>
        <div className="show-hide-container">
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.firstNameVisibility}
            >
              Show/Hide FirstName
            </button>
            {!hiddenFirstName && <p className="name">Joe</p>}
          </div>
          <div className="name-container">
            <button
              className="button"
              type="button"
              onClick={this.lastNameVisibility}
            >
              Show/Hide LastName
            </button>
            {!hiddenLastName && <p className="name">Jonas</p>}
          </div>
        </div>
      </div>
    )
  }
}

export default ShowHide
