import React, { useState } from "react";

const GiftJoyPayment = () => {
  const [step, setStep] = useState(1);
  const [tempData, setTempData] = useState({});
  const [receipts, setReceipts] = useState([]);

  const handleInitialSubmit = (e) => {
    e.preventDefault();
    const payerName = e.target.payerName.value.trim();
    const payerEmail = e.target.payerEmail.value.trim();
    const receiverName = e.target.receiverName.value.trim();
    const receiverEmail = e.target.receiverEmail.value.trim();
    const amount = e.target.paymentAmount.value.trim();
    const message = e.target.paymentMessage.value.trim();

    if (!payerName || !payerEmail || !receiverName || !receiverEmail || !amount) {
      alert("Please fill in all required fields.");
      return;
    }

    setTempData({ payerName, payerEmail, receiverName, receiverEmail, amount, message });
    setStep(2);
  };

  const handleCardSubmit = async (e) => {
    e.preventDefault();
    const cardName = e.target.cardName.value.trim();
    const cardNumber = e.target.cardNumber.value.trim();
    const expiry = e.target.expiry.value.trim();
    const cvv = e.target.cvv.value.trim();

    const expiryRegex = /^(0[1-9]|1[0-2])\/\d{2}$/;

    if (!cardName || !cardNumber || !expiry || !cvv) {
      alert("Please fill in all card details.");
      return;
    }

    if (!/^\d{12}$/.test(cardNumber)) {
      alert("Card Number must be exactly 12 digits.");
      return;
    }

    if (!expiryRegex.test(expiry)) {
      alert("Expiry must be in MM/YY format.");
      return;
    }

    if (!/^\d{3}$/.test(cvv)) {
      alert("CVV must be exactly 3 digits.");
      return;
    }

    setStep(3); // Show spinner

    try {
      await fetch("http://localhost:5000/api/payment", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(tempData),
      });
    } catch (err) {
      // Ignored
    }

    setTimeout(() => {
      const transactionId = "TXN-" + Math.floor(100000 + Math.random() * 900000);
      const receiptNumber = "RCT-" + Math.floor(100000 + Math.random() * 900000);
      const date = new Date().toLocaleString();

      const newReceipt = {
        ...tempData,
        transactionId,
        receiptNumber,
        date,
      };

      setReceipts([newReceipt, ...receipts]);
      setStep(1);
    }, 2500);
  };

  const styles = {
    container: {
      background: "#fff",
      padding: "20px",
      borderRadius: "8px",
      maxWidth: "600px",
      margin: "40px auto",
      boxShadow: "0 0 10px rgba(0,0,0,0.1)",
      fontFamily: "Arial, sans-serif",
    },
    input: {
      padding: "10px",
      fontSize: "16px",
      marginBottom: "0.75rem",
      border: "1px solid #ccc",
      borderRadius: "4px",
      width: "100%",
      boxSizing: "border-box",
    },
    button: {
      padding: "10px",
      fontSize: "16px",
      background: "#4caf50",
      color: "white",
      border: "none",
      borderRadius: "4px",
      cursor: "pointer",
      width: "100%",
    },
    spinner: {
      margin: "20px auto",
      border: "4px solid #f3f3f3",
      borderTop: "4px solid #4caf50",
      borderRadius: "50%",
      width: "40px",
      height: "40px",
      animation: "spin 1s linear infinite",
    },
    receipt: {
      background: "#e6ffe6",
      border: "2px dashed #4caf50",
      padding: "1rem",
      borderRadius: "6px",
      marginBottom: "1rem",
      animation: "fadeIn 0.4s ease",
    },
  };

  return (
    <div style={styles.container}>
      {step === 1 && (
        <form onSubmit={handleInitialSubmit}>
          <h2>💳 GiftJoy</h2>
          <input type="text" name="payerName" placeholder="Your Name" style={styles.input} />
          <input type="email" name="payerEmail" placeholder="Your Email" style={styles.input} />
          <input type="text" name="receiverName" placeholder="Receiver's Name" style={styles.input} />
          <input type="email" name="receiverEmail" placeholder="Receiver's Email" style={styles.input} />
          <input type="number" name="paymentAmount" placeholder="Amount ($)" style={styles.input} />
          <textarea name="paymentMessage" placeholder="Note (optional)" style={styles.input} />
          <button type="submit" style={styles.button}>Make Payment</button>
        </form>
      )}

      {step === 2 && (
        <form onSubmit={handleCardSubmit}>
          <h2>🔐 Card Details</h2>
          <input type="text" name="cardName" placeholder="Cardholder Name" style={styles.input} />
          <input type="text" name="cardNumber" placeholder="Card Number" maxLength={12} style={styles.input} />
          <input type="text" name="expiry" placeholder="MM/YY" style={styles.input} />
          <input type="password" name="cvv" placeholder="CVV" maxLength={3} style={styles.input} />
          <button type="submit" style={styles.button}>Confirm</button>
        </form>
      )}

      {step === 3 && (
        <div style={{ textAlign: "center" }}>
          <h3>🔄 Processing Payment...</h3>
          <div style={styles.spinner}></div>
        </div>
      )}

      {receipts.map((r, i) => (
        <div key={i} style={styles.receipt}>
          <strong>✅ Receipt</strong>
          <p><strong>Sender:</strong> {r.payerName} ({r.payerEmail})</p>
          <p><strong>Receiver:</strong> {r.receiverName} ({r.receiverEmail})</p>
          <p><strong>Amount:</strong> ${r.amount}</p>
          {r.message && <p><strong>Note:</strong> {r.message}</p>}
          <p>Transaction ID: {r.transactionId}</p>
          <p>Receipt #: {r.receiptNumber}</p>
          <p><em>Date: {r.date}</em></p>
        </div>
      ))}

      <style>{`
        @keyframes spin {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
        @keyframes fadeIn {
          from { opacity: 0; transform: scale(0.95); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  );
};

export default GiftJoyPayment;
