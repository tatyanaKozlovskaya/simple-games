import React, { Component, createRef } from 'react';
import player from './../../images/playerMin.png';

const PLAYER = {
  width: 60,
  height: 83,
  img: player,
  step: 30,
};

const MAX_WIDTH = 1000;

class Canvas extends Component {
  constructor() {
    super();
    this.canvas = createRef();
    this.state = { playerDirectionOffsetX: 0 };
  }

  getWidth = () => {
    const { width } = this.props;
    const canvasWidth = width > MAX_WIDTH ? MAX_WIDTH : width;
    return canvasWidth;
  };

  componentDidMount = () => {
    const canv = this.canvas.current;
    this.ctx = canv.getContext('2d');
  };

  touchStartHandler = (e) => {
    const clientX = e.touches[0].clientX;
    this.setState({
      startPosition: clientX,
    });
  };

  touchMoveHandler = (e) => {
    const { width } = this.props;
    const { startPosition } = this.state;
    const position = e.touches[0].clientX;
    const newPlayerDirectionOffsetX = width / 2 - position;
    const playerGoToRight = startPosition < position;
    const playerGoToLeft = startPosition > position;

    if (
      (playerGoToRight &&
        !this.isItInRightCorner(-newPlayerDirectionOffsetX, true)) ||
      (playerGoToLeft &&
        !this.isItInLeftCorner(-newPlayerDirectionOffsetX, true))
    ) {
      this.setState({
        playerDirectionOffsetX: -newPlayerDirectionOffsetX,
      });
    }
    e.stopPropagation();
  };

  touchEndHandler = (e) => {
    console.log('end', e.touches);
    // e.preventDefault();
  };

  keyDownHandler = (e) => {
    const { playerDirectionOffsetX } = this.state;

    if (e.keyCode == '37') {
      !this.isItInLeftCorner(playerDirectionOffsetX) && this.playerMoveLeft();
    } else if (e.keyCode == '39') {
      !this.isItInRightCorner(playerDirectionOffsetX) && this.playerMoveRight();
    }
  };

  isItInRightCorner = (playerDirectionOffsetX, isMobile) => {
    return (
      Math.abs(playerDirectionOffsetX) +
        (isMobile ? PLAYER.width / 2 : PLAYER.width) >
        this.getWidth() / 2 && playerDirectionOffsetX > 0
    );
  };

  isItInLeftCorner = (playerDirectionOffsetX, isMobile) => {
    return (
      Math.abs(playerDirectionOffsetX) +
        (isMobile ? PLAYER.width / 2 : PLAYER.width) >
        this.getWidth() / 2 && playerDirectionOffsetX < 0
    );
  };

  playerMoveLeft = () => {
    this.setState({
      playerDirectionOffsetX: this.state.playerDirectionOffsetX - PLAYER.step,
    });
  };

  playerMoveRight = () => {
    this.setState({
      playerDirectionOffsetX: this.state.playerDirectionOffsetX + PLAYER.step,
    });
  };

  draw = ({ width, height, playerDirectionOffsetX }) => {
    this.drawPlayer({
      width: width,
      height: height,
      playerDirectionOffsetX,
    });
  };

  drawPlayer = ({ width, height, playerDirectionOffsetX }) => {
    const img = new Image();
    const imgWidth = PLAYER.width;
    const imgHeight = PLAYER.height;
    const dx = width / 2 - imgWidth / 2 + playerDirectionOffsetX;
    const dy = height - imgHeight - 10;

    img.onload = () => {
      this.ctx.clearRect(0, dy, width, imgHeight);
      this.ctx.drawImage(
        img,
        0,
        0,
        imgWidth,
        imgHeight,
        dx,
        dy,
        imgWidth,
        imgHeight,
      );
    };
    img.src = PLAYER.img;
  };

  render() {
    const { height } = this.props;
    const { playerDirectionOffsetX } = this.state;
    const canvasWidth = this.getWidth();

    canvasWidth &&
      height &&
      this.draw({ width: canvasWidth, height, playerDirectionOffsetX });

    return (
      <div
        onKeyDown={this.keyDownHandler}
        onTouchStart={this.touchStartHandler}
        onTouchEnd={this.touchEndHandler}
        onTouchMove={this.touchMoveHandler}
        tabIndex="0"
      >
        <canvas
          width={canvasWidth + 'px'}
          height={height + 'px'}
          ref={this.canvas}
          id="canvas"
        ></canvas>
      </div>
    );
  }
}

export default Canvas;

Canvas.displayName = 'Canvas';
