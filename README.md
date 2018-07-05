# Fullscreen-js

## Fullscreen
Plugin for add the mode fullscreen in your app

## Install
```
npm install roddyvitali/fullscreen-js
```
## Examples
```javascript
import fullscreen from '@roddyvitali/fullscreen-js'

fullscreen.is() // Return true if the body or element is in mode fullscreen
fullscreen.enabled() // Return true if API is enabled

document.querySelector('.selector').addEventListener('click', ()=>{
  fullscreen.request() // Fullscreen Body
  fullscreen.request('.spaceFS') // Fullscreen element whit class spaceFS
})

document.querySelector('.selectorExit').addEventListener('click', ()=>{
  fullscreen.exit() // Exit Fullscreen
})

```

## Credits
- [Roddy Vitali](https://twitter.com/@roddyvitali)

## License
- [MIT](https://github.com/roddyvitali/rut-utils/tree/master/LICENSE)