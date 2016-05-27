# pw-butts
Have you ever been working on an angular app, misspelled a ```<button>``` tag and wished that ```<butt>``` was a real tag? Wish no more. pw-butts is an angular directive that fufills all your butt tag wishes.

## Getting Started

### npm

Like all legitimate libraries, pw-butts is available on npm
```
npm install pw-butts
```

### github

If you'd rather not use npm, you can also clone this repo
```
git clone git@github.com:philwade/pw-butts.git
```
Once you have the code, include it as a dependency in your angular app.

```html
<script src="path/to/pw-butts/src/butts.js"></script>
<script>
	var yourApp = angular.module('demo', ['pw-butts']);
</script>
```
Now you're ready to put some butts out there.

## Basic Usage

The easiest way to get a butt going is just ```<butt></butt>```

\(\_\|\_\)

But we also support multiple butts... ```<butts></butts>```

\(\_I\_\)\(\_I\_\)\(\_I\_\)

<butts> defaults to three, but takes a count attribute ```<butts count="5"></butts>```

\(\_I\_\)\(\_I\_\)\(\_I\_\)\(\_I\_\)\(\_I\_\)

Through the type attribute, there are a few varieties available: ```<butt type="wide"></butt>``` (this works for both <butt> and <butts>)

\(\_\_\_\|\_\_\_\)

Right now supported types are ```wide, doublewide, raunchy and gross```.

## Advanced Configuration

If the provided butts aren't enough for you, <butt> provides a configuration provider for setting them how you'd like globally.

```javascript
app.config(['buttFactoryProvider', function(buttFactoryProvider) {

	// Set the default butt
	buttFactoryProvider.setButt('(_0_)');

	// Set your own named butt
	buttFactoryProvider.setButt('(_:)_)', 'smile');

	// setButt will also take an object to create new and override others
	buttFactory.setButt({
		wide: '[____|____]',
		cash: '(_$_)'
	});
}]);
```

