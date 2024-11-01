import { Player } from "./Types";

interface PlayerTableProps {
  player1: Player;
  player2: Player;
  player3: Player;
  title?: string;
}

export function TopPicks({ player1, player2, player3, title }: PlayerTableProps) {
  // Create an array from the individual player props
  const players = [player1, player2, player3];

  // Check if players exist
  if (!players || players.length === 0) {
    return <div>No players found</div>;
  }

  return (
    <div className="my-4 pb-5">
      <h1 className="text-center text-3xl md:text-4xl p-3">{title}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-foreground">
          <thead>
            <tr className="bg-grey3">
              <th className="text-md md:text-2xl text-grey2 px-4 py-2 border border-foreground">Group</th>
              <th className="text-md md:text-2xl text-grey2 px-4 py-2 border border-foreground">Name</th>
              <th className="text-md md:text-2xl text-grey2 px-4 py-2 border border-foreground">% Probability</th>
              <th className="text-md md:text-2xl text-grey2 px-4 py-2 border border-foreground">Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="border border-foreground">
                <td className="text-md md:text-xl text-grey2 px-4 py-2 border border-foreground text-center">{index+1}</td>
                <td className="text-md md:text-xl text-grey2 px-4 py-2 border border-foreground text-center">{player.name}</td>
                <td className="text-md md:text-xl text-grey2 px-4 py-2 border border-foreground text-center">{player.stat.toFixed(2)}</td>
                <td className="text-md md:text-xl text-grey2 px-4 py-2 border border-foreground text-center">{player.team_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
