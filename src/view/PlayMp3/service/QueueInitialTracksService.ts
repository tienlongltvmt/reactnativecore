import TrackPlayer, {Track} from 'react-native-track-player';

import playlistData from './playlist.json';

export const QueueInitialTracksService = async (): Promise<void> => {
  await TrackPlayer.add([...(playlistData as Track[])]);
};
