import { useEffect } from 'react'
import Link from 'next/link'

const SignupForm = ({ formRef, onChange, onSubmit, errors = {} }) => {
  useEffect(() => {
    if (!errors) return
    Object.entries(errors).forEach(([name, error]) => {
      //[TODO] - Tooltip
      formRef.current[name]?.classList.add('error')
    })
  }, [errors, formRef])

  return (
    <form ref={formRef} onChange={onChange} onSubmit={onSubmit} role="form">
      <label>Email</label>
      <div className="mb-3">
        <input
          title="Something Something dark side"
          name="email"
          type="email"
          className="form-control"
          placeholder="Email"
          aria-label="email"
        />
      </div>
      <label>Password</label>
      <div className="mb-3">
        <input name="password1" type="password" className="form-control" placeholder="Password" aria-label="Password" />
      </div>
      <label>Confirm Password</label>
      <div className="mb-3">
        <input name="password2" type="password" className="form-control" placeholder="Password" aria-label="Password" />
      </div>
      <div className="form-check form-check-info text-left">
        <input name="accept-terms" className="form-check-input" type="checkbox" id="accept-terms" />
        <label className="form-check-label" htmlFor="accept-terms">
          I agree with the &nbsp;
          <Link href="/privacy">
            <a className="text-dark font-weight-bolder">Terms and Conditions</a>
          </Link>
        </label>
      </div>
      <div className="text-center">
        <button className="btn btn-primary w-100 mt-4 mb-0">Sign up</button>
      </div>
    </form>
  )
}

export default SignupForm
