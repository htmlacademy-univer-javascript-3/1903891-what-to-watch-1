import {internet} from 'faker';

export const makeFakeUser = () => ({
  avatarUrl: internet.avatar(),
});
