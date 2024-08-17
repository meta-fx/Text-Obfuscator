function convertToPigLatin(text) {
  return text.replace(/\b(\w)(\w+)\b/g, (_, first, rest) => {
    return rest + first + "ay";
  });
}

function convertToLeetSpeak(text) {
  const leetMap = {
    a: "4", e: "3", g: "6", i: "1", o: "0", s: "5", t: "7"
  };
  return text.toLowerCase().replace(/[aegiost]/g, char => leetMap[char] || char);
}

function reverseText(text) {
  return text.split('').reverse().join('');
}

function convertToMorseCode(text) {
  const morseMap = {
    'A': '.-', 'B': '-...', 'C': '-.-.', 'D': '-..', 'E': '.', 'F': '..-.',
    'G': '--.', 'H': '....', 'I': '..', 'J': '.---', 'K': '-.-', 'L': '.-..',
    'M': '--', 'N': '-.', 'O': '---', 'P': '.--.', 'Q': '--.-', 'R': '.-.',
    'S': '...', 'T': '-', 'U': '..-', 'V': '...-', 'W': '.--', 'X': '-..-',
    'Y': '-.--', 'Z': '--..', '0': '-----', '1': '.----', '2': '..---',
    '3': '...--', '4': '....-', '5': '.....', '6': '-....', '7': '--...',
    '8': '---..', '9': '----.', ' ': '/'
  };
  return text.toUpperCase().split('').map(char => morseMap[char] || char).join(' ');
}

function convertToSarcasm(text) {
  return text.split('').map((char, index) => 
    index % 2 === 0 ? char.toLowerCase() : char.toUpperCase()
  ).join('');
}

// New conversions

function convertToBase64(text) {
  return btoa(text);
}

function convertToHexadecimal(text) {
  return text.split('').map(char => char.charCodeAt(0).toString(16)).join('');
}

function convertToROT13(text) {
  return text.replace(/[a-zA-Z]/g, char => 
    String.fromCharCode(
      char.charCodeAt(0) + (char.toLowerCase() < 'n' ? 13 : -13)
    )
  );
}

function convertToAtbash(text) {
  return text.split('').map(char => 
    'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ'.includes(char) ?
    String.fromCharCode(155 - char.charCodeAt(0)) : char
  ).join('');
}

function convertToCaesarCipher(text, shift = 3) {
  return text.split('').map(char => {
    const code = char.charCodeAt(0);
    if (char >= 'a' && char <= 'z') {
      return String.fromCharCode((code - 97 + shift) % 26 + 97);
    } else if (char >= 'A' && char <= 'Z') {
      return String.fromCharCode((code - 65 + shift) % 26 + 65);
    }
    return char;
  }).join('');
}

function convertToBase32(text) {
  const base32 = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ234567';
  let binary = '';
  for (let i = 0; i < text.length; i++) {
    binary += text.charCodeAt(i).toString(2).padStart(8, '0');
  }
  let base32Text = '';
  for (let i = 0; i < binary.length; i += 5) {
    const segment = binary.substring(i, i + 5).padEnd(5, '0');
    base32Text += base32[parseInt(segment, 2)];
  }
  return base32Text;
}

function convertToBinary(text) {
  return text.split('').map(char => char.charCodeAt(0).toString(2).padStart(8, '0')).join(' ');
}

function convertToUrlEncode(text) {
  return encodeURIComponent(text);
}

function convertToEmojiSubstitution(text) {
  const emojiMap = {
    a: "🍎", e: "🥚", g: "🍇", i: "🍦", o: "🍊", s: "🍓", t: "🍅"
  };
  return text.toLowerCase().replace(/[aegiost]/g, char => emojiMap[char] || char);
}

function convertToSoundex(text) {
  const codes = {
    a: '', e: '', i: '', o: '', u: '', y: '',
    b: '1', f: '1', p: '1', v: '1',
    c: '2', g: '2', j: '2', k: '2', q: '2', s: '2', x: '2', z: '2',
    d: '3', t: '3',
    l: '4',
    m: '5', n: '5',
    r: '6'
  };
  return text.toUpperCase().split('').map(char => codes[char] || char).join('');
}

function convertToBracketed(text) {
  return text.split('').map(char => `[${char}]`).join('');
}

