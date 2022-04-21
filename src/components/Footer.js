import * as React from "react"
import { Link } from "gatsby"

export default function Footer() {
  return (
    <footer>
      <nav>
        <ol>
          <Link to="/om-meg">
            <li>
              <h3>Om meg</h3>
              <p>Mer om meg og hva jeg gjør.</p>
            </li>
          </Link>
          <Link to="/diskusjon">
            <li>
              <h3>Diskusjon</h3>
              <p>Tekster om forskjellige temaer.</p>
            </li>
          </Link>
          <Link to="/journalistikk">
            <li>
              <h3>Journalistikk</h3>
              <p>Artikler og reportasjer jeg har lagd.</p>
            </li>
          </Link>
          <Link to="/foto">
            <li>
              <h3>Foto</h3>
              <p>En samling av bilder jeg har tatt.</p>
            </li>
          </Link>
        </ol>
      </nav>
    </footer>
  )
}