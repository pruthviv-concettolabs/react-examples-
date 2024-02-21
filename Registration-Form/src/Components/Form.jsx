import "./form.css";

const Form = () => {
  return (
    <div className="container">
      <div className="header">
        <h1>Registration form</h1>
      </div>
      <div className="input-box">
        <div>
          <input type="text" placeholder="enter your name " name="name" />
        </div>
        <div>
          <input type="text" placeholder="enter your email " name="email" />
        </div>
        <div>
          <input
            type="text"
            placeholder="enter your password "
            name="password"
          />
        </div>
      </div>
    </div>
  );
};

export default Form;
