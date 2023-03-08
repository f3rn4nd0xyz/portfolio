import { extendTheme, StyleProps, type ThemeConfig } from "@chakra-ui/react";
import { mode } from '@chakra-ui/theme-tools';


const config: ThemeConfig = {
    initialColorMode: 'system',
    useSystemColorMode: false,
}

const styles = {
    global: (props: StyleProps) => ({
      body: {
        color: mode('gray.800', 'whiteAlpha.900')(props),
        bg: mode('gray.100', 'gray.600')(props),
      },
    }),
  };

export const theme = extendTheme({ styles, config });
