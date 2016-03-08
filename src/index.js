var script = document.createElement('script');

script.type = 'text/javascript';

script.onload = function() {
  console.log('loaded');
  // after ccl loaded
  // created by byr-gdp at 2016-03-08

  // container
  var wrapper       = document.createElement('div');
  wrapper.id        = 'my-player';
  wrapper.className = 'abp';
  wrapper.setAttribute('style', 'width:100%; height: 480px; background: transparent; position: fixed; top: 60px; left: 0;');

  var container       = document.createElement('div');
  container.id        = 'my-comment-stage';
  container.className = 'container';

  wrapper.appendChild(container);
  document.getElementsByTagName("body")[0].appendChild(wrapper);

  // insert style
  var style = document.createElement('style');
  style.appendChild(document.createTextNode(".new-post {position: absolute; top: 0; left: 0; z-index: 1000;}.abp{position:relative;}.abp .container{-webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);position: absolute;display: block;overflow: hidden;margin: 0;border: 0;top: 0;left: 0;bottom: 0;right: 0;z-index: 9999;touch-callout: none;-webkit-user-select: none;-moz-user-select: none;-ms-user-select: none;user-select: none;}.abp .container .cmt{-webkit-transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);transform: matrix3d(1,0,0,0,0,1,0,0,0,0,1,0,0,0,0,1);-webkit-transform-origin: 0% 0%;-ms-transform-origin: 0% 0%;transform-origin: 0% 0%;position: absolute;padding: 3px 0 0 0;margin: 0;color: #fff;font-family: SimHei, SimSun, Heiti, 'MS Mincho', 'Meiryo', 'Microsoft YaHei', monospace;font-size: 25px;text-decoration: none;text-shadow: -1px 0 black, 0 1px black, 1px 0 black, 0 -1px black;-webkit-text-size-adjust: none;-ms-text-size-adjust: none;text-size-adjust: none;    line-height: 100%;    letter-spacing: 0;    word-break: keep-all;    white-space: pre;  }  .abp .container .cmt.noshadow{    text-shadow: none;  }  .abp .container .cmt.rshadow{    text-shadow: -1px 0 white, 0 1px white, 1px 0 white, 0 -1px white;  }    @font-face{    font-family: '\9ED1\4F53';    src:local('SimHei');  }  @font-face{    font-family: '\5B8B\4F53';    src:local('SimSun');  }  @font-face{    font-family: '\534E\6587\6977\4F53';    src:local('SimKai');  }  @font-face{    font-family: '\5E7C\5706';    src:local('YouYuan');  }  @font-face{    font-family: '\5FAE\8F6F\96C5\9ED1';    src:local('Microsoft YaHei');  }"));

  document.getElementsByTagName('head')[0].appendChild(style);

  // post new one
  var newOne       = document.createElement('div');
  var input        = document.createElement('input');
  var select       = document.createElement('select');
  var option1 = document.createElement('option');
  var option2 = document.createElement('option');
  var option3 = document.createElement('option');
  var option4 = document.createElement('option');
  var option5 = document.createElement('option');
  var option6 = document.createElement('option');

  option1.value = 1;
  option2.value = 2;
  option3.value = 3;
  option4.value = 4;
  option5.value = 5;
  option6.value = 6;

  option1.appendChild(document.createTextNode('模式1'));
  option2.appendChild(document.createTextNode('模式2'));
  option3.appendChild(document.createTextNode('模式3'));
  option4.appendChild(document.createTextNode('模式4'));
  option5.appendChild(document.createTextNode('模式5'));
  option6.appendChild(document.createTextNode('模式6'));

  select.appendChild(option1);
  select.appendChild(option2);
  select.appendChild(option3);
  select.appendChild(option4);
  select.appendChild(option5);
  select.appendChild(option6);


  input.type       = 'text';
  input.id         = 'new';
  newOne.className = 'new-post';

  newOne.appendChild(input);
  newOne.appendChild(select);

  var btn = document.createElement('button');
  btn.appendChild(document.createTextNode("发射一波"));
  newOne.appendChild(btn);
  document.getElementsByTagName('body')[0].insertBefore(newOne, wrapper);

  // 创建跨域 xml
  function createCORSRequest(method, url) {
    var xhr = new XMLHttpRequest();
    if ("withCredentials" in xhr) {
      xhr.open(method, url, true);
    } else if (typeof XDomainRequest != "undefined") {
      xhr = new XDomainRequest();
      xhr.open(method, url);
    } else {
      xhr = null;
    }
    return xhr;
  }

  // init
  var CM = new CommentManager(document.getElementById('my-comment-stage'));
  CM.init();

  // 开放 CM 对象到全局这样就可以在 console 终端里操控
  window.CM = CM;

  var danmakuList = [
      {
          "mode":1,
          "text":"Hello World",
          "stime":0,
          "size":25,
          "color":0xffffff
      },
      {
          "mode":1,
          "text":"弹幕还处于测试阶段",
          "stime":0,
          "size":25,
          "color":0xffffff
      },
      {
          "mode":1,
          "text":"还存在诸多问题",
          "stime":0,
          "size":25,
          "color":0xffffff
      },
      {
          "mode":1,
          "text":"没有分channel",
          "stime":0,
          "size":25,
          "color":0xffffff
      },
      {
          "mode":1,
          "text":"用的本地服务器...",
          "stime":0,
          "size":25,
          "color":0xffffff
      }
  ];

  window.danmakuList = danmakuList;

  // 载入弹幕没用，目前是 one by one send...
  // CM.load(danmakuList);

  // 先启用弹幕播放（之后可以停止）, 通过 CM.stop()
  CM.start();

  // 发送弹幕数组也没用...
  // CM.send(danmakuList);

  // POST
  btn.onclick = function() {
    var url = "http://127.0.0.1:2333/post";
    var msg = input.value;
    var mode = select.value;
    console.log(select.value);

    var xhr = createCORSRequest('POST', url);
    if (!xhr) {
      alert('CORS not supported');
      return;
    }
    xhr.onload = function() {
      // 暂不做处理
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send('msg=' + msg + '&mode=' + mode);
  }

  // send one by one
  // for(var i = 0; i < danmakuList.length; i++) {
  //   // CM.send(danmakuList[i]);
  //   (function(j) {setTimeout(function() {
  //     CM.send(danmakuList[j]);
  //   }, j*100);})(i);
  // }

  // latestTimestamp 避免重复弹幕
  var latestTimestamp = 0;

  // fetch latest danmu
  var s = setInterval(function() {
    var url = "http://127.0.0.1:2333/get";
    var xhr = createCORSRequest('GET', url);

    if (!xhr) {
      alert('CORS not supported');
      return;
    }

    xhr.onload = function() {
      var text   = xhr.responseText;
      var result = JSON.parse(text);
      var max    = 0;

      for(var i = 0; i < danmakuList.length; i++) {
        danmakuList[i].text = result[i].msg;
        danmakuList[i].mode = result[i].mode;
        max = result[i].timestamp > max ? result[i].timestamp : max;
        if(result[i].timestamp > latestTimestamp) {
          console.log('>');
          (function(j){
            setTimeout(function() {
              CM.send(danmakuList[j]);
            }, j*100);
          })(i);
        }
      }
      latestTimestamp = max;
    };

    xhr.onerror = function() {
      alert('Woops, there was an error making the request.');
    };
    xhr.setRequestHeader('Content-Type','application/x-www-form-urlencoded');
    xhr.send();
  }, 2000)

}

script.onerror = function() {
  console.log('Error');
}

script.src = 'http://127.0.0.1:6868/CommentCoreLibrary.min.js';

document.getElementsByTagName('body')[0].appendChild(script);