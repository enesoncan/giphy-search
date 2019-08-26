import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      id: "",
      title: "",
      body: "",
      errorMessage: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    const { userId, id, title, body } = this.state;
    if (!userId || !id || !title || !body) {
      this.setState({ errorMessage: "can not be empty" });
    } else {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
      this.setState({
        errorMessage: ""
      });
    }
  };
  render() {
    const { userId, id, title, body, errorMessage } = this.state;
    return (
      <div>
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="userId"
            value={userId}
            placeholder="userId"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="id"
            value={id}
            placeholder="id"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={this.changeHandler}
          />
          <input
            type="text"
            name="body"
            value={body}
            placeholder="body"
            onChange={this.changeHandler}
          />
          <button type="submit">Submit</button>
          <p>{errorMessage}</p>
        </form>
      </div>
    );
  }
}

export default Contact;
