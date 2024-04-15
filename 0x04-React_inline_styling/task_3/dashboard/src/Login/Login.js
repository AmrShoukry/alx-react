const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div>
        <label htmlFor="email">Email</label>
        <input type="text" id="email" placeholder="Email" />
      </div>
      <div>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" placeholder="Password" />
      </div>
      <button>OK</button>
    </>
  );
};

export default Login;
