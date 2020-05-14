import React from "react";

const RegisterNewStoreManager = () => {
  return (
    <div className="bg-light mt-4 p-4">
      <form className="login_form" action="#/" id="contactForm">
        <div className="row pt-4">
          <div className="col-sm  form-group">
            <input
              type="text"
              class="form-control"
              id="firstName"
              placeholder="First Name"
              required="true"
            />
          </div>
          <div className="col-sm  form-group">
            <input
              type="text"
              class="form-control"
              id="lastName"
              placeholder="Last Name"
              required="true"
            />
          </div>
        </div>
        <div className="row">
          <div className="col-sm form-group">
            <div className="creat_account">
              <input
                type="email"
                class="form-control"
                id="email"
                placeholder="Email"
                required="true"
              />
            </div>
          </div>
          <div className="col-sm form-group">
            <button
              type="submit"
              value="submit"
              class="button button-login w-100"
            >
              Generate Login and Send
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default RegisterNewStoreManager;
