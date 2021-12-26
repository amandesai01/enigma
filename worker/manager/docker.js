const Docker = require('dockerode');

const docker = new Docker();

const spinupNewContainer = function () {
    return new Promise((resolve, reject) => {
        docker.createContainer({
            Image: "pyruntime",
            Tty: true 
        }).then((container) => {
            resolve(container.id);
        }).catch((reason) => {
            reject(reason);
        })
    })
}

const runPreprocessSetup = function (containerId, zipAccessLink) {
    return new Promise((resolve, reject) => {
        const container = docker.getContainer(containerId);
        container.exec({
            AttachStdout: true,
            Tty: true,
            Env: [`ZIP_ACCESS_LINK=${zipAccessLink}`],
            Cmd: ["source" ,"./fetch-and-setup.sh"]
        }).then((execCommand) => {
            execCommand.start().then((value) => {
                resolve(value);
            });
        }).catch((reason) => {
            reject(reason);
        })
    })
}

const fetchAndRun = function (containerId, {fileAccessLink, phase, step}) {
    return new Promise((resolve, reject) => {
        const container = docker.getContainer(containerId);
        container.exec({
            Env: [`ENIGMA_FAE="${fileAccessLink}"`, `PHASE=${phase}`, `STEP=${step}`],
            Cmd: ['python3 main.py']
        }).then((exec) => {
            exec.start().then((value) => {
                resolve(value);
            });
        }).catch((reason) => {
            reject(reason);
        })
    })
}

// runPreprocessSetup("4d2253edf98e", "https://drive.google.com/uc?export=download&id=1hQTpEbty80Z0nxI-wJPfDlqLtWRnengY")

export {
    spinupNewContainer,
    runPreprocessSetup,
    fetchAndRun
}