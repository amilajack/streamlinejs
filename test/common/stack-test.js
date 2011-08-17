/*** Generated by streamline 0.1.36-stack - DO NOT EDIT ***/ var __global = typeof global !== 'undefined' ? global : window;var __srcName='streamline/test/common/stack-test_.js'; function __func(_, __this, __arguments, fn, index, frame, body) { if (!_) { return __future.call(__this, fn, __arguments, index); } frame.file = __srcName; frame.prev = __global.__frame; __global.__frame = frame; try { body(); } catch (e) { e.__frame = e.__frame || frame.prev; __propagate(_, e); } finally { __global.__frame = __frame.prev; } } function __cb(_, frame, offset, col, fn){ frame.offset = offset; frame.col = col; var ctx = __global.__context; return function ___(err, result){ var oldFrame = __global.__frame; __global.__frame = frame; __global.__context = ctx; try { if (err) { err.__frame = err.__frame || frame; return _(err); } return fn(null, result); } catch (ex) { ex.__frame = ex.__frame || frame; return __propagate(_, ex); } finally { __global.__frame = oldFrame; } } } function __future(fn, args, i){ var done, err, result; var cb = function(e, r){ done = true; err = e, result = r; }; args = Array.prototype.slice.call(args); args[i] = function ___(e, r){ cb(e, r); }; fn.apply(this, args); return function ___(_){ if (done) _.call(this, err, result); else cb = _.bind(this); } .bind(this); } function __nt(_, frame, fn){ var i = 0; var cb = __cb(_, frame, 0, 0, fn); if (typeof process != "undefined" && typeof process.nextTick == "function") return function ___(){ if (++i % 20 == 0) process.nextTick(cb); else cb(); }; else return function ___(){ if (++i % 20 == 0) setTimeout(cb, 0); else cb(); }; } function __propagate(_, err){ try { _(err); } catch (ex) { __trap(ex); } } function __trap(err){ if (err) { if (__global.__context && __global.__context.errorHandler) __global.__context.errorHandler(err); else console.error("UNCAUGHT EXCEPTION: " + err.message + "\n" + err.stack); } } function __tryCatch(_, fn){ try { fn(); } catch (e) { try { _(e); } catch (ex) { __trap(ex); } } } var module = QUnit.module;




var flows = require("streamline/lib/util/flows");

function nextTick(cb) {
 setTimeout(function() {
 cb();
 }, 0);};


function failAsync(_, code) { var __frame = { name: "failAsync", line: 14 }; return __func(_, this, arguments, failAsync, 0, __frame, function __$failAsync() {
 return _(new Error(code)); });};


function failSync(_, code) { var __frame = { name: "failSync", line: 18 }; return __func(_, this, arguments, failSync, 0, __frame, function __$failSync() {
 (function fail(dummy) {
 throw new Error(code);
 })(0); _(); });};


var fail;

function A(_, code) { var i; var __frame = { name: "A", line: 26 }; return __func(_, this, arguments, A, 0, __frame, function __$A() { return (function __$A(__then) {
 if ((code == 1)) {
 return fail(__cb(_, __frame, 2, 2, __then), code); } else { __then(); } ; })(function __$A() { return (function __$A(__then) {
 if ((code == 2)) {
 return fail(__cb(_, __frame, 4, 2, __then), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 5, 1, function __$A() { return (function __$A(__then) {
 if ((code == 3)) {
 return fail(__cb(_, __frame, 7, 2, __then), code); } else { __then(); } ; })(function __$A() {
 i = 0; var __6 = false; return (function ___(__break) { var __loop = __nt(_, __frame, function __$A() { if (__6) { i++; } else { __6 = true; } ; var __5 = (i < 6); if (__5) { return (function __$A(__then) {
 if ((code == i)) {
 return fail(__cb(_, __frame, 10, 3, __then), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 11, 2, __loop)); }); } else { __break(); } ; }); __loop(); })(function __$A() { return (function __$A(__then) {

 if ((code == 6)) {
 return fail(__cb(_, __frame, 14, 2, __then), code); } else { __then(); } ; })(function __$A() {
 return nextTick(__cb(_, __frame, 15, 1, function __$A() {
 return B(__cb(_, __frame, 16, 1, function __$A() {
 return nextTick(__cb(_, __frame, 17, 1, function __$A() {
 return _(null, "END"); })); }), code); })); }); }); }); })); }); }); });};


function B(_, code) { var __frame = { name: "B", line: 47 }; return __func(_, this, arguments, B, 0, __frame, function __$B() { return (function __$B(__then) {
 if ((code == 7)) {
 return fail(__cb(_, __frame, 2, 2, __then), code); } else { __then(); } ; })(function __$B() {
 return C(__cb(_, __frame, 3, 1, function __$B() {
 return nextTick(__cb(_, __frame, 4, 1, function __$B() {
 return C(__cb(_, __frame, 5, 1, function __$B() {
 return D(__cb(_, __frame, 6, 1, _), code); }), code); })); }), code); }); });};


