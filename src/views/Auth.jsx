import { useFormik } from "formik";
import InputField from "../views/InputField";

import { schmea } from "../schema";
import { inputs } from "../constants";


const Auth = () => {
  //formik ozelliklerini kullanmızı saglayan hook
  const formik = useFormik({
    //formda tutulacak verileri belirle
    initialValues: {
      email: "",
      age: "",
      password: "",
      confirmPassword: "",
    },
    //form gönderilince calısır
    onSubmit: (values, actions) => {
      localStorage.setItem("user", JSON.stringfy(values));

      //bütün valueları sıfır-lar
      actions.resetForm();
    },

    //doğrulama  şeması
    validationSchema: schmea,
  });

  return (
    <div className="auth-page">
      <div className="container">
        <h2 className="d-flex gap-3 justify-content-center align-items-center text-center my-5">
          <img height={60} src="/btc.png" alt="logo" />
          <span>CoinMania</span>
        </h2>

        {/* form alanı */}
        <form 
        
        onSubmit={formik.handleSubmit}>
         
          {inputs.map((data,i) => ( 
            
            <InputField  key={i} formik={formik} data={data} />
          ))}
          <button type="submit">Kaydol</button>
        </form>
      </div>
    </div>
  );
};

export default Auth;
