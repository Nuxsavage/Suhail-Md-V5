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
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "2347087748213";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "2347087748213";




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


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_11_42_12_22_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEyLFxuICAgICAgICAyNDMsXG4gICAgICAgIDE5NyxcbiAgICAgICAgMzIsXG4gICAgICAgIDk1LFxuICAgICAgICAxODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjAsXG4gICAgICAgIDg3LFxuICAgICAgICAxMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxNzksXG4gICAgICAgIDIxNyxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MSxcbiAgICAgICAgMTIzLFxuICAgICAgICA0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDI0NSxcbiAgICAgICAgODgsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjUzLFxuICAgICAgICAyMTUsXG4gICAgICAgIDgyLFxuICAgICAgICAyMzEsXG4gICAgICAgIDg1LFxuICAgICAgICAyMDYsXG4gICAgICAgIDc2LFxuICAgICAgICAxNzYsXG4gICAgICAgIDEwMCxcbiAgICAgICAgMTYxLFxuICAgICAgICAxMjdcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk4LFxuICAgICAgICAxNjYsXG4gICAgICAgIDMyLFxuICAgICAgICAxNzgsXG4gICAgICAgIDkyLFxuICAgICAgICA3LFxuICAgICAgICAxMDAsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMzYsXG4gICAgICAgIDU2LFxuICAgICAgICAxNTksXG4gICAgICAgIDE1LFxuICAgICAgICA4NixcbiAgICAgICAgNTIsXG4gICAgICAgIDExMSxcbiAgICAgICAgMyxcbiAgICAgICAgOTEsXG4gICAgICAgIDM4LFxuICAgICAgICAxMDcsXG4gICAgICAgIDI0NyxcbiAgICAgICAgMjM5LFxuICAgICAgICA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTExLFxuICAgICAgICAzMyxcbiAgICAgICAgNCxcbiAgICAgICAgOSxcbiAgICAgICAgMTY4LFxuICAgICAgICAxOTMsXG4gICAgICAgIDQwLFxuICAgICAgICAxMTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDk2LFxuICAgICAgICAxOCxcbiAgICAgICAgMjksXG4gICAgICAgIDIzLFxuICAgICAgICAxMDIsXG4gICAgICAgIDIwOSxcbiAgICAgICAgMTU5LFxuICAgICAgICA3NixcbiAgICAgICAgMTIsXG4gICAgICAgIDIyOCxcbiAgICAgICAgNzksXG4gICAgICAgIDM1LFxuICAgICAgICAzMixcbiAgICAgICAgMTI3LFxuICAgICAgICAxMTksXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY3LFxuICAgICAgICA2MSxcbiAgICAgICAgMjA1LFxuICAgICAgICAzOSxcbiAgICAgICAgMTYxLFxuICAgICAgICAzMyxcbiAgICAgICAgMTE2LFxuICAgICAgICA4MixcbiAgICAgICAgOTIsXG4gICAgICAgIDYxLFxuICAgICAgICAwLFxuICAgICAgICAxMDAsXG4gICAgICAgIDEyOSxcbiAgICAgICAgMjU0LFxuICAgICAgICAxMTcsXG4gICAgICAgIDcwXG4gICAgICBdXG4gICAgfSxcbiAgICBcInB1YmxpY1wiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDE0MyxcbiAgICAgICAgMTI0LFxuICAgICAgICA0OCxcbiAgICAgICAgMjIzLFxuICAgICAgICAwLFxuICAgICAgICA5NyxcbiAgICAgICAgMTgzLFxuICAgICAgICA4NyxcbiAgICAgICAgMTk3LFxuICAgICAgICAxMzIsXG4gICAgICAgIDI3LFxuICAgICAgICAxMjMsXG4gICAgICAgIDIzNCxcbiAgICAgICAgMjM2LFxuICAgICAgICA2MyxcbiAgICAgICAgMjA5LFxuICAgICAgICAyMjgsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEzNixcbiAgICAgICAgMjI4LFxuICAgICAgICAyMDEsXG4gICAgICAgIDE0LFxuICAgICAgICAxODEsXG4gICAgICAgIDIxMCxcbiAgICAgICAgMTc1LFxuICAgICAgICA2NSxcbiAgICAgICAgMjE0LFxuICAgICAgICA1LFxuICAgICAgICA5MCxcbiAgICAgICAgMTE0XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE2OSxcbiAgICAgICAgMjQ4LFxuICAgICAgICAyMzUsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMTQzLFxuICAgICAgICAxMixcbiAgICAgICAgMTU1LFxuICAgICAgICAxNixcbiAgICAgICAgMjE0LFxuICAgICAgICAyMDMsXG4gICAgICAgIDc3LFxuICAgICAgICAxOTEsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMTQ4LFxuICAgICAgICA1NSxcbiAgICAgICAgODQsXG4gICAgICAgIDY0LFxuICAgICAgICAxNjIsXG4gICAgICAgIDYsXG4gICAgICAgIDYxLFxuICAgICAgICAxMjQsXG4gICAgICAgIDE4OSxcbiAgICAgICAgMzQsXG4gICAgICAgIDYyLFxuICAgICAgICA2MSxcbiAgICAgICAgMTIwLFxuICAgICAgICAxNjIsXG4gICAgICAgIDIxLFxuICAgICAgICA3NCxcbiAgICAgICAgNjZcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTQ4LFxuICAgICAgICAxNDcsXG4gICAgICAgIDIxMixcbiAgICAgICAgNDksXG4gICAgICAgIDM0LFxuICAgICAgICAzOSxcbiAgICAgICAgNDUsXG4gICAgICAgIDIxOCxcbiAgICAgICAgMjMwLFxuICAgICAgICA0LFxuICAgICAgICA1NixcbiAgICAgICAgNDksXG4gICAgICAgIDc5LFxuICAgICAgICAxMixcbiAgICAgICAgMjQ5LFxuICAgICAgICAxOTUsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMjQ3LFxuICAgICAgICAyMjgsXG4gICAgICAgIDg5LFxuICAgICAgICAyNixcbiAgICAgICAgMTk2LFxuICAgICAgICAxOTEsXG4gICAgICAgIDg4LFxuICAgICAgICAyMzksXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAwLFxuICAgICAgICA1MixcbiAgICAgICAgMTcsXG4gICAgICAgIDI4LFxuICAgICAgICA4OCxcbiAgICAgICAgNTFcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwic2lnbmVkUHJlS2V5XCI6IHtcbiAgICBcImtleVBhaXJcIjoge1xuICAgICAgXCJwcml2YXRlXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDE5OCxcbiAgICAgICAgICAyMTAsXG4gICAgICAgICAgNjMsXG4gICAgICAgICAgOSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTM5LFxuICAgICAgICAgIDEwOCxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDIyNyxcbiAgICAgICAgICAxMTQsXG4gICAgICAgICAgMTYyLFxuICAgICAgICAgIDg4LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyNTIsXG4gICAgICAgICAgMjM0LFxuICAgICAgICAgIDI4LFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAyMDMsXG4gICAgICAgICAgMTQsXG4gICAgICAgICAgMTQwLFxuICAgICAgICAgIDYsXG4gICAgICAgICAgMTY5LFxuICAgICAgICAgIDI0NixcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgMTA5LFxuICAgICAgICAgIDIxNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAxMDUsXG4gICAgICAgICAgNjlcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgMTE3LFxuICAgICAgICAgIDU2LFxuICAgICAgICAgIDIzMSxcbiAgICAgICAgICAxMzYsXG4gICAgICAgICAgMTU0LFxuICAgICAgICAgIDIzOCxcbiAgICAgICAgICAyNDMsXG4gICAgICAgICAgMTM4LFxuICAgICAgICAgIDI1LFxuICAgICAgICAgIDU4LFxuICAgICAgICAgIDE4NSxcbiAgICAgICAgICAxODEsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICAyMTcsXG4gICAgICAgICAgMjE1LFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICA0NixcbiAgICAgICAgICAxMjYsXG4gICAgICAgICAgMjU1LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDE3LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAxMjMsXG4gICAgICAgICAgMTEzLFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDExMCxcbiAgICAgICAgICAxMzMsXG4gICAgICAgICAgODNcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyMTQsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTE5LFxuICAgICAgICAxMTMsXG4gICAgICAgIDExMSxcbiAgICAgICAgNDMsXG4gICAgICAgIDEwNixcbiAgICAgICAgMzIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxNSxcbiAgICAgICAgMTEsXG4gICAgICAgIDM0LFxuICAgICAgICAxLFxuICAgICAgICA5OCxcbiAgICAgICAgMTg2LFxuICAgICAgICAxMzIsXG4gICAgICAgIDE0OSxcbiAgICAgICAgMjQ3LFxuICAgICAgICAxODAsXG4gICAgICAgIDE4NixcbiAgICAgICAgNzcsXG4gICAgICAgIDE0MSxcbiAgICAgICAgNTEsXG4gICAgICAgIDE3LFxuICAgICAgICAxNjYsXG4gICAgICAgIDI1MixcbiAgICAgICAgMTYsXG4gICAgICAgIDEzMCxcbiAgICAgICAgMTUxLFxuICAgICAgICAzNCxcbiAgICAgICAgOTMsXG4gICAgICAgIDE1LFxuICAgICAgICA0LFxuICAgICAgICAxNjksXG4gICAgICAgIDIwMixcbiAgICAgICAgODEsXG4gICAgICAgIDkzLFxuICAgICAgICAzOSxcbiAgICAgICAgNzYsXG4gICAgICAgIDU3LFxuICAgICAgICAyMTEsXG4gICAgICAgIDE2OCxcbiAgICAgICAgNDQsXG4gICAgICAgIDIxNyxcbiAgICAgICAgMTgsXG4gICAgICAgIDQzLFxuICAgICAgICAxMDMsXG4gICAgICAgIDE5LFxuICAgICAgICAyMTcsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMTc2LFxuICAgICAgICAxNSxcbiAgICAgICAgMjQzLFxuICAgICAgICAxNzIsXG4gICAgICAgIDEyMCxcbiAgICAgICAgMTA4LFxuICAgICAgICAxODYsXG4gICAgICAgIDE0NixcbiAgICAgICAgNCxcbiAgICAgICAgMTg1LFxuICAgICAgICA0MixcbiAgICAgICAgMTc1LFxuICAgICAgICAxMjlcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDQsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwiSEhnaUNJbHNXM1ZWbG03MHp1MUhwRTRLejNYU0lJejdIQkhiRnBJUitSbz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiM0JDR25fZElUX2FaRjRyNDJpSVhlUVwiLFxuICBcInBob25lSWRcIjogXCJhN2RmODAwNS01MzViLTRlZjAtYTc3Ni1hOWFjMjAxMDg2M2ZcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMjQ2LFxuICAgICAgNjgsXG4gICAgICA5MCxcbiAgICAgIDEwLFxuICAgICAgMjE0LFxuICAgICAgNzMsXG4gICAgICA2NixcbiAgICAgIDEwMSxcbiAgICAgIDE1MCxcbiAgICAgIDQxLFxuICAgICAgMTAzLFxuICAgICAgMTQsXG4gICAgICAyNTEsXG4gICAgICAyMzcsXG4gICAgICA1OSxcbiAgICAgIDEyNyxcbiAgICAgIDIzMyxcbiAgICAgIDUwLFxuICAgICAgMTA2LFxuICAgICAgMjUxXG4gICAgXVxuICB9LFxuICBcInJlZ2lzdGVyZWRcIjogdHJ1ZSxcbiAgXCJiYWNrdXBUb2tlblwiOiB7XG4gICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgXCJkYXRhXCI6IFtcbiAgICAgIDE5MixcbiAgICAgIDczLFxuICAgICAgMTQ0LFxuICAgICAgMTgwLFxuICAgICAgMTI1LFxuICAgICAgMTE2LFxuICAgICAgMTIzLFxuICAgICAgMTY4LFxuICAgICAgNDAsXG4gICAgICAxNjksXG4gICAgICA0MSxcbiAgICAgIDE4NSxcbiAgICAgIDgxLFxuICAgICAgMTk0LFxuICAgICAgMTcxLFxuICAgICAgNzQsXG4gICAgICAzOCxcbiAgICAgIDIyNCxcbiAgICAgIDE1LFxuICAgICAgNDhcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiTUZQQVkyUzhcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjIzNDgxMjU2NDI0MTY6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcIm5hbWVcIjogXCJf4LySW05VWCBTQVZBR0Vd4LySXCIsXG4gICAgXCJsaWRcIjogXCIxNTQ1NzIwODEzNjUxMjE6OTRAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDT1NVM09FSEVMUDJuN3NHR0FJZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCIzZzlrenlselBIWWJRakFyamQzaFhTOU5aWEVhK3dTWG5RekRpYlFPTlJrPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjlxMnJQWTU1WFJPRE91MVFLR05FQ3VvQkc2Sm9zUmdnd3VWMEY2Nm1iR2xTT01VUllzL0hhWnFPdWRTQjRaZnRBdTdUWFB1OHc5T0tLVGVYUjlTSERBPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInFMejVySW1ZdXpGREJzTk9RWHMzN1RkaXVkTFNZaFluTTNaR0RxRUlwOWhnNzQyRVV4bW5rMGhWY1VjSFRYbWNpZTV5QTJ1S0JKOVZwODV2UWkvamhBPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjIzNDgxMjU2NDI0MTY6OTRAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTUsXG4gICAgICAgICAgMTAwLFxuICAgICAgICAgIDIwNyxcbiAgICAgICAgICA0MSxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgNjAsXG4gICAgICAgICAgMTE4LFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDY2LFxuICAgICAgICAgIDQ4LFxuICAgICAgICAgIDQzLFxuICAgICAgICAgIDE0MSxcbiAgICAgICAgICAyMjEsXG4gICAgICAgICAgMjI1LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDEwMSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgMjYsXG4gICAgICAgICAgMjUxLFxuICAgICAgICAgIDQsXG4gICAgICAgICAgMTUxLFxuICAgICAgICAgIDE1NyxcbiAgICAgICAgICAxMixcbiAgICAgICAgICAxOTUsXG4gICAgICAgICAgMTM3LFxuICAgICAgICAgIDE4MCxcbiAgICAgICAgICAxNCxcbiAgICAgICAgICA1MyxcbiAgICAgICAgICAyNVxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwic21iYVwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzM0ODY3NzY4LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBQlc5XCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFCVzkuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJwVEVkU0tnalBNaU5XWHlGdExvR0ppbW1qVGJSVUthNzJnN1ZVSkJsQmI4PVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjIwODM5ODE5MjMsXCJjdXJyZW50SW5kZXhcIjoxLFwiZGV2aWNlSW5kZXhlc1wiOlswXX0sXCJ0aW1lc3RhbXBcIjpcIjE3MzQ3MzUyNDI3NDJcIn0iCn0="  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || "!",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.9",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ sᴜʜᴀɪʟ²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "NUX SAVAGE",
  packname: process.env.PACK_NAME || "NUX SAVAGE",
  botname : process.env.BOT_NAME  || "SAVAGE",
  ownername:process.env.OWNER_NAME|| "NUX SAVAGE",


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
