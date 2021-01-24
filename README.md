# github-toc-generator
helps create a table of contents for Github sidebar without needing to clone the repo or install 3rd party libraries

Usage:  
This was only tested/used in Chrome  
Supports a single parameter in the `createLinks('hx')` method.  

Left emtpy e.g., `createLinks()` will create links for all headings on the page. If you specify h1, h2, h3, or h4, it will only return heading that are whatever level you defined and higher, i.e., running `createLinks('h2')` will return all H1 and H2 headings as links.
  

1. Simply open the Developers console on the page you want to create a TOC for.
2. paste the code and run it.
3. copy the results to an editor (notepad++)
4. replace the chrome line numbers with "". There will be 3 different line numbers to remove, the top section line number, the bottom section line numbers and the 2 empty lines in between.
  i.e., replace "VM1726:22 " with ""
5. paste the result into your Github sidebar .md file.

If something isn't working, be sure you have empyty lines between the top part and the bottom part in your MD file and that you have also removed the trailing space after the Chrome line numbers.
  
Be sure that the Chrome Dev Console has timestamps turned off prior to running this code, or you will also have to remove the timestamps.