function C(_, code) { var __frame = { name: "C", line: 56 }; return __func(_, this, arguments, C, 0, __frame, function __$C() { return (function __$C(__then) {
 if ((code == 8)) {
 return fail(__cb(_, __frame, 2, 2, __then), code); } else { __then(); } ; })(_); });};


function D(_, code) { var __frame = { name: "D", line: 61 }; return __func(_, this, arguments, D, 0, __frame, function __$D() { return (function __$D(__then) {
 if ((code == 9)) {
 return fail(__cb(_, __frame, 2, 2, __then), code); } else { __then(); } ; })(_); });};


function E(_, code) { var __frame = { name: "E", line: 66 }; return __func(_, this, arguments, E, 0, __frame, function __$E() { return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$E() {

 return fail(__cb(_, __frame, 2, 2, __then), code); }); })(function ___(ex, __result) { __tryCatch(_, function __$E() { if (ex) { return (function __$E(__then) {


 if (((code % 3) == 1)) {
 return fail(__cb(_, __frame, 6, 3, __then), code); } else { return (function __$E(__then) {
 if (((code % 3) == 2)) {
 return A(__cb(_, __frame, 8, 3, __then), code); } else {

 return _(null, ("OK " + code)); } ; })(__then); } ; })(__then); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, _); }); });};


function T(_, fn, code, failFn) { var s, end; var __frame = { name: "T", line: 79 }; return __func(_, this, arguments, T, 0, __frame, function __$T() {
 fail = failFn;
 s = "{"; return (function ___(__then) { (function ___(_) { __tryCatch(_, function __$T() {

 return fn(__cb(_, __frame, 4, 9, _), code); }); })(function ___(ex, __result) { __tryCatch(_, function __$T() { if (ex) {


 s = flows.stackTrace(ex);


 s = s.split("\n").map(function(l) {
 var m = /^\s+at (\w+)\s\(.*:(\d+)\:.*\)/.exec(l);
 if (m) {
 return ((m[1] + ":") + m[2]) };
 return l;
 }).join("/");
 end = s.indexOf("/T:");
 return _(null, ((end < 0) ? (s + "-- end frame missing") : s.substring(0, end))); } else { _(null, __result); } ; }); }); })(function ___() { __tryCatch(_, _); }); });};



module("flows");

asyncTest("stacks", 20, function __1(_) { var __frame = { name: "__1", line: 102 }; return __func(_, this, arguments, __1, 0, __frame, function __$__1() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, "Error: 1/failAsync:15/A:28");
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, "Error: 1/fail:20/failSync:21/A:28");
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, "Error: 2/failAsync:15/A:30");
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, "Error: 2/fail:20/failSync:21/A:30");
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, "Error: 3/failAsync:15/A:33");
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, "Error: 3/fail:20/failSync:21/A:33");
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, "Error: 4/failAsync:15/A:36");
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, "Error: 4/fail:20/failSync:21/A:36");
 return T(__cb(_, __frame, 9, 13, function ___(__0, __9) { strictEqual(__9, "Error: 5/failAsync:15/A:36");
 return T(__cb(_, __frame, 10, 13, function ___(__0, __10) { strictEqual(__10, "Error: 5/fail:20/failSync:21/A:36");
 return T(__cb(_, __frame, 11, 13, function ___(__0, __11) { strictEqual(__11, "Error: 6/failAsync:15/A:40");
 return T(__cb(_, __frame, 12, 13, function ___(__0, __12) { strictEqual(__12, "Error: 6/fail:20/failSync:21/A:40");
 return T(__cb(_, __frame, 13, 13, function ___(__0, __13) { strictEqual(__13, "Error: 7/failAsync:15/B:49/A:42");
 return T(__cb(_, __frame, 14, 13, function ___(__0, __14) { strictEqual(__14, "Error: 7/fail:20/failSync:21/B:49/A:42");
 return T(__cb(_, __frame, 15, 13, function ___(__0, __15) { strictEqual(__15, "Error: 8/failAsync:15/C:58/B:50/A:42");
 return T(__cb(_, __frame, 16, 13, function ___(__0, __16) { strictEqual(__16, "Error: 8/fail:20/failSync:21/C:58/B:50/A:42");
 return T(__cb(_, __frame, 17, 13, function ___(__0, __17) { strictEqual(__17, "Error: 9/failAsync:15/D:63/B:53/A:42");
 return T(__cb(_, __frame, 18, 13, function ___(__0, __18) { strictEqual(__18, "Error: 9/fail:20/failSync:21/D:63/B:53/A:42");
 return T(__cb(_, __frame, 19, 13, function ___(__0, __19) { strictEqual(__19, "END");
 return T(__cb(_, __frame, 20, 13, function ___(__0, __20) { strictEqual(__20, "END");
 start(); _(); }), A, 10, failSync); }), A, 10, failAsync); }), A, 9, failSync); }), A, 9, failAsync); }), A, 8, failSync); }), A, 8, failAsync); }), A, 7, failSync); }), A, 7, failAsync); }), A, 6, failSync); }), A, 6, failAsync); }), A, 5, failSync); }), A, 5, failAsync); }), A, 4, failSync); }), A, 4, failAsync); }), A, 3, failSync); }), A, 3, failAsync); }), A, 2, failSync); }), A, 2, failAsync); }), A, 1, failSync); }), A, 1, failAsync); });});


