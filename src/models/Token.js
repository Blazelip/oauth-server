import BaseModel from './BaseModel.js';

export default class Token extends BaseModel {
  static get tableName() {
    return 'patreon_tokens';
  }

  static get jsonSchema() {
    return {
      type: 'object',
      required: [
        'userId', 'accessToken', 'tokenExpiration', 'refreshToken',
      ],
      properties: {
        id: { type: 'integer' },
        userId: { type: 'string', minLength: 1 },
        accessToken: { type: 'string', minLength: 1 },
        tokenExpiration: { type: 'string', minLength: 1 },
        refreshToken: { type: 'string', minLength: 1 },
      },
    };
  }
}
