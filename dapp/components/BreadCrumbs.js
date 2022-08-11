import { Children } from 'react';

const Breadcrumb = ({ children }) => {
  const childrenArray = Children.toArray(children);

  console.log(childrenArray);

  const childrenWtihSeperator = childrenArray.map((child, index) => {
    if (index !== childrenArray.length - 1) {
      return (
        <div key={index} className="flex my-5">
          {child}
          <span className="ml-4">/</span>
        </div>
      );
    }
    return child;
  });

  return (
    <nav className="mx-8 md:mx-16 lg:mx-32 mt-8 flex text-libuWhite2 font-sora font-medium">
      <ol className="flex items-center space-x-4">{childrenWtihSeperator}</ol>
    </nav>
  );
};

export default Breadcrumb;

//https://blog.anishde.dev/making-an-accessible-breadcrumb-navigation-using-tailwindcss-and-nextjs
