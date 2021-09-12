import { SignUpController } from '../../../../../presentation/controllers/signup/signup-controller'
import { Controller } from '../../../../../presentation/protocols'
import { makeAddAccount } from '../../../usecases/account/add-account/add-account-factory'
import { makeDbAuthentication } from '../../../usecases/account/authentication/db-authentication-factory'
import { makeSignUpValidation } from './signup-validation-factory'

export const makeSignUpController = (): Controller => {
  return new SignUpController(makeAddAccount(), makeSignUpValidation(), makeDbAuthentication())
}
