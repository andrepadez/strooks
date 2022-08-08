const SigninForm = ({ formRef, onChange, onSubmit }) => {
  return (
    <form ref={formRef} role="form" onChange={onChange} onSubmit={onSubmit}>
      <div className="mb-3">
        <input
          type="email"
          name="email"
          className="form-control form-control-lg"
          placeholder="Email"
          aria-label="Email"
        />
      </div>
      <div className="mb-3">
        <input
          type="password"
          name="password"
          className="form-control form-control-lg"
          placeholder="Password"
          aria-label="Password"
        />
      </div>
      <div className="form-check form-switch">
        <input name="remember" className="form-check-input" type="checkbox" id="remember" />
        <label className="form-check-label" htmlFor="remember">
          Remember me
        </label>
      </div>
      <div className="text-center">
        <button className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Sign in</button>
      </div>
    </form>
  )
}

export default SigninForm
