export interface Choice {
  id: number;
  choice_text: string;
  votes: number;
}

export interface Question {
  id: number;
  pub_date: string;
  question_text: string;
}

export interface QuestionResults extends Question {
  choices: Choice[];
}
