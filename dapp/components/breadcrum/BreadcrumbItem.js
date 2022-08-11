import Link from 'next/link';

const BreadcrumbItem = ({ children, href, last, ...props }) => {
  if (last) {
    return (
      <li {...props} className="text-libuGreen">
        {children.replace(/%20/g, ' ')}
      </li>
    );
  } else {
    return (
      <li {...props} className="text-libuWhite">
        <Link href={href} passHref>
          {children.replace(/%20/g, ' ')}
        </Link>
      </li>
    );
  }
};

export default BreadcrumbItem;

/*
CAMBIAR POR {children}
        <a>{children}</a>
*/
