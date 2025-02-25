
export type Question = {
  uuid: string;
  categorySlug: string;
  question: string;
  questionPart1?: string;
  questionPart2?: string;
  answers: Answer[];
  correction: string;
  mediaType: "image" | "video" | "audio";
  assetUrl: string;
  questionAudioUrl: string;
  correctionAudioUrl: string;
  type: "singleChoice" | "multiChoice" | "singleChoice2";
};

export type Answer = {
  label: string;
  correct?: boolean;
};
