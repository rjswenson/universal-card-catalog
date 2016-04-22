# universal_card_catalog

A basic card catalog for any gaming system.  The goal for this sucker is to assist in a closed source game project I'm working on.  While the game might be closed source, this card catalog will be universal.  Works with D&D, RTS games, and any other system with monsters, units, or heroes.

====

## What?
- create CSV `pipe separated` data files for your favorite systems
- modeled after the rank/paragon unit system made popular by **Warcraft III** and **Starcraft:BW**
- add animated portrait and unit `pngs`, `jpegs`, and [gifs](http://vignette2.wikia.nocookie.net/starcraft/images/e/ed/Marine_SC2_GameAnim1.gif/revision/latest?cb=20080605172207).
- run as many analytics and diagnostics as you prefer on their databanks.  Min-Max~!


## Run & Build Command Examples

`npm run build` will compile the whole site.

`npm start` will start node webservice w/ js app & api.


## Run with Docker

```sh
npm run docker-build
npm run docker-run

# Or to mount the local dev folder for live updating (no `docker build` needed for every change)
npm run docker-run-dev

```

