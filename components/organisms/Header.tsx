import { Flex, Text } from "@/components/atoms";
import { socialMedia, resume } from "../../app/data/Data";
import Icon from "@/components/atoms/Icon";

import React from "react";

const Header = React.memo(() => {
  const filteredSocialMedia = socialMedia.filter(
    (item) => item.name === "github" || item.name === "linkedin"
  );

  return (
    <header>
      <Flex direction="row" justify="between" className="w-full relative z-50">
        <Flex direction="row" gap="md" className="cursor-pointer">
          {filteredSocialMedia.map((item, index) => (
            <Flex
              key={index}
              direction="column"
              gap="sm"
              className="text-light"
            >
              <a href={item.link} target="_blank" rel="noopener noreferrer">
                <Icon name={item.name as "github" | "linkedin"} />
              </a>
            </Flex>
          ))}
        </Flex>
        <a
          href={resume.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Flex direction="row" align="center" gap="md" className="text-light">
            <Icon name="download" />
            <Text variant="body-lg" weight="bold" color="light">
              {resume.text}
            </Text>
          </Flex>
        </a>
      </Flex>
    </header>
  );
});

Header.displayName = "Header";

export default Header;
