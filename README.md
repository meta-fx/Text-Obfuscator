# Text Converter Browser Extension

## Overview
Text Converter is a powerful browser extension that allows users to convert highlighted text into various formats directly from the context menu. With support for over 20 different conversion types, it's a versatile tool for writers, developers, and anyone who frequently works with text.

## Features
- Convert selected text to multiple formats including:
  - Pig Latin
  - Leet Speak
  - Reverse Text
  - Morse Code
  - Sarcasm Text
  - Base64
  - Hexadecimal
  - ROT13
  - Atbash Cipher
  - Caesar Cipher
  - Base32
  - Binary
  - URL Encode
  - Emoji Substitution
  - Soundex
  - Bracketed Text
  - Zalgo Text
  - Vigenère Cipher
  - ASCII Art
  - Doublespeak
  - Custom Symbols
  - Numeral Conversion
  - Textual Encoding

## Installation
1. Clone this repository or download the source code.
2. Open your Chrome browser and navigate to `chrome://extensions/`.
3. Enable "Developer mode" in the top right corner.
4. Click "Load unpacked" and select the directory containing the extension files.

## Usage
1. Highlight any text on a webpage.
2. Right-click to open the context menu.
3. Navigate to "Convert Text" and choose your desired conversion format.
4. The highlighted text will be instantly replaced with the converted version.

## Technical Details
- Manifest Version: 3
- Permissions: `contextMenus`, `activeTab`
- Content Script: Runs on all URLs
- Background Script: Handles context menu creation and message passing

## Development
To add new conversion types:
1. Add the new conversion function to `content.js`.
2. Add the new format to the `formats` array in `background.js`.
3. Implement the conversion logic in the switch statement in `content.js`.

## Contributing
Contributions are welcome! Please feel free to submit a Pull Request.

## License
This project is licensed under the MIT License - see the LICENSE file for details.

## Contact
[Your contact information or project repository link]