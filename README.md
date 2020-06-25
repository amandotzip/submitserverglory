# Submit Server Glory
## WORKS ON GRADESCOPE AND SUBMIT SERVER
Plays ["Here Comes The Money"](https://www.youtube.com/watch?v=HMuYfScGpbE) music when all tests pass.
[This is what it looks like](https://www.youtube.com/watch?v=djO3hJHWpl4&t=15s).

To update, please **delete/remove** the previous version then follow the steps below again! :)

QUICK GUIDE BELOW 30 SECONDS TO INSTALL (taken from [CNET](https://www.cnet.com/how-to/how-to-install-chrome-extensions-manually/))

1. Download the CRX file to your computer for the Chrome extension you want to install.
2. Go to chrome://extensions/ and check the box for Developer mode in the top right.
3. Use a CRX Extractor app -- [I used CRX Extractor](https://crxextractor.com/) -- to unpack the CRX file and turn it into a ZIP file.
4. Locate the ZIP file on your computer and unzip it.
5. Go back to the chrome://extensions/ page and click the Load unpacked extension button and select the unzipped folder for your extension to install it.

To know if it works, go to one of your old tests where you passed everything and the video should play.

All source code is visible once unzipped!

## How to change the music
Navigate to the unzipped folder that you selected for chrome. Open/edit "content.js" with any text editor (notepad does the job), and at the top where vars are declared
```
const URL = "https://www.youtube.com/watch?v=HMuYfScGpbE"
```
Change the contents of the quotes to any youtube link to a song/video you'd like! (make sure you save those changes) 

Now, **RELOAD THE EXTENSION** (hit the refresh symbol on it in the manage extensions menu) and that's it!

## Useful notes for source code
### localStorage.clear()
 
Resets local storage, normally music won't play twice on the same test/page, but this clears the visited list so it can now trigger where it already has before.
  
### alert(window.localStorage.getItem('visited'))
 
Lets you look at the list of the visited links that have been stored in local storage

