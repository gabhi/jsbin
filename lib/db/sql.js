module.exports = {
  getBin: 'SELECT * from SANDBOX where url=? and revision=?',
  getLatestBin: 'SELECT * from SANDBOX where url=? ORDER BY revision DESC LIMIT 1'
};