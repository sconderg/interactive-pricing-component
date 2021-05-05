const billingBtn = document.querySelector('.billing-button');
billingBtn.addEventListener('click', () => billingBtn.classList.toggle('selected'));

const pageViews = document.querySelector('.pageviews span');
const cost = document.querySelector('.cost span');

const toggler = document.querySelector('.bar .button');
const barInside = document.querySelector('.bar .inside');
var barLimit;

var pos1 = 0, pos2 = 0, pos3 = 0, pos4 = 0;
toggler.onmousedown = dragMouseDown;
window.onload = function ()  {
    checkBar () 
    barLimit = (window.innerWidth * 0.5) * 0.9 - 100;
}
function dragMouseDown(e) {
    e = e || window.event;
    e.preventDefault();
    // get the mouse cursor position at startup:
    pos3 = e.clientX;
    document.onmouseup = closeDragElement;
    // call a function whenever the cursor moves:
    document.onmousemove = elementDrag;
  }
function elementDrag(e) {
    e = e || window.event;
    e.preventDefault();
    // calculate the new cursor position:
    pos1 = pos3 - e.clientX;
    pos3 = e.clientX;
    // set the element's new position:

    if((toggler.offsetLeft - pos1) > 0 && (toggler.offsetLeft - pos1)  < barLimit) {
        toggler.style.left = (toggler.offsetLeft - pos1) + "px";
        barInside.style.width = (toggler.offsetLeft - pos1) + "px";
    }
    checkBar ();
  }
  function closeDragElement() {
    // stop moving when mouse button is released:
    document.onmouseup = null;
    document.onmousemove = null;
  }
  function checkBar () {
      if((toggler.offsetLeft - pos1)  === 0) {
        pageViews.innerHTML = "100k";
        cost.innerHTML = '$16.00';
      } else if ((toggler.offsetLeft - pos1)  <= barLimit * 0.3) {
        pageViews.innerHTML = "500k";
        cost.innerHTML = '$25.00'; 
      } else if ((toggler.offsetLeft - pos1)  <= barLimit * 0.5) {
        pageViews.innerHTML = "800k";
        cost.innerHTML = '$30.00'; 
      } else if ((toggler.offsetLeft - pos1)  <= barLimit * 1) {
        pageViews.innerHTML = "900k";
        cost.innerHTML = '$35.00'; 
      }
  }