const allRoles = {
  user: ['verifyPhone', 'verifyEmail', 'getMyProfile', 'updateProfile', 'manageCart', 'createOrder'],
  admin: [
    'getMyProfile',
    'updateProfile',
    'getDashboard',
    'getUsers',
    'manageUsers',
    'getProducts',
    'manageProducts',
    'getCampaigns',
    'manageCampaigns',
    'manageCampaignPrizes',
    'manageCampaignNotes',
    'manageWinners',
    'getOrder',
    'getPayment',
    'getFeedback',
  ],
};

const roles = Object.keys(allRoles);
const roleRights = new Map(Object.entries(allRoles));

module.exports = {
  roles,
  roleRights,
};
