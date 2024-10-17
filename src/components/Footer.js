import "./footer.css"

export const Footer = () => {
  return (
    <div className="footer">
      <h4>myMateTask</h4>
    <section className="footer-nav">

      <div>
        <h5>Home</h5>
      </div>

      <div>
        <h5>Goals</h5>
        <ul>
            <li>Spiritual</li>
            <li>Social</li>
            <li>Physical</li>
            <li>Intellectual</li>
        </ul>
      </div>

      <div>
        <h5>Profile</h5>
        <ul>
            <li>User settings</li>
            <li>statistics</li>
        </ul>
      </div>

      <div>
        <h5>Resources</h5>
        <ul>
            <li>Articles</li>
            <li>videos</li>
            <li>motivational quotes</li>
        </ul>
      </div>
    </section>
      <p>&copy; copyright 2024 | Loris Jared Ndonga</p>
    </div>
  )
}
