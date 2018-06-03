# confirmIt
> Allowing you to chain confirms together to control behavior

## Install
Copy the script into your assets folder.  Include in the markup of your web page.

## Usage
After including it into your html markup, just call it with an array of confirms and a callback function.
```html
<head>
	<meta charset="UTF-8">
	<title></title>
	<script src="script.js"></script>
	<script>
		document.addEventListener('DOMContentLoaded', () => {
			confirmIt(['Iris! Iris! .... Iris... ', "Nooo!! This isn't happening!", "There's no reason for me to go on!", 'What... What am I fighting for?! '], () => {
				console.log('This chain is toast!')
			})
		})
	</script>
</head>
```

Will console.log if the user clicks yes to all the confirms

## API

### confirmIt(confirmArr: *string[]*, cb: *function*): *bool*
```js
confirmIt(['a', 'b', 'c'], () => {
	console.log('finished')
})
// If the user clicks through everything, will result in
//=> true

// Else
//=> false
```

## License

MIT © Tyler Boright
