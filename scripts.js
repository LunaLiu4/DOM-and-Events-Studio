// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    let color = document.getElementById('shuttleBackground');

    const land = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    let image = document.getElementById('rocket');
    const upClick = document.getElementById('up');
    const downClick = document.getElementById('down');
    const rightClick = document.getElementById('right');
    const leftClick = document.getElementById('left');
    takeOff.addEventListener('click', event => {
        let takingOff = confirm('Confirm that the shuttle is ready for takeoff.');
        if (takingOff) {
            let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
            flightStatus.innerHTML = 'Shuttle in flight.';
            color.style.backgroundColor = 'blue';
            height += 10000;
            document.getElementById('spaceShuttleHeight').innerHTML = height;
        }
    })
    land.addEventListener('click', event => {
        let landing = alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        color.style.backgroundColor = 'green';
        document.getElementById('spaceShuttleHeight').innerHTML = 0;

    })
    missionAbort.addEventListener('click', event => {
        let abortMission = confirm('Confirm that you want to abort the mission.');
        if (abortMission) {
            flightStatus.innerHTML = 'Mission aborted.';
            color.style['backgroundColor'] = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    })
    upClick.addEventListener('click', event => {
        let up = parseInt(image.style.top);
        let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
        console.log(up);
        image.style.top = (up - 10) + "px";
        height += 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = height;
    })
    downClick.addEventListener('click', event => {
        let top = parseInt(image.style.top) || 0;
        let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);

        console.log(image.style.right);
        console.log(top);
        image.style.top = (top + 10) + "px";
        height -= 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = height;
    })

}
window.addEventListener('load', init);