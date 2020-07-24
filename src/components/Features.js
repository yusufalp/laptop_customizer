import React from 'react';
import Options from './Options';

class Features extends React.Component {
  render() {
    const features = Object.keys(this.props.features).map((feature, idx) => {
      return( 
        <Options 
          idx={idx}
          feature={feature}
          features={this.props.features}
          selected={this.props.selected}
          updateFeature={this.props.updateFeature}
        />
      )
    });
    
    return(
      <form className="main__form">
        <h2>Customize your laptop</h2>
        {features}
      </form>
    )
  }
}

export default Features;