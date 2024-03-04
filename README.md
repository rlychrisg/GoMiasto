# GoMiasto

## A quick note on the map zoom issues
A few people have mentioned issues with the map on mobile screens. The problem is that this works by fixing a map image to a Leaflet layer, so the position and zoom has to be completely locked down. While zooming on the browser works fine, pinch zoom on the mobiles causes problems that I just don't know how to fix. I thought this was a really clever way to avoid using custom map tiles, which would be far too overcomplicated for this use case. Sadly not. **The solution** is just doing without the Leaflet API and instead manually positioning the markers. Initially, it's more work, but once it's done it will give me greater control over responsive design and accesability.

## How to Play

[Click here to play](https://rlychrisg.github.io/GoMiasto/)

Guess a city or location to win. You have only 6 attempts, but each incorrect guess will give you the distance and direction to help with your next guess. Distance is given 'as the crow flies' and the location of the pin drop will typically be the city centre. Only valid answers can be submitted but if you're unsure then suggestions will pop up once you start typing.

Want to play a location that isn't provided yet? Feel free to request or contribute your ideas on the Github page.

Oh and one more thing, try to avoid double clicking the map. I guess the markers don't like it so they run away. Sure, maybe it is a little skittish but I think they bring a lot to the user experience and they're happy to do it for free, so please just give them a break, yeah?

## Background
This started off as a project to teach myself Python, but when I got to the gui stage I found myself hitting too many walls that I couldn't find a way around. GoMiasto is heavily inspired by the web game [Worldle](https://worldle.teuteuf.fr/), and it started to occur to me that if my inspiration was a web game, then I'd probably have better luck if I tried to make a web game.

This game functions (and nobody can take that away from me!) but it is quite clearly the work of an amateur. I didn't want to put this out into the world until it met a standard I was happy with, but I think I've given it a good effort, and this is as far as I can take it without my head exploding. Any input whatsoever would be greatly appreciated, I will do my best to act on any issues or suggestions.

## THANKYOUUUS
+ Once again, the makers of [Worldle](https://worldle.teuteuf.fr/) for creating a great game which I have played daily for years.
+ LoonyWizard for [JS-Confetti](https://github.com/loonywizard/js-confetti) and Volodymyr Agafonkin for [Leaflet](https://leafletjs.com/), both of which bring a lot of fun to the game.

