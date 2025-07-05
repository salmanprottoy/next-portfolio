import React from "react";
import { SVGProps } from "react";
const VercelIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={(props.className || "") + ' w-6 h-6'} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>Vercel</title><path d="m12 1.608 12 20.784H0Z" fill="currentColor" /></svg>
);
export default VercelIcon;
