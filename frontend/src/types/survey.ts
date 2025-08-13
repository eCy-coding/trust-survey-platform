export type QuestionType = 'short_text' | 'multiple_choice' | 'likert';

export interface Question {
  id: string;
  type: QuestionType;
  text: string;
  options?: string[];   // multiple_choice için
  scale?: number;       // likert için, örn 5 -> 1..5
}

export interface Survey {
  id: string;
  title: string;
  description?: string;
  questions: Question[];
  createdAt: number;
}