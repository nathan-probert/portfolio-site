"use client";
import { useState, useEffect } from 'react';
import { PlayerTable } from '../../components/PlayerTable';
import { SmartScoreModeToggle } from '../../components/SmartScoreModeToggle';
import { Player } from '../../components/Types';
import { CircleHelp } from 'lucide-react';

const prod_url = 'https://x8ki-letl-twmt.n7.xano.io/api:OvqrJ0Ps/players';
const dev_url = 'https://x8ki-letl-twmt.n7.xano.io/api:OvqrJ0Ps/players_dev';

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

  useEffect(() => {
    const loadPlayers = async () => {
      try {
        setLoading(true);
        const data = await fetchPlayers();

        // Sort the entire array once by stat
        const sortedAllPlayers = data.sort((a, b) => b.stat - a.stat);

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

  return (
    <div>
      <div className="flex justify-center items-center mt-10 my-4 pb-8 mb-16 relative">
        <div className="absolute left-1/2 transform -translate-x-1/2">
          <SmartScoreModeToggle onClick={handleToggleChange} />
        </div>
        <a className="absolute right-10 group inline-block" href="/smartscore/help">
          <CircleHelp className="mt-12" size="32" />
          <span className="absolute top-12 right-12 bg-grey4 text-foreground text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300 whitespace-nowrap">
            Need help?
            <span className="absolute top-1/2 right-[-14px] -translate-y-1/2 w-0 h-0 border-t-[12px] border-b-[12px] border-l-[12px] border-transparent border-l-grey4"></span>
          </span>
        </a>
      </div>
      {showAllPlayers ? (
        <PlayerTable players={sortedPlayers.all} title="All Players" />
      ) : (
        <>
          <PlayerTable players={sortedPlayers.tims1} title="Tims Group 1" />
          <PlayerTable players={sortedPlayers.tims2} title="Tims Group 2" />
          <PlayerTable players={sortedPlayers.tims3} title="Tims Group 3" />
        </>
      )}
    </div>
  );
}
