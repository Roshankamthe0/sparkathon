import React, { createContext, useEffect, useState } from "react";

const AuthContext = createContext();

const AuthProvider = ({ children }) => {
  const [signin, setSign1] = useState(false);
  const [auth, setAuth1] = useState(false);
  const [cart, setCart1] = useState(false);
  const [email, setEmail1] = useState("");
  const [name, setName1] = useState("");
  const [password, setPassword1] = useState("");
  const [number, setNumber1] = useState("");
  const [isMenuOpen, setMenuOpen] = useState(false);
  const [search, searchItem] = useState("");
  const [count, setCount] = useState(0);
  const [totalPrice, setTotalPrice] = useState(0);
  const [productDetails, steProductDetails] = useState({
    image: "",
    title: null,
    price: null,
  });

  // 💳 Wallet State
  const [walletBalance, setWalletBalance] = useState(0);
  const [useWallet, setUseWallet] = useState(false);

  // 🧠 Load wallet balance only for specific email
  useEffect(() => {
    const userInfo = JSON.parse(localStorage.getItem("user-info"));
    const userEmail = userInfo?.email;

    if (userEmail === "siddheshkamthe8@gmail.com") {
      setWalletBalance(100);
    } else {
      setWalletBalance(0);
    }
  }, []);

  // 🔄 Helpers
  function setDetails(image, title, price) {
    steProductDetails({ image, title, price });
  }

  function handleSearch(search) {
    searchItem(search);
  }

  const handleChange = () => {
    setMenuOpen((prev) => !prev);
  };

  function setSign() {
    setSign1((prev) => !prev);
  }

  function setAuth() {
    setAuth1((prev) => !prev);
  }

  function setCart() {
    setCart1((prev) => !prev);
  }

  function setEmail(email) {
    setEmail1(email);
    localStorage.setItem("user-info", JSON.stringify({ email }));

    // 🧠 Update wallet based on email at time of login
    if (email === "siddheshkamthe8@gmail.com") {
      setWalletBalance(100);
    } else {
      setWalletBalance(0);
    }
  }

  function setName(n, password) {
    setName1(n);
    setPassword1(password);
    localStorage.setItem("name", JSON.stringify({ n }));
    localStorage.setItem("user-password", JSON.stringify({ password }));
  }

  function setNumber(n) {
    setNumber1(n);
  }

  function counter() {
    setCount((prev) => prev + 1);
  }

  function calculatePrice(price) {
    setTotalPrice((prev) => prev + price);
  }

  function signOut() {
    setAuth();
    setName1("");
    setEmail1("");
    setWalletBalance(0); // Reset wallet on sign out
    localStorage.removeItem("user-info");
  }

  function clearCart() {
    setCount(0);
    setTotalPrice(0);
  }

  return (
    <AuthContext.Provider
      value={{
        signin,
        auth,
        setSign,
        setAuth,
        cart,
        setCart,
        email,
        setEmail,
        name,
        setName,
        setNumber,
        number,
        handleChange,
        isMenuOpen,
        handleSearch,
        search,
        count,
        counter,
        calculatePrice,
        totalPrice,
        setDetails,
        productDetails,
        signOut,
        walletBalance,
        setWalletBalance,
        useWallet,
        setUseWallet,
        clearCart,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthContext, AuthProvider };
