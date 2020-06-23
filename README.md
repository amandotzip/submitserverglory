# submitserverglory
# WORKS ON GRADESCOPE AND SUBMIT SERVER
Plays ["Here Comes The Money"](https://www.youtube.com/watch?v=HMuYfScGpbE) when all tests pass.

To update, please delete/remove the previous version then follow the steps below again! :)

QUICK GUIDE BELOW 30 SECONDS TO INSTALL (taken from [CNET](https://www.cnet.com/how-to/how-to-install-chrome-extensions-manually/))

1. Download the CRX file to your computer for the Chrome extension you want to install.
2. Go to chrome://extensions/ and check the box for Developer mode in the top right.
3. Use a CRX Extractor app -- [I used CRX Extractor](https://crxextractor.com/) -- to unpack the CRX file and turn it into a ZIP file.
4. Locate the ZIP file on your computer and unzip it.
5. Go back to the chrome://extensions/ page and click the Load unpacked extension button and select the unzipped folder for your extension to install it.

All source code is visible once unzipped!

# Useful notes for source code
# localStorage.clear()
 
Resets local storage, lets the music activate on a release test you've already looked at.
  
# alert(window.localStorage.getItem('visited'))
 
Lets you look at the list of the visited links that have been stored in local storage