asyncTest("catch", 20, function __2(_) { var __frame = { name: "__2", line: 126 }; return __func(_, this, arguments, __2, 0, __frame, function __$__2() {
 return T(__cb(_, __frame, 1, 13, function ___(__0, __1) { strictEqual(__1, "Error: 1/failAsync:15/E:72");
 return T(__cb(_, __frame, 2, 13, function ___(__0, __2) { strictEqual(__2, "Error: 1/fail:20/failSync:21/E:72");
 return T(__cb(_, __frame, 3, 13, function ___(__0, __3) { strictEqual(__3, "Error: 2/failAsync:15/A:30/E:74");
 return T(__cb(_, __frame, 4, 13, function ___(__0, __4) { strictEqual(__4, "Error: 2/fail:20/failSync:21/A:30/E:74");
 return T(__cb(_, __frame, 5, 13, function ___(__0, __5) { strictEqual(__5, "OK 3");
 return T(__cb(_, __frame, 6, 13, function ___(__0, __6) { strictEqual(__6, "OK 3");
 return T(__cb(_, __frame, 7, 13, function ___(__0, __7) { strictEqual(__7, "Error: 4/failAsync:15/E:72");
 return T(__cb(_, __frame, 8, 13, function ___(__0, __8) { strictEqual(__8, "Error: 4/fail:20/failSync:21/E:72");
 return T(__cb(_, __frame, 9, 13, function ___(__0, __9) { strictEqual(__9, "Error: 5/failAsync:15/A:36/E:74");
 return T(__cb(_, __frame, 10, 13, function ___(__0, __10) { strictEqual(__10, "Error: 5/fail:20/failSync:21/A:36/E:74");
 return T(__cb(_, __frame, 11, 13, function ___(__0, __11) { strictEqual(__11, "OK 6");
 return T(__cb(_, __frame, 12, 13, function ___(__0, __12) { strictEqual(__12, "OK 6");
 return T(__cb(_, __frame, 13, 13, function ___(__0, __13) { strictEqual(__13, "Error: 7/failAsync:15/E:72");
 return T(__cb(_, __frame, 14, 13, function ___(__0, __14) { strictEqual(__14, "Error: 7/fail:20/failSync:21/E:72");
 return T(__cb(_, __frame, 15, 13, function ___(__0, __15) { strictEqual(__15, "Error: 8/failAsync:15/C:58/B:50/A:42/E:74");
 return T(__cb(_, __frame, 16, 13, function ___(__0, __16) { strictEqual(__16, "Error: 8/fail:20/failSync:21/C:58/B:50/A:42/E:74");
 return T(__cb(_, __frame, 17, 13, function ___(__0, __17) { strictEqual(__17, "OK 9");
 return T(__cb(_, __frame, 18, 13, function ___(__0, __18) { strictEqual(__18, "OK 9");
 return T(__cb(_, __frame, 19, 13, function ___(__0, __19) { strictEqual(__19, "Error: 10/failAsync:15/E:72");
 return T(__cb(_, __frame, 20, 13, function ___(__0, __20) { strictEqual(__20, "Error: 10/fail:20/failSync:21/E:72");
 start(); _(); }), E, 10, failSync); }), E, 10, failAsync); }), E, 9, failSync); }), E, 9, failAsync); }), E, 8, failSync); }), E, 8, failAsync); }), E, 7, failSync); }), E, 7, failAsync); }), E, 6, failSync); }), E, 6, failAsync); }), E, 5, failSync); }), E, 5, failAsync); }), E, 4, failSync); }), E, 4, failAsync); }), E, 3, failSync); }), E, 3, failAsync); }), E, 2, failSync); }), E, 2, failAsync); }), E, 1, failSync); }), E, 1, failAsync); });});