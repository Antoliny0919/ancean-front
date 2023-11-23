import { useRouter } from 'next/router';
import nProgress from 'nprogress';

export const usePRouter = () => {
  const router = useRouter();

  const { push } = router;

  router.push = (href, options) => {
    nProgress.start();
    push(href, options);
  };

  return router;
};
