/*jslint es6 */
const app = require('./controllers');
const PORT = 3008;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
