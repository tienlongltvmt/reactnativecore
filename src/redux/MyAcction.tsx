import {Action, bindActionCreators, Dispatch} from 'redux';
import {PayloadList} from './MyAction.Type';

export function createAction<Payload extends keyof PayloadList>(
  screen: Payload,
  params?: PayloadList[Payload],
) {
  return {
    type: screen,
    payload: params,
  };
}

export const mapDispatchToProps = (dispatch: Dispatch<Action>) =>
  bindActionCreators(
    {
      dispatchAction: createAction,
    },
    dispatch,
  );