import { createFileRoute } from '@tanstack/react-router';
import SongEdit from '@/SongEdit';

export const Route = createFileRoute('/songs/create')({
  component: SongEdit,
});
