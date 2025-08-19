import { Dialog, DialogHeader, DialogBody, DialogFooter } from '@/components/Dialog';
import Button from '@/components/Button';

function DeleteSongModal({
  open,
  onConfirm,
  onCancel,
}: {
  open: boolean;
  onConfirm: () => void;
  onCancel: () => void;
}) {
  return (
    <Dialog open={open} size="sm" className="bg-gray-900 w-[500px] m-auto mt-[250px]">
      <DialogHeader>Confirmation</DialogHeader>
      <DialogBody>Are you sure you want to delete this song?</DialogBody>
      <DialogFooter>
        <Button variant="gradient" color="green" onClick={onConfirm}>
          <span>Confirm</span>
        </Button>
        <Button variant="text" color="red" onClick={onCancel} className="mr-1">
          <span>Cancel</span>
        </Button>
      </DialogFooter>
    </Dialog>
  );
}

export default DeleteSongModal;
