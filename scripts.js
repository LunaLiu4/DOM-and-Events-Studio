// Write your JavaScript code here.
// Remember to pay attention to page loading!
function init(){
    const takeOff = document.getElementById('takeoff');
    const flightStatus = document.getElementById('flightStatus');
    let color = document.getElementById('shuttleBackground').style.backgroundColor;
    let shuttleHeight = parseInt(document.getElementById('spaceShuttleHeight'));
    const land = document.getElementById('landing');
    const missionAbort = document.getElementById('missionAbort');

    takeOff.addEventListener('click', event => {
        let takingOff = confirm('Confirm that the shuttle is ready for takeoff.');
        if(takingOff){
            flightStatus.innerHTML = 'Shuttle in flight.';
            color = 'blue';
            shuttleHeight += 10000;
            shuttleHeight.innerHTML = shuttleHeight;
        }
    })
    land.addEventListener('click', event => {
        let landing = alert('The shuttle is landing. Landing gear engaged.');
        flightStatus.innerHTML = 'The shuttle has landed.';
        color = 'green';
        shuttleHeight = 0;
    })
    missionAbort.addEventListener('click', event => {
        let abortMission = confirm('Confirm that you want to abort the mission.');
        if(abortMission){
            flightStatus.innerHTML = 'Mission aborted.';
            color = 'green';
            shuttleHeight = 0;
        }
    })
}
window.addEventListener('load', init);