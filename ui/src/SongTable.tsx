import Typography from './components/Typography';
import { ACTION } from './common/enums';
import type { Song } from './api/songs';

function SongTable({
  songs,
  onAction,
}: {
  songs: Song[];
  onAction: (songs: Song[], action: ACTION) => void;
}) {
  const columns = [
    {
      dataKey: 'sid',
      title: 'Song ID',
    },
    {
      dataKey: 'title',
      title: 'Title',
    },
    {
      dataKey: 'comment',
      title: 'Comment',
    },
    {
      dataKey: 'createdAt',
      title: 'Created At',
    },
    {
      dataKey: 'updatedAt',
      title: 'Last Modified',
    },
  ];

  return (
    <table className="w-full table-auto text-left">
      <thead>
        <tr className="border-b border-blue-gray-100 bg-blue-gray-50 p-4">
          {columns.map((column) => {
            return (
              <th key={column.dataKey}>
                <Typography
                  variant="small"
                  color="blue-gray"
                  className="font-normal leading-none opacity-70"
                >
                  {column.title}
                </Typography>
              </th>
            );
          })}
          <th>
            <Typography
              variant="small"
              color="blue-gray"
              className="font-normal leading-none opacity-70"
            >
              Action
            </Typography>
          </th>
        </tr>
      </thead>
      <tbody>
        {songs.map((song) => (
          <tr key={song.id} className="even:bg-blue-gray-50/50">
            {columns.map((column) => (
              <td key={`${song.id}-${column.dataKey}`} className="p-4">
                <Typography variant="small" color="blue-gray" className="font-normal">
                  {song[column.dataKey as keyof Song] as string}
                </Typography>
              </td>
            ))}
            <td className="p-4">
              <Typography
                as="span"
                variant="small"
                color="blue"
                className="!text-blue-gray-500 font-medium mr-1 cursor-pointer"
                onClick={() => onAction([song], ACTION.EDIT)}
              >
                Edit
              </Typography>
              <Typography
                as="span"
                variant="small"
                color="red"
                className="font-medium cursor-pointer"
                onClick={() => onAction([song], ACTION.DELETE)}
              >
                Delete
              </Typography>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}

export default SongTable;
