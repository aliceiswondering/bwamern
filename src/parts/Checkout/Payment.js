import React from "react";
import Fade from "react-reveal/Fade";
import InputFile from "elements/Form/InputFile";
import InputText from "elements/Form/InputText";
import logoBca from "assets/images/logo-bca.jpg";
import logoMandiri from "assets/images/logo-mandiri.jpg";

export default function Payment(props) {
  const { data, ItemDetails, checkout } = props;

  const tax = 10;
  const subTotal = ItemDetails.price * checkout.duration;
  const grandTotal = (subTotal * tax) / 100 + subTotal;
  return (
    <Fade>
      <div className="container" style={{ marginBottom: 30 }}>
        <div className="row justify-content-center align-item-center">
          <div className="col-12 col-lg-5 border-lg-right py-lg-5 mb-5 mb-lg-0" style={{ paddingRight: 80 }}>
            <Fade delay={300}>
              <p className="mb-4">Transfer Pembayaran</p>
              <p>Tax: {tax} %</p>
              <p>Sub total: ${subTotal} USD</p>
              <p>Total: ${grandTotal} USD</p>
              <div className="row mt-4">
                <div className="col-3 text-right">
                  <img src={logoBca} alt="bank central asia" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Central Asia</dd>
                    <dd>2208 1998</dd>
                    <dd>Staycation BCA</dd>
                  </dl>
                </div>
              </div>

              <div className="row">
                <div className="col-3 text-right">
                  <img src={logoMandiri} alt="mandiri" width="60" />
                </div>
                <div className="col">
                  <dl>
                    <dd>Bank Mandiri</dd>
                    <dd>2208 1998</dd>
                    <dd>Staycation Mandiri</dd>
                  </dl>
                </div>
              </div>
            </Fade>
          </div>
          <div className="col-12 col-lg-5 py-lg-5" style={{ paddingLeft: 80 }}>
            <Fade delay={600}>
              <label htmlFor="proofPayment">Upload Bukti Transfer</label>
              <InputFile
                accept="image/*"
                id="proofPayment"
                name="proofPayment"
                value={data.proofPayment}
                onChange={props.onChange}
              />
              <label htmlFor="bankFrom">Asal Bank</label>
              <InputText
                id="bankFrom"
                name="bankFrom"
                type="text"
                value={data.bankFrom}
                onChange={props.onChange}
              />
              <label htmlFor="accountHolder">Nama Pengirim</label>
              <InputText
                id="accountHolder"
                name="accountHolder"
                type="text"
                value={data.accountHolder}
                onChange={props.onChange}
              />
            </Fade>
          </div>
        </div>
      </div>
    </Fade>
  );
}
