import React from 'react';
import { useColorMode, useColorModeValue, Icon, Button } from '@chakra-ui/react';
import { RiSunFill, RiMoonClearFill } from 'react-icons/ri';

export const ColorModeSwitcher = props => {
  const { colorMode, toggleColorMode } = useColorMode();
  const text = useColorModeValue('dark', 'light');

  return (
    <Button
      onClick={() => toggleColorMode()}
      pos="absolute"
      top={0}
      right={0}
      m="1rem"
      // paddingX={5}
      // paddingY={5}
    >
      {
        colorMode === "dark" ? (
          <Icon as={RiSunFill} color="orange.600" boxSize={5} />
        ) : (
          <Icon as={RiMoonClearFill} color="teal.400" boxSize={5} />
        )
      }
    </Button>
    // <IconButton
    //   size="md"
    //   fontSize="lg"
    //   aria-label={`Switch to ${text} mode`}
    //   variant="ghost"
    //   color="current"
    //   marginLeft="2"
    //   onClick={toggleColorMode}
    //   icon={<SwitchIcon  />}
    //   {...props}
    // />
  );
};
