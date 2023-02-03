import * as React from "react";
import { SVGProps } from "react";
const Me = (props: SVGProps<SVGSVGElement>) => (
  <svg
    width={258}
    height={260}
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    xmlnsXlink="http://www.w3.org/1999/xlink"
    {...props}
  >
    <ellipse cx={129} cy={130.462} rx={129} ry={129.5} fill="url(#a)" />
    <path fill="url(#b)" d="M48 6.68h165v223H48z" />
    <defs>
      <radialGradient
        id="a"
        cx={0}
        cy={0}
        r={1}
        gradientUnits="userSpaceOnUse"
        gradientTransform="matrix(0 129.5 -129 0 129 130.462)"
      >
        <stop offset={0.177} stopColor="#fff" />
        <stop offset={1} stopColor="#434343" stopOpacity={0} />
      </radialGradient>
      <pattern
        id="b"
        patternContentUnits="objectBoundingBox"
        width={1}
        height={1}
      >
        <use xlinkHref="#c" transform="scale(.00088 .00065)" />
      </pattern>
      <image
        id="c"
        width={1132}
        height={1530}
      />
    </defs>
  </svg>
);
export default Me;