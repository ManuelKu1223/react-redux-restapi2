import NotFound from './NotFound';
import Access from './Access';
import Challenges from './Challenges';
import MyChallenges from './MyChallenges';
import UserProfile from './UserProfile';
import PrivateProfile from './PrivateProfile';
import Ranking from './Ranking';
import Notifications from './Notifications';
import PrivateProfileEdit from '../routes/PrivateProfile/components/components/PrivateProfileEdit'

export const BASEROUTE = '/';
export const ROUTE_MAIN_PAGE = `${BASEROUTE}`;

export const ROUTE_LOGIN = '/access';
export const ROUTE_LOGOUT = '/logout';
export const ROUTE_CHALLENGE = '/challenge';
export const ROUTE_MYCHALLENGE = '/mychallenge';
export const ROUTE_PUBLIC_PROFILE = '/profile';
export const ROUTE_PRIVATE_PROFILE = '/userprofile';
export const ROUTE_RANKING = '/ranking';
export const ROUTE_NOTIFICATION = '/notification';
export const ROUTE_PRIVATE_PROFILE_EDIT = '/profileEdit';

export const routes = [
  {
    path: BASEROUTE,
    component: Challenges,
    exact: true,
    footer: true,
  },
  {
    path: ROUTE_LOGIN,
    component: Access,
    exact: false,
    footer: false,
    ignoreSession: true,
  },
  {
    path: ROUTE_MYCHALLENGE,
    component: MyChallenges,
    exact: false,
    footer: true,
  },
  {
    path: ROUTE_PUBLIC_PROFILE,
    component: UserProfile,
    exact: false,
    footer: false,
  },
  {
    path: ROUTE_PRIVATE_PROFILE,
    component: PrivateProfile,
    exact: false,
    footer: true,
  },
  {
    path: ROUTE_PRIVATE_PROFILE_EDIT,
    component: PrivateProfileEdit,
    exact: false,
    footer: true,
  },
  {
    path: ROUTE_RANKING,
    component: Ranking,
    exact: false,
    footer: true,
  },
  {
    path: ROUTE_NOTIFICATION,
    component: Notifications,
    exact: false,
    footer: true,
  },
  {
    component: NotFound,
    footer: false,
  },
];
