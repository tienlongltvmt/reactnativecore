import {CompositeScreenProps} from '@react-navigation/native';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {I3DProduct} from 'src/interface/3D.interface';

export type RouterParamsList = {
  Splash: undefined;
  Login: undefined;
  Home: undefined;
  MainStack: undefined;
  DownloadSocial: undefined;
  GameNoInternet: undefined;
  Music: undefined;
  DetailMusic: undefined;
  DetailProduct3D: {
    item: I3DProduct;
  };
  ChatBot: undefined;
};

export type RouterModalParamsList = {};
export type RootParamsList = RouterParamsList & RouterModalParamsList;

type MyNavigationProp<ScreenName extends keyof RootParamsList> =
  CompositeScreenProps<NativeStackScreenProps<RootParamsList, ScreenName>, any>;

export type IAppNavigateProps<ScreenName extends keyof RootParamsList> =
  MyNavigationProp<ScreenName> & {
    route: MyNavigationProp<ScreenName>['route'] & {
      params?: RootParamsList[ScreenName];
    };
    navigation: MyNavigationProp<ScreenName>['navigation'];
  };
