This is a startpage I have been working on. It's about 90% done, ~~much like all my other startpages~~.

The buttons on the startpage are hidden initially, so hover over the centre to make them visible. There's also an additional hidden button along the bottom somewhere. 

The links on the page and the prompts given by the hidden button can all be set using the xml files in the xml directory. Just replace the samples with your own links.

In order for the file to parse XML properly without hosting the web page on a server, loading local files must be enabled in the browser.
*In Firefox this is achieved by changing the `privacy.file_unique_origin` setting from true to false in about:config.
*In Chrome you need to use the `--allow-file-access-from-files tag`
Further info [here](https://dev.to/dengel29/loading-local-files-in-firefox-and-chrome-m9f)

This is probably ~~horribly un~~safe to do

Things to do:
[ ] Allow for blue to red and red to blue transitions
[ ] Load the images before hitting the button, so they don't pop in when loading the page for the first time
