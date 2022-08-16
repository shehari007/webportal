import React, { Component } from 'react'
import axios from 'axios'

export default class LiveSearch extends Component {
  constructor(props) {
    super(props)

    this.state = {
      userList: [],
    }

    this.cancelToken = ''
    this.inputFocus = this.inputFocus.bind(this)
    this.node = React.createRef()
  }

  // Detect outside click
  componentDidMount() {
    document.addEventListener('mousedown', this.inputFocus)
  }

  componentWillUnmount() {
    document.removeEventListener('mousedown', this.inputFocus)
  }

  inputFocus = (e) => {
    // DOM Ref
    if (this.node.current.contains(e.target)) {
      return
    }
    this.setState({
      userList: [],
    })
  }

  // Handle livesearch
  onValChange = async (e) => {
    // Check axios token
    if (this.cancelToken) {
      this.cancelToken.cancel()
    }
    const searchtext = document.getElementById(`searchtext`).value;
    // Set axios token
    this.cancelToken = axios.CancelToken.source()

    // Make GET request with token
    await axios
      .get('http://localhost/tum_hakkinda.php?searchtext='+searchtext, {
        cancelToken: this.cancelToken.token,
      })
      .then((res) => {
        console.log(res);
        this.setState({
          userList: res.data
        })
      })
      .catch((error) => {
        if (axios.isCancel(error) || error) {
          console.log('Failed to fetch')
        }
      })

    // Filter data
    let searchQuery = e.target.value.toLowerCase()
    let result = this.state.userList.filter((el) => {
      let filterVal = el.name.toLowerCase()
      return filterVal.indexOf(searchQuery) !== -1
    })

    this.setState({
      userList: result,
    })
  }

  render() {
    return (
      <div className="livesearch">
        <input
          onClick={this.inputFocus}
          ref={this.node}
          onChange={this.onValChange}
          type="text" id="searchtext"
          placeholder="Search ..."
        />
        {/* {this.state.message} */}
        <ul className="list">
          {this.state.userList.map((item, index) => {
            return <li key={index}>{item.isletme_adi}</li>
          })}
        </ul>
      </div>
    )
  }
}