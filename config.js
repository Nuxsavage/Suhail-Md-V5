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
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2349067155718,2349114238804";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2349114238804";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_53_11_01_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAxMTQsXG4gICAgICAgIDYyLFxuICAgICAgICAxODQsXG4gICAgICAgIDIxNixcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgODcsXG4gICAgICAgIDMxLFxuICAgICAgICAyNyxcbiAgICAgICAgMTM0LFxuICAgICAgICAxMyxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIwNixcbiAgICAgICAgNjksXG4gICAgICAgIDIxLFxuICAgICAgICAzLFxuICAgICAgICAzNCxcbiAgICAgICAgNDQsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjMxLFxuICAgICAgICA0MCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTYsXG4gICAgICAgIDkyLFxuICAgICAgICAxODUsXG4gICAgICAgIDYyLFxuICAgICAgICA4MCxcbiAgICAgICAgMTIzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDc4XG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk3LFxuICAgICAgICAxMTYsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAyMzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMjA5LFxuICAgICAgICAxNDgsXG4gICAgICAgIDksXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxOTYsXG4gICAgICAgIDExNSxcbiAgICAgICAgOTEsXG4gICAgICAgIDEzMSxcbiAgICAgICAgNzgsXG4gICAgICAgIDY3LFxuICAgICAgICAzNyxcbiAgICAgICAgMTkwLFxuICAgICAgICAxMTYsXG4gICAgICAgIDE1MCxcbiAgICAgICAgMjMsXG4gICAgICAgIDgwLFxuICAgICAgICAzNixcbiAgICAgICAgMTI1LFxuICAgICAgICA3NyxcbiAgICAgICAgNzAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIwNixcbiAgICAgICAgMyxcbiAgICAgICAgNjBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICA4NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDcxLFxuICAgICAgICAxNTcsXG4gICAgICAgIDU2LFxuICAgICAgICAzMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDE0LFxuICAgICAgICAxMyxcbiAgICAgICAgMTg2LFxuICAgICAgICA5OSxcbiAgICAgICAgNzIsXG4gICAgICAgIDEwMixcbiAgICAgICAgMTUxLFxuICAgICAgICAxNjEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMixcbiAgICAgICAgMjQyLFxuICAgICAgICA4OSxcbiAgICAgICAgOTksXG4gICAgICAgIDQzLFxuICAgICAgICAyNDUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTExLFxuICAgICAgICAzOCxcbiAgICAgICAgMTQsXG4gICAgICAgIDcxLFxuICAgICAgICAzNSxcbiAgICAgICAgMTI4LFxuICAgICAgICAxMzcsXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNTUsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMjE0LFxuICAgICAgICA0MixcbiAgICAgICAgMTYzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMTc3LFxuICAgICAgICA1MixcbiAgICAgICAgMjA2LFxuICAgICAgICAxMDEsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjM3LFxuICAgICAgICA2MixcbiAgICAgICAgMTAsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTcxLFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2MSxcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MCxcbiAgICAgICAgNjIsXG4gICAgICAgIDE2NixcbiAgICAgICAgNjQsXG4gICAgICAgIDcxLFxuICAgICAgICAxMDcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTM5LFxuICAgICAgICAxOTgsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjM1LFxuICAgICAgICAxMTdcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDY0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDE1MyxcbiAgICAgICAgMjA4LFxuICAgICAgICA0MyxcbiAgICAgICAgNDMsXG4gICAgICAgIDgwLFxuICAgICAgICAyOCxcbiAgICAgICAgMyxcbiAgICAgICAgMTk1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDI1LFxuICAgICAgICAxMDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDgsXG4gICAgICAgIDIzLFxuICAgICAgICAyMzQsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTgyLFxuICAgICAgICAxNzcsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMixcbiAgICAgICAgMjIzLFxuICAgICAgICAyMSxcbiAgICAgICAgMjA1LFxuICAgICAgICAxMjAsXG4gICAgICAgIDU5LFxuICAgICAgICAyMjQsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTc2LFxuICAgICAgICAxMjJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjEyLFxuICAgICAgICA4MSxcbiAgICAgICAgNTIsXG4gICAgICAgIDc5LFxuICAgICAgICAxNDMsXG4gICAgICAgIDEzNyxcbiAgICAgICAgODYsXG4gICAgICAgIDk5LFxuICAgICAgICAxMTUsXG4gICAgICAgIDUsXG4gICAgICAgIDE4MyxcbiAgICAgICAgMjUyLFxuICAgICAgICAyNDAsXG4gICAgICAgIDkxLFxuICAgICAgICAyMyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTIyLFxuICAgICAgICA5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTM3LFxuICAgICAgICAxNjUsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMTAzLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIsXG4gICAgICAgIDQ4LFxuICAgICAgICAxMzgsXG4gICAgICAgIDEwMFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgODcsXG4gICAgICAgICAgMzAsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDEyMixcbiAgICAgICAgICAzLFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxOCxcbiAgICAgICAgICA0MCxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTY0LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDE1LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAxNjQsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICA5NyxcbiAgICAgICAgICAxNDIsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDUsXG4gICAgICAgICAgMjUsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEsXG4gICAgICAgICAgODRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMjIzLFxuICAgICAgICAgIDMyLFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE0NixcbiAgICAgICAgICAyMDUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE0MCxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgNDEsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDIwMCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDMwLFxuICAgICAgICAgIDIzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICA4NyxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA0OCxcbiAgICAgICAgICA5LFxuICAgICAgICAgIDE3OSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgNzksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDI1MCxcbiAgICAgICAgICAxODAsXG4gICAgICAgICAgMTcyLFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAxMTJcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA3OCxcbiAgICAgICAgMjE2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDIyOSxcbiAgICAgICAgNzgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgMjMsXG4gICAgICAgIDY5LFxuICAgICAgICA4MSxcbiAgICAgICAgMjEsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNzgsXG4gICAgICAgIDI0LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE2NixcbiAgICAgICAgNDUsXG4gICAgICAgIDE2NixcbiAgICAgICAgNzMsXG4gICAgICAgIDEzNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAxNjcsXG4gICAgICAgIDUzLFxuICAgICAgICAxNzQsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMTAsXG4gICAgICAgIDc5LFxuICAgICAgICA1MixcbiAgICAgICAgMjUsXG4gICAgICAgIDE0MixcbiAgICAgICAgODAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgMTQxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTksXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTMyLFxuICAgICAgICAxMzMsXG4gICAgICAgIDExOSxcbiAgICAgICAgNjIsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA2NSxcbiAgICAgICAgNjUsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMTgsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjQ5LFxuICAgICAgICA5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEyMSxcbiAgICAgICAgNTAsXG4gICAgICAgIDQwLFxuICAgICAgICAxMjAsXG4gICAgICAgIDkyLFxuICAgICAgICAxODIsXG4gICAgICAgIDI0NixcbiAgICAgICAgOTgsXG4gICAgICAgIDczLFxuICAgICAgICAyNDEsXG4gICAgICAgIDExXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiQ01qV1EwR01PS1FaNXNIM0xVZ1A3N1dHcklFZUJBQUJhaFJDSGpCZVRpUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW1xuICAgIHtcbiAgICAgIFwia2V5XCI6IHtcbiAgICAgICAgXCJyZW1vdGVKaWRcIjogXCIyMzQ3MDI1MTA5MDczQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCI0NzBENjRDRjQxN0VBQzIzQThBMDEyRjUzMTkwRUE0Q1wiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzA1MDE1NzlcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDYxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDYxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAxLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYXJGQzkyc0hUcTZZT2g0MHJMaHY1d1wiLFxuICBcInBob25lSWRcIjogXCJlY2FjOGQ5Mi1hZTIxLTQyN2EtYWZhOS04MjkxNjkwNDM0NWJcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTA4LFxuICAgICAgMTcsXG4gICAgICAyMTUsXG4gICAgICAxMjcsXG4gICAgICAyMzYsXG4gICAgICAxNzQsXG4gICAgICAxNCxcbiAgICAgIDEsXG4gICAgICAxMSxcbiAgICAgIDE4MixcbiAgICAgIDExNSxcbiAgICAgIDE0MSxcbiAgICAgIDE2OSxcbiAgICAgIDY3LFxuICAgICAgNTksXG4gICAgICAyNTAsXG4gICAgICAzMCxcbiAgICAgIDcwLFxuICAgICAgMTAsXG4gICAgICAxOTBcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0ZXJlZFwiOiB0cnVlLFxuICBcImJhY2t1cFRva2VuXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjcsXG4gICAgICAyMjksXG4gICAgICAyMDcsXG4gICAgICAyNDcsXG4gICAgICAxMTgsXG4gICAgICA1MixcbiAgICAgIDIwMixcbiAgICAgIDIyMyxcbiAgICAgIDE2MixcbiAgICAgIDE3MSxcbiAgICAgIDEyNyxcbiAgICAgIDIxNSxcbiAgICAgIDY4LFxuICAgICAgMTQ4LFxuICAgICAgMTk1LFxuICAgICAgMTEsXG4gICAgICAyMTgsXG4gICAgICAxMDksXG4gICAgICAxOSxcbiAgICAgIDk4XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjhWNVFITEIyXCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ3MDI1MTA5MDczOjJAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE1MTYyOTkxMTMzMTAxODoyQGxpZFwiLFxuICAgIFwibmFtZVwiOiBcIk7MtlXMtljMtiBTzLZBzLZWzLZBzLZHzLZFzLbwn5KZ8J+TjPCfmqlcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNQaXQ0SnNERU1TM2xia0dHQUlnQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcInZuYnFyMXhCajVHbzYxMlFZZTZRUEY1bytTNlFVMHM5R0R0UDBVMFNNajg9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiWXdrOGFINlhsWGphOVFkS2p3YUJHd1diQWlWQitML2oxcXFtSll5bHdNeTc4QWlMcmR0djI0bmpveTV3b2dBNjZBME43TkVnQVRaTE9LWEF0ejMyREE9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiWkJxU1BmeUtYOUMvTWlITHV4MTVDZTdoN2FQOXpjanRzbHZoRUNaSkZ3UmtmbFNvMUJRejVmVDdsaUlDSFltVVpyNDduQTk1Z3E5ZTJESmhidGhlQmc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0NzAyNTEwOTA3MzoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDExOCxcbiAgICAgICAgICAyMzQsXG4gICAgICAgICAgMTc1LFxuICAgICAgICAgIDkyLFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE0MyxcbiAgICAgICAgICAxNDUsXG4gICAgICAgICAgMTY4LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA5MyxcbiAgICAgICAgICAxNDQsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMjM4LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICA5NCxcbiAgICAgICAgICAxMDQsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDQ2LFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA4MyxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyNCxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICA3OSxcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTgsXG4gICAgICAgICAgNTAsXG4gICAgICAgICAgNjNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH1cbiAgXSxcbiAgXCJwbGF0Zm9ybVwiOiBcImFuZHJvaWRcIixcbiAgXCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXBcIjogMTczMDUwMTU3NixcbiAgXCJteUFwcFN0YXRlS2V5SWRcIjogXCJBQUFBQUdQRVwiXG59IiwKICAiYXBwLXN0YXRlLXN5bmMta2V5LUFBQUFBR1BFLmpzb24iOiAie1wia2V5RGF0YVwiOlwiblE3MmxKZUtHY2dOenBrQm9DNFUyOFRidzVGL3duRUtnYTJEc3Zvcndscz1cIixcImZpbmdlcnByaW50XCI6e1wicmF3SWRcIjo4NjM1MDgyMTYsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswLDFdfSxcInRpbWVzdGFtcFwiOlwiMTczMDQyMzY0MjQ3MVwifSIKfQ=="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "sᴜʜᴀɪʟ-ᴍᴅ",
  ownername:process.env.OWNER_NAME|| "Grandpa Cyril",


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
