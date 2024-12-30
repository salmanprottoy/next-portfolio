import { Flex } from "@/components/atoms/layouts/Flex";
import { Text } from "@/components/atoms/typography/Text";
import { socialMedia } from "../../../public/data/Data";
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
        <Flex
          direction="col"
          justifyContent="between"
          className="cursor-pointer"
        >
          {filteredSocialMedia.map((item, index) => {
            const Icon = item.logo;
            return (
              <Flex
                key={index}
                direction="row"
                gap="10px"
                justifyContent="center"
                className="w-full"
              >
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
