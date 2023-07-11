import React from "react";
import Layout from "../components/Layout";

import { Col, Form, Input, Row, message } from "antd";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import axios from "axios";
import { hideLoading, showLoading } from "../redux/features/alertSlice";

const ApplyPatient = () => {
  const { user } = useSelector((state) => state.user);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  //handle form
  const handleFinish = async (values) => {
    console.log(values);
    try {
      dispatch(showLoading());
      const res = await axios.post(
        "/api/v1/user/apply-patient",
        { ...values, userId: user._id },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      );
      dispatch(hideLoading());
      if (res.data.success) {
        message.success("Successfully Applied For Patient Account");
        navigate("/");
      } else {
        message.error("Something Went Wrong");
      }
    } catch (error) {
      dispatch(hideLoading());
      console.log(error);
      message.error("Something Went Wrong ");
    }
  };

  return (
    <Layout>
      <h1 className="text-center">Apply Patient</h1>
      <Form layout="vertical" onFinish={handleFinish} className="m-3">
        <h4 className="">Personal Details : </h4>
        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="First Name"
              name="firstName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your first name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Last Name"
              name="lastName"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your last name" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Phone No"
              name="phone"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your contact no" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Email"
              name="email"
              required
              rules={[{ required: true }]}
            >
              <Input type="email" placeholder="your email address" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item label="Website" name="website">
              <Input type="text" placeholder="your website" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Address"
              name="address"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your address" />
            </Form.Item>
          </Col>
        </Row>
        <h4>Medical History :</h4>

        <Row gutter={20}>
          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Previous Disease"
              name="previousDisease"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Your Previous Disease " />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Previous Medicines"
              name="previousMedicines"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="your previous Medicines" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Current Medicines"
              name="currentMedicines"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Current Medicines[If Any]" />
            </Form.Item>
          </Col>

          <Col xs={24} md={24} lg={8}>
            <Form.Item
              label="Current Disease"
              name="currentDisease"
              required
              rules={[{ required: true }]}
            >
              <Input type="text" placeholder="Current Disease [If Any]" />
            </Form.Item>
          </Col>
          <Col xs={24} md={24} lg={8}></Col>
          <Col xs={24} md={24} lg={8}>
            <button className="btn btn-primary form-btn" type="submit">
              Submit
            </button>
          </Col>
        </Row>
      </Form>
    </Layout>
  );
};

export default ApplyPatient;
