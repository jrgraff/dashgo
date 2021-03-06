import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean;
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
        { showProfileData && (
          <Box mr="4" textAlign="right">
            <Text>Jackson Graff</Text>
            <Text color="gray.300" fontSize="small">
              jacksongraff@hotmail.com
            </Text>
          </Box>
        ) }

        <Avatar size="md" name="Jackson Graff" src="" />
      </Flex>
  );
}