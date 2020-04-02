import React from "react";
import moment from "moment";
import { Formik } from 'formik';
import * as Yup from 'yup';
import { registerDoctor, deleteDoctor, updateDoctor, getDoctor, getDoctorByCpf } from "../../../_actions/user_actions";
import { useDispatch } from "react-redux";

import { Form, Input, Button, } from 'antd';
const formItemLayout = { labelCol: { xs: { span: 24 }, sm: { span: 8 }, }, wrapperCol: { xs: { span: 24 }, sm: { span: 16 }, }, };
const tailFormItemLayout = { wrapperCol: { xs: { span: 24, offset: 0, }, sm: { span: 16, offset: 8, }, }, };

export default function RegisterDoctorPage(props) {
  const dispatch = useDispatch();
  return (

    <Formik
      initialValues={{
        email: '',
        cpf: '',
        name: '',
        especialidade: '',
        telefone: '',
        registro: '',
        conselho: '',
        password: '',
        confirmPassword: ''
      }}
      validationSchema={Yup.object().shape({
        name: Yup.string()
          .required('Nome obrigatório'),
        telefone: Yup.string()
          .required('Telefone obrigatório'),
        especialidade: Yup.string()
          .required('especialidade obrigatório'),
        registro: Yup.string()
          .required('Registro obrigatório'),
        conselho: Yup.string()
          .required('Conselho Obrigatório'),
        cpf: Yup.string()
          .required('cpf Obrigatório')
          .min(11)
          .max(11),
        email: Yup.string()
          .email('Email is invalid')
          .required('email Obrigatório'),
        password: Yup.string()
          .min(6, 'Password must be at least 6 characters')
          .required('Senha Obrigatória'),
        confirmPassword: Yup.string()
          .oneOf([Yup.ref('password'), null], 'Passwords must match')
          .required('Confirmar senha Obrigatório')
      })}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {

          let dataToSubmit = {
            email: values.email,
            password: values.password,
            name: values.name,
            cpf: values.cpf,
            especialidade: values.especialidade,
            registro: values.registro,
            conselho: values.conselho,
            telefone: values.telefone,
            image: `http://gravatar.com/avatar/${moment().unix()}?d=identicon`
          };

          dispatch(registerDoctor(dataToSubmit)).then(response => {
            if (response.payload.success) {
              props.history.push("/login");
            } else {
              alert(response.payload.err.errmsg)
            }
          })
          setSubmitting(false);
        }, 500);
      }}
    >
      {props => {
        const {
          values,
          touched,
          errors,
          //dirty,
          isSubmitting,
          handleChange,
          handleBlur,
          handleSubmit,
          //handleReset,
        } = props;
        return (
          <div className="app">
            <h2>Cadastrar Médico</h2>
            <Form style={{ minWidth: '375px' }} {...formItemLayout} onSubmit={handleSubmit} >

              <Form.Item required label="Name">
                <Input
                  id="name"
                  placeholder="Enter your name"
                  type="text"
                  value={values.name}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.name && touched.name ? 'text-input error' : 'text-input'
                  }
                />
                {errors.name && touched.name && (
                  <div className="input-feedback">{errors.name}</div>
                )}
              </Form.Item>

              <Form.Item required label="CPF">
                <Input
                  id="cpf"
                  placeholder="CPF"
                  type="text"
                  value={values.cpf}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.cpf && touched.cpf ? 'text-input error' : 'text-input'
                  }
                />
                {errors.cpf && touched.cpf && (
                  <div className="input-feedback">{errors.cpf}</div>
                )}
              </Form.Item>

              <Form.Item required label="Email" hasFeedback validateStatus={errors.email && touched.email ? "error" : 'success'}>
                <Input
                  id="email"
                  placeholder="Enter your Email"
                  type="email"
                  value={values.email}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.email && touched.email ? 'text-input error' : 'text-input'
                  }
                />
                {errors.email && touched.email && (
                  <div className="input-feedback">{errors.email}</div>
                )}
              </Form.Item>

              <Form.Item required label="Senha" hasFeedback validateStatus={errors.password && touched.password ? "error" : 'success'}>
                <Input
                  id="password"
                  placeholder="Digite a senha"
                  type="password"
                  value={values.password}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.password && touched.password ? 'text-input error' : 'text-input'
                  }
                />
                {errors.password && touched.password && (
                  <div className="input-feedback">{errors.password}</div>
                )}
              </Form.Item>

              <Form.Item required label="Confirme" hasFeedback>
                <Input
                  id="confirmPassword"
                  placeholder="Confirme a sua senha"
                  type="password"
                  value={values.confirmPassword}
                  onChange={handleChange}
                  onBlur={handleBlur}
                  className={
                    errors.confirmPassword && touched.confirmPassword ? 'text-input error' : 'text-input'
                  }
                />
                {errors.confirmPassword && touched.confirmPassword && (
                  <div className="input-feedback">{errors.confirmPassword}</div>
                )}
              </Form.Item>

              <Form.Item {...tailFormItemLayout}>
                <Button onSubmit={handleSubmit} type="primary" disabled={isSubmitting}>
                  Cadastrar
                </Button>
                <Button onSubmit={handleSubmit} type="primary" disabled={isSubmitting}>
                  Cadastrar
                </Button>
                <Button onSubmit={handleSubmit} type="danger" disabled={isSubmitting}>
                  Inativar
                </Button>
              </Form.Item>
            </Form>
          </div>
        );
      }}
    </Formik>
  );
};