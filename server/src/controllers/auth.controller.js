// server/src/controllers/auth.controller.js

import { authService } from '../services/auth.service.js';

export const authController = {
  // Get user profile
  async getProfile(req, res) {
    const data = await authService.getUserProfile(req.user.userId);
    return res.status(200).json({
      status: 'success',
      ...data,
    });
  },

  async login(req, res) {
    const data = await authService.login(req.body);
    return res.status(200).json({
      status: 'success',
      ...data,
    });
  },

  async register(req, res) {
    const data = await authService.register(req.body);
    return res.status(201).json({
      status: 'success',
      ...data,
    });
  },
};
