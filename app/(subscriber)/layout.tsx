import Link from 'next/link';
import { Fragment } from 'react';

export default function SubscriberLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Fragment>
      <header className="fixed top-0 left-0 w-full bg-amber-950 text-center p-2">
        <Link href="/">
          <h2>This is Subscriber Header layout</h2>
        </Link>
      </header>
      {children}
    </Fragment>
  );
}
