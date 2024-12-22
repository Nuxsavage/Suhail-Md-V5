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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_18_11_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQ4LFxuICAgICAgICA2MCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjE3LFxuICAgICAgICAxOSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgNzMsXG4gICAgICAgIDEyNCxcbiAgICAgICAgNyxcbiAgICAgICAgMjE3LFxuICAgICAgICA3LFxuICAgICAgICAxNDEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTksXG4gICAgICAgIDYwLFxuICAgICAgICAzMyxcbiAgICAgICAgNTUsXG4gICAgICAgIDE3LFxuICAgICAgICA3NyxcbiAgICAgICAgMjMxLFxuICAgICAgICA2OSxcbiAgICAgICAgNjMsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTU1LFxuICAgICAgICA1OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDg2XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDEyMyxcbiAgICAgICAgMjQ0LFxuICAgICAgICAxMjcsXG4gICAgICAgIDg4LFxuICAgICAgICAxNTcsXG4gICAgICAgIDU1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA1OCxcbiAgICAgICAgMTY1LFxuICAgICAgICA3MSxcbiAgICAgICAgNjUsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0LFxuICAgICAgICAzNSxcbiAgICAgICAgMTk4LFxuICAgICAgICAzMSxcbiAgICAgICAgMjEzLFxuICAgICAgICA3OSxcbiAgICAgICAgODIsXG4gICAgICAgIDIzNixcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMTQsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTY4LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTUzLFxuICAgICAgICAxOTIsXG4gICAgICAgIDk0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAzMixcbiAgICAgICAgMTY5LFxuICAgICAgICA1MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAxMjcsXG4gICAgICAgIDY2LFxuICAgICAgICAzMCxcbiAgICAgICAgMTksXG4gICAgICAgIDU5LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICA4NSxcbiAgICAgICAgMTE1LFxuICAgICAgICAxMjQsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTUxLFxuICAgICAgICAyNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMTMsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjI4LFxuICAgICAgICAxODMsXG4gICAgICAgIDYsXG4gICAgICAgIDEzLFxuICAgICAgICAxNjEsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY5LFxuICAgICAgICAxLFxuICAgICAgICAyNTEsXG4gICAgICAgIDg5XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTQsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTczLFxuICAgICAgICA2NCxcbiAgICAgICAgNjIsXG4gICAgICAgIDExMCxcbiAgICAgICAgNTksXG4gICAgICAgIDE0NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAxMjIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTg1LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEwNixcbiAgICAgICAgMTAzLFxuICAgICAgICA4MixcbiAgICAgICAgMjA3LFxuICAgICAgICA4OSxcbiAgICAgICAgMTI4LFxuICAgICAgICA4NSxcbiAgICAgICAgMTU1LFxuICAgICAgICA1MCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNzAsXG4gICAgICAgIDgzLFxuICAgICAgICA3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxMDdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTksXG4gICAgICAgIDEsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNTAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNCxcbiAgICAgICAgNzgsXG4gICAgICAgIDc1LFxuICAgICAgICAyMTUsXG4gICAgICAgIDg2LFxuICAgICAgICAxODksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA3NixcbiAgICAgICAgMjE4LFxuICAgICAgICAyMjgsXG4gICAgICAgIDY5LFxuICAgICAgICAzMyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNzcsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTI3LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTU0LFxuICAgICAgICAxNTAsXG4gICAgICAgIDk2LFxuICAgICAgICA4OCxcbiAgICAgICAgMTIyLFxuICAgICAgICAxODAsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjYsXG4gICAgICAgIDE5NSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDE1MSxcbiAgICAgICAgNDEsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzYsXG4gICAgICAgIDIsXG4gICAgICAgIDY5LFxuICAgICAgICAxNTcsXG4gICAgICAgIDExNixcbiAgICAgICAgMTg1LFxuICAgICAgICAyNCxcbiAgICAgICAgMTk3LFxuICAgICAgICA3MSxcbiAgICAgICAgMTQwLFxuICAgICAgICAyMVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNDYsXG4gICAgICAgICAgNDQsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAxLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDIzNCxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgMTAyLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICAxNTksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgNTksXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDIxMSxcbiAgICAgICAgICAxNTAsXG4gICAgICAgICAgOTBcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTA1LFxuICAgICAgICAgIDIzOSxcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgMjMzLFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAzNCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgNTYsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICA0MlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfSxcbiAgICBcInNpZ25hdHVyZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDgzLFxuICAgICAgICAxNTQsXG4gICAgICAgIDE5OCxcbiAgICAgICAgODUsXG4gICAgICAgIDE5MCxcbiAgICAgICAgNTAsXG4gICAgICAgIDEzMixcbiAgICAgICAgMTg0LFxuICAgICAgICAxNjAsXG4gICAgICAgIDY4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTQxLFxuICAgICAgICAxMjksXG4gICAgICAgIDc1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDIxOSxcbiAgICAgICAgMTEwLFxuICAgICAgICAxMzIsXG4gICAgICAgIDkwLFxuICAgICAgICAxMDgsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDg3LFxuICAgICAgICAyMDcsXG4gICAgICAgIDE1NSxcbiAgICAgICAgMjI0LFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAyMTUsXG4gICAgICAgIDkxLFxuICAgICAgICAxNjcsXG4gICAgICAgIDQ1LFxuICAgICAgICAxOTYsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjIsXG4gICAgICAgIDEyOCxcbiAgICAgICAgMjE1LFxuICAgICAgICAxNixcbiAgICAgICAgMjQ0LFxuICAgICAgICA1NyxcbiAgICAgICAgOTQsXG4gICAgICAgIDIzNixcbiAgICAgICAgODgsXG4gICAgICAgIDEyLFxuICAgICAgICA2MyxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMjQsXG4gICAgICAgIDY0LFxuICAgICAgICA1OCxcbiAgICAgICAgNDUsXG4gICAgICAgIDMwLFxuICAgICAgICAxNzEsXG4gICAgICAgIDExMixcbiAgICAgICAgMTk0LFxuICAgICAgICAyMjksXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTMzLFxuICAgICAgICAxODQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMTc5LFxuICAgICAgICAzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxODcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiYWVhSUxJeWppNlNHc2FxbW4xUE84NWRtRS9HdjNlOXpTbE1ZZmMzS3ZLUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMyLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMyLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiaVh2MU12dnNSbU8td2ZmRTZrOGVfd1wiLFxuICBcInBob25lSWRcIjogXCI1OTViOWJiMi0zNjg1LTRlYzQtODY2Zi01MTU3ZjFkODc2MmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNjksXG4gICAgICA5NCxcbiAgICAgIDIzMSxcbiAgICAgIDE2MCxcbiAgICAgIDIxOCxcbiAgICAgIDI2LFxuICAgICAgNTcsXG4gICAgICAxNDcsXG4gICAgICAyMjAsXG4gICAgICAxNDcsXG4gICAgICAyMjEsXG4gICAgICAxNjgsXG4gICAgICAxMDQsXG4gICAgICAyNTQsXG4gICAgICA4NixcbiAgICAgIDE2MixcbiAgICAgIDExMSxcbiAgICAgIDI0NCxcbiAgICAgIDMwLFxuICAgICAgMTZcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjAwLFxuICAgICAgNTQsXG4gICAgICAyLFxuICAgICAgMTA3LFxuICAgICAgMjQ3LFxuICAgICAgODIsXG4gICAgICAxODMsXG4gICAgICAyNyxcbiAgICAgIDE4MixcbiAgICAgIDYzLFxuICAgICAgMTc4LFxuICAgICAgMTIsXG4gICAgICAxMSxcbiAgICAgIDIwOCxcbiAgICAgIDE2MyxcbiAgICAgIDI1LFxuICAgICAgMTQ4LFxuICAgICAgMTYyLFxuICAgICAgODMsXG4gICAgICAxODVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiVkVRWkRBRlFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjU2NDI0MTY6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJf4LySW05VWCBTQVZBR0Vd4LySXCIsXG4gICAgXCJsaWRcIjogXCIxNTQ1NzIwODEzNjUxMjE6OTZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVM09FSEVNcXNvYnNHR0FRZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZzlrenlselBIWWJRakFyamQzaFhTOU5aWEVhK3dTWG5RekRpYlFPTlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcInVMa2lrc05BdjlBN2tZTFVINGl3SjVESzlxLzdXOVcvSEJQL2dzZzZIZDM2SnRKd20vU3dqNTBXTmlCWDdwMzNCTTM5ZFovMzVLcmxRYlhmbEd3OEJnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIk5kVXV5WGErRWhFMDRJUXV3MTI1OEU3NlNkdkJ5Q29iR2NXM0R0SFRyeUplYk03SUpPZzRJNFFLWXNBQVpHS1ZxS01PdWtQclM3L2FHRTNtR25TRkN3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU2NDI0MTY6OTZAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODkxMDg3LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlc5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwVEVkU0tnalBNaU5XWHlGdExvR0ppbW1qVGJSVUthNzJnN1ZVSkJsQmI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODM5ODE5MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ3MzUyNDI3NDJcIn0iCn0="  // PUT your SESSION_ID 


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
