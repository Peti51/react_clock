/* eslint-disable no-console */
import React from 'react';
// import { render } from 'react-dom';
import './App.scss';
// import { event } from 'cypress/types/jquery';

type State = {
  time: string;
};

type Props = {
  name: string,
};

export class Clock extends React.Component<Props, State> {
  state = {
    time: '',
  };

  componentDidMount(): void {
    window.setInterval(() => {
      const time = new Date().toLocaleTimeString();

      this.setState({ time });
    }, 1000);
  }

  componentDidUpdate(prevProps: Props, prevState: State) {
    if (this.state.time !== prevState.time && prevProps) {
      console.info(this.state.time);
    }
  }

  render(): React.ReactNode {
    return (

      <>
        <div className="Clock">
          <strong className="Clock__name">
            {this.props.name}
          </strong>

          {' time is '}
          <span className="Clock__time">
            {this.state.time}
          </span>

        </div>

      </>
    );
  }
}
