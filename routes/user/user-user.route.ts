import { Router } from 'express'
import helpersMiddleware from '../../middleware/helpers.middleware'
import userMiddleware from '../../middleware/user.middleware'
import authMiddleware from '../../middleware/auth.middleware'
import userController from '../../controllers/user.controller'
import { wrapAsync } from '../../utils/response'

export const userUserRouter = Router()
userUserRouter.put(
  '',
  userMiddleware.updateMeRules(),
  helpersMiddleware.entityValidator,
  authMiddleware.verifyAccessToken,
  wrapAsync(userController.updateMe)
)
userUserRouter.post(
  '/upload-avatar',
  authMiddleware.verifyAccessToken,
  wrapAsync(userController.uploadAvatar)
)

userUserRouter.get(
  '',
  authMiddleware.verifyAccessToken,
  wrapAsync(userController.getDetailMySelf)
)
