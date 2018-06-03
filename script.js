let confirmIt;
(() => {
	if (typeof window.confirm !== 'function') {
		return alert("Your browser does not support some functionality required for this site.  Please expect a limited experience.")
	}

	confirmIt = (confirmChainArr, cb) => {
		if (!window.confirm(confirmChainArr.shift())) {
			return false;
		}

		if (confirmChainArr.length < 1) {
			return cb();
		} else {
			return confirmIt(confirmChainArr, cb);
		}
	}
})()



