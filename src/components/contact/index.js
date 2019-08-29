import React, { Component } from "react";
import axios from "axios";
import "./style.css";

class Contact extends Component {
  constructor(props) {
    super(props);

    this.state = {
      userId: "",
      title: "",
      body: "",
      errorUserId: "",
      errorTitle: "",
      errorBody: ""
    };
  }

  changeHandler = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  submitHandler = e => {
    e.preventDefault();
    console.log(this.state);
    const { userId, title, body } = this.state;

    if (userId && title && body) {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
    this.setState({
      errorUserId: userId ? "" : "please enter user id",
      errorTitle: title ? "" : "please enter title",
      errorBody: body ? "" : "please enter body"
    });
  };

  render() {
    const {
      userId,
      title,
      body,
      errorUserId,
      errorTitle,
      errorBody
    } = this.state;
    return (
      <div className="contact">
        <form onSubmit={this.submitHandler}>
          <input
            type="text"
            name="userId"
            value={userId}
            placeholder="userId"
            onChange={this.changeHandler}
            className={errorUserId ? "error-input" : null}
          />
          {errorUserId ? (
            <div className="error-msg">
              <p>{errorUserId}</p>
            </div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="title"
            value={title}
            placeholder="title"
            onChange={this.changeHandler}
            className={errorTitle ? "error-input" : null}
          />
          {errorTitle ? (
            <div className="error-msg">
              <p>{errorTitle}</p>
            </div>
          ) : (
            ""
          )}
          <input
            type="text"
            name="body"
            value={body}
            placeholder="body"
            onChange={this.changeHandler}
            className={errorBody ? "error-input" : null}
          />
          {errorBody ? (
            <div className="error-msg">
              <p>{errorBody}</p>
            </div>
          ) : (
            ""
          )}
          <button type="submit">Submit</button>
        </form>
      </div>
    );
  }
}

export default Contact;
