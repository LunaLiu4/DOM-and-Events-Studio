// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init() {
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    let color = document.getElementById('shuttleBackground');

    const land = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');
    const rocket = document.getElementById('rocket');
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
            color.style.backgroundColor = 'green';
            document.getElementById('spaceShuttleHeight').innerHTML = 0;
        }
    })
    upClick.addEventListener('click', () => {
        let top = parseInt(rocket.style.top) || 0;
        let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
        rocket.style.top = (top - 10) + "px";
        height += 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = height;
    })
    downClick.addEventListener('click', () => {
        let top = parseInt(rocket.style.top) || 0;
        let height = parseInt(document.getElementById('spaceShuttleHeight').innerHTML);
        rocket.style.top = (top + 10) + "px";
        height -= 10000;
        document.getElementById('spaceShuttleHeight').innerHTML = height;
    })

    leftClick.addEventListener('click', () => {
        let left = parseInt(rocket.style.left) || 0;
        // console.log(left);
        // console.log(rocket.style.right)
        rocket.style.left = (left - 10) + "px";
        // console.log(rocket.style.left)
    })

    rightClick.addEventListener('click', () => {
        let left = parseInt(rocket.style.left) || 0;
        // console.log(left);
        rocket.style.left = (left + 10) + "px";
        // console.log(rocket.style.left)
    })
}
window.addEventListener('load', init);