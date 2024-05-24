import React, { useState } from 'react';
import Link from 'next/link'; 
import Image from 'next/image';

import image1 from '../../public/img/news/1.webp';
import image2 from '../../public/img/news/2.webp';
import image3 from '../../public/img/news/3.webp';
import image4 from '../../public/img/news/4.webp';
import image5 from '../../public/img/news/5.webp';
import image6 from '../../public/img/news/6.webp';

const postDetails = [
  {
    id: 1,
    image: image1,
    date: '25.10.2023',
    title: 'How to Set Up Your Own Game Server',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 2,
    image: image2,
    date: '25.10.2023',
    title: 'Rise in Demand for Private Game Servers',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 3,
    image: image3,
    date: '25.10.2023',
    title: 'Top Hosting Providers for Game Servers',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 4,
    image: image4,
    date: '25.10.2023',
    title: 'E-Sports and Competitive Gaming',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 5,
    image: image5,
    date: '25.10.2023',
    title: 'How to Protecting Your Online World',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 6,
    image: image6,
    date: '25.10.2023',
    title: '5 Ways to Maintain a Good Posture',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 7,
    image: image3,
    date: '25.10.2023',
    title: 'How to Set Up Your Own Game Server',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  {
    id: 8,
    image: image2,
    date: '25.10.2023',
    title: 'Rise in Demand for Private Game Servers',
    excerpt: 'Dolore officia sint incididunt non excepteur ea mollit commodo ut enim reprehenderit cupidatat labore ad laborum consectetur consequat...',
  },
  // Add more posts similarly...
];

const postsPerPage = 6; // Number of posts per page

const Section = () => {
  const [currentPage, setCurrentPage] = useState(1);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = postDetails.slice(indexOfFirstPost, indexOfLastPost);

  const totalPages = Math.ceil(postDetails.length / postsPerPage);

  const paginate = (pageNumber) => {
    if (pageNumber > 0 && pageNumber <= totalPages) {
      setCurrentPage(pageNumber);
    }
  };

  return (
    <div className="container">
      <div className="row g-4">
        {currentPosts.map((post) => (
          <div key={post.id} className="col-lg-4 col-md-6 mb10">
            <div className="bloglist item">
              <div className="post-content">
                <div className="post-image">
                  <div className="d-tagline">
                    <span>games</span>
                    <span>guide</span>
                  </div>
                  <Image src={post.image} alt="" />
                </div>
                <div className="post-text">
                  <div className="d-date">{post.date}</div>
                  <h4>
                    <Link href="/">{post.title}<span></span></Link>
                  </h4>
                  <p>{post.excerpt}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
        <div className="col-md-12">
          <ul className="pagination">
            <li className={currentPage === 1 ? 'disabled' : ''}>
              <Link href="" onClick={() => paginate(currentPage - 1)} disabled={currentPage === 1}>
                Prev
              </Link>
            </li>
            {Array.from({ length: totalPages }, (_, i) => (
              <li key={i} className={i + 1 === currentPage ? 'active' : ''}>
                <Link href="" onClick={() => paginate(i + 1)}>
                  {i + 1}
                </Link>
              </li>
            ))}
            <li className={currentPage === totalPages ? 'disabled' : ''}>
              <Link href="" onClick={() => paginate(currentPage + 1)} disabled={currentPage === totalPages}>
                Next
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Section;
