import * as React from "react"
import { Link } from "gatsby"

export default function AboutMe() {
  return (
    <article className="post">
      <h1 itemprop="headline">Om meg</h1>
      <p>Jeg studerer journalistikk på Universitetet i Stavanger.</p>
      <p>For øyeblikket er jeg praktikant i <a href="https://www.aftenbladet.no/sok?query=magnus+kolstad">Stavanger Aftenblad</a>. Tidligere har jeg vært i praksis i <a href="https://www.sandnesposten.no/sok?query=magnus+kolstad">Sandnesposten</a>.</p>
      <p>Jeg brenner for godt språk, og prøver å anvende denne lidenskapen i <Link to="/journalistikk">journalistikken jeg skriver</Link>.</p>
      <p>Ellers er denne nettsiden et resultat av kjærligheten min for design, typografi og teknologi. Rammeverket jeg har brukt, er <a href="https://gatsbyjs.com/">Gatsby</a>. Brødteksten er satt i <a href="https://mbtype.com/fonts/heliotrope/">Heliotrope</a> av <a href="https://matthewbutterick.com/">Matthew Butterick</a>. Typografien henter inspirasjon fra <a href="https://practicaltypography.com/"><em>Butterick’s Practical Typography</em></a> så vel som <a href="https://nytimes.com/">The New York Times</a> og <a href="https://chad.is/">chad.is</a>.</p>
      <p>Kontakt? Du kan nå meg på <a className="no-hyphens" href="mailto:kolstadmagnus@gmail.com">kolstadmagnus@gmail.com</a>.</p>
    </article>
  )
}