import React from "react";
import { Text } from "@/components/atoms";

const Footer = () => (
  <footer className="w-full bg-dark py-3 flex items-center justify-center">
    <Text
      variant="body-sm"
      color="light"
      className="tracking-widest text-center"
    >
      Copyright © {new Date().getFullYear()} Md. Salman Hossan Prottoy
    </Text>
  </footer>
);

export default Footer;
