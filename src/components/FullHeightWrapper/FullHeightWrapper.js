import React, { Component, cloneElement } from 'react';
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

  getClientWidth() {
    return (
      (document &&
        document.documentElement &&
        document.documentElement.clientWidth) ||
      window.innerWidth
    );
  }

  updateStyle = () => {
    const { heightPercent, widthPercent } = this.props;
    const height = `${(this.getClientHeight() * heightPercent) / 100}px`;
    const width = `${(this.getClientWidth() * widthPercent) / 100}px`;
    this.setState({ height: height, width: width });
  };

  render() {
    const { height, width } = this.state;
    const { children, cn } = this.props;
    return (
      <div className={cn} style={{ height: height }}>
        {cloneElement(children, {
          height: parseInt(height),
          width: parseInt(width),
        })}
      </div>
    );
  }
}

FullHeightWrapper.displayName = 'FullHeightWrapper';

FullHeightWrapper.defaultProps = {
  heightPercent: 100,
  widthPercent: 100,
};

FullHeightWrapper.propTypes = {
  heightPercent: PropTypes.number.isRequired,
  widthPercent: PropTypes.number.isRequired,
  cn: PropTypes.string,
};
