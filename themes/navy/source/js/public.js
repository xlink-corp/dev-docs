var getClass = function (className) {
  return [].slice.call(document.getElementsByClassName(className))
};

var getSiblings = function (element) {
  var siblings = [].slice.call(element.parentElement.children);
  siblings.splice(siblings.indexOf(element), 1);
  return siblings;
};

var addClass = function (ele, className) {
  if (ele.className.indexOf(className) === -1) {
    ele.className += (' ' + className)
  }
};

var removeClass = function (ele, className) {
  var classCurrent = ele.className;
  var classReplace = classCurrent.replace(' ' + className, '');
  ele.className = classReplace;
};

var toggleClass = function (ele, className) {
  if (ele.className.indexOf(className) === -1) {
    addClass(ele, className)
  } else {
    removeClass(ele, className)
  }
};

function getQueryStringByName(name){
  var result = location.search.match(new RegExp("[\?\&]" + name+ "=([^\&]+)","i"));
  if(result == null || result.length < 1){
    return "";
  }
  return decodeURIComponent(result[1]);
}

function ajax(options){
  var xmlreq;
  if(window.ActiveXObject){ //如果是IE浏览器
    xmlreq = new ActiveXObject("Microsoft.XMLHTTP");
  }else if(window.XMLHttpRequest){ //非IE浏览器
    xmlreq = new XMLHttpRequest();
  };
  xmlreq.onreadystatechange = function () {
    if (xmlreq.readyState == 4) {
      var res = xmlreq.responseText;
      if (xmlreq.status == 200) {
        options.success(JSON.parse(res), null)
      } else {
        options.failed(xmlreq)
      }
    }
  }
  xmlreq.open(options.type, options.url, true);
  xmlreq.send(options.data)
}

//是否显示底部注册入口
var novice = getClass('novice');
var showNovice = sessionStorage.getItem('ssn');

novice.forEach(function (ele, index) {
  var close = ele.getElementsByClassName('close-novice')[0];
  close.addEventListener('click', function () {
    ele.style.display = 'none';
    sessionStorage.setItem('ssn', false);
  });
});

//是否显示底部意见反馈
var feedBack = getClass('feed-back')[0];
var showFeedBack = sessionStorage.getItem('sfb');
if (feedBack) {
  if (showFeedBack == undefined || showFeedBack == true) {
    feedBack.style.display = 'block';
  } else {
    feedBack.style.display = 'none';
  }
  /*用户反馈点击关闭*/
  getClass('close-feed')[0].addEventListener('click', function () {
    feedBack.style.display = 'none';
    sessionStorage.setItem('sfb', false);
  });
}
