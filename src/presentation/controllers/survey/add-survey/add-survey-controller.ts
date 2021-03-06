import { badRequest, noContent, serverError } from '@/presentation/helpers/http/http-helper'
import { Validation } from '@/presentation/protocols'
import { Controller, HttpRequest, HttpResponse, AddSurvey } from './add-survey-controller-protocols'

export class AddSurveyController implements Controller {
  private readonly validation: Validation
  private readonly addSurvey: AddSurvey

  constructor (validation: Validation, addSurvey: AddSurvey) {
    this.validation = validation
    this.addSurvey = addSurvey
  }

  async handle (httpRequest: HttpRequest): Promise<HttpResponse> {
    try {
      const error = this.validation.validate(httpRequest.body)
      if (error) {
        return badRequest(error)
      }

      const { question, answers } = httpRequest.body
      await this.addSurvey.add({
        question,
        answers,
        createdAt: new Date()
      })

      return noContent()
    } catch (err) {
      return serverError(err)
    }
  }
}
