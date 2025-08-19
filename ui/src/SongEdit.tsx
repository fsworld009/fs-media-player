import { useForm, type SubmitHandler } from 'react-hook-form';
import Typography from '@/components/Typography';
import Input from '@/components/Input';
import Button from './components/Button';
import { Link, useParams } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useCreateSong, useGetSong, useUpdateSong, type CreateSongRequestBody } from './api/songs';
import { useEffect, useMemo } from 'react';

export interface ISongInput {
  sid: string;
  title: string;
  comment: string;
}

function SongEdit() {
  // const [loading, setLoading] = useState(false);

  const { id: songId } = useParams({ strict: false });

  const nav = useNavigate();

  const songQuery = useGetSong(songId, Boolean(songId));

  const onSuccess = () => {
    nav({
      to: '/songs',
    });
  };

  const createMutation = useCreateSong(onSuccess);
  const updateMutation = useUpdateSong(onSuccess);

  const onSubmit: SubmitHandler<ISongInput> = async (data) => {
    if (songId) {
      updateMutation.mutate({
        id: songId,
        body: {
          title: data.title,
          comment: data.comment,
        },
      });
    } else {
      createMutation.mutate(data as CreateSongRequestBody);
    }
  };

  const formDisabled =
    createMutation.isPending ||
    updateMutation.isPending ||
    (songQuery.isPending && songQuery.isEnabled);

  const defaultFormData = useMemo(
    () => (songQuery.isEnabled && songQuery.isSuccess ? songQuery.data : {}),
    [songQuery],
  );
  const {
    register,
    formState: { errors },
    handleSubmit,
    reset,
  } = useForm<ISongInput>({});

  // Form is only rendered once on load, to set values after fetch, need to force reset
  // https://stackoverflow.com/a/77274034
  // Another method would be put forms in child component https://stackoverflow.com/a/77684128
  useEffect(() => {
    if (Object.keys(defaultFormData).length > 0) {
      reset(defaultFormData);
    }
  }, [reset, defaultFormData]);

  return (
    <div className="w-screen p-4">
      <form className="" onSubmit={handleSubmit(onSubmit)} key={songQuery.data as any}>
        <div className="flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray">
            Youtube Video ID
          </Typography>
          <Input
            disabled={songId || formDisabled}
            className="rounded-lg border-2 p-2 focus:border-sky-500 focus:text-sky-500"
            size="lg"
            {...register('sid', { required: true })}
            placeholder="Enter video ID"
          ></Input>
          {errors.sid && (
            <Typography as="p" className="text-sm text-red-500">
              Video ID is required
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray">
            Title
          </Typography>
          <Input
            disabled={formDisabled}
            className="rounded-lg border-2 p-2 focus:border-sky-500 focus:text-sky-500"
            size="lg"
            {...register('title', { required: true })}
            placeholder="Enter title"
          ></Input>
          {errors.title && (
            <Typography as="p" className="text-sm text-red-500">
              Title is required
            </Typography>
          )}
          <Typography variant="h6" color="blue-gray">
            Comment
          </Typography>
          <Input
            disabled={formDisabled}
            className="rounded-lg border-2 p-2 focus:border-sky-500 focus:text-sky-500"
            size="lg"
            {...register('comment')}
            placeholder="For self reference only"
          ></Input>
          <div className="flex gap-3">
            <Button className="disabled:text-gray-600" type="submit" disabled={formDisabled}>
              Submit
            </Button>
            <Link to="/songs">
              <Button
                className="disabled:!text-red-200 !bg-red-100 !text-red-500"
                disabled={formDisabled}
              >
                Cancel
              </Button>
            </Link>
          </div>
        </div>
      </form>
    </div>
  );
}

export default SongEdit;
