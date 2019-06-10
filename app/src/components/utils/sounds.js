const audioApp = (sound,{ volume, path }) => {
    const audio = new Audio(path ? `${path}${sound}.mp3` : `public/assets/sounds/${sound}.mp3` );
    audio.volume = volume;
    const audioPromise = audio.play();
    if (audioPromise !== undefined){
        audioPromise.then(() => {}).catch(error => console.log('*** Error_AUDIO',error));
    }
};

export const sounds = [
    { name: "beer_can_opening" },
    { name: "bell_ring" },
    { name: "branch_break" },
    { name: "button_click" },
    { name: "button_push" },
    { name: "button_tiny" },
    { name: "camera_flashing_2" },
    { name: "camera_flashing" },
    { name: "cd_tray" },
    { name: "computer_error" },
    { name: "door_bell" },
    { name: "door_bump" },
    { name: "glass" },
    { name: "keyboard_desk" },
    { name: "light_bulb_breaking" },
    { name: "metal_plate" },
    { name: "metal_plate_2" },
    { name: "pop_cork" },
    { name: "snap" },
    { name: "staple_gun" },
    { name: "tap" },
    { name: "water_droplet_2" },
    { name: "water_droplet_3" },
    { name: "water_droplet" },
];

export const soundNewMsnChat = (volume = 0.2) => audioApp("button_tiny", { volume });

export const PruebaSounds = (sound, volume = 1) => audioApp(sound,{ volume });