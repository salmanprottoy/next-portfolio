import { Flex, Text } from "@/components/atoms";
import { socialMedia } from "../../app/data/Data";
import { CiMail } from "react-icons/ci";

const Header = () => {
  const filteredSocialMedia = socialMedia.filter(
    (item) => item.name === "github" || item.name === "linkedin"
  );

  return (
    <header>
      <Flex
        direction="row"
        justifyContent="between"
        className="w-full relative z-50"
      >
        <Flex direction="row" className="cursor-pointer">
          {filteredSocialMedia.map((item, index) => {
            const Icon = item.logo;
            return (
              <Flex key={index} direction="col" gap="10px">
                <a href={item.link} target="_blank" rel="noopener noreferrer">
                  <Icon />
                </a>
              </Flex>
            );
          })}
        </Flex>
        <Flex direction="row">
          <CiMail size={24} />
          <Text text="Get in touch" className="!uppercase text-[18px]" />
        </Flex>
      </Flex>
    </header>
  );
};

export default Header;
