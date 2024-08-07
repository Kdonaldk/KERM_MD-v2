//#ENJOY
const fs = require("fs-extra");
if (fs.existsSync(".env"))
  require("dotenv").config({ path: __dirname + "/.env" });
global.audio = "";
global.video = "";
global.port = process.env.PORT;
global.appUrl = process.env.APP_URL || "";
global.email = "Kermmd237@gmail.com";
global.location = "Douala, Cameroun";
global.mongodb = process.env.MONGODB_URI || "";
global.allowJids = process.env.ALLOW_JID || "null";
global.blockJids = process.env.BLOCK_JID || "null";
global.DATABASE_URL = process.env.DATABASE_URL || "";
global.timezone = process.env.TZ || process.env.TIME_ZONE || "Africa/Douala";
global.github = process.env.GITHUB || "https://github.com/Kermhack/KERM_MD-v2";
global.gurl = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.website = process.env.GURL || "https://whatsapp.com/channel/0029Vafn6hc7DAX3fzsKtn45";
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://telegra.ph/file/40ffc2a288542560c887c.jpg";
global.devs = "https://wa.me/237650564445 , https://wa.me/237656520674";
global.sudo = process.env.SUDO || "237650564445";
global.owner = process.env.OWNER_NUMBER || "237656520674";
global.style = process.env.STYLE || "3";
global.gdbye = process.env.GOODBYE || "false";
global.wlcm = process.env.WELCOME || "false";
global.warncount = process.env.WARN_COUNT || 3;
global.disablepm = process.env.DISABLE_PM || "false";
global.disablegroup = process.env.DISABLE_GROUPS || "false",
global.MsgsInLog = process.env.MSGS_IN_LOG || "false";
global.userImages = process.env.USER_IMAGES || "https://telegra.ph/file/04f4817f02976e2e5c828.jpg";
global.waPresence = process.env.WAPRESENCE || "available";
global.readcmds = process.env.READ_COMMAND || "true";
global.readmessage = process.env.READ_MESSAGE || "false";
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "";
global.read_status = process.env.AUTO_READ_STATUS || "true";
global.save_status = process.env.AUTO_SAVE_STATUS || "false";
global.save_status_from = process.env.SAVE_STATUS_FROM || "";
global.read_status_from = process.env.READ_STATUS_FROM || "";

global.api_smd = "https://api-smd-1.vercel.app";
global.scan = "https://secret-garden-43998-4daad95d4561.herokuapp.com/";

