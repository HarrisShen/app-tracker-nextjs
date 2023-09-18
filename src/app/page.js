export default function Home() {
  return (
    <>
      <div class="container mt-5">
        <div class="row">
          <div class="col-md-6">
            <h1>Job Application Tracker</h1>
            <p>Keep track of all your job applications in one place. Say goodbye to messy spreadsheets and email folders!</p>
          </div>
          <div class="col-md-6">
            <form>
              <h2>Log In</h2>
              <div class="form-floating mb-3">
                <input type="email" class="form-control" id="email" placeholder="name@example.com"/>
                <label for="email">Email address</label>
              </div>
              <div class="form-floating mb-3">
                <input type="password" class="form-control" id="password" placeholder="Password"/>
                <label for="password">Password</label>
              </div>
              <button type="submit" class="btn btn-primary">Log In</button>
            </form>
            <p class="mt-3">New user? <a href="#">Sign up here</a></p>
          </div>
        </div>
      </div>
    </>
  )
}