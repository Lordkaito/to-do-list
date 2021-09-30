const jsdom = require('jsdom');

const { JSDOM } = jsdom;

const dom = new JSDOM(`<!DOCTYPE html>
<html>
  <body id='test-2'>
    <div id='1'> This is the parent 2
      <div> This is the parent 1
        <input type='checkbox' id='2' value='This is the checkbox'/>
        <div id='event-handler'>This is the child 1</div>
      </div>
    </div>
  </body>
</html>`);
const remove = dom.window.document.getElementById('event-handler');
const checkEvent = dom.window.document.getElementById('2');
exports.dom = dom;
exports.remove = remove;
exports.checkEvent = checkEvent;