function convertToZalgo(text) {
  const zalgo = "̨̢̡̨̩̥̝͙̘̠̻̺̯͔̯͚͈̰̟̮̲̼͓̼̦͚̲̦͙̘̰͚͎̯̪̬̝͕̗̥͙͎͓͇̼̳̩͜͜ͅ";
  return text.split('').map(char => char + zalgo.charAt(Math.floor(Math.random() * zalgo.length))).join('');
}

function convertToVigenere(text, keyword = "KEY") {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  let result = '';
  let keywordIndex = 0;
  for (let i = 0; i < text.length; i++) {
    const char = text[i].toUpperCase();
    if (alphabet.includes(char)) {
      const shift = alphabet.indexOf(keyword[keywordIndex % keyword.length].toUpperCase());
      const newChar = alphabet[(alphabet.indexOf(char) + shift) % 26];
      result += newChar;
      keywordIndex++;
    } else {
      result += char;
    }
  }
  return result;
}

function convertToAsciiArt(text) {
  // Simple placeholder implementation for ASCII Art.
  return text.split('').map(char => char === ' ' ? ' ' : `| ${char} |`).join('\n');
}

function convertToDoublespeak(text) {
  return text.split('').map((char, index) => 
    index % 2 === 0 ? char.toUpperCase() : char.toLowerCase()
  ).join('');
}

function convertToCustomSymbols(text) {
  const customMap = { a: "@", e: "3", i: "!", o: "0", s: "$" };
  return text.toLowerCase().replace(/[aeios]/g, char => customMap[char] || char);
}

function convertToNumeralConversion(text) {
  return text.split('').map(char => {
    const num = char.charCodeAt(0) - 96;
    return num > 0 && num <= 26 ? num : char;
  }).join('');
}

function convertToTextualEncoding(text) {
  return text.split('').map(char => `(${char})`).join('');
}

chrome.runtime.onMessage.addListener((request, sender, sendResponse) => {
  if (request.action === "convert") {
    const selectedText = window.getSelection().toString();
    let convertedText;

    switch (request.format) {
      case "pigLatin":
        convertedText = convertToPigLatin(selectedText);
        break;
      case "leetSpeak":
        convertedText = convertToLeetSpeak(selectedText);
        break;
      case "reverse":
        convertedText = reverseText(selectedText);
        break;
      case "morseCode":
        convertedText = convertToMorseCode(selectedText);
        break;
      case "sarcasm":
        convertedText = convertToSarcasm(selectedText);
        break;
      case "base64":
        convertedText = convertToBase64(selectedText);
        break;
      case "hexadecimal":
        convertedText = convertToHexadecimal(selectedText);
        break;
      case "rot13":
        convertedText = convertToROT13(selectedText);
        break;
      case "atbash":
        convertedText = convertToAtbash(selectedText);
        break;
      case "caesarCipher":
        convertedText = convertToCaesarCipher(selectedText);
        break;
      case "base32":
        convertedText = convertToBase32(selectedText);
        break;
      case "binary":
        convertedText = convertToBinary(selectedText);
        break;
      case "urlEncode":
        convertedText = convertToUrlEncode(selectedText);
        break;
      case "emojiSubstitution":
        convertedText = convertToEmojiSubstitution(selectedText);
        break;
      case "soundex":
        convertedText = convertToSoundex(selectedText);
        break;
      case "bracketed":
        convertedText = convertToBracketed(selectedText);
        break;
      case "zAlgo":
        convertedText = convertToZalgo(selectedText);
        break;
      case "vigenere":
        convertedText = convertToVigenere(selectedText);
        break;
      case "asciiArt":
        convertedText = convertToAsciiArt(selectedText);
        break;
      case "doublespeak":
        convertedText = convertToDoublespeak(selectedText);
        break;
      case "customSymbols":
        convertedText = convertToCustomSymbols(selectedText);
        break;
      case "numeralConversion":
        convertedText = convertToNumeralConversion(selectedText);
        break;
      case "textualEncoding":
        convertedText = convertToTextualEncoding(selectedText);
        break;
      default:
        convertedText = selectedText;
    }

    document.execCommand("insertText", false, convertedText);
  }
});
