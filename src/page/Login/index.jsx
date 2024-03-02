import AuthIllustration from "../../assets/images/auth_illustration.png";

const Login = () => {
  return (
    <main className=" min-h-screen flex items-center justify-center bg-deepDark py-8">
      <div className="max-w-[1368px] flex-1">
        <div className="container grid items-center gap-8 lg:grid-cols-2">
          {/* <!-- illustration and title --> */}
          <div>
            <img
              className="mb-12 max-w-full max-lg:hidden"
              src={AuthIllustration}
              alt="auth_illustration"
            />
            <div>
              <h1 className="mb-3 text-4xl font-bold lg:text-[40px]">
                Facehook
              </h1>
              <p className="max-w-[452px] text-gray-600/95 lg:text-lg">
                Create a social media app with features like, showing the post,
                post details, reactions, comments and profile.
              </p>
            </div>
          </div>
          {/* <!-- illustration and title ends --> */}
          {/* <!-- login form --> */}
          <div className="card">
            <form className="border-b border-[#3F3F3F] pb-10 lg:pb-[60px]">
              {/* <!-- email --> */}
              <div className="form-control">
                <label className="auth-label" htmlFor="email">
                  Email
                </label>
                <input
                  className="auth-input"
                  name="email"
                  type="email"
                  id="email"
                />
              </div>
              {/* <!-- password --> */}
              <div className="form-control">
                <label className="auth-label" htmlFor="email">
                  Password
                </label>
                <input
                  className="auth-input"
                  name="password"
                  type="password"
                  id="password"
                />
              </div>
              {/* <!-- Submit --> */}
              <button
                className="auth-input bg-lwsGreen font-bold text-deepDark transition-all hover:opacity-90"
                type="submit"
              >
                Login
              </button>
            </form>
            <div className="py-4 lg:py-6">
              <p className="text-center text-xs text-gray-600/95 lg:text-sm">
                Don&apos;t have account?
                <a
                  className="text-white transition-all hover:text-lwsGreen hover:underline"
                  href="/registration.html"
                >
                  Create New
                </a>
              </p>
            </div>
          </div>
          {/* <!-- login form ends --> */}
        </div>
      </div>
    </main>
  );
};

export default Login;
