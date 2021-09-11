const discord = async () => {
  message.delete().catch(console.error);
  return message.author
    .createDM()
    .the((ch) => ch.send("MP"))
    .catch(() => message.reply("message serve"));
};

export default discord;
