"use strict";

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

var MICROSOFT = {
  name: 'Microsoft',
  logo: 'microsoft.svg'
};
var BETHESDA = {
  name: 'Bethesda',
  logo: 'bethesda.svg'
};
var DEVOLVER_DIGITAL = {
  name: 'Devolver Digital',
  logo: 'devolver_digital.svg'
};
var UPLOADVR = {
  name: 'UploadVR',
  logo: 'upload_vr.svg'
};
var PC_GAMING = {
  name: 'PC Gaming Show',
  logo: 'pc_gaming.svg'
};
var LIMITED_RUN = {
  name: 'Limited Run',
  logo: 'limited_run.svg'
};
var UBISOFT = {
  name: 'Ubisoft',
  logo: 'ubisoft.svg'
};
var KINDA_FUNNY_SHOWCASE = {
  name: 'Kinda Funny Showcase',
  logo: 'kinda_funny_showcase.svg'
};
var SQUARE_ENIX = {
  name: 'Square Enix',
  logo: 'square_enix.svg'
};
var NINTENDO_DIRECT = {
  name: 'Nintendo Direct',
  logo: 'nintendo_direct.svg'
};

var getDate = function getDate(day, month, year, hour, minute) {
  return new Date("".concat(month, " ").concat(day, " ").concat(year, " ").concat(hour, ":").concat(minute, " UTC"));
}; // @ts-ignore


var SCHEDULE = [{
  company: MICROSOFT,
  time: getDate(9, 6, 2019, 20, 0)
}, {
  company: BETHESDA,
  time: getDate(10, 6, 2019, 0, 30)
}, {
  company: DEVOLVER_DIGITAL,
  time: getDate(10, 6, 2019, 2, 0)
}, {
  company: UPLOADVR,
  time: getDate(10, 6, 2019, 16, 0)
}, {
  company: PC_GAMING,
  time: getDate(10, 6, 2019, 17, 0)
}, {
  company: LIMITED_RUN,
  time: getDate(10, 6, 2019, 19, 0)
}, {
  company: UBISOFT,
  time: getDate(10, 6, 2019, 20, 0)
}, {
  company: KINDA_FUNNY_SHOWCASE,
  time: getDate(10, 6, 2019, 23, 30)
}, {
  company: SQUARE_ENIX,
  time: getDate(11, 6, 2019, 1, 0)
}, {
  company: NINTENDO_DIRECT,
  time: getDate(11, 6, 2019, 16, 0)
}];

var Conference =
/*#__PURE__*/
function () {
  function Conference(schedule) {
    _classCallCheck(this, Conference);

    this.schedule = schedule;
    this.el = "\n      <div class=\"conference\">\n        <div class=\"company\">".concat(schedule.company.name, "</div>\n        <div class=\"time\">").concat(this.getTime(), "</div>\n      </div>\n    ");
  }

  _createClass(Conference, [{
    key: "getTime",
    value: function getTime() {
      return Intl.DateTimeFormat(undefined, {
        hour: 'numeric',
        minute: 'numeric',
        timeZoneName: 'short'
      }).format(this.schedule.time);
    }
  }, {
    key: "getDayOfMonth",
    value: function getDayOfMonth() {
      return Number(Intl.DateTimeFormat(undefined, {
        day: 'numeric'
      }).format(this.schedule.time));
    }
  }, {
    key: "getDayString",
    value: function getDayString() {
      return Intl.DateTimeFormat(undefined, {
        weekday: 'long',
        month: 'long',
        day: 'numeric'
      }).format(this.schedule.time);
    }
  }, {
    key: "appendTo",
    value: function appendTo(element) {
      element.insertAdjacentHTML('beforeend', this.el);
    }
  }]);

  return Conference;
}();

var updatePage = function updatePage() {
  var container = document.getElementById('container');
  var conferences = SCHEDULE.map(function (c) {
    return new Conference(c);
  });
  var dayContainer = null;
  var lastDay = -1;
  conferences.forEach(function (c) {
    var dayOfMonth = c.getDayOfMonth();

    if (lastDay !== dayOfMonth) {
      lastDay = dayOfMonth;
      dayContainer = document.createElement('section');
      dayContainer.classList.add('day');
      container.append(dayContainer);
      dayContainer.insertAdjacentHTML('beforebegin', "<h1 class=\"title\">".concat(c.getDayString(), "</h1>"));
    }

    c.appendTo(dayContainer);
  });
};

updatePage();
//# sourceMappingURL=index.js.map
