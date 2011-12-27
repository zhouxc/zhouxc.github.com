// Functions
function getElementsByClassName(classname, node)  {
  if(!node) node = document.getElementsByTagName("body")[0];
  var a = [];
  var re = new RegExp('\\b' + classname + '\\b');
  var els = node.getElementsByTagName("*");
  for(var i=0,j=els.length; i<j; i++)
    if(re.test(els[i].className))a.push(els[i]);
  return a;
}
function addClass(elem, className) {
  elem.className += " " + className;
}
function removeClass(elem, className) {
  elem.className = elem.className.replace(className, "");
}
function toggleClass(elem, className) {
  if(elem.className.indexOf(className) === -1) {
    addClass(elem, className);
  } else {
    removeClass(elem, className);
  }
}
function wrapInner(elem, tag) {
  elem.innerHTML = "<" + tag + ">" + elem.innerHTML + "</" + tag + ">";
}
function wrapper() {
  return document.getElementById("wrapper");
}
function hideMenu() {
  addClass(wrapper(), "closed");
}
function wrapH2() {
  var h2 = document.getElementsByTagName('h2');
  for(index in h2) {
    wrapInner(h2[index], 'span');
  }
}
function multi(str, num) {
  var acc = [];
  for (var i = 0; (1 << i) <= num; i++) {
    if ((1 << i) & num)
      acc.push(str);
    str += str;
  }
  return acc.join("");
}
function replaceStars() {
  var stars = getElementsByClassName('stars');
  for(index in stars) {
    var star = stars[index],
        starValue = parseInt(star.innerHTML);
    star.innerHTML = multi("\u2605", starValue);
    addClass(star, 'color');
  }
}
function loadDisqus() {
  var dsq = document.createElement('script');
  dsq.type = 'text/javascript';
  dsq.async = true;
  dsq.src = 'http://imanel-org.disqus.com/embed.js';
  (document.getElementsByTagName('head')[0] || document.getElementsByTagName('body')[0]).appendChild(dsq);
}
function initializeGA() {
  var gaJsHost = (("https:" == document.location.protocol) ? "https://ssl." : "http://www.");
  document.write(unescape("%3Cscript src='" + gaJsHost + "google-analytics.com/ga.js' type='text/javascript'%3E%3C/script%3E"));
}
function loadGA() {
  try{
    var pageTracker = _gat._getTracker("UA-19412035-1");
    pageTracker._trackPageview();
  } catch(err) {}
}

// Quick scripts
hideMenu();
wrapH2();
replaceStars();
initializeGA();

// On load
window.onload = function() {

  // Add menu animations
  var menu = document.getElementById('menu');
  addClass(wrapper(), 'animated');
  menu.setAttribute('onClick', 'toggleClass(wrapper(), "closed");');

  loadDisqus();
  loadGA();
};
