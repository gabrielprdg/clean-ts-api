<<<<<<< HEAD
export interface SurveyAnswerModel {
=======
export type SurveyAnswerModel = {
>>>>>>> fix/routes
  image?: string
  answer: string
}

<<<<<<< HEAD
export interface SurveyModel{
=======
export type SurveyModel = {
>>>>>>> fix/routes
  id: string
  question: string
  answers: SurveyAnswerModel[]
  createdAt: Date
}
