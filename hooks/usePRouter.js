import { useRouter } from 'next/router';
import nProgress from 'nprogress';

export const usePRouter = () => {
  // a router with nProgress
  // use router.push method after nProgress start

  const router = useRouter();

  const { push } = router;

  router.push = (href, options) => {
    nProgress.start();
    push(href, options);
  };

  return router;
};
