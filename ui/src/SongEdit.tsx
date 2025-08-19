import { useForm, type FieldErrors, type SubmitHandler } from 'react-hook-form';
import Typography from '@/components/Typography';
import Input from '@/components/Input';
import Button from './components/Button';
import { Link } from '@tanstack/react-router';
import { useNavigate } from '@tanstack/react-router';
import { useCreateSong, type SongRequestBody } from './api/songs';

export interface ISongInput {
  sid: string;
  title: string;
  comment: string;
}

function SongEdit() {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<ISongInput>({});

  // const [loading, setLoading] = useState(false);
  const nav = useNavigate();

  const mutation = useCreateSong(() => {
    nav({
      to: '/songs',
    });
  });

  const onSubmit: SubmitHandler<ISongInput> = async (data) => {
    console.log(JSON.stringify(data));
    mutation.mutate(data as SongRequestBody);
  };

  console.log('errors', errors);

  return (
    <div className="w-screen p-4">
      <form className="" onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-3">
          <Typography variant="h6" color="blue-gray">
            Youtube Video ID
          </Typography>
          <Input
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
            className="rounded-lg border-2 p-2 focus:border-sky-500 focus:text-sky-500"
            size="lg"
            {...register('comment')}
            placeholder="For self reference only"
          ></Input>
          <div className="flex gap-3">
            <Button className="disabled:text-gray-600" type="submit" disabled={mutation.isPending}>
              Submit
            </Button>
            <Link to="/songs">
              <Button
                className="disabled:!text-red-200 !bg-red-100 !text-red-500"
                disabled={mutation.isPending}
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