global.SESSION_ID =
  process.env.SESSION_ID ||
  "eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiR0U5bEdWNzBTV3QzUmpDTmsvUFEwYUdqcCt0YW1MNVRSYk9mQ0YrZnhWWT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiOFpvT2ZtbjdJOUs3ZXZVRkh3VkhRMDRTelFwSTBTOUIvVndPczRpWUR6bz0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJlQm8yRzNWdHJiS2o4a3ozaExwUFBsa0R5azc4QkZYYTJRQzlZY0l0N0hRPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJiODQ0RkIvT3FkYVl2NVFEQUtxVmMrUHVsZ0JPV0VpMXViTnZ3SHlkS1hzPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImdBSThrT2k1d0pQcGVlcTJUa1dJc2YreXpoc25uQzhpckt3c0V2R2oyRmM9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImZ5QUdEb2ovSzM0RTl0Y1BpUUxmQ3lWdGZOcVJiK2tqM1dpTDdieVgyeUE9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0NpNVlmcEFpYWhrWFh0RS9rMXBLRytiNnRFdjBOVElFaXY3NGZxQSswRT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoici84SFRSNWxzRUFmWkxGTWRHVDN4R3lnMDBGeWRLc1U0emUrb0hHVUsxND0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkEvY3FpZXhDUmE2czZ1dmpDQW9iYW9xVGFXbXp0VGE4VnpEUzk5S1RIRlFVNkpDMzNnQytsTm1aLzNnRHlGb3pESUFTOEo5dU93YllaeHYvR0tjT2hBPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MjA4LCJhZHZTZWNyZXRLZXkiOiJTR1IweVJyRnBGbVFIcHozZG05SFNnNEVNN3dnZXBUd0lCQWNLaFd2SG5BPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJKdDhLQVlBT1FSdVFjSldVc2NlOWRRIiwicGhvbmVJZCI6IjJiYzNkOTIzLWM1MzctNDNlMi1hZTc2LTg1M2ZhZGJkZTEzMCIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJqV1c5OWpLd09RUFoxb1E2WWhiWFJFckJVT0k9In0sInJlZ2lzdGVyZWQiOmZhbHNlLCJiYWNrdXBUb2tlbiI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IlVWcjJ0LzVmcE9UOU41TTVqalN0aHRGaWV6WT0ifSwicmVnaXN0cmF0aW9uIjp7fSwiYWNjb3VudCI6eyJkZXRhaWxzIjoiQ0txRi81QURFTzJCenJVR0dBRWdBQ2dBIiwiYWNjb3VudFNpZ25hdHVyZUtleSI6IlBtei9tZ3pXQnhtUlUzbFJraW1vVW5tNGV1SlFjdHp0SlBadVpIUTFZU2c9IiwiYWNjb3VudFNpZ25hdHVyZSI6IlYxamRtZ2R1ZlV3ZlowK2pKNmU1L0NiYmhCdnhzc2srbksxUDF1SStwK3lxQngwRnV2Q0VZWjB2b2FpZ1hKQ0w2SkxWN0NQSjgxMTJrTkwrNEx3b0R3PT0iLCJkZXZpY2VTaWduYXR1cmUiOiI3VU9hTFdvcm5mbXJydS94Znl6WG95T2RWdHZLMk9jY1Bsbmt4bm45WkhxYkg0S3pMNTR5Nms2Unl1b3ZhZy9MVDBtT2sxVHBIMWhzaEJiSnF1YWppZz09In0sIm1lIjp7ImlkIjoiMjM3NjU2NTIwNjc0OjE0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiMjAxMzQ0MjI0ODgyNzAwOjE0QGxpZCJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiIyMzc2NTY1MjA2NzQ6MTRAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCVDVzLzVvTTFnY1prVk41VVpJcHFGSjV1SHJpVUhMYzdTVDJibVIwTldFbyJ9fV0sInBsYXRmb3JtIjoiaXBob25lIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJQlE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3MjMwMzk5OTMsImxhc3RQcm9wSGFzaCI6IjFsT1NFSSJ9"
module.exports = {
  menu: process.env.MENU || "1",
  HANDLERS: process.env.PREFIX || ".",
  BRANCH: process.env.BRANCH || "main",
  VERSION: process.env.VERSION || "1.0.0",
  caption: process.env.CAPTION || "BRAND PRODUCT OF KG TECH",
  author: process.env.PACK_AUTHER || "KG TECH",
  packname: process.env.PACK_NAME || "Kerm-MD-V2",
  botname: process.env.BOT_NAME || "𝐊𝐄𝐑𝐌 𝐌𝐃 𝐕𝟐",
  ownername: process.env.OWNER_NAME || "KG TECH",
  errorChat: process.env.ERROR_CHAT || "",
  KOYEB_API: process.env.KOYEB_API || "false",
  REMOVE_BG_KEY: process.env.REMOVE_BG_KEY || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME: process.env.HEROKU_APP_NAME || "",
  antilink_values: process.env.ANTILINK_VALUES || "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,
  aitts_Voice_Id: process.env.AITTS_ID || "37",
  ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY || "",
  WORKTYPE: process.env.WORKTYPE || process.env.MODE || "private",
  LANG: (process.env.THEME || "Kerm-md-v2").toUpperCase(),
};
global.rank = "updated";
global.isMongodb = false;
let file = require.resolve(__filename);
fs.watchFile(file, () => {
  fs.unwatchFile(file);
  console.log(`Update'${__filename}'`);
  delete require.cache[file];
  require(file);
});
