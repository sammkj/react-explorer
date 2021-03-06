import SignUp from '../components/sign-up/index.jsx';
import { useDeps } from 'react-simple-di';
import { composeWithTracker, composeAll } from 'react-komposer';

export const composer = ({ context }, onData) => {
  const { LocalState } = context();
  const error = LocalState.get('SAVING_ERROR');
  onData(null, { error });
};

export const depsMapper = (context, actions) => ({
  signUp: actions.user.signUp,
  context: () => context
});

export default composeAll(
  composeWithTracker(composer),
  useDeps(depsMapper)
)(SignUp);
