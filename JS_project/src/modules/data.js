export function Save(mapState, name) {
    const storedMaps = JSON.parse(localStorage.getItem("mapArray")) || [];

    const mapObject = {
        name: name,
        map: JSON.parse(JSON.stringify(mapState))
    }

    storedMaps.push(mapObject);
    localStorage.setItem("mapArray", JSON.stringify(storedMaps));
}

export function Load() {
    return JSON.parse(localStorage.getItem("mapArray")) || [];
}