import { Flex, Text } from "@/components/atoms";
import { socialMedia } from "../../app/data/Data";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const filteredSocialMedia = socialMedia.filter(
    (item) => item.name === "github" || item.name === "linkedin"
  );

  return (
    <header>
      <Flex direction="row" justify="between" className="w-full relative z-50">
        <Flex direction="row" gap="md" className="cursor-pointer">
          {filteredSocialMedia.map((item, index) => {
            const Icon = item.logo;
            return (
              <Flex key={index} direction="column" gap="sm">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </Flex>
            );
          })}
        </Flex>
        <a href="mailto:salman.prottoy@gmail.com" className="cursor-pointer">
          <Flex direction="row" align="center" gap="md">
            <CiMail size={24} />
            <Text
              variant="body-lg"
              weight="normal"
              color="light"
              className="uppercase"
            >
              Get in touch
            </Text>
          </Flex>
        </a>
      </Flex>
    </header>
  );
};

export default Header;
