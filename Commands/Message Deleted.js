{
  "name": "message_deleted",
  "temp": "message",
  "event-type": "18",
  "_id": "XpYuO",
  "actions": [
    {
      "server": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "server",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "defaultVal": "1",
      "storage": "1",
      "varName2": "isenabled",
      "name": "Store Server Data"
    },
    {
      "behavior": "1",
      "interpretation": "1",
      "code": "\ntempVars(\"server\").fetchAuditLogs()\n  .then(audit => {\nthis.storeValue(audit.entries.first().executor, 1, \"delby\", cache);\nthis.callNextAction(cache);\n}).catch(console.error);\n",
      "storage": "0",
      "varName": "delby",
      "name": "Run Script"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "isenabled9",
      "comparison": "1",
      "value": "1",
      "iftrue": "0",
      "iftrueVal": "",
      "iffalse": "1",
      "iffalseVal": "",
      "name": "Check Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "logcount",
      "name": "Store Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "log_system",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "server_name",
      "name": "Store Server Info"
    },
    {
      "server": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "server_id",
      "name": "Store Server Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "2",
      "storage": "1",
      "varName2": "text",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "author",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "4",
      "storage": "1",
      "varName2": "channel",
      "name": "Store Message Info"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "6",
      "storage": "1",
      "varName2": "mention_count",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "5",
      "storage": "1",
      "varName2": "mention_list",
      "name": "Store Message Things"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "3",
      "storage": "1",
      "varName2": "everyone_ping",
      "name": "Store Message Things"
    },
    {
      "member": "2",
      "varName": "author",
      "info": "16",
      "storage": "1",
      "varName2": "avatar",
      "name": "Store Member Info"
    },
    {
      "member": "2",
      "varName": "author",
      "info": "7",
      "storage": "1",
      "varName2": "tag",
      "name": "Store Member Things"
    },
    {
      "message": "1",
      "varName": "message",
      "info": "5",
      "storage": "1",
      "varName2": "delat",
      "name": "Store Message Info"
    },
    {
      "time": "${tempVars(\"delat\")}",
      "storage": "1",
      "varName": "delat",
      "name": "Convert Timestamp to Date"
    },
    {
      "title": "",
      "author": "${tempVars(\"tag\")}",
      "color": "",
      "timestamp": "true",
      "url": "",
      "authorIcon": "${tempVars(\"avatar\")}",
      "imageUrl": "",
      "thumbUrl": "https://imgur.com/fwY29Yz.png",
      "storage": "1",
      "varName": "embed",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "embed",
      "message": "A message has been deleted!",
      "name": "Set Embed Description"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Deleted Message",
      "message": "${tempVars(\"text\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Deleted in",
      "message": "${tempVars(\"channel\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Deleted By",
      "message": "${tempVars(\"delby\")} ** **",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Message Author",
      "message": "${tempVars(\"author\")} // ${tempVars(\"tag\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "everyone_ping",
      "comparison": "0",
      "value": "",
      "iftrue": "3",
      "iftrueVal": "2",
      "iffalse": "0",
      "iffalseVal": "2",
      "name": "Check Variable"
    },
    {
      "storage": "1",
      "varName": "ping",
      "changeType": "0",
      "value": "\"❌\"",
      "name": "Control Variable"
    },
    {
      "call": "29",
      "name": "Jump to Action"
    },
    {
      "storage": "1",
      "varName": "ping",
      "changeType": "0",
      "value": "\"✅\"",
      "name": "Control Variable"
    },
    {
      "storage": "1",
      "varName": "embed",
      "fieldName": "Other Information",
      "message": "Has `@everyone` ping? ${tempVars(\"ping\")} \nServer Name: **${tempVars(\"server_name\")}**\nServer ID: **${tempVars(\"server_id\")}**\nMentioned Member count: **${tempVars(\"mention_count\")}**\nList of Mentioned Users: \n${tempVars(\"mention_list\")}\nDeleted Time ${tempVars(\"delat\")} ** **",
      "inline": "1",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "embed",
      "channel": "6",
      "varName2": "mlchannel",
      "storage3": "0",
      "varName3": "",
      "name": "Send Embed Message"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "deleted_count",
      "changeType": "1",
      "value": "1",
      "name": "Control Server Data"
    },
    {
      "server": "0",
      "varName": "",
      "dataName": "deleted_count",
      "defaultVal": "0",
      "storage": "1",
      "varName2": "delcount",
      "name": "Store Server Data"
    }
  ]
}