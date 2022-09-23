import "./card.style.css";
import { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export class Card extends Component {
  render() {
    return (
      <div className="card">
        <FontAwesomeIcon className="card-icones " icon={this.props.icone} />
        <h5>{this.props.titre}</h5>
        <p className="text-secondary">{this.props.children}</p>
      </div>
    );
  }
}
