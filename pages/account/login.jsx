import { useRouter } from "next/router";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as Yup from "yup";

import { Link } from "components";
import { Layout } from "components/account";
import { userService, alertService } from "services";
import { Wrapper, AppName } from "styles/loginStyles";

export default Login;

function Login() {
  const router = useRouter();

  // form validation rules
  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required").min(6, "Password must be at least 6 characters"),
  });

  const formOptions = { resolver: yupResolver(validationSchema) };

  // get functions to build form with useForm() hook
  const { register, handleSubmit, formState } = useForm(formOptions);
  const { errors } = formState;

  function onSubmit({ username, password }) {
    return userService
      .login(username, password)
      .then(() => {
        // get return url from query parameters or default to '/'
        const returnUrl = router.query.returnUrl || "/";
        router.push(returnUrl);
      })
      .catch(alertService.error);
  }

  return (
    <Wrapper>
      <Layout>
        <AppName>My Money</AppName>
        <div className="card" style={{ backgroundColor: "#0f0e17" }}>
          <div className="card-body">
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="form-group">
                <label style={{ color: "#fffffe" }}>Username</label>
                <input
                  style={{ backgroundColor: "#0f0e17", color: "#fffffe" }}
                  name="username"
                  type="text"
                  placeholder=""
                  defaultValue={""}
                  {...register("username")}
                  className={`form-control ${errors.username ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.username?.message}</div>
              </div>
              <div className="form-group">
                <label style={{ color: "#fffffe" }}>Password</label>
                <input
                  style={{ backgroundColor: "#0f0e17", color: "#fffffe" }}
                  name="password"
                  type="password"
                  {...register("password")}
                  className={`form-control ${errors.password ? "is-invalid" : ""}`}
                />
                <div className="invalid-feedback">{errors.password?.message}</div>
              </div>
              <button
                style={{ backgroundColor: "#ff8906", color: "#fffffe" }}
                disabled={formState.isSubmitting}
                className="btn btn-primary"
              >
                {formState.isSubmitting && <span className="spinner-border spinner-border-sm mr-1"></span>}
                Login
              </button>
              <Link style={{ color: "#fffffe" }} href="/account/register" className="btn btn-link">
                Register
              </Link>
            </form>
          </div>
        </div>
      </Layout>
    </Wrapper>
  );
}
