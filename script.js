let confirmIt;
(() => {
	if (typeof window.confirm !== 'function') {
		return alert("Your browser does not support some functionality required for this site.  Please expect a limited experience.")
	}

	confirmIt = (confirmArr, cb) => {
		if (!window.confirm(confirmArr.shift())) {
			return false;
		}

		if (confirmArr.length < 1) {
			cb();
			return true;
		} else {
			return confirmIt(confirmArr, cb);
		}
	}
})()



