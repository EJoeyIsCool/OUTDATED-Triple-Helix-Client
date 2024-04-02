Highlight (triple click) the following code then drag it into your bookmarks bar. 
Simply change the name of the bookmark to "Triple Helix Client" and you're ready for use on any webpage. (Or at least any webpage that doesn't block JS execution.)
If you run into any errors, an alternative is going to FullMinifiedCode.js, copying it, and then dragging that into your bookmarks bar. But this is easier and smaller.

Code:
javascript:(function(){var s=document.createElement('script');s.src='https://ejoeyiscool.github.io/Triple-Helix-Client/FullMinifiedCode.js';s.onerror=function(){alert('Failed to load the script. Check if the website you are on has Javascript execution enabled.')};document.body.appendChild(s);})();
