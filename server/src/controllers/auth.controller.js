import { authService } from '../services/auth.service.js';

export const authController = {
  async getProfile(req, res) {
    const data = await authService.getUserProfile(req.user.userId);
    res.json({
      status: 'success',
      ...data,
    });
  },

  async login(req, res) {
    const data = await authService.login(req.body);
    res.json({
      status: 'success',
      ...data,
    });
  },

  async register(req, res) {
    const data = await authService.register(req.body);
    res.status(201).json({
      status: 'success',
      message: 'User created successfully',
      data,
    });
  },
};
