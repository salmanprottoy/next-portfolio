import { Flex, Text } from "@/components/atoms";
import { socialMedia, resume } from "../../app/data/Data";
import { FiDownload } from "react-icons/fi";
import { GithubIcon, LinkedinIcon } from "@/components/atoms/Icon";

const Header = () => {
  const filteredSocialMedia = socialMedia.filter(
    (item) => item.name === "github" || item.name === "linkedin"
  );

  return (
    <header>
      <Flex direction="row" justify="between" className="w-full relative z-50">
        <Flex direction="row" gap="md" className="cursor-pointer">
          {filteredSocialMedia.map((item, index) => {
            let Icon = null;
            if (item.name === "github") Icon = GithubIcon;
            if (item.name === "linkedin") Icon = LinkedinIcon;
            return (
              <Flex key={index} direction="column" gap="sm">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  {Icon && <Icon />}
                </a>
              </Flex>
            );
          })}
        </Flex>
        <a
          href={resume.link}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer"
        >
          <Flex direction="row" align="center" gap="md">
            <FiDownload size={24} />
            <Text variant="body-lg" weight="normal" color="light">
              {resume.text}
            </Text>
          </Flex>
        </a>
      </Flex>
    </header>
  );
};

export default Header;
