const usersRouter = require('express').Router()

const { createUser, getUserById, getUsers, updateUser, deleteUser } = require('./users');
const { validateUser, userIdParams, userExists } = require('./users-util');

usersRouter.post('/', validateUser, createUser);
usersRouter.get('/:id', userIdParams, getUserById);
usersRouter.get('/', getUsers);
usersRouter.put('/:id', userIdParams, validateUser, userExists, updateUser);
usersRouter.delete('/:id', userIdParams, userExists, deleteUser);

module.exports = usersRouter;