import * as bcrypt from 'bcryptjs';

const USER = [
  {
    email: 'user@weather.com',
    password: '$2a$10$/ggSA40UKxJRDhoFvz1V9Os/oOE/h.dOZ8y6UYIoitSjWebRxGIQO',
    name: 'Default User',
    id: 1,
  },
];

export const login = (email: string, password: string) => {
  return new Promise((resolve, reject) => {
    const user = USER.find((el) => el.email === email);
    if (!user) {
      reject({ logged: false, message: 'User not found, try again' });
    } else {
      bcrypt.compare(password, user.password, function (err, res) {
        if (res) {
          resolve({ logged: true, message: 'User logged', user });
        } else {
          reject({
            logged: false,
            message: 'Incorrect password',
          });
        }
      });
    }
  });
};
