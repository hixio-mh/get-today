const core = require("@actions/core");
const github = require("@actions/github");

try {
  const today = new Date().toDateString();
//   const timeString = ('0' + today.getDate()).slice(-2) + '/'
//                    + ('0' + (today.getMonth()+1)).slice(-2) + '/'
//                    + today.getFullYear();
  core.setOutput("today", today);
} catch (error) {
  core.setFailed(error.message);
}
