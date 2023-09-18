"use client"

export default function Records() {
  return (
    <div class="container mt-3">
      <div class="mt-3 mb-3">
          <h3>Application Records</h3>
      </div>
      <div class="d-flex justify-content-between">
        <form method="GET">
          <div class="input-group mb-3">
            <input type="text" class="form-control" name="q"/>
            <button class="btn btn-outline-secondary" type="submit">Search</button>
          </div>
        </form>
        <div class="ms-auto">
          <a href="/records/create" class="btn btn-primary me-auto">New Record</a>
        </div>
      </div>
      <table class="table table-striped table-hover">
        <thead class="table-light">
          <tr>
            <th>Company</th>
            <th>Position/Program</th>
            <th>Company Type</th>
            <th>Application Portal</th>
            <th>Status</th>
            <th>Update Time</th>
            <th>Action Deadline</th>          
          </tr>
        </thead>
        <tbody>
          <tr></tr>
        </tbody>
      </table>
    </div>
  )
}