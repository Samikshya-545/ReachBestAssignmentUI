import React, { useState } from 'react';
import { Radar } from 'react-chartjs-2';
import { darken, lighten } from 'polished';
import BookMatchingForm from './BookMatchingForm';
import '../styles/BookMatching.css'


function BookMatching() {
  const [answer1, setAnswer1] = useState('');
  const [answer2, setAnswer2] = useState('');
  const [chartData, setChartData] = useState(null);

  const darkGreen = '#006400';
  const lighterGreen = lighten(0.1, darkGreen);
  const darkerGreen = darken(0.1, darkGreen);

  const handleMatch = async () => {
    const mockData = {
      labels: ['Criterion 1', 'Criterion 2', 'Criterion 3'],
      datasets: [
        {
          label: 'Your Scores',
          backgroundColor: 'rgba(179,181,198,0.2)',
          borderColor: 'rgba(179,181,198,1)',
          pointBackgroundColor: 'rgba(179,181,198,1)',
          pointBorderColor: '#fff',
          pointHoverBackgroundColor: '#fff',
          pointHoverBorderColor: 'rgba(179,181,198,1)',
          data: [answer1, answer2, 0], 
        },
      ],
    };
    setChartData(mockData);
  };

  return (
    <div className="App">
      <nav className="navbar">Book Matching App</nav>
      <div className="content">
        <BookMatchingForm/>
        {chartData && (
          <div className="chart-container">
            <Radar data={chartData} />
          </div>
        )}
      </div>
    </div>
  );
}

export default BookMatching;

