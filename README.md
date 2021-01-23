# github-toc-generator
helps create a table of contents for Github sidebar without needing to clone the repo or install 3rd party libraries

Usage: 
This was only tested/used in Chrome

1. Simply open the Developers console on the page you want to create a TOC for.
2. paste the code and run it.
3. copy the results to an editor (notepad++)
4. replace the chrome line numbers with "". There will be 2 different line numbers to remove, the top section line number and the bottom.
  i.e., replace "VM1726:22 " with ""
5. paste the result into your Github sidebar .md file.

If something isn't working, be sure you have empyty lines between the top part and the bottom part in your MD file and that you have also removed the trailing space after the Chrome line numbers.
