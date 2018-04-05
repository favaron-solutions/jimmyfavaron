import React from 'react';
import {BarChart} from 'react-easy-chart';

const margin = {top: 20, right: 20, bottom: 30, left: 40};

export default class Chart extends React.Component {
  render() {
    return (
      <div>
        <BarChart
          data={[
              {x: 'NodeJS', y: 90, color: '#555'},
              {x: 'ReactJS', y: 70, color: '#555'},
              {x: 'PHP', y: 85, color: '#555'},
              {x: 'Cake', y: 80, color: '#555'}
          ]}
          axes
          grid
          yDomainRange={[0,100]}
          height={250}
          width={350}
          barWidth={2}
          margin={margin}
        />
      </div>
    );
  }
}
