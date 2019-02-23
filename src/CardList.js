import React, { Component } from 'react';
import Card from "./Card";


class CardList extends Component {
  render() {
    let robots = this.props.robots;
    let cardComponent = robots.map(
        (user, i) => (
            < Card
              key={robots[i].id}
              id={robots[i].id}
              name={robots[i].name}
              email={robots[i].email}
            />)
    );
    return (
        <div>
          {cardComponent}
        </div>
    );
  };
}

export default CardList;
