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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_37_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTIwLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgODUsXG4gICAgICAgIDM1LFxuICAgICAgICAyMjEsXG4gICAgICAgIDY1LFxuICAgICAgICAxMjYsXG4gICAgICAgIDQsXG4gICAgICAgIDEwMSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxNTcsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTEyLFxuICAgICAgICAyNCxcbiAgICAgICAgMjQ4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDIwNixcbiAgICAgICAgOTUsXG4gICAgICAgIDgsXG4gICAgICAgIDU5LFxuICAgICAgICAxMDMsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMTEsXG4gICAgICAgIDU1LFxuICAgICAgICAyNDksXG4gICAgICAgIDEzMSxcbiAgICAgICAgMjMsXG4gICAgICAgIDc0LFxuICAgICAgICAxMTZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTMsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMjQxLFxuICAgICAgICAxNCxcbiAgICAgICAgMjAsXG4gICAgICAgIDY1LFxuICAgICAgICA4MCxcbiAgICAgICAgMTEwLFxuICAgICAgICAyMDAsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTUxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDk4LFxuICAgICAgICA4OSxcbiAgICAgICAgMjMyLFxuICAgICAgICA1OSxcbiAgICAgICAgMTcwLFxuICAgICAgICAzNCxcbiAgICAgICAgMTIsXG4gICAgICAgIDU5LFxuICAgICAgICAyNTAsXG4gICAgICAgIDE3NixcbiAgICAgICAgMTExLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIwNSxcbiAgICAgICAgMTM4LFxuICAgICAgICAzMCxcbiAgICAgICAgNzAsXG4gICAgICAgIDE5MyxcbiAgICAgICAgOTZcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDIwMCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIyMCxcbiAgICAgICAgMTIzLFxuICAgICAgICAzMSxcbiAgICAgICAgMjAzLFxuICAgICAgICAxNjAsXG4gICAgICAgIDg4LFxuICAgICAgICA1NSxcbiAgICAgICAgMjEwLFxuICAgICAgICA2NixcbiAgICAgICAgNTUsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTk3LFxuICAgICAgICAzNixcbiAgICAgICAgNjksXG4gICAgICAgIDUsXG4gICAgICAgIDIxLFxuICAgICAgICA4NCxcbiAgICAgICAgMTY0LFxuICAgICAgICAxNDYsXG4gICAgICAgIDI1MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAyMDEsXG4gICAgICAgIDEzLFxuICAgICAgICAxOTMsXG4gICAgICAgIDMsXG4gICAgICAgIDIxMixcbiAgICAgICAgMjQ1LFxuICAgICAgICA4NyxcbiAgICAgICAgODVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgODAsXG4gICAgICAgIDAsXG4gICAgICAgIDkyLFxuICAgICAgICA3MSxcbiAgICAgICAgMjIyLFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAyMjEsXG4gICAgICAgIDI2LFxuICAgICAgICAxNTcsXG4gICAgICAgIDEyNyxcbiAgICAgICAgMTE4LFxuICAgICAgICAxNSxcbiAgICAgICAgMTc1LFxuICAgICAgICAxMTksXG4gICAgICAgIDExMyxcbiAgICAgICAgMjE4LFxuICAgICAgICAxMTgsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTE4LFxuICAgICAgICAyMDMsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMjQwLFxuICAgICAgICAxMjEsXG4gICAgICAgIDE5MSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxNzQsXG4gICAgICAgIDI0OSxcbiAgICAgICAgMTk1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNFxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTUyLFxuICAgICAgICAxMjUsXG4gICAgICAgIDU0LFxuICAgICAgICAyMjYsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDksXG4gICAgICAgIDExOCxcbiAgICAgICAgMjU0LFxuICAgICAgICAyNTQsXG4gICAgICAgIDk0LFxuICAgICAgICAxNTYsXG4gICAgICAgIDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjA5LFxuICAgICAgICA4NCxcbiAgICAgICAgMTg4LFxuICAgICAgICAxMTcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMTg5LFxuICAgICAgICAyNDIsXG4gICAgICAgIDI0MSxcbiAgICAgICAgNzksXG4gICAgICAgIDc4LFxuICAgICAgICAyNTUsXG4gICAgICAgIDExMCxcbiAgICAgICAgMTY1LFxuICAgICAgICAzMCxcbiAgICAgICAgMTI3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTExLFxuICAgICAgICAxMjNcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgOTEsXG4gICAgICAgIDI4LFxuICAgICAgICA4MixcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMzYsXG4gICAgICAgIDc1LFxuICAgICAgICA3MixcbiAgICAgICAgOTUsXG4gICAgICAgIDUyLFxuICAgICAgICA3NCxcbiAgICAgICAgMjU1LFxuICAgICAgICAyMTcsXG4gICAgICAgIDg2LFxuICAgICAgICAxMjEsXG4gICAgICAgIDE2NyxcbiAgICAgICAgMzMsXG4gICAgICAgIDU4LFxuICAgICAgICAxMixcbiAgICAgICAgMTcwLFxuICAgICAgICAyMDUsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA0LFxuICAgICAgICAxMTAsXG4gICAgICAgIDIxLFxuICAgICAgICA0LFxuICAgICAgICAxMjQsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMjM1LFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyLFxuICAgICAgICAxMDhcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAyNyxcbiAgICAgICAgICAyNSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMTI3LFxuICAgICAgICAgIDY1LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAxMjcsXG4gICAgICAgICAgNTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAxMjgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMjQ5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICA1MixcbiAgICAgICAgICAxODIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMzcsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNDYsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMzUsXG4gICAgICAgICAgMTg3LFxuICAgICAgICAgIDEzMSxcbiAgICAgICAgICA4MVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNTMsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgNzUsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDE4OSxcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgODAsXG4gICAgICAgICAgNzIsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMTI1LFxuICAgICAgICAgIDk3LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAxMTcsXG4gICAgICAgICAgMTMyLFxuICAgICAgICAgIDgsXG4gICAgICAgICAgMTEwLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDE5MixcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTQ0LFxuICAgICAgICAgIDE2NCxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjE0LFxuICAgICAgICAgIDIyMyxcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNTIsXG4gICAgICAgICAgMTEsXG4gICAgICAgICAgMTExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjcsXG4gICAgICAgIDE0NyxcbiAgICAgICAgMjU1LFxuICAgICAgICA5MCxcbiAgICAgICAgNjMsXG4gICAgICAgIDIyNixcbiAgICAgICAgMTc5LFxuICAgICAgICAxOTIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTA2LFxuICAgICAgICAxODcsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTcwLFxuICAgICAgICA2NyxcbiAgICAgICAgMTU1LFxuICAgICAgICAyMDQsXG4gICAgICAgIDExNyxcbiAgICAgICAgMjA0LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE1NSxcbiAgICAgICAgNTcsXG4gICAgICAgIDUsXG4gICAgICAgIDEwNCxcbiAgICAgICAgMzUsXG4gICAgICAgIDU5LFxuICAgICAgICAxMTcsXG4gICAgICAgIDMsXG4gICAgICAgIDI1LFxuICAgICAgICAxNDUsXG4gICAgICAgIDk0LFxuICAgICAgICAxMzIsXG4gICAgICAgIDEyNSxcbiAgICAgICAgMTc5LFxuICAgICAgICAyMjYsXG4gICAgICAgIDE1LFxuICAgICAgICAxNzgsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMzQsXG4gICAgICAgIDcyLFxuICAgICAgICAxMixcbiAgICAgICAgNDksXG4gICAgICAgIDE2OSxcbiAgICAgICAgMTY3LFxuICAgICAgICAxMyxcbiAgICAgICAgMTU4LFxuICAgICAgICAyMzgsXG4gICAgICAgIDE5NCxcbiAgICAgICAgMTcwLFxuICAgICAgICAyNTUsXG4gICAgICAgIDk5LFxuICAgICAgICA4MixcbiAgICAgICAgMjAzLFxuICAgICAgICAyNDcsXG4gICAgICAgIDM5LFxuICAgICAgICA5MyxcbiAgICAgICAgMjcsXG4gICAgICAgIDkzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDg0LFxuICAgICAgICAzMSxcbiAgICAgICAgNDIsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMjcsXG4gICAgICAgIDE0M1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJrZXlJZFwiOiAxXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uSWRcIjogMTA5LFxuICBcImFkdlNlY3JldEtleVwiOiBcIlhRd1BjL0c3NjN1bFpCVm1JMllSY295SFlONTJLZURYbitaaDBtWm1WcE09XCIsXG4gIFwicHJvY2Vzc2VkSGlzdG9yeU1lc3NhZ2VzXCI6IFtcbiAgICB7XG4gICAgICBcImtleVwiOiB7XG4gICAgICAgIFwicmVtb3RlSmlkXCI6IFwiMjM0ODEyNTY0MjQxNkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImZyb21NZVwiOiB0cnVlLFxuICAgICAgICBcImlkXCI6IFwiQzM3ODgxNTczQUQzRTMyQ0U2MkQ1MTc1NTBBMDAxODRcIlxuICAgICAgfSxcbiAgICAgIFwibWVzc2FnZVRpbWVzdGFtcFwiOiAxNzM0OTA3MDQ4XG4gICAgfVxuICBdLFxuICBcIm5leHRQcmVLZXlJZFwiOiAzMSxcbiAgXCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZFwiOiAzMSxcbiAgXCJhY2NvdW50U3luY0NvdW50ZXJcIjogMCxcbiAgXCJhY2NvdW50U2V0dGluZ3NcIjoge1xuICAgIFwidW5hcmNoaXZlQ2hhdHNcIjogZmFsc2VcbiAgfSxcbiAgXCJkZXZpY2VJZFwiOiBcInVvdm10YlN0UXp5S3hUVE5yZGlwVWdcIixcbiAgXCJwaG9uZUlkXCI6IFwiNjU4OGFkZDgtZDc3Yi00ZGFmLTg5YTctMzYyOTU4OGVjODc1XCIsXG4gIFwiaWRlbnRpdHlJZFwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE1LFxuICAgICAgMjAxLFxuICAgICAgMTA0LFxuICAgICAgMTIwLFxuICAgICAgNzEsXG4gICAgICA1LFxuICAgICAgMzEsXG4gICAgICAyMzgsXG4gICAgICAzNCxcbiAgICAgIDEyOSxcbiAgICAgIDk0LFxuICAgICAgMjQxLFxuICAgICAgMjI0LFxuICAgICAgNjksXG4gICAgICAxNzAsXG4gICAgICA4NSxcbiAgICAgIDE0MCxcbiAgICAgIDE4NSxcbiAgICAgIDY1LFxuICAgICAgMTI2XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDI0NixcbiAgICAgIDI1MyxcbiAgICAgIDkyLFxuICAgICAgNDUsXG4gICAgICAxNjgsXG4gICAgICA0MixcbiAgICAgIDMzLFxuICAgICAgMjE2LFxuICAgICAgMTkwLFxuICAgICAgMTQ5LFxuICAgICAgMTA2LFxuICAgICAgMTYwLFxuICAgICAgMjYsXG4gICAgICAxLFxuICAgICAgMzMsXG4gICAgICAyMDEsXG4gICAgICA2MCxcbiAgICAgIDE3OCxcbiAgICAgIDEzMCxcbiAgICAgIDE3MFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJBU05FUVlSU1wiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY0MjQxNjoyQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX+C8kltOVVggU0FWQUdFXeC8klwiLFxuICAgIFwibGlkXCI6IFwiMTU0NTcyMDgxMzY1MTIxOjJAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVM09FSEVKK3BvcnNHR0FnZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZzlrenlselBIWWJRakFyamQzaFhTOU5aWEVhK3dTWG5RekRpYlFPTlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImNFRk02VFVzVnRrTFllTDgvOVJReWtpZ2dnQmVsdUxCeHpNZVM5azhYeFVzV0FnUktwMXdaY25lbVNXMW1OYlR0cFhhQ2U0UXYycVpMUy9mcGhZdkFnPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkRyZFNSMExxNVhsQ3dSVU9WN2loYkJVbkNRU3EyZnZ1QVl0UjBkbUYvaXhxTVFMVUEwMWxWckwydkNQOEQwdDhzU3p5bjNOV0dqT1lJaXVGNUNnU2lnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU2NDI0MTY6MkBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MDcwNDMsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCWEVcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJYRS5qc29uIjogIntcImtleURhdGFcIjpcImxPeWJ0UW0vQkFJQis4UUxkTE9FK2tOdGR6TzFjNzRvdzgzd0ZqME9XUTA9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTkyNCxcImN1cnJlbnRJbmRleFwiOjcsXCJkZXZpY2VJbmRleGVzXCI6WzAsMV19LFwidGltZXN0YW1wXCI6XCIxNzM0OTA2OTc2MTQxXCJ9Igp9"  // PUT your SESSION_ID 


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
