import * as React from "react"
import Header from '../components/Header'



const NotFoundPage = () => {
  return (
    <React.Fragment>
      <Header />
      <div>
        <h1>
          Oops!
        </h1>
        <p>
          Looks like the page you were looking for could not be found.
        </p>
        <a href='/' >
          Return to homepage
        </a>
      </div>
    </React.Fragment>


  )
}

export default NotFoundPage

export const Head = () =>
  <>
    <title>Page Not Found</title>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
    <link href="https://fonts.googleapis.com/css2?family=Poppins:wght@200;400&display=swap" rel="stylesheet" />
  </>