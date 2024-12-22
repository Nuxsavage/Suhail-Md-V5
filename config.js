const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="saimsamsun789@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || ""
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || ""

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/SuhailTechInfo/Suhail-Md";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://github.com/SuhailTechInfo/Suhail-Md/blob/main/lib/assets/suhail.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "༒SAVAGE༒" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2348125642416";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "text"  // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_38_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMCxcbiAgICAgICAgMTYsXG4gICAgICAgIDU5LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQzLFxuICAgICAgICA0NyxcbiAgICAgICAgNTYsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTU2LFxuICAgICAgICA2MSxcbiAgICAgICAgMjI3LFxuICAgICAgICAxMzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTIxLFxuICAgICAgICAxMjAsXG4gICAgICAgIDU0LFxuICAgICAgICA0OSxcbiAgICAgICAgMTE0LFxuICAgICAgICA0MCxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDkzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDY3LFxuICAgICAgICA3NyxcbiAgICAgICAgMCxcbiAgICAgICAgMjE5LFxuICAgICAgICA4NFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMyxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMjIzLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjMzLFxuICAgICAgICAyMjQsXG4gICAgICAgIDEzLFxuICAgICAgICAxNDcsXG4gICAgICAgIDI3LFxuICAgICAgICAxOCxcbiAgICAgICAgNzQsXG4gICAgICAgIDgzLFxuICAgICAgICAxMDksXG4gICAgICAgIDI1MSxcbiAgICAgICAgNDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTM2LFxuICAgICAgICA2NCxcbiAgICAgICAgNjUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTA1LFxuICAgICAgICAyMjQsXG4gICAgICAgIDE0LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDgsXG4gICAgICAgIDU3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTIxLFxuICAgICAgICA4MSxcbiAgICAgICAgMjA5LFxuICAgICAgICA1MyxcbiAgICAgICAgMjksXG4gICAgICAgIDI0MCxcbiAgICAgICAgMzgsXG4gICAgICAgIDYwLFxuICAgICAgICAxNjgsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTkzLFxuICAgICAgICAyMzksXG4gICAgICAgIDg4LFxuICAgICAgICA0MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxOTgsXG4gICAgICAgIDk2LFxuICAgICAgICAyMjksXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTAsXG4gICAgICAgIDEwNixcbiAgICAgICAgMjU1LFxuICAgICAgICAxMSxcbiAgICAgICAgMTM5LFxuICAgICAgICA4MFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxODMsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODcsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTQ5LFxuICAgICAgICAyMTQsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTMwLFxuICAgICAgICAxMDIsXG4gICAgICAgIDg1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyOSxcbiAgICAgICAgMjM1LFxuICAgICAgICA0NCxcbiAgICAgICAgNjcsXG4gICAgICAgIDg0LFxuICAgICAgICAyMjEsXG4gICAgICAgIDQwLFxuICAgICAgICA2MyxcbiAgICAgICAgMTU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDg5LFxuICAgICAgICA4NSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNDQsXG4gICAgICAgIDE4MixcbiAgICAgICAgMzRcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDg4LFxuICAgICAgICA2MSxcbiAgICAgICAgNzcsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTc3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDYzLFxuICAgICAgICAxOTgsXG4gICAgICAgIDIyMixcbiAgICAgICAgNzYsXG4gICAgICAgIDI0LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMyxcbiAgICAgICAgMTQzLFxuICAgICAgICAzMCxcbiAgICAgICAgMjUxLFxuICAgICAgICA5MyxcbiAgICAgICAgMjUwLFxuICAgICAgICA0OCxcbiAgICAgICAgOTIsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjA0LFxuICAgICAgICA1MyxcbiAgICAgICAgMjM2LFxuICAgICAgICAxMDUsXG4gICAgICAgIDEwNyxcbiAgICAgICAgNDAsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDc2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAyMzcsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMjQsXG4gICAgICAgIDc5LFxuICAgICAgICAzLFxuICAgICAgICAxNjgsXG4gICAgICAgIDkzLFxuICAgICAgICAyNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNTksXG4gICAgICAgIDIsXG4gICAgICAgIDE5OCxcbiAgICAgICAgNTksXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAxNTYsXG4gICAgICAgIDExMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDUyLFxuICAgICAgICAyMixcbiAgICAgICAgMjUwLFxuICAgICAgICA4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE3NCxcbiAgICAgICAgODcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxNzksXG4gICAgICAgIDM2LFxuICAgICAgICAxNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDIyMCxcbiAgICAgICAgICA0NCxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE1MixcbiAgICAgICAgICA5OSxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAxNDgsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDIzNixcbiAgICAgICAgICAyMzYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEyNyxcbiAgICAgICAgICA1LFxuICAgICAgICAgIDYsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDE2OCxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxLFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgNzhcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDIxLFxuICAgICAgICAgIDEwNixcbiAgICAgICAgICAxMDYsXG4gICAgICAgICAgMTExLFxuICAgICAgICAgIDExNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTk2LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNixcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDI1MixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMSxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDEyNlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE4MSxcbiAgICAgICAgMTE1LFxuICAgICAgICAyNTAsXG4gICAgICAgIDkxLFxuICAgICAgICA4MCxcbiAgICAgICAgNTEsXG4gICAgICAgIDI3LFxuICAgICAgICAxMDIsXG4gICAgICAgIDM0LFxuICAgICAgICAxNzIsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMCxcbiAgICAgICAgMTI1LFxuICAgICAgICAzOCxcbiAgICAgICAgODcsXG4gICAgICAgIDM2LFxuICAgICAgICAyNixcbiAgICAgICAgMTc5LFxuICAgICAgICA3MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDQ5LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNTUsXG4gICAgICAgIDk1LFxuICAgICAgICA3LFxuICAgICAgICAyMjksXG4gICAgICAgIDkyLFxuICAgICAgICAxMTEsXG4gICAgICAgIDI0OCxcbiAgICAgICAgNjksXG4gICAgICAgIDIxNixcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTcsXG4gICAgICAgIDExNCxcbiAgICAgICAgMjEsXG4gICAgICAgIDE3NixcbiAgICAgICAgODIsXG4gICAgICAgIDIzLFxuICAgICAgICAxMTMsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDk1LFxuICAgICAgICA2MCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNDksXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTYyLFxuICAgICAgICAzMSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMDMsXG4gICAgICAgIDUxLFxuICAgICAgICAxNjUsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjAsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTI0LFxuICAgICAgICA2OCxcbiAgICAgICAgMjAsXG4gICAgICAgIDEzNixcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxNTgsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwieWk0OS9qLzU1R2VDM2lxaDJNaTVhK3VoOVdwbEw0TzdPL0VQd2hJaUpkdz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiOUowSjJSbGJUVGFmNnA2eXF5VGpxd1wiLFxuICBcInBob25lSWRcIjogXCJjYjQ3ZmIzZC1hOWNhLTQ1Y2YtYjhkOC1mMDY1NzQyMzY4YmRcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgODQsXG4gICAgICAyNixcbiAgICAgIDE2NCxcbiAgICAgIDI0MSxcbiAgICAgIDExNyxcbiAgICAgIDIwLFxuICAgICAgMjEwLFxuICAgICAgMTg5LFxuICAgICAgMTQwLFxuICAgICAgMTUzLFxuICAgICAgNzYsXG4gICAgICA5OSxcbiAgICAgIDIyMCxcbiAgICAgIDI1MCxcbiAgICAgIDE0OSxcbiAgICAgIDI0MyxcbiAgICAgIDc3LFxuICAgICAgMjI4LFxuICAgICAgMTkwLFxuICAgICAgMTUyXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDM2LFxuICAgICAgMjU1LFxuICAgICAgMTIwLFxuICAgICAgMjQzLFxuICAgICAgODMsXG4gICAgICAxNjksXG4gICAgICAyNTEsXG4gICAgICA1NixcbiAgICAgIDEwLFxuICAgICAgMTA4LFxuICAgICAgMjE3LFxuICAgICAgMTUxLFxuICAgICAgMjE0LFxuICAgICAgMTE4LFxuICAgICAgNzksXG4gICAgICAyMjEsXG4gICAgICAyMjksXG4gICAgICAxMjAsXG4gICAgICA2MixcbiAgICAgIDM5XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIkFEQUFaVjZTXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ4MTI1NjQyNDE2Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX+C8kltOVVggU0FWQUdFXeC8klwiLFxuICAgIFwibGlkXCI6IFwiMTU0NTcyMDgxMzY1MTIxOjk3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ09TVTNPRUhFS2U1b2JzR0dBVWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiM2c5a3p5bHpQSFliUWpBcmpkM2hYUzlOWlhFYSt3U1huUXpEaWJRT05Saz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJ1QzIxc2NDTUtRendyQThpbG1rdDh2VlNYbEpJYVkvR3I5QXE0Nzc4WVhXSnZZVTFMd0tmZnI5UXA2THlnbWV2YnlseDJ4QUhyU0NIU204VURtemdDZz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJsNmZDYkozdlRMWmdOVVA4VGhLanJUdURNcG9HTkpTUS9GdTVvc1NnTmlFaUxXdzVwYkVyeTJUUlptYzFQTmg4WHVIN21qcVdFVUJQV1pxS2ptd3Vndz09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ4MTI1NjQyNDE2Ojk3QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMjIyLFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMDcsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTE1LFxuICAgICAgICAgIDYwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICA2NixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0MyxcbiAgICAgICAgICAxNDEsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICA0NyxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDEsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDI1MSxcbiAgICAgICAgICA0LFxuICAgICAgICAgIDE1MSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgMTIsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjVcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcInNtYmFcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczNDg5MjcxNCxcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUJXOVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBQlc5Lmpzb24iOiAie1wia2V5RGF0YVwiOlwicFRFZFNLZ2pQTWlOV1h5RnRMb0dKaW1talRiUlVLYTcyZzdWVUpCbEJiOD1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjoyMDgzOTgxOTIzLFwiY3VycmVudEluZGV4XCI6MSxcImRldmljZUluZGV4ZXNcIjpbMF19LFwidGltZXN0YW1wXCI6XCIxNzM0NzM1MjQyNzQyXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "༒NUX SAVAGE༒",
  packname: process.env.PACK_NAME || "༒NUX SAVAGE༒",
  botname : process.env.BOT_NAME  || "༒SAVAGE༒",
  ownername:process.env.OWNER_NAME|| "༒NUX SAVAGE༒",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
