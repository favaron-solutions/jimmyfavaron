import React from 'react';
import {BarChart} from 'react-easy-chart';

const margin = {top: 20, right: 20, bottom: 30, left: 40};

export default class SystemChart extends React.Component {
  render() {
    return (
      <div>
        <h4>Devops Skillset</h4>
        <BarChart
          data={[
              {x: 'AWS', y: 90, color: '#555'},
              {x: 'Ubuntu', y: 95, color: '#555'},
              {x: 'Docker', y: 85, color: '#555'},
              {x: 'macOS', y: 95, color: '#555'}
          ]}
          axes
          grid
          yDomainRange={[50,100]}
          height={250}
          width={350}
          barWidth={25}
          margin={margin}
        />
      </div>
    );
  }
}
