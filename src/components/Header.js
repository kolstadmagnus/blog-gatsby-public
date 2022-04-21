import * as React from "react"
import { Link } from "gatsby"

export default function Header() {
  return (
    <header>
      <nav>
        <ol>
          <li>
            <Link to="/" activeClassName="active"><span itemProp="author">Magnus Kolstad</span></Link>
          </li>
          <li>
            <Link to="/om-meg" activeClassName="active">Om meg</Link>
          </li>
          <li>
            <Link to="/diskusjon" activeClassName="active">Diskusjon</Link>
          </li>
          <li>
            <Link to="/journalistikk" activeClassName="active" > Journalistikk</Link>
          </li>
          <li>
            <Link to="/foto" activeClassName="active">Foto</Link>
          </li>
        </ol>
      </nav>
    </header>
  )
}