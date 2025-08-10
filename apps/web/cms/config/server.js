module.exports = ({ env }) => ({
  host: env('HOST', 'localhost'),
  port: env('PORT', 1338),
});
