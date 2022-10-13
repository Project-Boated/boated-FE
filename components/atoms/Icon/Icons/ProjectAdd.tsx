import React from 'react';

const ProjectAdd = () => {
  return (
    <svg
      width="64"
      height="64"
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      xmlnsXlink="http://www.w3.org/1999/xlink"
    >
      <g filter="url(#filter0_d_1502_2542)">
        <circle cx="32" cy="32" r="28" fill="white" />
      </g>
      <rect x="17" y="19" width="29" height="29" fill="url(#pattern0)" />
      <rect x="39" y="17" width="9" height="9" fill="url(#pattern1)" />
      <defs>
        <filter
          id="filter0_d_1502_2542"
          x="0"
          y="0"
          width="64"
          height="64"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
          <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_1502_2542" />
          <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_1502_2542" result="shape" />
        </filter>
        <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image0_1502_2542" transform="translate(-0.00438596) scale(0.00877193)" />
        </pattern>
        <pattern id="pattern1" patternContentUnits="objectBoundingBox" width="1" height="1">
          <use xlinkHref="#image1_1502_2542" transform="scale(0.0277778)" />
        </pattern>
        <image
          id="image0_1502_2542"
          width="115"
          height="114"
          xlinkHref="data:image/png;base64,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"
        />
        <image
          id="image1_1502_2542"
          width="36"
          height="36"
          xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAACXBIWXMAACxKAAAsSgF3enRNAAABXElEQVRYhe2Yy00DMRCG/6wPcLK2BKeDpYKECqAEUgGigiQdQAVJB7AnjmwJKcFXbpFvHKxEgyYoSCG2h+zj4O+YtSafvN55eIR/oLSZArgDUHGUGsDaO7uVRhULKW1WAB5OPCKZW+/sRhK3EMos/pAhSgAfShsjii2QoT98Dyy7JrHd17ZOjS/ZoWnkuntBbJFQFbEG/OqSEZ2hNslCIbJQiCwU4qeWKW2oFDwm5JlLQHXvDcDSO2txEDpTKLsU+y7II96ZVY8yx1JjVVyVr9I0f2GoIH/SoRa1CS0xGdpXVg5NaENC6wGIHKhJ6IlPeN88e2ebgieEGwBNj0KUGGljfk8dSpuKW9RzaWCS0MYuA89pMmmOx6bkMYgnjnnMWu9scvxc7UNkoRBZKIREqNWsLhGKzejdXMfwvU+M1EsnQsws8OroFk3URYiEeEIYn2hd6PeZd5aE0wGwB5lNVio5rTI5AAAAAElFTkSuQmCC"
        />
      </defs>
    </svg>
  );
};

export default ProjectAdd;
