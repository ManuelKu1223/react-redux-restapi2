// API DEFINITION -> https://app.swaggerhub.com/apis-docs/GlobalIncubator/Govairal/1.0.1

export const API_ENDPOINTS = {
  // user
  login: 'users/signin',
  signup: 'users/signup',
  logout: 'users/logout',
  userSession: 'users/session',
  recoverPassword: email => `users/recoveryPassword/${email}`,
  getUsers: 'users',
  updateUser: 'users',
  getUserById: userId => `users/${userId}`,
  // terms
  getTerms: 'users/terms',
  setTerms: 'users/terms',
  // challenges
  createChallenge: 'challenges',
  getChallenges: 'challenges',
  updateChallenge: 'challenges',
  getChallengeById: challengeId => `challenges/${challengeId}`,
  // vairals
  getChallengeVairals: challengeId => `challenges/${challengeId}/vairals`,
  createChallengeVairal: challengeId => `challenges/${challengeId}/vairals`,
  getUserVairals: userId => `users/${userId}/vairals`,
  updateVairalStatus: vairalId => `vairals/${vairalId}/status`,
  setVairalPosition: (vairalId, position) => `vairals/${vairalId}/position/${position}`,
  getVairal: vairalId => `vairals/${vairalId}`,
  getVairalLikesByUser: (vairalId, userId) => `vairals/${vairalId}/users/${userId}/likes`,
  vairalLikeAction: vairalId => `vairals/${vairalId}/likes`,

};

export default API_ENDPOINTS;
