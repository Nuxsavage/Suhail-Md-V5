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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_54_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMTI5LFxuICAgICAgICAyNyxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMDMsXG4gICAgICAgIDE2NixcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgNjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMjMyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTU1LFxuICAgICAgICAzMCxcbiAgICAgICAgMjMxLFxuICAgICAgICA3MyxcbiAgICAgICAgNTksXG4gICAgICAgIDEyOSxcbiAgICAgICAgMTEyLFxuICAgICAgICAxNTcsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTUzLFxuICAgICAgICA5NyxcbiAgICAgICAgMjUyLFxuICAgICAgICAxNDYsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTUwLFxuICAgICAgICAyMDQsXG4gICAgICAgIDExOSxcbiAgICAgICAgNzhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNTcsXG4gICAgICAgIDcwLFxuICAgICAgICA0MyxcbiAgICAgICAgMjUxLFxuICAgICAgICA0NSxcbiAgICAgICAgNzQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMjM5LFxuICAgICAgICA4MSxcbiAgICAgICAgMTY2LFxuICAgICAgICAyNDgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTcxLFxuICAgICAgICA3NCxcbiAgICAgICAgMTIzLFxuICAgICAgICAxNDgsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIxLFxuICAgICAgICAyMTMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMjQ1LFxuICAgICAgICAxMDUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgNTIsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTA3LFxuICAgICAgICAyNyxcbiAgICAgICAgMTE2LFxuICAgICAgICAxMTcsXG4gICAgICAgIDBcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0LFxuICAgICAgICAyMTUsXG4gICAgICAgIDY4LFxuICAgICAgICAxMTEsXG4gICAgICAgIDQsXG4gICAgICAgIDkzLFxuICAgICAgICAxMzUsXG4gICAgICAgIDEwNixcbiAgICAgICAgNzMsXG4gICAgICAgIDE3LFxuICAgICAgICA3OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNSxcbiAgICAgICAgNCxcbiAgICAgICAgMTMzLFxuICAgICAgICAyMTksXG4gICAgICAgIDg5LFxuICAgICAgICAxODAsXG4gICAgICAgIDQsXG4gICAgICAgIDU3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTMsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMjExLFxuICAgICAgICAxODIsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMTQ1LFxuICAgICAgICAyMCxcbiAgICAgICAgOTUsXG4gICAgICAgIDk2LFxuICAgICAgICAxODksXG4gICAgICAgIDExMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNSxcbiAgICAgICAgNTQsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTYwLFxuICAgICAgICA1NyxcbiAgICAgICAgMjExLFxuICAgICAgICAxNTksXG4gICAgICAgIDQwLFxuICAgICAgICA5MixcbiAgICAgICAgMTkxLFxuICAgICAgICAxNDcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTcyLFxuICAgICAgICAyMDYsXG4gICAgICAgIDI5LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxODMsXG4gICAgICAgIDkzLFxuICAgICAgICA3NixcbiAgICAgICAgMTkxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDMxLFxuICAgICAgICA0OSxcbiAgICAgICAgMTk0LFxuICAgICAgICA0LFxuICAgICAgICA0LFxuICAgICAgICAyMTksXG4gICAgICAgIDkwLFxuICAgICAgICA0NyxcbiAgICAgICAgMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkSWRlbnRpdHlLZXlcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDI0MCxcbiAgICAgICAgMTQyLFxuICAgICAgICAxMyxcbiAgICAgICAgMTgxLFxuICAgICAgICA1NixcbiAgICAgICAgMixcbiAgICAgICAgNjMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgODksXG4gICAgICAgIDIwLFxuICAgICAgICA4NixcbiAgICAgICAgMjQzLFxuICAgICAgICA0MyxcbiAgICAgICAgODYsXG4gICAgICAgIDIyMSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyLFxuICAgICAgICAxOTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgMixcbiAgICAgICAgOTYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNDQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgOTYsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjMyLFxuICAgICAgICAyMCxcbiAgICAgICAgMTQ5LFxuICAgICAgICAxNzAsXG4gICAgICAgIDc2LFxuICAgICAgICAxMTlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODgsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzEsXG4gICAgICAgIDEzOCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTkyLFxuICAgICAgICAxMzYsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMTQ1LFxuICAgICAgICAxODcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMTE0LFxuICAgICAgICAxMixcbiAgICAgICAgMTksXG4gICAgICAgIDYyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE5NyxcbiAgICAgICAgNTgsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTQ0LFxuICAgICAgICA3MyxcbiAgICAgICAgNjcsXG4gICAgICAgIDIwLFxuICAgICAgICAyNSxcbiAgICAgICAgMTAwLFxuICAgICAgICAxMzYsXG4gICAgICAgIDI1MCxcbiAgICAgICAgMjI3LFxuICAgICAgICAyMDMsXG4gICAgICAgIDlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM2LFxuICAgICAgICAgIDcwLFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAxNyxcbiAgICAgICAgICAyNDAsXG4gICAgICAgICAgMixcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMTgxLFxuICAgICAgICAgIDU3LFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTkwLFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICAxNTcsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNzQsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMjEsXG4gICAgICAgICAgMTI0LFxuICAgICAgICAgIDY3LFxuICAgICAgICAgIDE4OCxcbiAgICAgICAgICAyNDcsXG4gICAgICAgICAgNjksXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3MSxcbiAgICAgICAgICAzNSxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTI4LFxuICAgICAgICAgIDg1XG4gICAgICAgIF1cbiAgICAgIH0sXG4gICAgICBcInB1YmxpY1wiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDM3LFxuICAgICAgICAgIDE3MCxcbiAgICAgICAgICAxMzgsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICA2MSxcbiAgICAgICAgICAyMDEsXG4gICAgICAgICAgOTcsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMDgsXG4gICAgICAgICAgODUsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDQ5LFxuICAgICAgICAgIDEzNCxcbiAgICAgICAgICAxMSxcbiAgICAgICAgICAxOTQsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDgwLFxuICAgICAgICAgIDExNixcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA4OSxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMzYsXG4gICAgICAgICAgOTAsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAxNzAsXG4gICAgICAgICAgMTkzLFxuICAgICAgICAgIDk4XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjAsXG4gICAgICAgIDE0MSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OCxcbiAgICAgICAgMTc0LFxuICAgICAgICA0NyxcbiAgICAgICAgMTA0LFxuICAgICAgICAxNDgsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTEsXG4gICAgICAgIDEyNixcbiAgICAgICAgODEsXG4gICAgICAgIDEsXG4gICAgICAgIDkwLFxuICAgICAgICAxNDAsXG4gICAgICAgIDg1LFxuICAgICAgICA4MCxcbiAgICAgICAgMjIyLFxuICAgICAgICAyMjgsXG4gICAgICAgIDExOCxcbiAgICAgICAgMTYzLFxuICAgICAgICA2NSxcbiAgICAgICAgODgsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMjI2LFxuICAgICAgICAzMCxcbiAgICAgICAgMjIzLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxNTksXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTE5LFxuICAgICAgICA5NSxcbiAgICAgICAgOCxcbiAgICAgICAgMzMsXG4gICAgICAgIDE0NixcbiAgICAgICAgMTQzLFxuICAgICAgICA2NixcbiAgICAgICAgMzksXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxMTEsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjM4LFxuICAgICAgICAxNjgsXG4gICAgICAgIDQsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMjI3LFxuICAgICAgICAxNTMsXG4gICAgICAgIDk0LFxuICAgICAgICAyMDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMSxcbiAgICAgICAgMTU2LFxuICAgICAgICAxOTAsXG4gICAgICAgIDE5MixcbiAgICAgICAgMTg4LFxuICAgICAgICAxMDYsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMjE3LFxuICAgICAgICA2NyxcbiAgICAgICAgNzUsXG4gICAgICAgIDc4LFxuICAgICAgICAxMVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTUwLFxuICBcImFkdlNlY3JldEtleVwiOiBcIm5CZ0taeEJjaURkR0VFZGZDN3hKdTZQK3AxaFZLZXZRUlZWcDV4OS9XNXM9XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcIk83elhGaVY1VF9Pd3phWG5XVlFrNGdcIixcbiAgXCJwaG9uZUlkXCI6IFwiYjBlOGZkM2UtYjllMC00MDU4LTkyYTgtYTI4NWY4ZTE2MTBkXCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDQ5LFxuICAgICAgMTkzLFxuICAgICAgOTAsXG4gICAgICA1MCxcbiAgICAgIDE2NixcbiAgICAgIDExOSxcbiAgICAgIDMyLFxuICAgICAgMzAsXG4gICAgICA0NixcbiAgICAgIDE0MSxcbiAgICAgIDIyNCxcbiAgICAgIDE2LFxuICAgICAgMTM0LFxuICAgICAgNDgsXG4gICAgICAyOSxcbiAgICAgIDEzNSxcbiAgICAgIDQsXG4gICAgICA3MCxcbiAgICAgIDEzNyxcbiAgICAgIDk3XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDk2LFxuICAgICAgMjUxLFxuICAgICAgMTk4LFxuICAgICAgMTAxLFxuICAgICAgMTUyLFxuICAgICAgOCxcbiAgICAgIDIxNCxcbiAgICAgIDE2LFxuICAgICAgMTEwLFxuICAgICAgMjIzLFxuICAgICAgMTU2LFxuICAgICAgNDIsXG4gICAgICAxMjUsXG4gICAgICAyMTIsXG4gICAgICAyNDksXG4gICAgICAxNDksXG4gICAgICAxMzYsXG4gICAgICA3NyxcbiAgICAgIDExOSxcbiAgICAgIDEzNVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0SDVDS1hROVwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY0MjQxNjo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgIFwibmFtZVwiOiBcIl/gvJJbTlVYIFNBVkFHRV3gvJJcIixcbiAgICBcImxpZFwiOiBcIjE1NDU3MjA4MTM2NTEyMTo5NUBsaWRcIlxuICB9LFxuICBcImFjY291bnRcIjoge1xuICAgIFwiZGV0YWlsc1wiOiBcIkNPU1UzT0VIRVA3N243c0dHQU1nQUNnQVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZUtleVwiOiBcIjNnOWt6eWx6UEhZYlFqQXJqZDNoWFM5TlpYRWErd1NYblF6RGliUU9OUms9XCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlXCI6IFwiQlVyWS8vVG5hdWxCUUhzdWhuQVhxSGhRK3lkUGZYcURrZFBYVzdNV1VDMVFOb0w1TEJ0Z0o3VEVvbmkrSTRETUg3OGFqWHdMSkN2ZnNvRkdDNDNMQ0E9PVwiLFxuICAgIFwiZGV2aWNlU2lnbmF0dXJlXCI6IFwiZTRQd25ScjZNbldyRzhraThKV2hlZWpvQ3RBSm1pSGdNTDFpaFdxZVpzUTExalFWdFlndG9FVFFock9SOWM2M3FCZ1dJclc0YnlZclBLSmVLemE4QWc9PVwiXG4gIH0sXG4gIFwic2lnbmFsSWRlbnRpdGllc1wiOiBbXG4gICAge1xuICAgICAgXCJpZGVudGlmaWVyXCI6IHtcbiAgICAgICAgXCJuYW1lXCI6IFwiMjM0ODEyNTY0MjQxNjo5NUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ4Njg0ODEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJXOS5qc29uIjogIntcImtleURhdGFcIjpcInBURWRTS2dqUE1pTldYeUZ0TG9HSmltbWpUYlJVS2E3Mmc3VlVKQmxCYjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDczNTI0Mjc0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
