import { uploadPhoto, createUser } from './utils';

export default function handleProfileSignup() {
  const para = uploadPhoto();
  const para2 = createUser();

  return Promise.all([para, para2]).then((value) => {
    console.log(`${value[0].body} ${value[1].firstName} ${value[1].lastName}`);
  })
    .catch(() => { console.log('Signup system offline'); });
}
