import 'bootstrap/dist/css/bootstrap.css'

export const metadata = {
  title: 'AppTracker',
  description: 'Manage your job applications in one place.',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <nav class="navbar navbar-expand-sm bg-light">
          <div class="container-fluid">
            <span class="navbar-brand mb-0 h1">AppTracker</span>
            <ul class="navbar-nav">
              <li class="nav-item">
                <a class="nav-link" href="/company">Companies</a>
              </li>
              <li class="nav-item">
                <a class="nav-link" href="/job">Jobs</a>
              </li>
            </ul>
          </div>
        </nav>
        <section class="content">
          {children}
        </section>
      </body>
    </html>
  )
}
