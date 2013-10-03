"use strict";

function attachOnLoadHandler(_function) {
    if (document.addEventListener) {
        document.addEventListener('DOMContentLoaded', _function);
    } else if (document.attachEvent) {
        document.attachEvent("onreadystatechange", _function);
    }
}