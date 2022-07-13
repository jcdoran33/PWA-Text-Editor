const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
// TODO: Add an event handler to the `beforeinstallprompt` event - Done
window.addEventListener('beforeinstallprompt', (event) => {
    //store the events
    window.deferredPrompt = event;
    //then remove class 'hidden' from the install button
    butInstall.classList.toggle('hidden', false);
});

// TODO: Implement a click event handler on the `butInstall` element
butInstall.addEventListener('click', async () => {
    const promptEvent = window.deferredPrompt;
    //if theres not prompt, end
    if (!promptEvent) {
        return;
    }
    //display prompt to user
    promptEvent.prompt();
    //reset window.deferredPrompt to null
    window.deferredPrompt = null;
    //re-add the hidden class to the install button element
    butInstall.classList.toggle('hidden', true);
});

// TODO: Add an handler for the `appinstalled` event
window.addEventListener('appinstalled', (event) => {});
