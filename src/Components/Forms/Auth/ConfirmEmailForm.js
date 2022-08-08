const ConfirmEmailForm = ({ code, setCode, onSubmit }) => {
  return (
    <form role="form" onSubmit={onSubmit}>
      <div className="mb-3">
        <input
          type="text"
          name="code"
          className="form-control form-control-lg"
          placeholder="Paste Code"
          aria-label="code"
          value={code}
          onChange={(ev) => setCode(ev.target.value)}
        />
      </div>
      <div className="text-center">
        <button className="btn btn-lg btn-primary btn-lg w-100 mt-4 mb-0">Confirm Email</button>
      </div>
    </form>
  )
}

export default ConfirmEmailForm
