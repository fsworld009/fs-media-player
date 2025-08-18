import { createFileRoute } from '@tanstack/react-router';
import Player from '../Player';

export const Route = createFileRoute('/player')({
  component: Player,
});
