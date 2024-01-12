import { useEffect } from 'react';
import nProgress from 'nprogress';
import Link from 'next/link';

export default function ProgressLink({ children, href, ...props }) {
  useEffect(() => {
    nProgress.start();
  }, []);

  return (
    <Link href={href} {...props}>
      {children}
    </Link>
  );
}
