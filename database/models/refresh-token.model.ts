import mongoose, { Schema } from 'mongoose'
const RefreshTokenSchema = new Schema(
  {
    user_id: { type: mongoose.SchemaTypes.ObjectId, ref: 'users' },
    token: { type: String, unique: true },
  },
  {
    timestamps: true,
  }
)

export const RefreshTokenModel = mongoose.model(
  'refresh_tokens',
  RefreshTokenSchema
)
