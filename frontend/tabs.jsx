import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
  }
  render() {
    let klass = this.props.selected === this.props.keyIdx ? "active" : "";
    return (
      <li
        className={klass}
        onClick={() => this.props.selectTab(this.props.keyIdx)}
      >
        {this.props.title}
      </li>
    );
  }
}

export default class Tab extends React.Component {
  constructor(props) {
    super(props);
    this.state = { index: 0 };
    this.selectedTab = this.selectedTab.bind(this);
  }
  selectedTab(key) {
    this.setState({ index: key });
  }
  render() {
    let headers = this.props.tabContent.map((each, i) => {
      return (
        <Header
          title={each.title}
          selectTab={this.selectedTab}
          keyIdx={i}
          selected={this.state.index}
        />
      );
    });
    let selContent = this.props.tabContent[this.state.index].content;
    return (
      <div>
        <ul>{headers}</ul>
        <div>{selContent}</div>
      </div>
    );
  }
}
