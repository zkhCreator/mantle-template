import * as lodash from 'lodash';

function component(value: string = "test") {
  const element = document.createElement('div');
  // lodash（目前通过一个 script 引入）对于执行这一行是必需的
  // lodash，现在通过一个 script 引入
  element.innerHTML = lodash.join(['Hello', 'webpack', value], ' ');

  return element;
}

document.body.appendChild(component("ts test"));
