import Link from "next/link";
import { Player } from "./Types";

interface PlayerTableProps {
  player1: Player;
  player2: Player;
  player3: Player;
  title?: string;
}

export function TopPicks({ player1, player2, player3, title }: PlayerTableProps) {
  const players = [player1, player2, player3];

  if (!players || players.length === 0) {
    return <div>No players found</div>;
  }

  return (
    <div className="my-2 pb-3 max-w-xl mx-auto">
      <h1 className="text-center text-4xl p-2">{title}</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full table-auto border border-foreground text-lg">
          <thead>
            <tr className="bg-grey3">
              <th className="px-2 py-1 border border-foreground">Group</th>
              <th className="px-2 py-1 border border-foreground">Name</th>
              <th className="px-2 py-1 border border-foreground">%</th>
              <th className="px-2 py-1 border border-foreground">Team</th>
            </tr>
          </thead>
          <tbody>
            {players.map((player, index) => (
              <tr key={player.id} className="border border-foreground">
                <td className="px-2 py-1 border border-foreground text-center">
                  <Link href={`#${index+1}`} className="text-link hover:underline">
                    {index + 1}
                  </Link>
                </td>
                <td className="px-2 py-1 border border-foreground text-center">{player.name}</td>
                <td className="px-2 py-1 border border-foreground text-center">{player.stat.toFixed(2)}</td>
                <td className="px-2 py-1 border border-foreground text-center">{player.team_name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
