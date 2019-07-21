API_KEY = {{YOUR_API_KEY}};

function setInnerHTML(id, ih) {
    let e = document.getElementById(id);
    e.innerHTML = ih;
}

function handleResponse(resp) {
    setInnerHTML("ip", resp.ip);
    setInnerHTML("location", resp.country_name);
    setInnerHTML("time", resp.time_zone.current_time);
}

getGeolocation(handleResponse, API_KEY);
