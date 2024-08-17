chrome.runtime.onInstalled.addListener(() => {
  chrome.contextMenus.create({
    id: "textConverter",
    title: "Convert Text",
    contexts: ["selection"]
  });

  const formats = [
    "pigLatin", "leetSpeak", "reverse", "morseCode", "sarcasm",
    "base64", "hexadecimal", "rot13", "atbash", "caesarCipher", 
    "base32", "binary", "urlEncode", "emojiSubstitution", "soundex",
    "bracketed", "zAlgo", "vigenere", "asciiArt", "doublespeak",
    "customSymbols", "numeralConversion", "textualEncoding"
  ];

  formats.forEach(format => {
    chrome.contextMenus.create({
      id: format,
      parentId: "textConverter",
      title: `to ${format.charAt(0).toUpperCase() + format.slice(1)}`,
      contexts: ["selection"]
    });
  });
});

chrome.contextMenus.onClicked.addListener((info, tab) => {
  if (info.parentMenuItemId === "textConverter") {
    chrome.tabs.sendMessage(tab.id, { 
      action: "convert", 
      format: info.menuItemId
    });
  }
});
