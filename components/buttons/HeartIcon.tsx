"use client"

import React, { Component } from 'react';

// Define the type for the state
interface HeartIconState {
  isFilled: boolean;
}

// Define the type for the props
interface HeartIconProps {
  src: string;
}

class HeartIcon extends Component<HeartIconProps, HeartIconState> {
  constructor(props: HeartIconProps) {
    super(props);
    this.state = {
      isFilled: false, // Initially, the heart is not filled
    };
  }

  handleClick = () => {
    // Toggle the state on click
    this.setState((prevState) => ({
      isFilled: !prevState.isFilled,
    }));
  };

  render() {
    const { isFilled } = this.state;
    const { src } = this.props; // Access the src prop

    // Determine which image to display based on the state
    const iconSrc = isFilled ? '/assets/heart-filled.svg' : src;

    return (
      <img
        src={iconSrc}
        alt='heart'
        width={24}
        height={24}
        className='cursor-pointer object-contain'
        onClick={this.handleClick}
      />
    );
  }
}

export default HeartIcon;