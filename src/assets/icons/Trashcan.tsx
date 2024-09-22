import * as React from 'react';

const TrashcanIcon: React.FC<React.SVGProps<SVGSVGElement>> = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={14}
    height={16}
    fill="none"
    {...props}
  >
    <path
      fill="rgba(0, 43, 40, 1)"
      fillRule="evenodd"
      d="M.455 4.073c0-.402.325-.727.727-.727h11.782a.727.727 0 0 1 0 1.454H1.182a.727.727 0 0 1-.727-.727Z"
      clipRule="evenodd"
    />
    <path
      fill="rgba(0, 43, 40, 1)"
      fillRule="evenodd"
      d="M5.764 2.182a.582.582 0 0 0-.582.582v.581h3.782v-.581a.582.582 0 0 0-.582-.582H5.764Zm4.654 1.163v-.581A2.036 2.036 0 0 0 8.382.727H5.764a2.036 2.036 0 0 0-2.037 2.037v.581H2.491a.727.727 0 0 0-.727.728v9.163A2.036 2.036 0 0 0 3.8 15.273h6.545a2.036 2.036 0 0 0 2.037-2.037V4.073a.727.727 0 0 0-.727-.728h-1.237ZM3.218 4.8v8.436a.582.582 0 0 0 .582.582h6.545a.582.582 0 0 0 .582-.582V4.8H3.218Z"
      clipRule="evenodd"
    />
    <path
      fill="rgba(0, 43, 40, 1)"
      fillRule="evenodd"
      d="M8.382 6.618c.401 0 .727.326.727.727v3.928a.727.727 0 1 1-1.454 0V7.345c0-.401.325-.727.727-.727ZM5.764 6.618c.401 0 .727.326.727.727v3.928a.727.727 0 1 1-1.455 0V7.345c0-.401.326-.727.728-.727Z"
      clipRule="evenodd"
    />
  </svg>
);

export default TrashcanIcon;
