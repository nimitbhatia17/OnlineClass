import React from 'react'

export default function Register() {
  return (
    <div>
      <form action="/register" method="post">
        <label for="fn">First Name: </label>
        <input type="text" name="fn" />
        <label for="ln">Last Name: </label>
        <input type="text" name="ln" />
        <label for="sid">Student ID: </label>
        <input type="text" name="sid" />
        <label for="pw">Password: </label>
        <input type="password" name="pw" />
        <button type="submit">Submit</button>
      </form>
    </div>
  )
}
