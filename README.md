# Text Obfuscator Browser Extension

## Overview

Text Obfuscator is a specialized browser extension designed for researchers and ethical hackers engaged in red teaming and jailbreaking Large Language Models (LLMs). This tool provides various text obfuscation methods to test and evaluate the robustness of LLM security measures.

## Purpose

The primary purpose of this extension is to assist in:

- Obfuscating prompts to bypass content filters in LLMs
- Testing the effectiveness of LLM safety mechanisms
- Exploring potential vulnerabilities in AI language models
- Supporting responsible disclosure of AI system weaknesses

Note: This tool is intended for ethical research purposes only. Users are expected to adhere to responsible disclosure practices and relevant laws and regulations.

## Features

- Convert selected text using various obfuscation techniques including:
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
3. Navigate to "Obfuscate Text" and choose your desired conversion format.
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

## Ethical Considerations

Users of this extension are expected to:

- Obtain proper authorization before testing any LLM systems
- Use the tool responsibly and ethically
- Report any discovered vulnerabilities through appropriate channels
- Avoid using the tool for malicious purposes or to cause harm

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Contact

For updates and more information, follow us on Twitter: [@pogtx\_](https://x.com/pogtx_)

Visit our project repository: [Text Obfuscator on GitHub](https://github.com/meta-fx/TextObfuscator)
