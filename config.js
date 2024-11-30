const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT 
global.appUrl=process.env.APP_URL || ""     // put your deploy app/bot url here, for 24/7 for (render , koyeb, glitch)
global.email ="saimsamsun789@gmail.com"
global.location="Lahore,Pakistan."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "mongodb+srv://mohsin:mohsin@cluster0.iauaztt.mongodb.net/?retryWrites=true&w=majority"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Asia/Karachi";
global.github=process.env.GITHUB|| "https://github.com/GlobalTechInfo/SUHAIL-XMD";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029VagJIAr3bbVBCpEkAM07" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.ibb.co/TgwRyHR/Ephoto360-com-166de101e03cd7.jpg" || "https://i.ibb.co/bH1kbX0/a4c0b1af253197d4837ff6760d5b81c0.jpg" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "© GlobalTechInfo" 


global.devs = "" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "+94729795605";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || Math.floor(Math.random()*3)  === 1 ?  "true" : "true" ;  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.ibb.co/pXyNHj8/suhail.jpg" // "image" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "true"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923444844060,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID  || "SUHAIL_16_30_11_30_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMjA4LFxuICAgICAgICA2MixcbiAgICAgICAgMjQsXG4gICAgICAgIDI0MSxcbiAgICAgICAgMjAwLFxuICAgICAgICAxMDksXG4gICAgICAgIDY0LFxuICAgICAgICAxODgsXG4gICAgICAgIDk4LFxuICAgICAgICAyNyxcbiAgICAgICAgMTYyLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE5MixcbiAgICAgICAgOSxcbiAgICAgICAgOTQsXG4gICAgICAgIDExNSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MixcbiAgICAgICAgNzIsXG4gICAgICAgIDE5LFxuICAgICAgICAyMjcsXG4gICAgICAgIDI0MyxcbiAgICAgICAgODAsXG4gICAgICAgIDEzNSxcbiAgICAgICAgOTYsXG4gICAgICAgIDg0LFxuICAgICAgICAxOTAsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTQ0LFxuICAgICAgICAyMyxcbiAgICAgICAgNjgsXG4gICAgICAgIDEyNlxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzQsXG4gICAgICAgIDE4NixcbiAgICAgICAgMTIzLFxuICAgICAgICA4OCxcbiAgICAgICAgOSxcbiAgICAgICAgMTc0LFxuICAgICAgICAyNTUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTA1LFxuICAgICAgICAxMTcsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTM4LFxuICAgICAgICAxMDEsXG4gICAgICAgIDE3NSxcbiAgICAgICAgMTAyLFxuICAgICAgICAxMzUsXG4gICAgICAgIDE1NCxcbiAgICAgICAgMTkzLFxuICAgICAgICAxNTMsXG4gICAgICAgIDIzMyxcbiAgICAgICAgMyxcbiAgICAgICAgMTU1LFxuICAgICAgICA3NCxcbiAgICAgICAgMjksXG4gICAgICAgIDEwNyxcbiAgICAgICAgMzMsXG4gICAgICAgIDY0LFxuICAgICAgICA1MSxcbiAgICAgICAgMzMsXG4gICAgICAgIDEzNixcbiAgICAgICAgOTNcbiAgICAgIF1cbiAgICB9XG4gIH0sXG4gIFwicGFpcmluZ0VwaGVtZXJhbEtleVBhaXJcIjoge1xuICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgIDMyLFxuICAgICAgICAyMDUsXG4gICAgICAgIDUxLFxuICAgICAgICAxNTksXG4gICAgICAgIDcxLFxuICAgICAgICA4MixcbiAgICAgICAgMTg2LFxuICAgICAgICA4MyxcbiAgICAgICAgODMsXG4gICAgICAgIDIyMCxcbiAgICAgICAgMjIwLFxuICAgICAgICAxMzEsXG4gICAgICAgIDE4OCxcbiAgICAgICAgMTkzLFxuICAgICAgICAzMyxcbiAgICAgICAgMjYsXG4gICAgICAgIDE5LFxuICAgICAgICAyMDIsXG4gICAgICAgIDk3LFxuICAgICAgICAxNzAsXG4gICAgICAgIDE2NSxcbiAgICAgICAgMjE4LFxuICAgICAgICAxNzEsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTQsXG4gICAgICAgIDEyNixcbiAgICAgICAgMjE2LFxuICAgICAgICA0NSxcbiAgICAgICAgNDcsXG4gICAgICAgIDE3MCxcbiAgICAgICAgMTM5LFxuICAgICAgICAxMjVcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTEzLFxuICAgICAgICAxMixcbiAgICAgICAgMjUzLFxuICAgICAgICAyMDgsXG4gICAgICAgIDIsXG4gICAgICAgIDE0LFxuICAgICAgICAyMzAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTksXG4gICAgICAgIDY1LFxuICAgICAgICAxNDEsXG4gICAgICAgIDExLFxuICAgICAgICAxNTMsXG4gICAgICAgIDcxLFxuICAgICAgICAzNCxcbiAgICAgICAgMTcxLFxuICAgICAgICAxMDksXG4gICAgICAgIDEyOCxcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTcsXG4gICAgICAgIDE2NCxcbiAgICAgICAgMTczLFxuICAgICAgICA3NSxcbiAgICAgICAgMjAxLFxuICAgICAgICAxNTYsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMTkzLFxuICAgICAgICA4OSxcbiAgICAgICAgMjA4LFxuICAgICAgICAxMjMsXG4gICAgICAgIDQ2XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxNjgsXG4gICAgICAgIDE3MyxcbiAgICAgICAgNTMsXG4gICAgICAgIDE1OSxcbiAgICAgICAgNDgsXG4gICAgICAgIDE0NCxcbiAgICAgICAgMTg0LFxuICAgICAgICAxMTEsXG4gICAgICAgIDg3LFxuICAgICAgICAxMjksXG4gICAgICAgIDQzLFxuICAgICAgICAxMTksXG4gICAgICAgIDE2MSxcbiAgICAgICAgMTY5LFxuICAgICAgICA5NCxcbiAgICAgICAgMTYsXG4gICAgICAgIDE3NCxcbiAgICAgICAgMzQsXG4gICAgICAgIDQwLFxuICAgICAgICAxNzUsXG4gICAgICAgIDIzOCxcbiAgICAgICAgMTIzLFxuICAgICAgICA2NSxcbiAgICAgICAgMjIsXG4gICAgICAgIDE0MixcbiAgICAgICAgMTM0LFxuICAgICAgICA4NCxcbiAgICAgICAgMjI2LFxuICAgICAgICAyNDcsXG4gICAgICAgIDcxLFxuICAgICAgICAzOCxcbiAgICAgICAgNzRcbiAgICAgIF1cbiAgICB9LFxuICAgIFwicHVibGljXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgNjMsXG4gICAgICAgIDI1NSxcbiAgICAgICAgMjAwLFxuICAgICAgICA5MixcbiAgICAgICAgMjU0LFxuICAgICAgICAyMjIsXG4gICAgICAgIDIxNixcbiAgICAgICAgMTcyLFxuICAgICAgICAyNixcbiAgICAgICAgNTgsXG4gICAgICAgIDE2NixcbiAgICAgICAgMjQyLFxuICAgICAgICAyNixcbiAgICAgICAgOTUsXG4gICAgICAgIDE3MyxcbiAgICAgICAgMTE3LFxuICAgICAgICAxODcsXG4gICAgICAgIDIyNSxcbiAgICAgICAgNTAsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAwLFxuICAgICAgICAxNTUsXG4gICAgICAgIDg4LFxuICAgICAgICAyMDYsXG4gICAgICAgIDQyLFxuICAgICAgICAyMTIsXG4gICAgICAgIDIzNSxcbiAgICAgICAgNzQsXG4gICAgICAgIDUyLFxuICAgICAgICA5NCxcbiAgICAgICAgNDcsXG4gICAgICAgIDYwXG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZFByZUtleVwiOiB7XG4gICAgXCJrZXlQYWlyXCI6IHtcbiAgICAgIFwicHJpdmF0ZVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDEyMCxcbiAgICAgICAgICAxMTUsXG4gICAgICAgICAgMTYwLFxuICAgICAgICAgIDIzNSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAzLFxuICAgICAgICAgIDEwNCxcbiAgICAgICAgICA4MCxcbiAgICAgICAgICAyLFxuICAgICAgICAgIDI3LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICA3LFxuICAgICAgICAgIDYxLFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICAxMDgsXG4gICAgICAgICAgMTEyLFxuICAgICAgICAgIDEyOSxcbiAgICAgICAgICAxOSxcbiAgICAgICAgICA0NSxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxOTMsXG4gICAgICAgICAgMjcsXG4gICAgICAgICAgMTc2LFxuICAgICAgICAgIDExLFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE4MixcbiAgICAgICAgICA3NixcbiAgICAgICAgICAyMDksXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDExMVxuICAgICAgICBdXG4gICAgICB9LFxuICAgICAgXCJwdWJsaWNcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICA3OCxcbiAgICAgICAgICAxNjYsXG4gICAgICAgICAgMTk3LFxuICAgICAgICAgIDI1MyxcbiAgICAgICAgICA3NCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMzEsXG4gICAgICAgICAgMSxcbiAgICAgICAgICA3MixcbiAgICAgICAgICAxODMsXG4gICAgICAgICAgMTE5LFxuICAgICAgICAgIDc3LFxuICAgICAgICAgIDIwNixcbiAgICAgICAgICAxMjAsXG4gICAgICAgICAgMTY3LFxuICAgICAgICAgIDEwOSxcbiAgICAgICAgICAyMzIsXG4gICAgICAgICAgOTUsXG4gICAgICAgICAgMjQ0LFxuICAgICAgICAgIDI0MixcbiAgICAgICAgICAyMjIsXG4gICAgICAgICAgMTMwLFxuICAgICAgICAgIDQ0LFxuICAgICAgICAgIDEzMyxcbiAgICAgICAgICAzOSxcbiAgICAgICAgICAzNyxcbiAgICAgICAgICAxOTYsXG4gICAgICAgICAgMTkxLFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAxMTgsXG4gICAgICAgICAgMjA1LFxuICAgICAgICAgIDYzXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9LFxuICAgIFwic2lnbmF0dXJlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTk2LFxuICAgICAgICAxMzksXG4gICAgICAgIDIsXG4gICAgICAgIDczLFxuICAgICAgICAxODAsXG4gICAgICAgIDIwOCxcbiAgICAgICAgMTk5LFxuICAgICAgICAxNDksXG4gICAgICAgIDIwMSxcbiAgICAgICAgMTM2LFxuICAgICAgICAyMjIsXG4gICAgICAgIDEzOCxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMDIsXG4gICAgICAgIDEzNCxcbiAgICAgICAgNTYsXG4gICAgICAgIDIxLFxuICAgICAgICAyMDYsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMyxcbiAgICAgICAgMjIwLFxuICAgICAgICA4MixcbiAgICAgICAgMTIsXG4gICAgICAgIDQ0LFxuICAgICAgICAzMyxcbiAgICAgICAgMzEsXG4gICAgICAgIDIyMyxcbiAgICAgICAgMTAzLFxuICAgICAgICAyMTMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgOCxcbiAgICAgICAgMCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4OSxcbiAgICAgICAgMzEsXG4gICAgICAgIDE1NyxcbiAgICAgICAgMTY5LFxuICAgICAgICAxOSxcbiAgICAgICAgMjA0LFxuICAgICAgICAyOCxcbiAgICAgICAgMTc0LFxuICAgICAgICAxNjYsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTczLFxuICAgICAgICA0MCxcbiAgICAgICAgMixcbiAgICAgICAgMTQzLFxuICAgICAgICAyMTEsXG4gICAgICAgIDI5LFxuICAgICAgICAxMzksXG4gICAgICAgIDIyLFxuICAgICAgICAzMCxcbiAgICAgICAgMTUsXG4gICAgICAgIDU4LFxuICAgICAgICA1OCxcbiAgICAgICAgNzEsXG4gICAgICAgIDEwMyxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMzMsXG4gICAgICAgIDEwOSxcbiAgICAgICAgOTksXG4gICAgICAgIDIwNixcbiAgICAgICAgMTA2LFxuICAgICAgICAxMjhcbiAgICAgIF1cbiAgICB9LFxuICAgIFwia2V5SWRcIjogMVxuICB9LFxuICBcInJlZ2lzdHJhdGlvbklkXCI6IDI1MixcbiAgXCJhZHZTZWNyZXRLZXlcIjogXCJyWklpc2tLTmFUL1lkMlR6K21TWHFlZ09kS09FazBjOEt3dnd3L1dTcEJFPVwiLFxuICBcInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlc1wiOiBbXG4gICAge1xuICAgICAgXCJrZXlcIjoge1xuICAgICAgICBcInJlbW90ZUppZFwiOiBcIjk0NzI5Nzk1NjA1QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZnJvbU1lXCI6IHRydWUsXG4gICAgICAgIFwiaWRcIjogXCJENzcwNkU4NTM1N0JCQjE5M0VDRjY5NzM3MEU2NEFBRFwiXG4gICAgICB9LFxuICAgICAgXCJtZXNzYWdlVGltZXN0YW1wXCI6IDE3MzI5ODQyNDBcbiAgICB9XG4gIF0sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwiMjJSZXNYNm5Sa0tuUWU2bGh3QU9lUVwiLFxuICBcInBob25lSWRcIjogXCJjMmMxMDRmOC0yOTY1LTQ5MWMtOWU3NS0wNDJhOTRhMjljOGFcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgMTcxLFxuICAgICAgMTgzLFxuICAgICAgMTAwLFxuICAgICAgMTIsXG4gICAgICAxMTUsXG4gICAgICAxNzQsXG4gICAgICAyNTIsXG4gICAgICAyMDEsXG4gICAgICAyMjIsXG4gICAgICAzOSxcbiAgICAgIDU3LFxuICAgICAgNzYsXG4gICAgICAxOTAsXG4gICAgICA0LFxuICAgICAgMTY1LFxuICAgICAgNTcsXG4gICAgICAxOTcsXG4gICAgICAxNDIsXG4gICAgICAxOSxcbiAgICAgIDE1M1xuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAyMjcsXG4gICAgICAxNjEsXG4gICAgICA3MyxcbiAgICAgIDE4MCxcbiAgICAgIDI2LFxuICAgICAgODIsXG4gICAgICAxOTUsXG4gICAgICAxMDIsXG4gICAgICA1MSxcbiAgICAgIDI1NSxcbiAgICAgIDIyNSxcbiAgICAgIDE5MixcbiAgICAgIDY2LFxuICAgICAgMTYzLFxuICAgICAgMixcbiAgICAgIDE1MixcbiAgICAgIDEyNixcbiAgICAgIDkxLFxuICAgICAgMjksXG4gICAgICAyMjVcbiAgICBdXG4gIH0sXG4gIFwicmVnaXN0cmF0aW9uXCI6IHt9LFxuICBcInBhaXJpbmdDb2RlXCI6IFwiSEpGRVo4WTFcIixcbiAgXCJtZVwiOiB7XG4gICAgXCJpZFwiOiBcIjk0NzI5Nzk1NjA1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgXCJsaWRcIjogXCIxMzUzNzgwMDY3NTc1ODI6MjZAbGlkXCJcbiAgfSxcbiAgXCJhY2NvdW50XCI6IHtcbiAgICBcImRldGFpbHNcIjogXCJDUHUweHNBRkVLZjdyTG9HR0FNZ0FDZ0FcIixcbiAgICBcImFjY291bnRTaWduYXR1cmVLZXlcIjogXCJlU2t6aWdZcVR1M2lGcGhyMm1zWU42ZTRXTzJ4ek56ZG00NnJKbGhVSVJZPVwiLFxuICAgIFwiYWNjb3VudFNpZ25hdHVyZVwiOiBcIjRUaVdRSkt1RlNnVVBKS2lVdkIxOFVkV0w5V3drK3Z5OFFnUTdTT1NWTkUwbFQ3TDg3RzFsbW42c1NrZ0ZIM0JScy9BM3NFQzRiRFVsU215YzlOQURRPT1cIixcbiAgICBcImRldmljZVNpZ25hdHVyZVwiOiBcInp1alliRUhRaGFkdFJscm80WG9KTEFoQW4ycE5xUzFlU3JkeWZaWW9GSFA5c3FMeWtWWEJWYkFwVDZMajJ0UXpEVlNiS1ZNVVZFbHVWTjVFWXhhYmdnPT1cIlxuICB9LFxuICBcInNpZ25hbElkZW50aXRpZXNcIjogW1xuICAgIHtcbiAgICAgIFwiaWRlbnRpZmllclwiOiB7XG4gICAgICAgIFwibmFtZVwiOiBcIjk0NzI5Nzk1NjA1OjI2QHMud2hhdHNhcHAubmV0XCIsXG4gICAgICAgIFwiZGV2aWNlSWRcIjogMFxuICAgICAgfSxcbiAgICAgIFwiaWRlbnRpZmllcktleVwiOiB7XG4gICAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgICBcImRhdGFcIjogW1xuICAgICAgICAgIDUsXG4gICAgICAgICAgMTIxLFxuICAgICAgICAgIDQxLFxuICAgICAgICAgIDUxLFxuICAgICAgICAgIDEzOCxcbiAgICAgICAgICA2LFxuICAgICAgICAgIDQyLFxuICAgICAgICAgIDc4LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMjYsXG4gICAgICAgICAgMjIsXG4gICAgICAgICAgMTUyLFxuICAgICAgICAgIDEwNyxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTA3LFxuICAgICAgICAgIDI0LFxuICAgICAgICAgIDU1LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICAxODQsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgMjM3LFxuICAgICAgICAgIDE3NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMjIwLFxuICAgICAgICAgIDIyMSxcbiAgICAgICAgICAxNTUsXG4gICAgICAgICAgMTQyLFxuICAgICAgICAgIDE3MSxcbiAgICAgICAgICAzOCxcbiAgICAgICAgICA4OCxcbiAgICAgICAgICA4NCxcbiAgICAgICAgICAzMyxcbiAgICAgICAgICAyMlxuICAgICAgICBdXG4gICAgICB9XG4gICAgfVxuICBdLFxuICBcInBsYXRmb3JtXCI6IFwiYW5kcm9pZFwiLFxuICBcImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcFwiOiAxNzMyOTg0MjM2LFxuICBcIm15QXBwU3RhdGVLZXlJZFwiOiBcIkFBQUFBR0NZXCJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktQUFBQUFHQ1kuanNvbiI6ICJ7XCJrZXlEYXRhXCI6XCJrWEN3dDUzYmVqL1lLbDJhR3FmQWhwT25ZUGpydzl3bHFWWlc3ZmdoYUEwPVwiLFwiZmluZ2VycHJpbnRcIjp7XCJyYXdJZFwiOjE0Nzc1NDg2NjIsXCJjdXJyZW50SW5kZXhcIjo0LFwiZGV2aWNlSW5kZXhlc1wiOlswLDEsMl19LFwidGltZXN0YW1wXCI6XCIwXCJ9Igp9"  // PUT your SESSION_ID 


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.0.1-developement-x",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ GlobalTechInfo ® 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@GlobalTechInfo"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "Suhail-XMD",
  ownername:process.env.OWNER_NAME|| "Suhail-X",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "yepeTQaFk7r9ymusihgXYvdN",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "0cdb1aed858329b9793413672094ce0d";
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
