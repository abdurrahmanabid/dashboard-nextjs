'use client';
// components/LineChart.tsx
import {
      CategoryScale,
      Chart as ChartJS,
      Legend,
      LinearScale,
      LineElement,
      PointElement,
      Title,
      Tooltip
} from 'chart.js';
import { Line } from 'react-chartjs-2';

// Register chart.js components
ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const LineChart = () => {
  const data = {
    labels: ["January", "February", "March", "April", "May", "June", "July"],
    datasets: [
      {
        label: "Dataset 1",
        data: [65, 59, 80, 81, 56, 55, 40],
        fill: false,
        borderColor: "rgb(75, 192, 192)",
        tension: 0.1,
      },
      {
        label: "Dataset 2",
        data: [28, 48, 40, 19, 86, 27, 90],
        fill: false,
        borderColor: "rgb(255, 99, 132)",
        tension: 0.1,
      },
      {
        label: "Dataset 3",
        data: [50, 60, 70, 80, 90, 100, 110],
        fill: false,
        borderColor: "rgb(153, 102, 255)",
        tension: 0.1,
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: 'top',
      },
      tooltip: {
        callbacks: {
          label: (tooltipItem) => `${tooltipItem.dataset.label}: ${tooltipItem.formattedValue}`,
        },
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
