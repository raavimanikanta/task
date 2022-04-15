import React ,{Component}from "react";

class CardComponent extends Component {
    render() {
        return (
            <input
            type="tel"
            name={this.props.name}
            maxLength={this.props.length}
            onChange={this.props.handleChange}
            onKeyUp={this.props.copiedData}
            value={this.props.value}
            size={5}
            id='need'
        ></input>
        );
    }
    }

export default CardComponent ;