import { Player } from "@/components/Types";

interface PlayerTableProps {
  players: Player[];
  title?: string;
}

export function PlayerTable({ players, title }: PlayerTableProps) {
  if (!players || players.length === 0) {
    return null;
  }

  return (
    <div className="my-4 pb-5">
      <h1 className="text-center text-4xl p-3">{title}</h1>
      <table className="min-w-full table-auto">
        <thead>
          <tr>
            <th
              className="cursor-default relative text-2xl text-grey2 w-1/5 px-4 py-2 bg-grey3 border border-foreground group"
            >
              Name
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Player Name
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-0 py-2 bg-grey3 border border-foreground group"
            >
              Probability
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Probability of scoring today
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 w-1/7 px-4 py-2 bg-grey3 border border-foreground group"
            >
              Team
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Player&apos;s Team
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-4 py-2 bg-grey3 border border-foreground group"
            >
              5GPG
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Goals per Game in last 5 games
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-4 py-2 bg-grey3 border border-foreground group"
            >
              GPG
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Goals per Game
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-4 py-2 bg-grey3 border border-foreground group"
            >
              HGPG
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Historic Goals per Game, last 3 NHL seasons
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-4 py-2 bg-grey3 border border-foreground group"
            >
              TGPG
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Team Goals per Game
              </span>
            </th>
            <th
              className="cursor-default relative text-2xl text-grey2 px-4 py-2 bg-grey3 border border-foreground group"
            >
              OTGA
              <span className="invisible group-hover:visible absolute bg-black text-white text-sm p-2 rounded-lg -top-12 left-1/2 transform -translate-x-1/2 whitespace-nowrap">
                Opponent Team Goals Allowed
              </span>
            </th>
          </tr>
        </thead>
        <tbody>
          {players.map((player, index) => (
            <tr key={player.id} className={`${index % 2 === 1 ? 'bg-grey3' : ''}`}>
              <td className="px-4 py-2 text-xl border border-foreground text-center">
                <a href={`https://www.nhl.com/player/${player.player_id}`} target="_blank" className="text-link hover:underline">
                  {player.name}
                </a>
              </td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.stat.toFixed(2)}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.team_name}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.five_gpg.toFixed(2)}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.gpg.toFixed(2)}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.hgpg.toFixed(2)}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.tgpg.toFixed(2)}</td>
              <td className="px-4 py-2 text-xl border border-foreground text-center">{player.otga.toFixed(2)}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
