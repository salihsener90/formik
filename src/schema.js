import * as yup from 'yup';

// 1 küçük harf
// 1 büyük harf
// 1 sayı
// 1 özel karakter
// min 5 karakter
const regex =
  '^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{5,}$'; 

export const schmea = yup.object(). shape({
    //email. için zorunlulukLARI bek-lirleme
    email: yup.string()
    .email('lütfen geçerli email formatı giriniz')
    . required("email alanı zorunludur"),
    //yaş için zorunlulukları belirleme
    age: yup
    .number()
    .min(18, "yaş 18 den büyük olmalı")
    .max(100, "yaş 100 den büyük olamaz")
    .integer("lütfen bir tam sayı giriniz"),
    password: yup
    .string() 
    .min(5, "şifre en az 5 karakter olmalı")
    .matches(regex, "Şifreniz yeterince güçlü değil")
    .required('Şifrr alanı Zorunludur'),
     confirmPassword: yup
     .string() //
     .oneOf([yup.ref('password')], 'Onay şifreniz doğru değil')
     .required('Lütfen Şifrenizi Onaylayın')
})