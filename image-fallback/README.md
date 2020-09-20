# Image fallback Chrome Plugin
This chrome extention helps to fix broken image, It requests broken images from higher env.

# Steps to include into your chrome.
1. Checkout this repo - git clone https://pscode.lioncloud.net/braanokh/image-fallback.git
2. go to chrome://extensions/ in your chrome or nevigate to Manage Extention screen on your Chrome.
3. Enable Developer mode
4. Import 'image-fallback' by choosing 'Load Unpacked' 
5. we are good to use this plugin.

# Create .crx
1. Windows:
"C:/Program Files (x86)/Google/Chrome/Application/chrome.exe" --pack-extension=<chrome extension folder location>

2. mac:
/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --pack-extension=<chrome extension folder location>

3. ref: https://support.testsigma.com/support/solutions/articles/32000027752-compiling-chrome-extension-folder-to-crx-format