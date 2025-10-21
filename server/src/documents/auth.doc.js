import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import { loginRequestDto, registerRequestDto } from '../dto/auth.dto.js';

export const authRegistry = new OpenAPIRegistry();
// get profile
authRegistry.registerPath({
  method: 'get',
  path: '/auth/profile',
  tags: ['Auth'],
  security: [{ BearerAuth: [] }],
  responses: {
    200: {},
  },
});

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
  responses: {
    200: {},
  },
});

authRegistry.register('loginRequest', loginRequestDto);

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
  responses: {
    200: {},
  },
});

authRegistry.register('registerRequest', registerRequestDto);
