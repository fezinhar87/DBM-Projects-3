{
  "name": "poll",
  "permissions": "NONE",
  "restriction": "1",
  "_id": "txsSB",
  "actions": [
    {
      "info": "1",
      "infoIndex": "1",
      "storage": "1",
      "varName": "Votetext",
      "name": "Store Command Params"
    },
    {
      "condition": "0",
      "comparison": "2",
      "value": "0",
      "iftrue": "2",
      "iftrueVal": "5",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Check Parameters"
    },
    {
      "channel": "0",
      "varName": "",
      "message": "Your poll needs 4 options entered in EXACT format below:\nExample\n```css\n#poll4 \nA) Do you want\nB) to see everything\nC) on seperate lines?\nD) then do it like this.\n```",
      "storage": "0",
      "varName2": "",
      "iffalse": "0",
      "iffalseVal": "",
      "name": "Send Message"
    },
    {
      "name": "End Action Sequence"
    },
    {
      "member": "1",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "CommandAuthor",
      "name": "Store Member Info"
    },
    {
      "member": "1",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "AuthorURLAvatar",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "3",
      "storage": "1",
      "varName2": "MentionMemberDisplayName",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "2",
      "storage": "1",
      "varName2": "MembersRealUsername",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "1",
      "storage": "1",
      "varName2": "MemberID",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "15",
      "storage": "1",
      "varName2": "MemberStatus",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "14",
      "storage": "1",
      "varName2": "MemberGame",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "16",
      "storage": "1",
      "varName2": "MemberURLAvatar",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "5",
      "storage": "1",
      "varName2": "MemberServer",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "17",
      "storage": "1",
      "varName2": "MemberRoles",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "10",
      "storage": "1",
      "varName2": "MemberOwnsChannel",
      "name": "Store Member Info"
    },
    {
      "member": "0",
      "varName": "",
      "info": "0",
      "storage": "1",
      "varName2": "MemberObject",
      "name": "Store Member Info"
    },
    {
      "title": "${tempVars(\"CommandAuthor\")} created a poll. Vote using the reactions at bottom.",
      "author": "${tempVars(\"CommandAuthor\")}",
      "color": "#ffffff",
      "timestamp": "true",
      "url": "https://www.protoballgame.com",
      "authorIcon": "${tempVars(\"AuthorURLAvatar\")}",
      "imageUrl": "",
      "thumbUrl": "${tempVars(\"AuthorURLAvatar\")}",
      "storage": "1",
      "varName": "Vote",
      "name": "Create Embed Message"
    },
    {
      "storage": "1",
      "varName": "Vote",
      "fieldName": "Vote is for",
      "message": "${tempVars(\"Votetext\")}",
      "inline": "0",
      "name": "Add Embed Field"
    },
    {
      "storage": "1",
      "varName": "Vote",
      "channel": "0",
      "varName2": "",
      "name": "Send Embed Message"
    },
    {
      "storage": "0",
      "varName": "",
      "name": "Delete Message"
    },
    {
      "channel": "0",
      "varName": "",
      "info": "4",
      "storage": "1",
      "varName2": "LastPollMessage",
      "name": "Store Channel Info"
    },
    {
      "storage": "1",
      "varName": "LastPollMessage",
      "emoji": "4",
      "varName2": "🇦",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "LastPollMessage",
      "emoji": "4",
      "varName2": "🇧",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "LastPollMessage",
      "emoji": "4",
      "varName2": "🇨",
      "varName3": "",
      "name": "Add Reaction"
    },
    {
      "storage": "1",
      "varName": "LastPollMessage",
      "emoji": "4",
      "varName2": "🇩",
      "varName3": "",
      "name": "Add Reaction"
    }
  ],
  "comType": "0"
}