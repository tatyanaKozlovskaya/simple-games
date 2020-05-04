import React, { Component, createRef } from 'react';

import { PLAYER, ITEMS } from './../../store';

const MAX_WIDTH = 1000;

class Canvas extends Component {
  constructor() {
    super();
    this.canvas = createRef();
    this.state = { playerPositionX: 0, items: [] };
  }

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

      this.init();
      this.generateItems();
      this.updateItemsPositions();
    }
  };

  componentWillUnmount = () => {
    setTimeout(() => {
      clearInterval(this.generatorInterval);
      clearInterval(this.drawInterval);
      clearInterval(this.updatePositionsInterval);
    }, 3000);
  };

  generateItems = () => {
    this.generatorInterval = setInterval(() => {
      const newItem = { ...this.getRandomElement(Object.values(ITEMS)) };
      const minPositionX = PLAYER.width / 2;
      const maxPositionX = this.getWidth() - PLAYER.width / 2;

      newItem.img = this.playerImg;
      newItem.positionX = this.getRandomNumber(minPositionX, maxPositionX);
      newItem.positionY = 0;

      this.setState({ items: [...this.state.items, newItem] });
    }, 3000);
  };

  updateItemsPositions = () => {
    this.updatePositionsInterval = setInterval(() => {
      const newItems = this.state.items.map((el) => {
        el.positionX = el.positionX;
        el.positionY = el.positionY + 0.5;
        return el;
      });

      this.setState({ items: newItems });
    }, 3);
  };

  getRandomElement = (arr) => {
    const randomIndex = Math.floor(Math.random() * arr.length);
    return arr[randomIndex];
  };

  getRandomNumber = (min, max) => {
    const randomNumber = min + Math.random() * (max + 1 - min);
    return Math.floor(randomNumber);
  };

  getWidth = (w) => {
    const width = w || this.props.width;
    const canvasWidth = width > MAX_WIDTH ? MAX_WIDTH : width;
    return canvasWidth;
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

  touchEndHandler = (e) => {
    // e.preventDefault();
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

  init = () => {
    this.playerImg = new Image();
    this.playerImg.onload = () => {
      this.drawInterval = setInterval(this.draw, 9);
    };
    this.playerImg.src = PLAYER.img;
  };

  draw = () => {
    this.ctx.clearRect(0, 0, this.getWidth(), this.props.height);
    this.drawPlayer();
    this.drawItems();
  };

  drawPlayer = () => {
    const imgWidth = PLAYER.width;
    const imgHeight = PLAYER.height;
    const dy = this.props.height - imgHeight - 10;

    this.ctx.clearRect(0, dy, this.getWidth(), imgHeight);
    this.ctx.drawImage(
      this.playerImg,
      0,
      0,
      imgWidth,
      imgHeight,
      this.state.playerPositionX,
      dy,
      imgWidth,
      imgHeight,
    );
  };

  drawItems = () => {
    const { items } = this.state;
    items &&
      items.length &&
      items.forEach((item) => {
        const imgWidth = PLAYER.width;
        const imgHeight = PLAYER.height;

        const dx = item.positionX;
        const dy = item.positionY;

        this.ctx.drawImage(
          item.img,
          0,
          0,
          imgWidth,
          imgHeight,
          dx,
          dy,
          imgWidth,
          imgHeight,
        );
      });
  };

  render() {
    const { height } = this.props;
    const canvasWidth = this.getWidth();
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
