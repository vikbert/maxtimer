import React from 'react';

export default function SvgSun({width = 30, height = 30, color = '#ffffff'}) {
  return (
    <>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        xmlns:xlink="http://www.w3.org/1999/xlink"
        aria-hidden="true"
        focusable="false"
        width={`${width}px`}
        height={`${height}px`}
        style="-ms-transform: rotate(360deg); -webkit-transform: rotate(360deg); transform: rotate(360deg);"
        preserveAspectRatio="xMidYMid meet"
        viewBox="0 0 16 16"
      >
        <path
          d="M8 13a1 1 0 0 1 1 1v1a1 1 0 0 1-2 0v-1a1 1 0 0 1 1-1zM8 3a1 1 0 0 1-1-1V1a1 1 0 0 1 2 0v1a1 1 0 0 1-1 1zm7 4a1 1 0 0 1 0 2h-1a1 1 0 0 1 0-2h1zM3 8a1 1 0 0 1-1 1H1a1 1 0 0 1 0-2h1a1 1 0 0 1 1 1zm9.95 3.536l.707.707a1 1 0 0 1-1.414 1.414l-.707-.707a1 1 0 0 1 1.414-1.414zm-9.9-7.072l-.707-.707a.999.999 0 1 1 1.414-1.414l.707.707A.999.999 0 1 1 3.05 4.464zm9.9 0a.999.999 0 1 1-1.414-1.414l.707-.707a.999.999 0 1 1 1.414 1.414l-.707.707zm-9.9 7.072a1 1 0 0 1 1.414 1.414l-.707.707a1 1 0 0 1-1.414-1.414l.707-.707z"
          fill={color}
        />
        <path
          d="M8 4a4 4 0 1 0 0 8a4 4 0 0 0 0-8zm0 6.5a2.5 2.5 0 1 1 0-5a2.5 2.5 0 0 1 0 5z"
          fill={color}
        />
      </svg>
    </>
  );
}
