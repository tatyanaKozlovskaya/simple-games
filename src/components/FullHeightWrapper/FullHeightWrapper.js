import React, { Component } from 'react';
import PropTypes from 'prop-types';

export default class FullHeightWrapper extends Component {
  state = {
    height: 0,
  };

  componentDidMount() {
    this.updateStyle();
    window.addEventListener('resize', this.updateStyle);
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.updateStyle);
  }

  getClientHeight() {
    return (
      (document &&
        document.documentElement &&
        document.documentElement.clientHeight) ||
      window.innerHeight
    );
  }

  updateStyle = () => {
    const { heightPercent } = this.props;
    const height = `${(this.getClientHeight() * heightPercent) / 100}px`;

    this.setState({ height: height });
  };

  render() {
    const { height } = this.state;
    const { children, cn } = this.props;
    return (
      <div className={cn} style={{ height: height }}>
        {children}
      </div>
    );
  }
}

FullHeightWrapper.displayName = 'FullHeightWrapper';

FullHeightWrapper.defaultProps = {
  heightPercent: 100,
};

FullHeightWrapper.propTypes = {
  heightPercent: PropTypes.number.isRequired,
  cn: PropTypes.string.isRequired,
};
