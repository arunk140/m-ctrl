import { ipcRenderer } from 'electron';

function writeToSocket(command: string) {
    ipcRenderer.send('write-to-socket', command);
}

export { writeToSocket };



