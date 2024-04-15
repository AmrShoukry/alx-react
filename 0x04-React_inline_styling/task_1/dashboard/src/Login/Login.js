const Login = () => {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <label htmlFor="email">Email</label>
      <input type="text" id="email" placeholder="Email" />
      <label htmlFor="password">Password</label>
      <input type="password" id="password" placeholder="Password" />
      <button>OK</button>
    </>
  );
};

export default Login;
