import React from 'react'

class BasicForm extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      Name: '',
      age: '',
    }
  }

  handleNameChange = (event) => {
    const Name = event.target.value
    this.setState({ Name: Name })
  }

  handleAgeChange = (event) => {
    const age = event.target.value
    this.setState({ age: age })
  }

  handleSubmit = (event) => {
    event.preventDefault()

    const {
      Name,
      age,
    } = this.state

    console.log(`A first name was submitted: ${Name}. An age was submitted: ${age}`)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          First Name:
          <input
            name="Name"
            type="text"
            value={this.state.Name}
            onChange={this.handleNameChange} />
        </label>
        <label>
          Age:
          <input
            name="age"
            type="number"
            value={this.state.age}
            onChange={this.handleAgeChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export { BasicForm }
