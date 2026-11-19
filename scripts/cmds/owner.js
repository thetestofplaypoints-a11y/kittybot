const fs = require("fs-extra");
const request = require("request");
const path = require("path");

module.exports = {
  config: {
    name: "owner",
    version: "1.3.0",
    author: "Mᴏʜᴀᴍᴍᴀᴅ Aᴋᴀsʜ",
    role: 0,
    shortDescription: "Owner information with image",
    category: "Information",
    guide: {
      en: "owner"
    }
  },

  onStart: async function ({ api, event }) {
    const ownerText = 
`╭─ 👑 Oᴡɴᴇʀ Iɴғᴏ 👑 ─╮
│ 👤 Nᴀᴍᴇ       : ⏤͟͟͞͞𝐎ᴡɴᴇʀ~𝐅ᴀʜᴀᴅ亗
│ 🧸 Nɪᴄᴋ       : 𝐅ᴀʜᴀᴅ
│ 🎂 Aɢᴇ        : 17+
│ 💘 Rᴇʟᴀᴛɪᴏɴ : 💍 𝗠𝗮𝗿𝗿𝗶𝗲𝗱 ✨
│ 🎓 Pʀᴏғᴇssɪᴏɴ : ꜱᴛᴜᴅᴇɴᴛ📚
│ 📚 Eᴅᴜᴄᴀᴛɪᴏɴ : SSC -2025
│ 🏡 Lᴏᴄᴀᴛɪᴏɴ : 𝐊𝐢𝐬𝐡𝐨𝐫𝐞𝐠𝐚𝐧𝐣
├─ 🔗 Cᴏɴᴛᴀᴄᴛ ─╮
│ 📘 Facebook  : https://www.facebook.com/share/1NA3gBfCtw/
│ 💬 Messenger: m.me/61596141283707
│ 📞 WhatsApp  : 01747374686
╰────────────────╯`;

    const cacheDir = path.join(__dirname, "cache");
    const imgPath = path.join(cacheDir, "owner.jpg");

    if (!fs.existsSync(cacheDir)) fs.mkdirSync(cacheDir);

    const imgLink = "https://imgur.com/a/kxlV3zg";

    const send = () => {
      api.sendMessage(
        {
          body: ownerText,
          attachment: fs.createReadStream(imgPath)
        },
        event.threadID,
        () => fs.unlinkSync(imgPath),
        event.messageID
      );
    };

    request(encodeURI(imgLink))
      .pipe(fs.createWriteStream(imgPath))
      .on("close", send);
  }
};
