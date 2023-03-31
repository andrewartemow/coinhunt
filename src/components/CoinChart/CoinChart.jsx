import { Line } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import Button from '../ui/Button/Button';

import { TIME_PERIODS } from '../../data';

import styles from './CoinChart.module.css';

const CoinChart = ({
  currencySymbol,
  historyData,
  timePeriod,
  handleTimePeriod,
}) => {
  ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );

  const btnStyles = {
    generalStyles: {
      border: '1px solid gold',
    },
    isActiveStyles: {
      backgroundColor: 'rgb(255, 198, 53)',
    },
  };

  const data = {
    labels: historyData.map((coin) => {
      let date = new Date(coin.timestamp * 1000);
      let time =
        date.getHours() > 12
          ? `${date.getHours() - 12}:${date.getMinutes()} PM`
          : `${date.getHours()}:${date.getMinutes()} AM`;
      return timePeriod === '24h' ? time : date.toLocaleDateString();
    }),
    datasets: [
      {
        label: `Price ( Past ${timePeriod} ) in ${currencySymbol}`,
        data: historyData.map((coin) => coin.price),
        fill: false,
        borderColor: 'gold',
      },
    ],
  };

  const options = {
    plugins: {
      legend: {
        position: 'top',
      },
      title: {
        display: true,
      },
    },

    elements: {
      point: {
        radius: 2,
      },
    },
    maintainAspectRatio: false,
    responsive: true,
  };

  return (
    <div className={styles.chartWrapper}>
      <div className={styles.chartButtons}>
        {TIME_PERIODS.map((time) => (
          <Button
            key={time}
            isActive={timePeriod === time}
            btnStyles={btnStyles}
            onClick={() => handleTimePeriod(time)}
          >
            {time}
          </Button>
        ))}
      </div>
      <article className={styles.canvasContainer}>
        <Line data={data} options={options} />
      </article>
    </div>
  );
};

export default CoinChart;
