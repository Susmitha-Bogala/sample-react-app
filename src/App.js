import React, { useState } from "react";
import { Button, Input, Card, CardBody, Row, Col } from "reactstrap";
import "font-awesome/css/font-awesome.min.css";
import TableData from "./Table";

import "./App.css";

function App() {
  const styles = {
    errorText: {
      color: "red",
    },
    padding10: {
      padding: 10,
    },

    buttonStyle: {
      height: 35,
      width: 500,
    },
  };

  const [openCreatePromoCodeForm, setOpenCreatePromoCodeForm] = useState(false);
  const [code, setCode] = useState("");
  const [description, setDescription] = useState("");
  const [discount, setDiscount] = useState("");
  const [delivery, setDelivery] = useState(false);
  const [promoCodeList, setPromoCodeList] = useState([]);

  const isButtonValid = () => {
    if (code && description && discount) return true;
    else return false;
  };

  const onSubmit = () => {
    const promoCode = {
      code,
      description,
      discount,
      delivery,
    };
    promoCodeList.push(promoCode);

    setPromoCodeList(promoCodeList);
    setCode("");
    setDescription("");
    setDiscount("");
    setDelivery(false);
  };

  return (
    <div style={styles.padding10}>
      <div>
        <Button
          color="link"
          onClick={() => setOpenCreatePromoCodeForm(!openCreatePromoCodeForm)}
        >
          <h2>+ Create Promo Codes</h2>
        </Button>

        {openCreatePromoCodeForm ? (
          <>
            <p>
              Code <span style={styles.errorText}>*</span>
            </p>
            <input
              type="text"
              bssize="lg"
              style={styles.buttonStyle}
              value={code}
              onChange={(e) => setCode(e.target.value)}
            />
            <p>
              Description <span style={styles.errorText}>*</span>
            </p>
            <Input
              type="text"
              style={styles.buttonStyle}
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
            <Row>
              <Col md={6} sm={6} lg={6}>
                <p>
                  Discount (USD) <span style={styles.errorText}>*</span>
                </p>
                <Input
                  type="text"
                  className="col-md-6 col-sm-6 col-lg-6"
                  style={styles.buttonStyle}
                  value={discount}
                  onChange={(e) => setDiscount(e.target.value)}
                />
              </Col>
              <Col md={6} sm={6} lg={6}>
                <p>Free Delivery</p>
                <Input
                  type="checkbox"
                  className="col-md-6 col-sm-6 col-lg-6"
                  value={delivery}
                  onChange={(e) => setDelivery(!delivery)}
                />
              </Col>
            </Row>

            <p></p>

            <Button
              disabled={!isButtonValid()}
              onClick={() => onSubmit()}
              style={styles.buttonStyle}
            >
              Create Promo Code
            </Button>
          </>
        ) : null}
      </div>
      <TableData promoCodeList={promoCodeList} />
    </div>
  );
}

export default App;
