import { createFileRoute } from '@tanstack/react-router';
import SongEdit from '@/SongEdit';

export const Route = createFileRoute('/songs/edit/$id')({
  component: SongEdit,
});
