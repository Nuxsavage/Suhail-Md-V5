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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_14_28_12_23_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYwLFxuICAgICAgICAxNDQsXG4gICAgICAgIDUxLFxuICAgICAgICA3NSxcbiAgICAgICAgMTUyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY0LFxuICAgICAgICA4MCxcbiAgICAgICAgOTQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTQwLFxuICAgICAgICA1OSxcbiAgICAgICAgMTU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDg1LFxuICAgICAgICAxNzYsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMzEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMjExLFxuICAgICAgICA4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxMTEsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTE3LFxuICAgICAgICAzNixcbiAgICAgICAgODMsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjMsXG4gICAgICAgIDU3LFxuICAgICAgICAxMTJcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTM3LFxuICAgICAgICAzNCxcbiAgICAgICAgMjMxLFxuICAgICAgICA5MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTcxLFxuICAgICAgICA2NCxcbiAgICAgICAgMTkyLFxuICAgICAgICAxODQsXG4gICAgICAgIDkxLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTMzLFxuICAgICAgICAxLFxuICAgICAgICAyMDQsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0NyxcbiAgICAgICAgMjcsXG4gICAgICAgIDExMSxcbiAgICAgICAgMTMzLFxuICAgICAgICAyNixcbiAgICAgICAgMjE4LFxuICAgICAgICAyNDEsXG4gICAgICAgIDIwNixcbiAgICAgICAgNzYsXG4gICAgICAgIDQsXG4gICAgICAgIDE4NyxcbiAgICAgICAgMjYsXG4gICAgICAgIDEsXG4gICAgICAgIDE3XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMjgsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMjU0LFxuICAgICAgICA5MyxcbiAgICAgICAgMjAzLFxuICAgICAgICAyNTEsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk4LFxuICAgICAgICAxOTksXG4gICAgICAgIDU2LFxuICAgICAgICAyMDYsXG4gICAgICAgIDI0MixcbiAgICAgICAgNTMsXG4gICAgICAgIDIwNyxcbiAgICAgICAgMjEzLFxuICAgICAgICAxMjIsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTYsXG4gICAgICAgIDMyLFxuICAgICAgICAyMzksXG4gICAgICAgIDIyNyxcbiAgICAgICAgMTIzLFxuICAgICAgICA0NSxcbiAgICAgICAgMTAxLFxuICAgICAgICAxOTksXG4gICAgICAgIDE0MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMjRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTA0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDI0NSxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MyxcbiAgICAgICAgMjQsXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTQ3LFxuICAgICAgICAxMixcbiAgICAgICAgMjEsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMzYsXG4gICAgICAgIDc2LFxuICAgICAgICA5NixcbiAgICAgICAgMTE0LFxuICAgICAgICA0MixcbiAgICAgICAgNzksXG4gICAgICAgIDc0LFxuICAgICAgICAxMjMsXG4gICAgICAgIDU2LFxuICAgICAgICAxMCxcbiAgICAgICAgMTU5LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTI4LFxuICAgICAgICA0NSxcbiAgICAgICAgMTAyXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNDAsXG4gICAgICAgIDE2LFxuICAgICAgICAxODksXG4gICAgICAgIDg5LFxuICAgICAgICA4OSxcbiAgICAgICAgMzksXG4gICAgICAgIDIyMyxcbiAgICAgICAgNTksXG4gICAgICAgIDQ3LFxuICAgICAgICA0OSxcbiAgICAgICAgMjM4LFxuICAgICAgICA5LFxuICAgICAgICA0OSxcbiAgICAgICAgNzEsXG4gICAgICAgIDUxLFxuICAgICAgICAyNDAsXG4gICAgICAgIDEwNyxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMzQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMjA3LFxuICAgICAgICA2OSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyMDYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDIwNixcbiAgICAgICAgMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTExXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICA3MixcbiAgICAgICAgMjEzLFxuICAgICAgICA0MCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA4MixcbiAgICAgICAgMTMzLFxuICAgICAgICAyMjAsXG4gICAgICAgIDEyNixcbiAgICAgICAgMTgsXG4gICAgICAgIDY1LFxuICAgICAgICAyMjcsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxOTQsXG4gICAgICAgIDYwLFxuICAgICAgICAyMjcsXG4gICAgICAgIDAsXG4gICAgICAgIDIyLFxuICAgICAgICAxNCxcbiAgICAgICAgMTYwLFxuICAgICAgICA2NixcbiAgICAgICAgOTAsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTU4LFxuICAgICAgICAxMzAsXG4gICAgICAgIDExNixcbiAgICAgICAgMTY2LFxuICAgICAgICAxMzksXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTI1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDIxNixcbiAgICAgICAgICAxMzUsXG4gICAgICAgICAgMjEsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICA0OCxcbiAgICAgICAgICAxNjEsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgNjgsXG4gICAgICAgICAgMTQ5LFxuICAgICAgICAgIDEzNyxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTA2LFxuICAgICAgICAgIDM5LFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDUwLFxuICAgICAgICAgIDE5NCxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAyMjgsXG4gICAgICAgICAgNjEsXG4gICAgICAgICAgMjEwLFxuICAgICAgICAgIDIwOSxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAzNixcbiAgICAgICAgICAxMDRcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTM1LFxuICAgICAgICAgIDEwNSxcbiAgICAgICAgICAyOSxcbiAgICAgICAgICAxNzcsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgNzAsXG4gICAgICAgICAgMjIxLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgODIsXG4gICAgICAgICAgMTQzLFxuICAgICAgICAgIDE4MSxcbiAgICAgICAgICAxODksXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMTY1LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDY0LFxuICAgICAgICAgIDg5LFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICAxOTksXG4gICAgICAgICAgOSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICAxOTAsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDUyXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMjUsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMjQ5LFxuICAgICAgICA2NyxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMDQsXG4gICAgICAgIDc5LFxuICAgICAgICAxMDksXG4gICAgICAgIDM2LFxuICAgICAgICAyMDAsXG4gICAgICAgIDE2LFxuICAgICAgICA0OCxcbiAgICAgICAgMjE4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDEyMyxcbiAgICAgICAgNDUsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTY1LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMCxcbiAgICAgICAgMzcsXG4gICAgICAgIDY4LFxuICAgICAgICA3LFxuICAgICAgICAxMjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMjMsXG4gICAgICAgIDIwMyxcbiAgICAgICAgOTAsXG4gICAgICAgIDU1LFxuICAgICAgICAyMjYsXG4gICAgICAgIDMwLFxuICAgICAgICAyNTMsXG4gICAgICAgIDIzMCxcbiAgICAgICAgOTYsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTMsXG4gICAgICAgIDE4MSxcbiAgICAgICAgMCxcbiAgICAgICAgMTkyLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgOTMsXG4gICAgICAgIDIyNCxcbiAgICAgICAgMjQxLFxuICAgICAgICA4OSxcbiAgICAgICAgMTgyLFxuICAgICAgICAyMDIsXG4gICAgICAgIDIsXG4gICAgICAgIDExMixcbiAgICAgICAgMTI5LFxuICAgICAgICAyMjEsXG4gICAgICAgIDg5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjI1LFxuICAgICAgICAyMzYsXG4gICAgICAgIDE3LFxuICAgICAgICAxOTAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgMjQ4LFxuICAgICAgICA5XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAxMjksXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiRXZIeGE4M3pHbUtmdzVadUJWdlV5N0RXUlhUUmdCYnpicFpzcHlFOThuUT1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiRkZIUjNhQ2VSTldMUWdxaElRRmpjQVwiLFxuICBcInBob25lSWRcIjogXCI0ODM5N2Y5MC00ZDJkLTQ0NmItYTJjYS0yOGViNmY2MmU4YmVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNDEsXG4gICAgICAxODQsXG4gICAgICAyMjAsXG4gICAgICAyMzgsXG4gICAgICA3MyxcbiAgICAgIDMsXG4gICAgICAyNDAsXG4gICAgICAyMjAsXG4gICAgICA5NixcbiAgICAgIDEyLFxuICAgICAgMjM3LFxuICAgICAgNTEsXG4gICAgICAxNjAsXG4gICAgICA2OSxcbiAgICAgIDE3NixcbiAgICAgIDIyLFxuICAgICAgMTc1LFxuICAgICAgMTA0LFxuICAgICAgMjIzLFxuICAgICAgMjAwXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDEwOSxcbiAgICAgIDU3LFxuICAgICAgMSxcbiAgICAgIDIwLFxuICAgICAgMjU0LFxuICAgICAgMjIxLFxuICAgICAgMjUxLFxuICAgICAgMTQyLFxuICAgICAgMjEyLFxuICAgICAgMjM5LFxuICAgICAgMzYsXG4gICAgICA5MyxcbiAgICAgIDIzOCxcbiAgICAgIDEyMixcbiAgICAgIDIyLFxuICAgICAgMjQyLFxuICAgICAgOTYsXG4gICAgICAxMDMsXG4gICAgICAyMzYsXG4gICAgICA3NlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCI0QjVFQTROOFwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY0MjQxNjo2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX+C8kltOVVggU0FWQUdFXeC8klwiLFxuICAgIFwibGlkXCI6IFwiMTU0NTcyMDgxMzY1MTIxOjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVM09FSEVQYm1wYnNHR0F3Z0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZzlrenlselBIWWJRakFyamQzaFhTOU5aWEVhK3dTWG5RekRpYlFPTlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIk5ZS0xtRjVBcUhQWHorNkpkNDVkcUt5MlJXQ2dTZjBxdEo4UG9xWDl1NldXOEVnaTRvWVR2bjBlOUM4bGc2MjdINmVENUhZcEN2djVtMERwSTRjMUFBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcImtiUVdZZjMvRXptR1RPUEd4aE9XZjRSeHZSSEFyWjRUWGNzZDFRd2MxRHRHb2tHNTk2ZlkvSkdZcnJSQllvNVlST2toYmJ3RXdTbDVvN2pkSldxVER3PT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU2NDI0MTY6NkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5NjQwOTAsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWEZcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJYRi5qc29uIjogIntcImtleURhdGFcIjpcIjBvcHFSRHNKRUY5UnpMUGZNNnF0WFlnNmYza2YvSzBpMjdiQWRBVnZvQWc9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTkyNCxcImN1cnJlbnRJbmRleFwiOjgsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


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
