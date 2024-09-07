import { techBlogs } from '@/data/blogData';
import Image from 'next/image';
import Link from 'next/link';

export const metadata = {
  title: 'Blogs',
  description: 'Blogs Page of Next Tech',
  keywords: ['Blogs', 'Tech Blog', 'Technology', 'Next JS', 'Next Tech'],
};

const Blogs = () => {
  const blogs = techBlogs;
  return (
    <div className='p-20 text-center h-full w-full flex flex-wrap justify-center items-center gap-16'>
      {blogs &&
        blogs.map((blog) => (
          <div key={blog.id} className='w-[300px] h-[400px]'>
            <div className='w-full'>
              <img
                className='h-[180px] rounded-lg'
                src={blog.image}
                alt={blog.title}
              />
              {/* <Image
                className='rounded-lg'
                src={blog.image}
                alt={blog.title}
                height={180}
                width={300}
              /> */}
            </div>
            <div className='text-left space-y-1 px-1'>
              <h2 className='pt-4 font-semibold text-lg'>{blog.title}</h2>
              <p className='text-sm'>
                Category: <span className='text-gray-400'>{blog.category}</span>
              </p>
              <p className='text-sm text-gray-400 text-justify'>
                {blog.details.length > 100
                  ? blog.details.slice(0, 100)
                  : blog.details}
                ...
                <Link
                  href={`/blogs/${blog.id}`}
                  className='inline-block text-white hover:text-gray-500 transition-colors duration-200 font-semibold'
                >
                  read more
                </Link>
              </p>
              <div className='flex gap-14 items-center text-sm pt-2'>
                <p>
                  Serial: <span className='text-gray-400'> {blog.id}</span>
                </p>
                <p>
                  Author: <span className='text-gray-400'>{blog.author}</span>
                </p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
};

export default Blogs;
