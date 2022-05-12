export function getBoundsFromPoint() {
    /*
     * Each degree of LATITUDE (i.e. the space between the horizontal lines on earth) is
     * roughly 111 km (or 69 miles) apart. The same does not apply to the degrees of longitude
     * as that is dependant on latitude.
     */


    let R = 6378.1      // Radius of the Earth
    let brng = 1.57     // Bearing is 90 degrees converted to radians.
    let d = 15          // Distance in km

    // lat2  52.20444     // the lat result I'm hoping for
    // lon2  0.36056      // the long result I'm hoping for.

    let lat1 = rad(52.20472)   // Current lat point converted to radians
    let lon1 = rad(0.14056)    // Current long point converted to radians

    let lat2 = Math.asin( Math.sin(lat1) * Math.cos(d/R) +
    Math.cos(lat1)*Math.sin(d/R)*Math.cos(brng))

    let lon2 = lon1 + Math.atan2(Math.sin(brng)*Math.sin(d/R)*Math.cos(lat1),
                Math.cos(d/R)-Math.sin(lat1)*Math.sin(lat2))

    lat2 = degrees(lat2)
    lon2 = degrees(lon2)

    console.log(lat1, lon1, lat2, lon2)
    return {lat2, lon2}
}

function rad(point) {
    let pi = Math.PI;
    return point * (pi/180);
}

function degrees(rad) {
    let pi = Math.PI;
    return rad * (180/pi);
}