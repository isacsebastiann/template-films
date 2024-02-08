import { styled, YStack } from "tamagui";

export const MyStack = styled(YStack, {
  name: "MyStack",
  backgroundColor: "$backgroundStrong",
  flex: 1,
  justifyContent: "space-between",
  padding: "$3",
  space: "$true",
});

export const MySecondaryStack = styled(YStack, {
  name: "MySecondaryStack",
  backgroundColor: "$backgroundStrong",
  flex: 1,
  justifyContent: "space-between",
  padding: "$3",
  space: "$true",
});