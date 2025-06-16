import { Box, Heading } from "@chakra-ui/react";

interface Props {
  term: string;
  children: React.ReactNode | React.ReactNode[];
}

const DefinitionItem = ({ term, children }: Props) => {
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" fontWeight="bold" color="gray.500">
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};

export default DefinitionItem;
