"use strict";

/// !doc
/// 
/// # Compiler and file loader
///  
/// `var compiler = require('streamline/lib/compiler/compile')`
/// 
var fs = require("fs");
var fspath = require("path");
var babel = require('babel');
var util = require('./util');
var compileSync = require('../compiler/compileSync');

var _exists = _(function(cb, fname) {
	fs.exists(fname, function(result) {
		cb(null, result);
	});
}, 0);

function mtime(_, fname) {
	return _exists(_, fname) ? fs.stat(fname, ~_).mtime : 0;
}

var _0755 = parseInt("0755", 8);

function _extend(obj, other) {
	for (var i in other) {
		obj[i] = other[i];
	}
	return obj;
}

function mkdirp(_, path) {
	try {
		fs.mkdir(path, _0755, _);
	} catch (err) {
		if (err.code === 'EEXIST') {
			if (fs.stat(path, _).isDirectory()) {
				return;
			}
			throw err;
		}
		if (err.code === 'ENOENT') {
			mkdirp(_, fspath.join(path, '..'));
			fs.mkdir(path, _0755, _);
			return;
		}
		throw err;
	}
}

function outputFile(_, inFile, options) {
	var dirname = fspath.dirname(inFile);
	var outDir;
	if (options.outputDir) {
		if (options.baseDir) {
			outDir = fspath.join(options.outputDir, fspath.relative(options.baseDir, dirname));
		} else {
			outDir = options.outputDir;
		}
	} else {
		outDir = dirname;
	}
	mkdirp(_, outDir);
	var stripped = fspath.basename(inFile, fspath.extname(inFile));
	return fspath.join(outDir, stripped + ".js");
}

/// Transform streamline source
exports.compileFile = function(_, path, options) {
	options = options || {};
	var babelOptions = util.babelOptions(options);
	var transformed = babel.transformFile(path, babelOptions, _).code;
	if (options.noWrite) {
		return {
			transformed: transformed.code,
			sourceMap: transformed.map,
		};
	}
	var dstName = outputFile(_, path, options);
	if (options.verbose) console.log("streamline: creating: " + dstName);
	fs.writeFile(dstName, transformed.code, 'utf8', _);
	if (options.sourceMap) {
		var mapFile = options.sourceMapFile || path.replace(/\.\w+$/, '.map');
	if (options.verbose) console.log("streamline: creating: " + mapFile);
	fs.writeFile(mapFile, transformed.map.toString(), 'utf8', _);
}
};

// * `script = compiler.loadFile(_, path, options)`
//   Loads Javascript file and transforms it if necessary.
//   Returns the transformed source.
//   `options` is a set of options passed to the transformation engine.
//   If `options.force` is set, `foo._js` is transformed even if `foo.js` is more recent.
exports.loadFile = function(_, path, options) {
	options = options || {};
	var babelOptions = util.babelOptions(options);

	var ext = fspath.extname(path);
	if (ext !== '.js' && ext !== '._js') {
		// special hack for streamline-require
		if (_exists(_, path + '._js')) path = path + (ext = '._js');
		else if (_exists(_, path + '.js')) path = path + (ext = '.js');
		else return;
	}
	var basename = fspath.basename(path, ext);
	var dirname = fspath.dirname(path);

	var js = dirname + '/' + basename + ext;

	var banner = util.banner(options);
	var content = babel.transformFile(js, babelOptions, _).code;
	var shebangparse = util.parseShebang(content);
	var shebang = shebangparse[0];
	var le = shebangparse[2];
	content = shebangparse[1];
	banner = shebang + le + banner;
	return (ext === '._js') ? banner + content : content;
};

exports.transformModule = compileSync.transformModule;
exports.cachedTransformSync = compileSync.cachedTransformSync;

/// Compile streamline or coffee src and return the transformed
/// content.
exports.transform = function(_, path, options) {
	options = options || {};
	var babelOptions = util.babelOptions(options);
	if (!util.canCompile(path)) return;
	return babel.transformFile(path, babelOptions, _).code;
};

/// * `compiler.compile(_, paths, options)`
///   Compiles streamline source files in `paths`.
///   Generates a `foo.js` file for each `foo._js` file found in `paths`.
///   `paths` may be a list of files or a list of directories which
///   will be traversed recursively.  
///   `options`  is a set of options for the `transform` operation.
exports.compile = function(_, paths, options) {
	function _compile(_, path, base, options) {
		var stat = fs.stat(path, ~_);
		if (stat.isDirectory()) {
			base = base || path;
			fs.readdir(path, ~_).forEach_(_, function(_, f) {
				_compile(_, path + "/" + f, base, options);
			});
		} else if (stat.isFile()) {
			try {
				base = base || fspath.dirname(path);
				options.baseDir = base;
				if (util.canCompile(path)) exports.compileFile(_, path, options);
			} catch (ex) {
				console.error(ex.stack);
				failed++;
			}
		}
		// else ignore
	}

	var failed = 0;
	options = options || {};
	var transform = _getTransform(options);
	if (options.verbose) console.log("transform version: " + transform.version);
	if (!paths || paths.length === 0) throw new Error("cannot compile: no files specified");
	var cwd = process.cwd();
	paths.forEach_(_, function(_, path) {
		_compile(_, fspath.resolve(cwd, path), null, options);
	});
	if (failed) throw new Error("errors found in " + failed + " files");
};

util.deprecate(module, 'use babel API instead');