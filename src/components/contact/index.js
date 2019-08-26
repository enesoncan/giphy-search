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
      errorUserId: "",
      errorId: "",
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
    const { userId, id, title, body } = this.state;

    if (userId && id && title && body) {
      axios
        .post("http://jsonplaceholder.typicode.com/posts", this.state)
        .then(response => {
          console.log(response);
        })
        .catch(error => {
          console.log(error);
        });
    }
    if (!userId) {
      this.setState({ errorUserId: "please enter user id" });
    }
    if (!id) {
      this.setState({ errorId: "please enter id" });
    }
    if (!title) {
      this.setState({ errorTitle: "please enter title" });
    }
    if (!body) {
      this.setState({ errorBody: "please enter body" });
    }

    if (userId) {
      this.setState({ errorUserId: "" });
    }
    if (id) {
      this.setState({ errorId: "" });
    }
    if (title) {
      this.setState({ errorTitle: "" });
    }
    if (body) {
      this.setState({ errorBody: "" });
    }
  };

  render() {
    const {
      userId,
      id,
      title,
      body,
      errorUserId,
      errorId,
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
            name="id"
            value={id}
            placeholder="id"
            onChange={this.changeHandler}
          />
          {errorId ? (
            <div className="error-msg">
              <p>{errorId}</p>
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
