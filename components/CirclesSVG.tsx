import * as React from "react";

interface CirclesSVGProps extends React.SVGProps<SVGSVGElement> {}

const CirclesSVG: React.FC<CirclesSVGProps> = (props) => (
  <svg width={200} height={200} viewBox="0 0 100 130" {...props}>
    <circle
      cx={50}
      cy={50}
      r={70}
      fill="none"
      stroke="#4d4d4d"
      strokeWidth={0.1}
    />
    <circle
      cx={50}
      cy={50}
      r={55}
      fill="none"
      stroke="#4d4d4d"
      strokeWidth={0.1}
    />
    <circle
      cx={50}
      cy={50}
      r={40}
      fill="none"
      stroke="#4d4d4d"
      strokeWidth={0.1}
    />
    <circle
      cx={50}
      cy={50}
      r={25}
      fill="none"
      stroke="#4d4d4d"
      strokeWidth={0.1}
    />
  </svg>
);

export default CirclesSVG;
