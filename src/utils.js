import { robotMessageAction } from './actions';
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from 'firebase/auth';
import { app } from './firebase';

export function clearRobotMessage() {
  setTimeout(() => {
    robotMessageAction('');
  }, 3000);
}

export const fetchUserRegistration = async ({ email, password }) => {
  const auth = getAuth(app);
  console.log('auth', auth);

  const userCredential = await createUserWithEmailAndPassword(
    auth,
    email,
    password
  );
  console.log('userCredential', userCredential);
  return userCredential.user;
};

export const fetchUser = async (email, password) => {
  const auth = getAuth(app);

  const userCredential = await signInWithEmailAndPassword(
    auth,
    email,
    password
  );
  return userCredential.user;
};
