// src/modules/auth/auth.controller.js

import { authService } from './auth.service.js';

export const authController = {
  // Signup user
  async signup(req, res) {
    const data = await authService.signup(req.body);
    return res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data,
    });
  },

  async signin(req, res) {
    const data = await authService.signin(req.body);
    return res.json({
      status: 'success',
      data,
    });
  },
  async getProfile(req, res) {
    const data = await authService.getUserProfile(req.user.id);
    return res.json({
      status: 'success',
      data,
    });
  },
};
