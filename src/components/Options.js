import React from 'react';
import Radio from './Radio';

class Options extends React.Component {
  render() {
    const featureHash = this.props.feature + '-' + this.props.idx;
    const options = this.props.features[this.props.feature].map(item => {
      return (
        <Radio 
          item={item}
          feature={this.props.feature}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      )
    });

    return (
      <fieldset className="feature" key={featureHash}>
        <legend className="feature__name">
          <h3>{this.props.feature}</h3>
        </legend>
        {options}
      </fieldset>
    );
}
}

export default Options;