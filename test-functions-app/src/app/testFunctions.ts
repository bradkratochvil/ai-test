export const testFunctions = [
  {
    id: "reverse-string",
    name: "Reverse String",
    description: "Reverses the input string",
    inputType: "text" as const,
  },
  {
    id: "count-words",
    name: "Count Words",
    description: "Counts the number of words in the input text",
    inputType: "multiline" as const,
  }
] as const;
