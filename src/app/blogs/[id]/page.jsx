import { techBlogs } from '@/data/blogData';
import React from 'react';

export const generateMetadata = async ({ params }) => {
  const { id } = params;
  const { title, category, author } = techBlogs.find((blog) => blog.id == id);
  return {
    title: title,
    description: `${title} - ${category} - ${author}`,
    keywords: [title, category, author],
  };
};

const BlogDetails = ({ params }) => {
  const { id } = params;
  const { title, category, details, image, author } = techBlogs.find(
    (blog) => blog.id == id
  );

  return (
    <div className={` max-w-screen-2xl mx-auto h-full space-y-3`}>
      <div className=''>
        <img
          className='w-[60vw] h-[60vh] rounded-xl mx-auto'
          src={image}
          alt={title}
        />
      </div>
      <div className='flex justify-between items-center'>
        <h2 className='font-bold text-4xl pt-8'>{title}</h2>
        <p className='text-sm text-gray-400'>{author}</p>
      </div>
      <p>
        Category: <span className='text-gray-400'>{category}</span>
      </p>
      <p className='text-justify text-gray-300'>{details}</p>
    </div>
  );
};

export default BlogDetails;
