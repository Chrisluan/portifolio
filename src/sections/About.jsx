import { Box, Text, Flex } from "@chakra-ui/react";
import { useMediaQuery } from "@chakra-ui/react";
import InfoCard from "../components/InfoCard";
import Translations from "../components/Translations";
import Section from "../Section";
const About = () => {
  const [isMobile] = useMediaQuery("(max-width: 900px)");
  const { t } = Translations();
  
  return (
    <Section alignItems={'center'} maxHeight={isMobile ? '100%':'100vh'}>
      <Flex flexDir={'column'} gap='5' width={'90%'}>
      <Text lineHeight={isMobile?'3rem':'4rem'} fontSize={isMobile ? '2.5rem' : '4rem'} fontWeight={'bold'} as={'h1'}>
        {t('title')}
      </Text>

        <Text fontSize={isMobile ? '1.2rem' : '1.5rem'} >
          {t('description')}
        </Text>

        <img style={{width:'600px'}} src="https://skillicons.dev/icons?i=git,js,mysql,react,flutter,nodejs,cs,py,dart,java" />

        <Flex gap={isMobile?'15px':'20px'} flexDir={isMobile ? 'column' : 'row'}>
            <InfoCard info="Chrisluan Lucas G.S" />
            <InfoCard title="Born At" info="11/04/2005" />
            <InfoCard title="From" info="Angra dos Reis, RJ - Brasil"/>
        </Flex>
        
      </Flex>
    </Section>
  );
};
export default About;
