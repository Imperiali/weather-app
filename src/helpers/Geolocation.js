function getGeolocation(callback) {
    if (navigator.geolocation) {
        return navigator.geolocation.getCurrentPosition(callback);
    } else {
        return "Geolocation is not supported by this browser.";
    }
}

export default {getGeolocation}