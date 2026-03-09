export function Save(mapState) {
    const storedMaps = JSON.parse(localStorage.getItem("mapArray"));

    storedMaps.push(mapState);
    localStorage.setItem("mapArray", JSON.stringify(storedMaps));
}

export function Load() {
    return JSON.parse(localStorage.getItem("mapArray")) || [];
}