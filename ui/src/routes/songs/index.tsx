import { createFileRoute } from '@tanstack/react-router';
import Songs from '@/Songs';

export const Route = createFileRoute('/songs/')({
  component: Songs,
});
