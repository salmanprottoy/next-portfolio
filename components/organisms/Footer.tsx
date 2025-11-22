import React from "react";

const Footer = () => (
  <footer className="w-full py-8 flex items-center justify-center border-t border-border bg-background">
    <p className="text-sm text-muted-foreground tracking-wider">
      Copyright © {new Date().getFullYear()} Md. Salman Hossan Prottoy
    </p>
  </footer>
);

export default Footer;
