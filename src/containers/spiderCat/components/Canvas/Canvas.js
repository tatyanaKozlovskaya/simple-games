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
    this.state = { playerPositionX: 0 };
  }

  getWidth = (w) => {
    const width = w || this.props.width;
    const canvasWidth = width > MAX_WIDTH ? MAX_WIDTH : width;
    return canvasWidth;
  };

  componentDidMount = () => {
    const canv = this.canvas.current;
    this.ctx = canv.getContext('2d');
  };

  componentDidUpdate = (prevProps) => {
    if (this.props.width !== prevProps.width) {
      const position = this.getWidth(this.props.width) / 2 - PLAYER.width / 2;
      this.setState({
        playerPositionX: position,
        startPosition: position,
      });
    }
  };

  touchStartHandler = (e) => {
    const { startPosition } = this.state;
    const position = e.touches[0].clientX;
    const playerGoToRight = startPosition < position;
    const playerGoToLeft = startPosition > position;

    this.moveByTouch(playerGoToLeft, playerGoToRight, position, true);
  };

  touchMoveHandler = (e) => {
    const { startPosition } = this.state;
    const position = e.touches[0].clientX;
    const playerGoToRight = startPosition < position;
    const playerGoToLeft = startPosition > position;

    this.moveByTouch(playerGoToLeft, playerGoToRight, position);
  };

  moveByTouch = (playerGoToLeft, playerGoToRight, position, isStart) => {
    if (
      (playerGoToRight && !this.isItInRightCorner(position)) ||
      (playerGoToLeft && !this.isItInLeftCorner(position))
    ) {
      this.setState({
        playerPositionX: position,
        ...(isStart && { isStart: position }),
      });
    }
  };

  touchEndHandler = (e) => {
    // e.preventDefault();
  };

  keyDownHandler = (e) => {
    const { playerPositionX } = this.state;

    if (e.keyCode == '37') {
      !this.isItInLeftCorner(playerPositionX - PLAYER.step) &&
        this.playerMoveLeft();
    } else if (e.keyCode == '39') {
      !this.isItInRightCorner(playerPositionX + PLAYER.step) &&
        this.playerMoveRight();
    }
  };

  isItInRightCorner = (playerPositionX) => {
    return playerPositionX >= this.getWidth() - PLAYER.width;
  };

  isItInLeftCorner = (playerPositionX) => {
    return playerPositionX <= 0;
  };

  playerMoveLeft = () => {
    this.setState({
      playerPositionX: this.state.playerPositionX - PLAYER.step,
    });
  };

  playerMoveRight = () => {
    this.setState({
      playerPositionX: this.state.playerPositionX + PLAYER.step,
    });
  };

  draw = ({ width, height, playerPositionX }) => {
    const imgWidth = PLAYER.width;
    const positionX = playerPositionX
      ? playerPositionX
      : width / 2 - imgWidth / 2;

    this.drawPlayer({
      width: width,
      height: height,
      playerPositionX: positionX,
    });
  };

  drawPlayer = ({ width, height, playerPositionX }) => {
    const img = new Image();
    const imgWidth = PLAYER.width;
    const imgHeight = PLAYER.height;
    const dx = playerPositionX;
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
    const { playerPositionX } = this.state;
    const canvasWidth = this.getWidth();

    canvasWidth &&
      height &&
      this.draw({ width: canvasWidth, height, playerPositionX });

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
