import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    // className="pizza-block"
    speed={2}
    width={280}
    height={468}
    viewBox="0 0 280 468"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}>
    <circle cx="137" cy="123" r="120" />
    <rect x="0" y="259" rx="10" ry="10" width="280" height="20" />
    <rect x="0" y="293" rx="10" ry="10" width="280" height="90" />
    <rect x="0" y="401" rx="10" ry="10" width="98" height="27" />
    <rect x="128" y="392" rx="26" ry="26" width="150" height="46" />
  </ContentLoader>
);

export default MyLoader;
