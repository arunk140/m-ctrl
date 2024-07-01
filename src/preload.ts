import { contextBridge, ipcRenderer } from 'electron';
import { writeToSocket } from "./controller";

contextBridge.exposeInMainWorld('controller', {
    sendCommand: (command: string) => {
        writeToSocket(command);
    }
});