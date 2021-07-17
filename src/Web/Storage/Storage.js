"use strict";

export var length = function (storage) {
  return function () {
    return storage.length;
  };
};

export var _key = function (index) {
  return function (storage) {
    return function () {
      return storage.key(index);
    };
  };
};

export var _getItem = function (key) {
  return function (storage) {
    return function () {
      return storage.getItem(key);
    };
  };
};

export var setItem = function (key) {
  return function (value) {
    return function (storage) {
      return function () {
        storage.setItem(key, value);
      };
    };
  };
};

export var removeItem = function (key) {
  return function (storage) {
    return function () {
      storage.removeItem(key);
    };
  };
};

export var clear = function (storage) {
  return function () {
    storage.clear();
  };
};
