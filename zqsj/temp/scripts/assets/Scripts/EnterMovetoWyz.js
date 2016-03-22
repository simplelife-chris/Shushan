cc._RFpush(module, '1b5b9576PhHgIzKRHjUX4to', 'EnterMovetoWyz');
// Scripts/EnterMovetoWyz.js

'use strict';

cc.Class({
    'extends': cc.Component,

    properties: {
        // foo: {
        //    default: null,
        //    url: cc.Texture2D,  // optional, default is typeof default
        //    serializable: true, // optional, default is true
        //    visible: true,      // optional, default is true
        //    displayName: 'Foo', // optional
        //    readonly: false,    // optional, default is false
        // },
        // ...
    },

    // use this for initialization
    onLoad: function onLoad() {},

    toEmeiHouShan: function toEmeiHouShan() {
        cc.director.loadScene('二峨眉后山');
    }

    // called every frame, uncomment this function to activate update callback
    // update: function (dt) {

    // },
});

cc._RFpop();