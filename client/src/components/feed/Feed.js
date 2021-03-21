import React, { useRef } from 'react';
import { useGetFeed, useIntersectionObserver } from '../../hooks';

const Feed = () => {
  const { data, error, isFetching, fetchNextPage, hasNextPage } = useGetFeed();

  const scrollObserver = useRef();

  useIntersectionObserver({
    target: scrollObserver,
    onIntersect: fetchNextPage,
    enabled: hasNextPage,
  });

  return (
    <>
      <h1>Infinite Loading</h1>
      {isFetching && 'Loading'}
      {error && <p>{error.message}</p>}
      <div>
        {data &&
          data.pages.map((page, index) => (
            <div key={index} style={{ height: '100%' }}>
              {page.results.map((post) => (
                <p
                  style={{
                    border: '1px solid gray',
                    borderRadius: '5px',
                    padding: '10rem 1rem',
                    background: `hsla(${post._id * 30}, 60%, 80%, 1)`,
                  }}
                  key={post._id}
                >
                  {post.text}
                </p>
              ))}
            </div>
          ))}
        {!hasNextPage && !isFetching && <p>Nothing more to load</p>}
        <p ref={scrollObserver}>{hasNextPage && 'Loading...'}</p>
      </div>
    </>
  );
};

export default Feed;
