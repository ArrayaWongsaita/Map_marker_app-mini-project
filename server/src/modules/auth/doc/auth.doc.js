// src/modules/auth/doc/auth.doc.js

import { OpenAPIRegistry } from '@asteasolutions/zod-to-openapi';
import {
  signinRequestSchema,
  signupRequestSchema,
} from '../dto/request.dto.js';

export const authRegistry = new OpenAPIRegistry();

// signup
authRegistry.registerPath({
  method: 'post',
  path: '/auth/signup',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: signupRequestSchema,
        },
      },
    },
  },
  responses: {},
});

// signin
authRegistry.registerPath({
  method: 'post',
  path: '/auth/signin',
  tags: ['Auth'],
  request: {
    body: {
      content: {
        'application/json': {
          schema: signinRequestSchema,
        },
      },
    },
  },
  responses: {},
});

authRegistry.register('Signup Request', signupRequestSchema);
authRegistry.register('Signin Request', signinRequestSchema);
