import React from "react";
import { Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import { FaCheckCircle } from "react-icons/fa";

const CheckoutSteps = ({ step1, step2, step3, step4 }) => {
  return (
    <Nav className="checkout-steps">
      <Nav.Item>
        {step1 ? (
          <LinkContainer to="/login">
            <Nav.Link>
              <FaCheckCircle className="icon" /> Sign In
            </Nav.Link>
          </LinkContainer>
        ) : (
          <div className="disabled">
            <Nav.Link disabled>
              <FaCheckCircle className="icon" /> Sign In
            </Nav.Link>
          </div>
        )}
      </Nav.Item>

      <Nav.Item>
        {step2 ? (
          <LinkContainer to="/shipping">
            <Nav.Link>
              <FaCheckCircle className="icon" /> Shipping
            </Nav.Link>
          </LinkContainer>
        ) : (
          <div className="disabled">
            <Nav.Link disabled>
              <FaCheckCircle className="icon" /> Shipping
            </Nav.Link>
          </div>
        )}
      </Nav.Item>

      <Nav.Item>
        {step3 ? (
          <LinkContainer to="/payment">
            <Nav.Link>
              <FaCheckCircle className="icon" /> Payment
            </Nav.Link>
          </LinkContainer>
        ) : (
          <div className="disabled">
            <Nav.Link disabled>
              <FaCheckCircle className="icon" /> Payment
            </Nav.Link>
          </div>
        )}
      </Nav.Item>

      <Nav.Item>
        {step4 ? (
          <LinkContainer to="/placeorder">
            <Nav.Link>
              <FaCheckCircle className="icon" /> Place Order
            </Nav.Link>
          </LinkContainer>
        ) : (
          <div className="disabled">
            <Nav.Link disabled>
              <FaCheckCircle className="icon" /> Place Order
            </Nav.Link>
          </div>
        )}
      </Nav.Item>
    </Nav>
  );
};

export default CheckoutSteps;
