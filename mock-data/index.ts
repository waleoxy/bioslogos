export interface IQuestionData {
  page: number;
  pageSize: number;
  question: {
    questionNo: number;
    isImagePresent: boolean;
    questionImg: string;
    questionText: {
      tag: string;
      intro: string;
      main: {
        inputType: { type: string; number: number };
        text: string;
        mark: string;
        variant: string;
        boxLabel?: string[];
        boxAnwerChoices?: string[];
      };
    };
  };
}

export const questionsData = {
  page: 1,
  pageSize: 1,
  question: [
    {
      questionNo: 1,
      isImagePresent: true,
      questionImg: "/foodchain1.png",
      questionText: {
        tag: "withOptions",
        intro:
          "The giant panda lives in China. The diagram shows a simple food web involving the panda.",
        main: [
          {
            questionImg: "/foodchain1.png",
            inputType: { type: "input", number: "2" },
            text: "Name two producers in the food web.",
            mark: "2marks",
          },
          {
            questionImg: "/foodchain1.png",
            inputType: { type: "input", number: "2" },
            text: "Name two primary consumer in the food web.",
            mark: "2marks",
          },
          {
            questionImg: "/foodchain1.png",
            inputType: { type: "textarea", number: "2" },
            text: "Use the information in the food web to explain why the panda is described as an omnivore.",
            mark: "2marks",
          },
          {
            questionImg: "/foodchain1.png",
            inputType: { type: "textarea", number: "1" },
            text: "What do the arrows in the food web show?",
            mark: "1marks",
          },
          {
            questionImg: "/foodchain1.png",
            inputType: { type: "textarea", number: "2" },
            text: "Many of the bamboo forests in China are being cut down. This is causing the panda population to decrease. Suggest why.",
            mark: "2marks",
          },
        ],
      },
    },
    {
      questionNo: 2,
      isImagePresent: true,
      questionImg: "/identKeys1.png",
      questionText: {
        tag: "withOptions",
        intro: "Use the key to identify this coral reef fish.",
        main: [
          {
            questionImg: "/identKeys1.png",
            inputType: { type: "input", number: "1" },
            text: "The coral reef fish is a/an.",
            mark: "1mark",
          },
        ],
      },
    },
    {
      questionNo: 3,
      isImagePresent: false,
      questionImg: "",
      questionText: {
        tag: "withBox",
        intro: "",
        main: [
          {
            questionImg: "/identKeys1.png",
            inputType: { type: "input", number: "4" },
            text: "The boxes show some parts of plants and the function of the parts. Choose from the underlisted words that match its correct function and write it in the corresponding box.",
            boxLabel: ["flower", "leaf", "root", "stem"],
            boxVariant: "corresponds",
            boxAnswerChoices: [
              "photosynthesis",
              "absorption of water",
              "transport of water and minerals",
              "reproduction",
            ],
            mark: "3mark",
          },
          {
            questionImg: "/identKeys1.png",
            inputType: { type: "input", number: "2" },
            text: "Complete the word equation for photosynthesis.",
            boxLabel: ["Carbon dioxider", "glucose"],
            boxVariant: "equation",
            boxAnswerChoices: [
              "photosynthesis",
              "absorption of water",
              "transport of water and minerals",
              "reproduction",
            ],
            mark: "2mark",
          },
        ],
      },
    },
    {
      questionNo: 4,
      isImagePresent: true,
      questionImg: "/cell1.png",
      questionText: {
        tag: "withOptions",
        intro: "The diagram shows a palisade cell.",
        main: [
          {
            questionImg: "/cell1.png",
            inputType: { type: "input", number: "3" },
            text: "Which three structures, labelled in the diagram, are not found in animal cells?",
            mark: "3marks",
          },
          {
            questionImg: "/cell1.png",
            inputType: { type: "input", number: "1" },
            text: "Name the part of the cell in which photosynthesis takes place.",
            mark: "1mark",
          },
        ],
      },
    },
  ],
};
