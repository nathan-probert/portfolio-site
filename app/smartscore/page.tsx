"use client";
import { useState, useEffect } from 'react';
import { PlayerTable } from '../../components/PlayerTable';
import { SmartScoreModeToggle } from '../../components/SmartScoreModeToggle';
import { Player } from '../../components/Types';
import { CircleHelp } from 'lucide-react';
import { TopPicks } from '../../components/TopPicks';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { useTheme } from 'next-themes';

ChartJS.register(ArcElement, Tooltip, Legend);

const prod_url = 'https://x8ki-letl-twmt.n7.xano.io/api:OvqrJ0Ps/players';
const dev_url = 'https://x8ki-letl-twmt.n7.xano.io/api:OvqrJ0Ps/players_dev';

// Example history function - this would be replaced with real data
function getHistory(): number[] {
  return [0, 1, 3, 2, 0, 1, 0]; // Example data: 0 = no score, 1-3 = number of scores
}

async function fetchPlayers(): Promise<Player[]> {
  const res = await fetch(process.env.NODE_ENV === 'production' ? prod_url : dev_url);
  if (!res.ok) {
    throw new Error('Failed to fetch players');
  }
  return res.json();
}

export default function PlayerTables() {
  const [sortedPlayers, setSortedPlayers] = useState<{ all: Player[], tims1: Player[], tims2: Player[], tims3: Player[] }>({
    all: [],
    tims1: [],
    tims2: [],
    tims3: []
  });
  const [showAllPlayers, setShowAllPlayers] = useState(false);
  const [loading, setLoading] = useState(true);
  const { theme } = useTheme();
  const isDarkMode = theme === 'dark';
  const history = getHistory();

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true);
        const data = await fetchPlayers();

        // Multiply each player's stat by 100%
        const updatedData = data.map(player => ({
          ...player,
          stat: player.stat * 100
        }));

        // Sort the entire array once by stat
        const sortedAllPlayers = updatedData.sort((a, b) => b.stat - a.stat);

        // Create the tims groups from the sorted array
        const tims1 = sortedAllPlayers.filter(player => player.tims === 1);
        const tims2 = sortedAllPlayers.filter(player => player.tims === 2);
        const tims3 = sortedAllPlayers.filter(player => player.tims === 3);

        // Set the sorted players and tims groups in the state
        setSortedPlayers({ all: sortedAllPlayers, tims1, tims2, tims3 });
      } catch (error) {
        console.error('Error fetching players:', error);
      } finally {
        setLoading(false);
      }
    };
    loadPlayers();
  }, []);

  const handleToggleChange = () => {
    setShowAllPlayers(!showAllPlayers);
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <img src="/images/loading.gif" alt="Loading..." className="w-16 h-16" />
      </div>
    );
  }

  if (sortedPlayers.all.length === 0) {
    return (
      <div className="flex justify-center items-center px-4 text-center">
        <p className="text-2xl md:text-5xl font-bold mt-20">No games today, check back tomorrow!</p>
      </div>
    );
  }

  // Calculate the overall percentage for the pie chart
  const totalPercentage = sortedPlayers.tims1[0]?.stat + sortedPlayers.tims2[0]?.stat + sortedPlayers.tims3[0]?.stat
    - (sortedPlayers.tims1[0]?.stat * sortedPlayers.tims2[0]?.stat / 100)
    - (sortedPlayers.tims1[0]?.stat * sortedPlayers.tims3[0]?.stat / 100)
    - (sortedPlayers.tims2[0]?.stat * sortedPlayers.tims3[0]?.stat / 100)
    + (sortedPlayers.tims1[0]?.stat * sortedPlayers.tims2[0]?.stat * sortedPlayers.tims3[0]?.stat / 10000);

  const chartData = {
    labels: [
      `Percentage Someone Scores (${totalPercentage.toFixed(2)}%)`,
      `Percentage No One Scores (${(100 - totalPercentage).toFixed(2)}%)`
    ],
    datasets: [{
      data: [totalPercentage, 100 - totalPercentage],
      backgroundColor: ['#fa265b', '#666666'],
      borderColor: '#404040',
      borderWidth: 1,
    }],
  };

  const chartOptions = {
    plugins: {
      legend: {
        labels: {
          color: isDarkMode ? '#dbe1e8' : '#000000',
          font: {
            size: 16,
            weight: 700,
          },
        },
      },
      tooltip: {
        bodyColor: isDarkMode ? '#dbe1e8' : '#000000',
        titleFont: {
          size: 18,
          weight: 700,
        },
      },
    },
    responsive: true,
    maintainAspectRatio: false,
    elements: {
      arc: {
        borderWidth: 1,
      },
    },
    cutout: '60%',
    rotation: 180,
  };

  return (
    <div>
      {/* History Bar */}
      <div className="flex flex-col items-center mt-6">
        <div className="flex justify-center items-center gap-4 mb-6 relative">
          {/* Background line */}
          <div className={`absolute top-1/2 w-full h-1 bg-gray-300 ${isDarkMode ? 'bg-gray-600' : 'bg-gray-500'}`}></div>

          {history.map((value, index) => (
            <div
              key={index}
              className="flex items-center justify-center relative"
            >
              {value === 0 && <span className="text-3xl">💔</span>}
              {value > 0 && <span className="text-3xl">🔥</span>}
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-center items-center mt-10 my-4 pb-8 mb-16 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <SmartScoreModeToggle onClick={handleToggleChange} />
        </div>
        <a className="absolute right-10 group inline-block" href="/smartscore/help">
          <CircleHelp className="mt-12" size="32" />
          <span className="absolute top-12 right-12 bg-grey4 text-foreground text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap hidden md:inline">
            Need help?
            <span className="absolute top-1/2 right-[-14px] -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-transparent border-l-grey4"></span>
          </span>
        </a>
      </div>

      {showAllPlayers ? (
        <PlayerTable players={sortedPlayers.all} title="All Players" />
      ) : (
        <>
          <TopPicks
            player1={sortedPlayers.tims1[0]}
            player2={sortedPlayers.tims2[0]}
            player3={sortedPlayers.tims3[0]}
            title="Top Picks"
          />
          <div className="flex justify-center mb-8">
            <div className="w-full md:w-1/3" style={{ height: '300px', position: 'relative' }}>
              <Pie data={chartData} options={chartOptions} />
            </div>
          </div>
          <PlayerTable players={sortedPlayers.tims1} title="Tims Group 1" />
          <PlayerTable players={sortedPlayers.tims2} title="Tims Group 2" />
          <PlayerTable players={sortedPlayers.tims3} title="Tims Group 3" />
        </>
      )}
    </div>
  );
}  