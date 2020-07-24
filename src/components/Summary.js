import React from 'react';
import Item from './Item';
import Total from './Total';

class Summary extends React.Component {
  render() {
    const summary = Object.keys(this.props.selected).map((feature, idx) => {
      return(
        <Item 
          idx={idx}
          feature={feature}
          selected={this.props.selected}
        />
      )
    });

    return(
      <section className="main__summary">
        <h2>Your cart</h2>
        {summary}
        <Total 
          selected={this.props.selected}
        />
      </section>
    )
  }
}

export default Summary;