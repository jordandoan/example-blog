import {Link } from "gatsby"
import PropTypes from "prop-types"
import React from "react"
import styles from "./styles/header.module.less"

const Header = ({ siteTitle }) => (
  <header className={styles.header}>
    <div className={styles.container}>
      <div>
        <h1 className={styles.title}>
          <Link className={styles.link} to="/">
            {siteTitle}
          </Link>
        </h1>
      </div>
      <div className={styles.links}>
        <Link className={styles.link} to="/preface">Preface</Link>
      </div>
    </div>

  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
