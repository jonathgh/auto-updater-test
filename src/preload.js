// See the Electron documentation for details on how to use preload scripts:
// https://www.electronjs.org/docs/latest/tutorial/process-model#preload-scripts

const { ipcRenderer } = require("electron")

// window.addEventListener('DOMContentLoaded', () => {
//     const replaceText = (selector, text) => {
//       const element = document.getElementById(selector)
//       if (element) element.innerText = text
//     }

//     async function get_app_version() {
//         app_version = await ipcRenderer.invoke('app_version').then((res) => {
//             return res.version
//         })
//         return app_version
//     }


//     replaceText(`app-version`, get_app_version())
//   })

// contextBridge.exposeInMainWorld(
//     "api", {
//         invoke: (channel, data) => {
//             let validChannels = ["myfunc"]; // list of ipcMain.handle channels you want access in frontend to
//             if (validChannels.includes(channel)) {
//                 // ipcRenderer.invoke accesses ipcMain.handle channels like 'myfunc'
//                 // make sure to include this return statement or you won't get your Promise back
//                 return ipcRenderer.invoke(channel, data); 
//             }
//         },
//     }
// );
