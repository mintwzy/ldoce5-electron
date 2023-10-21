import React from 'react';
import './App.css';

export default function App() {
  const [content, setContent] = React.useState('hello');

  window.electron.ipcRenderer.once('ipc-example', (arg) => {
    // eslint-disable-next-line no-console
    console.log(`arg = ${arg}`);
    // @ts-ignore
    setContent(arg);
  });

  const onChange = (event: any) => {
    event.preventDefault();

    window.electron.ipcRenderer.sendMessage('ipc-example', [
      event.target.value,
    ]);
  };

  return (
    <div className="main-container">
      <input className="search-bar" onChange={onChange} />
      <div className="content">
        <div className="word-list">{content}</div>
        <div className="word-details">main content</div>
      </div>
    </div>
  );
}
