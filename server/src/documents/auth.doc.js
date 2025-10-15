// server/src/documents/auth.doc.js

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { loginRequestDto, registerRequestDto } from '../dto/auth.dto.js';

export const authRegistry = new OpenAPIRegistry();

// get profile
authRegistry.registerPath({
  method: 'get',
  path: '/auth/profile',
  tags: ['Auth'],
  security: [{ BearerAuth: [] }],
  responses: {},
});

// login
authRegistry.registerPath({
  method: 'post',
  path: '/auth/login',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: loginRequestDto,
        },
      },
    },
  },
  responses: {},
});

authRegistry.register('LoginRequest', loginRequestDto);

// register
authRegistry.registerPath({
  method: 'post',
  path: '/auth/register',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: registerRequestDto,
        },
      },
    },
  },
  responses: {},
});

authRegistry.register('RegisterRequest', registerRequestDto);
