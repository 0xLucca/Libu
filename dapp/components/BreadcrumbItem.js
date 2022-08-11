import Link from 'next/link';

const BreadcrumbItem = ({ children, href, last, ...props }) => {
  return (
    <li {...props} className={last ? 'text-libuGreen' : 'text-libuWhite2'}>
      {children}
    </li>
  );
};

export default BreadcrumbItem;

/*
CAMBIAR POR {children}
      <Link href={href} passHref>
        <a>{children}</a>
      </Link>
*/
