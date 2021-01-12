import React, { Component } from 'react'
import downChevron from './images/down-chevron.png'

class Folder extends Component {
  constructor(props) {
    super(props)
    this.state = {
      dropdown: false
    }

    this.dropdown = this.dropdown.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  dropdown() {
    this.setState(
      { dropdown: !this.state.dropdown }
    )
  }
  
  toggle() {
    const files = document.getElementsByClassName("files")
    if (files[0].style.display === 'none') {
      files[0].style.display= 'block'
    } else {
      files[0].style.display = 'none'
    }
  }

  render() {
    const { dropdown } = this.state
    if (!dropdown) {
      return (
        <div className="container">
          <h1>Folder Contents Toggle Assignment, Karim Nekzad</h1>
          <button className="button" onClick={this.dropdown}>
            Home
          <img
              className="icon"
              src={downChevron}
              alt="down-chevron"
              align="right"
            />
          </button>

          <ul className="files">
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </div>
      )
    } else {
      return (
        <div className="container">
          <h1>Folder Contents Toggle Assignment, Karim Nekzad</h1>
          <button className="button" onClick={this.dropdown}>
            Home
          <img
              className="icon"
              src={downChevron}
              alt="down-chevron"
              align="right"
            />
          </button>
          <div>
            <button className="dropdown-button" onClick={this.toggle}>Toggle Files</button>
          </div>

          <ul className="files">
            <li>File 1</li>
            <li>File 2</li>
            <li>File 3</li>
          </ul>
        </div>
      )
    }
  }
}

export default Folder