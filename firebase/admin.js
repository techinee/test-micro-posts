
var admin = require("firebase-admin");

var serviceAccount = require("./test-micro-posts-48cdf-firebase-adminsdk-jb8ym-fd740e4ba3.json");

admin.initializeApp({
  credential: admin.credential.cert(serviceAccount)
});
const DB = admin.firestore();
module.exports = {admin,DB};