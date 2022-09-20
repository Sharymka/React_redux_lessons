import React from "react";
import "./style.css";

export default class MessageComponent extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      message: props.message,
      author: props.author,
      messageList: [],
    };

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChangeM = this.handleChangeM.bind(this);
    this.handleChangeA = this.handleChangeA.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({
      messageList: this.state.messageList.concat({
        message: this.state.message,
        author: this.state.author,
      }),
    });
  }

  handleChangeM(event) {
    this.setState({ message: event.target.value });
  }

  handleChangeA(event) {
    this.setState({ author: event.target.value });
  }

  render() {
    return (
      <>
        <form className="form" onSubmit={this.handleSubmit}>
          <label className="label">
            message:
            <br />
            <input
              className="input"
              type="text"
              onChange={this.handleChangeM}
              value={this.state.message}
            />
          </label>
          <br />
          <label className="label">
            author:
            <br />
            <input
              className="input name"
              type="text"
              onChange={this.handleChangeA}
              value={this.state.author}
            />
          </label>
          <br />
          <label>
            <button className="button" type="submit">
              Send message
            </button>
          </label>
        </form>
        <div className="list">
          Message List:
          {this.state.messageList.map((message, index) => (
            <div key={"message" + index} className="list-item">
              <div className="text">
                <span className="author">
                  {index + 1}. {message.author}: &nbsp;
                </span>
                "{message.message}"
              </div>
            </div>
          ))}
        </div>
      </>
    );
  }
}
