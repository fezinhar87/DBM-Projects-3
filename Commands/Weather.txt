{
  "name": "Weather",
  "permissions": "NONE",
  "restriction": "1",
  "actions": [
    {
      "storage": "0",
      "varName": "",
      "EliteArtzIsPro": "0",
      "name": "Bot Typing"
    },
    {
      "condition": "0",
      "comparison": "0",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "2",
      "iffalseVal": "18",
      "name": "Check Parameters"
    },
    {
      "info": "0",
      "infoIndex": "1",
      "storage": "1",
      "varName": "input",
      "name": "Store Command Params"
    },
    {
      "city": "${tempVars(\"input\")}",
      "degreeType": "C",
      "info": "3",
      "storage": "1",
      "varName": "city",
      "name": "Weather"
    },
    {
      "city": "${tempVars(\"city\")}",
      "degreeType": "C",
      "info": "4",
      "storage": "1",
      "varName": "country",
      "name": "Weather"
    },
    {
      "city": "${tempVars(\"city\")}",
      "degreeType": "C",
      "info": "0",
      "storage": "1",
      "varName": "temperature",
      "name": "Weather"
    },
    {
      "city": "${tempVars(\"city\")}",
      "degreeType": "C",
      "info": "1",
      "storage": "1",
      "varName": "text",
      "name": "Weather"
    },
    {
      "city": "${tempVars(\"city\")}",
      "degreeType": "C",
      "info": "8",
      "storage": "1",
      "varName": "angle",
      "name": "Weather"
    },
    {
      "into": "1",
      "vAria": "${tempVars(\"city\")}",
      "storage": "1",
      "varName2": "check",
      "name": "Convert a Variable"
    },
    {
      "storage": "1",
      "varName": "check",
      "comparison": "6",
      "value": "undefined",
      "iftrue": "2",
      "iftrueVal": "18",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Variable"
    },
    {
      "title": "",
      "author": "Current weather in ${tempVars(\"city\")} - ${tempVars(\"country\")}",
      "color": "BLUE",
      "timestamp": "true",
      "url": "",
      "authorIcon": "http://files.softicons.com/download/web-icons/vector-stylish-weather-icons-by-bartosz-kaszubowski/png/256x256/sun.big.cloud.drizzle.png",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "send",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "send",
      "fieldName": "Temperature",
      "message": "${tempVars(\"temperature\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "send",
      "fieldName": "Description",
      "message": "${tempVars(\"text\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "send",
      "fieldName": "Wind angle",
      "message": "${tempVars(\"angle\")}°",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "send",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "EliteArtzIsPro": "1",
      "name": "Bot Typing"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "title": "",
      "author": "",
      "color": "RED",
      "timestamp": "true",
      "url": "",
      "authorIcon": "",
      "imageUrl": "",
      "thumbUrl": "",
      "storage": "1",
      "varName": "error",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "error",
      "message": ":x: Please specify a valid city!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "error",
      "message": "Error: city input not found",
      "footerIcon": "",
      "name": "Set Embed Footer"
    },
    {
      "storage": "1",
      "varName": "error",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "EliteArtzIsPro": "1",
      "name": "Bot Typing"
    },
    {
      "name": "End Action Sequence"
    }
  ],
  "_id": "CyVSY"
}