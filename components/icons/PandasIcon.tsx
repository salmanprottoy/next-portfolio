import React from "react";
import { SVGProps } from "react";
const PandasIcon = (props: SVGProps<SVGSVGElement>) => (
  <svg {...props} className={(props.className || "") + ' w-6 h-6'} role="img" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" fill="currentColor"><title>pandas</title><path d="M16.922 0h2.623v18.104h-2.623zm-4.126 12.94h2.623v2.57h-2.623zm0-7.037h2.623v5.446h-2.623zm0 11.197h2.623v5.446h-2.623zM4.456 5.896h2.622V24H4.455zm4.213 2.559h2.623v2.57H8.67zm0 4.151h2.623v5.447H8.67zm0-11.187h2.623v5.446H8.67Z" fill="currentColor" /></svg>
);
export default PandasIcon;
