import {IMusic} from 'src/interface/Music.interface';
import {MyReduxAction, PayloadList} from '../MyAction.Type';

type IMusicStates = {
  itemSelectedMusic?: IMusic;
};
const initialStates: IMusicStates = {};
const MusicReducer = (
  state: IMusicStates = initialStates,
  action: MyReduxAction,
) => {
  switch (action.type) {
    case 'SET/ITEM_Music': {
      const payload = action.payload as PayloadList['SET/ITEM_Music'];
      return {
        ...state,
        itemSelectedMusic: payload.item,
      };
    }
    default:
      return {
        ...state,
      };
  }
};
export default MusicReducer;
