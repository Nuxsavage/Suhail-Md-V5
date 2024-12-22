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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_22_27_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjQsXG4gICAgICAgIDYyLFxuICAgICAgICA5NyxcbiAgICAgICAgMTUzLFxuICAgICAgICAxNTAsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMjQ5LFxuICAgICAgICAyNSxcbiAgICAgICAgMzUsXG4gICAgICAgIDE1MCxcbiAgICAgICAgODksXG4gICAgICAgIDE1LFxuICAgICAgICAxNjUsXG4gICAgICAgIDQxLFxuICAgICAgICAxNDEsXG4gICAgICAgIDEyNyxcbiAgICAgICAgNTksXG4gICAgICAgIDE5MSxcbiAgICAgICAgMTM1LFxuICAgICAgICAxNDgsXG4gICAgICAgIDQyLFxuICAgICAgICAyMjQsXG4gICAgICAgIDMsXG4gICAgICAgIDI4LFxuICAgICAgICAyNSxcbiAgICAgICAgNzksXG4gICAgICAgIDI5LFxuICAgICAgICA2NCxcbiAgICAgICAgMTA0LFxuICAgICAgICA3MCxcbiAgICAgICAgMjQ2LFxuICAgICAgICAxMDZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjQwLFxuICAgICAgICAyNDUsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMjMxLFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTA5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDIxNSxcbiAgICAgICAgMTYsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMTMyLFxuICAgICAgICAyMzMsXG4gICAgICAgIDMyLFxuICAgICAgICAxNjYsXG4gICAgICAgIDg1LFxuICAgICAgICAxMDYsXG4gICAgICAgIDc3LFxuICAgICAgICAyMzQsXG4gICAgICAgIDE5MCxcbiAgICAgICAgMzYsXG4gICAgICAgIDE4MCxcbiAgICAgICAgOTksXG4gICAgICAgIDExMixcbiAgICAgICAgMTU5LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE2NixcbiAgICAgICAgMTkwLFxuICAgICAgICAxNDEsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjAsXG4gICAgICAgIDkwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA4OCxcbiAgICAgICAgMTcyLFxuICAgICAgICAxMDQsXG4gICAgICAgIDIyLFxuICAgICAgICAxMCxcbiAgICAgICAgMTA1LFxuICAgICAgICAxODUsXG4gICAgICAgIDE1MSxcbiAgICAgICAgMTU5LFxuICAgICAgICAxNDAsXG4gICAgICAgIDMwLFxuICAgICAgICAyNCxcbiAgICAgICAgMTI1LFxuICAgICAgICAxMjgsXG4gICAgICAgIDE4MixcbiAgICAgICAgMjIwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDE4NSxcbiAgICAgICAgMTc5LFxuICAgICAgICAxNyxcbiAgICAgICAgMzcsXG4gICAgICAgIDU1LFxuICAgICAgICA5NyxcbiAgICAgICAgMTk4LFxuICAgICAgICAyMCxcbiAgICAgICAgMjI4LFxuICAgICAgICA5NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAxNjEsXG4gICAgICAgIDY4LFxuICAgICAgICA2LFxuICAgICAgICA5OFxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NSxcbiAgICAgICAgOSxcbiAgICAgICAgMTg2LFxuICAgICAgICA1NyxcbiAgICAgICAgMTA1LFxuICAgICAgICA2OCxcbiAgICAgICAgODgsXG4gICAgICAgIDMxLFxuICAgICAgICA2NyxcbiAgICAgICAgNCxcbiAgICAgICAgMTQsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMjIsXG4gICAgICAgIDExMSxcbiAgICAgICAgOTAsXG4gICAgICAgIDEyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDI5LFxuICAgICAgICAxNjIsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTYwLFxuICAgICAgICAzNixcbiAgICAgICAgMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAyMjUsXG4gICAgICAgIDMyLFxuICAgICAgICA1NCxcbiAgICAgICAgMjIxLFxuICAgICAgICA2MCxcbiAgICAgICAgMjA0LFxuICAgICAgICAxMlxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRJZGVudGl0eUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTYsXG4gICAgICAgIDIzLFxuICAgICAgICAxODUsXG4gICAgICAgIDQ3LFxuICAgICAgICA4NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA2MSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNzgsXG4gICAgICAgIDIyOSxcbiAgICAgICAgMjI3LFxuICAgICAgICA1MyxcbiAgICAgICAgMjEwLFxuICAgICAgICAxODIsXG4gICAgICAgIDU3LFxuICAgICAgICAxNzcsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTI3LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE0MSxcbiAgICAgICAgMjQwLFxuICAgICAgICAyNTIsXG4gICAgICAgIDY3LFxuICAgICAgICAwLFxuICAgICAgICA4MSxcbiAgICAgICAgMTI1LFxuICAgICAgICAyMTIsXG4gICAgICAgIDEzNixcbiAgICAgICAgNTYsXG4gICAgICAgIDU2LFxuICAgICAgICA5OSxcbiAgICAgICAgMTAxXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk0LFxuICAgICAgICAxMCxcbiAgICAgICAgMTIwLFxuICAgICAgICA0LFxuICAgICAgICAyNDEsXG4gICAgICAgIDE2MyxcbiAgICAgICAgMTY1LFxuICAgICAgICAxMTAsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzQsXG4gICAgICAgIDMsXG4gICAgICAgIDE2NSxcbiAgICAgICAgNjAsXG4gICAgICAgIDE3NSxcbiAgICAgICAgNTUsXG4gICAgICAgIDIzLFxuICAgICAgICAyNixcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDksXG4gICAgICAgIDI0MixcbiAgICAgICAgMTUyLFxuICAgICAgICAxNjcsXG4gICAgICAgIDE1OSxcbiAgICAgICAgMTM4LFxuICAgICAgICA0NixcbiAgICAgICAgMjM5LFxuICAgICAgICAxNjMsXG4gICAgICAgIDg1LFxuICAgICAgICAyMzIsXG4gICAgICAgIDExLFxuICAgICAgICA4OSxcbiAgICAgICAgNzlcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDIxOCxcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAyNDEsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDg0LFxuICAgICAgICAgIDE5MSxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAxNzMsXG4gICAgICAgICAgMTE2LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDIwMixcbiAgICAgICAgICAxMjUsXG4gICAgICAgICAgNzYsXG4gICAgICAgICAgMTcsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgNDUsXG4gICAgICAgICAgMTc3LFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDE2MSxcbiAgICAgICAgICAyNTMsXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgOTgsXG4gICAgICAgICAgNTEsXG4gICAgICAgICAgMTA4LFxuICAgICAgICAgIDEyNSxcbiAgICAgICAgICA3MyxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICA1OCxcbiAgICAgICAgICAxNjIsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDExNVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxMzEsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDc1LFxuICAgICAgICAgIDcyLFxuICAgICAgICAgIDIxNSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgNzEsXG4gICAgICAgICAgOTYsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDIzMixcbiAgICAgICAgICAyMTMsXG4gICAgICAgICAgMjI0LFxuICAgICAgICAgIDg2LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgMTk1LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDksXG4gICAgICAgICAgMzIsXG4gICAgICAgICAgMjExLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMjQ4LFxuICAgICAgICAgIDE5MCxcbiAgICAgICAgICAxMDksXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDExXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjAzLFxuICAgICAgICAyMTgsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTQwLFxuICAgICAgICAxOTYsXG4gICAgICAgIDkzLFxuICAgICAgICAxMSxcbiAgICAgICAgMTYwLFxuICAgICAgICAxMDksXG4gICAgICAgIDE5MyxcbiAgICAgICAgMTE2LFxuICAgICAgICA1OCxcbiAgICAgICAgNzgsXG4gICAgICAgIDY0LFxuICAgICAgICA3MyxcbiAgICAgICAgMjAxLFxuICAgICAgICAxMzcsXG4gICAgICAgIDI1NCxcbiAgICAgICAgNjYsXG4gICAgICAgIDcxLFxuICAgICAgICAxMTQsXG4gICAgICAgIDgxLFxuICAgICAgICAyMjksXG4gICAgICAgIDUsXG4gICAgICAgIDM0LFxuICAgICAgICA1NyxcbiAgICAgICAgMTIyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMTgyLFxuICAgICAgICAxMTAsXG4gICAgICAgIDMzLFxuICAgICAgICAxMTYsXG4gICAgICAgIDcyLFxuICAgICAgICAxNSxcbiAgICAgICAgMzQsXG4gICAgICAgIDI1NCxcbiAgICAgICAgMTAwLFxuICAgICAgICA1NSxcbiAgICAgICAgNDEsXG4gICAgICAgIDIwNSxcbiAgICAgICAgOTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDcsXG4gICAgICAgIDU0LFxuICAgICAgICAyMzQsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMTgsXG4gICAgICAgIDE0NSxcbiAgICAgICAgMTgzLFxuICAgICAgICAxNDMsXG4gICAgICAgIDAsXG4gICAgICAgIDIzMyxcbiAgICAgICAgOTQsXG4gICAgICAgIDcxLFxuICAgICAgICA4NSxcbiAgICAgICAgNzIsXG4gICAgICAgIDI0MyxcbiAgICAgICAgMTEwLFxuICAgICAgICA2NSxcbiAgICAgICAgOTksXG4gICAgICAgIDIxNCxcbiAgICAgICAgMjAwLFxuICAgICAgICA3XG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyMzcsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiVEE4OHdjM1o0ZTNReTY5d3pCT2xTcStpWTJibU5LamNDSTFncWgvcTJUcz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiYndKWWRMNTdUTWF3MXhJQktDdzBnUVwiLFxuICBcInBob25lSWRcIjogXCI4Y2ViYzFhOC0yYzAxLTRkYzgtOTAyNy1lN2Y1NDg3MTQ2YTdcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjA3LFxuICAgICAgNTYsXG4gICAgICAxNzMsXG4gICAgICA0NSxcbiAgICAgIDE1OSxcbiAgICAgIDIxMyxcbiAgICAgIDEwMyxcbiAgICAgIDg0LFxuICAgICAgMTMxLFxuICAgICAgNzYsXG4gICAgICAxMjksXG4gICAgICAxNTEsXG4gICAgICAxNDEsXG4gICAgICAxMTUsXG4gICAgICAyNTEsXG4gICAgICAyMTksXG4gICAgICAxMzksXG4gICAgICAxODYsXG4gICAgICAyMjksXG4gICAgICA3OFxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICA0OCxcbiAgICAgIDg3LFxuICAgICAgMTMyLFxuICAgICAgMzEsXG4gICAgICA3NSxcbiAgICAgIDE4NyxcbiAgICAgIDY3LFxuICAgICAgMTM1LFxuICAgICAgMjI4LFxuICAgICAgMTgxLFxuICAgICAgMTgxLFxuICAgICAgMjMzLFxuICAgICAgMjYsXG4gICAgICA4LFxuICAgICAgMjU0LFxuICAgICAgMTcwLFxuICAgICAgNyxcbiAgICAgIDE5NyxcbiAgICAgIDE5OCxcbiAgICAgIDExNlxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25cIjoge30sXG4gIFwicGFpcmluZ0NvZGVcIjogXCJYMzEzQ1BRUlwiLFxuICBcIm1lXCI6IHtcbiAgICBcImlkXCI6IFwiMjM0ODEyNTY0MjQxNjoxQHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJuYW1lXCI6IFwiX+C8kltOVVggU0FWQUdFXeC8klwiLFxuICAgIFwibGlkXCI6IFwiMTU0NTcyMDgxMzY1MTIxOjFAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVM09FSEVMeWtvcnNHR0FjZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZzlrenlselBIWWJRakFyamQzaFhTOU5aWEVhK3dTWG5RekRpYlFPTlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcImxJdE5LekpvaEdERlpqQy8yckFuUHlBTGM5aFNNNEVVSTV6ZHlLTUdiNUNKNVpZdjVvSDZ6OWpvYWM5MXBlTXA2NEp3bW1xZTN6TWdpQ1NwaVdEcEN3PT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcIkUrRGF4VEkxVS9EMmVLWGR6Mkh4bEJqMmhNMlh2blROamNnanVSZWl1d3Z3OU45SyszbUtIQndEcFpDd2tyOUpvSjdudkpBZXN3cW9Uc2JmcUtOMkRBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU2NDI0MTY6MUBzLndoYXRzYXBwLm5ldFwiLFxuICAgICAgICBcImRldmljZUlkXCI6IDBcbiAgICAgIH0sXG4gICAgICBcImlkZW50aWZpZXJLZXlcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA1LFxuICAgICAgICAgIDIyMixcbiAgICAgICAgICAxNSxcbiAgICAgICAgICAxMDAsXG4gICAgICAgICAgMjA3LFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDExNSxcbiAgICAgICAgICA2MCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgNjYsXG4gICAgICAgICAgNDgsXG4gICAgICAgICAgNDMsXG4gICAgICAgICAgMTQxLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAyMjUsXG4gICAgICAgICAgOTMsXG4gICAgICAgICAgNDcsXG4gICAgICAgICAgNzcsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDExMyxcbiAgICAgICAgICAyNixcbiAgICAgICAgICAyNTEsXG4gICAgICAgICAgNCxcbiAgICAgICAgICAxNTEsXG4gICAgICAgICAgMTU3LFxuICAgICAgICAgIDEyLFxuICAgICAgICAgIDE5NSxcbiAgICAgICAgICAxMzcsXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0LFxuICAgICAgICAgIDUzLFxuICAgICAgICAgIDI1XG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJzbWJhXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MzQ5MDY0MzEsXG4gIFwibXlBcHBTdGF0ZUtleUlkXCI6IFwiQUFBQUFCVzlcIlxufSIsCiAgImFwcC1zdGF0ZS1zeW5jLWtleS1BQUFBQUJXOS5qc29uIjogIntcImtleURhdGFcIjpcInBURWRTS2dqUE1pTldYeUZ0TG9HSmltbWpUYlJVS2E3Mmc3VlVKQmxCYjg9XCIsXCJmaW5nZXJwcmludFwiOntcInJhd0lkXCI6MjA4Mzk4MTkyMyxcImN1cnJlbnRJbmRleFwiOjEsXCJkZXZpY2VJbmRleGVzXCI6WzBdfSxcInRpbWVzdGFtcFwiOlwiMTczNDczNTI0Mjc0MlwifSIKfQ=="  // PUT your SESSION_ID 


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
