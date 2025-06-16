import { Button, Text } from "@chakra-ui/react";
import { useState } from "react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [expanded, setExpanded] = useState(false);
  const summary = expanded ? children : children.substring(0, 300) + "...";

  return (
    <Text>
      {summary}
      <Button
        onClick={() => setExpanded(!expanded)}
        size="xs"
        colorScheme="yellow"
        marginLeft={2}
      >
        {expanded ? "Show less" : "Read more"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
