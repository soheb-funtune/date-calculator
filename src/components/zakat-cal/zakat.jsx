import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";

const Zakat = () => {
  const { register, handleSubmit } = useForm();
  const [amount, setAmount] = useState();
  const [zakat, setZakat] = useState();
  useEffect(() => {
    if (amount) {
      let z = (2.5 / 100) * Number(amount);
      setZakat(z);
    }
  }, [amount]);

  const onSubmit = (data, e) => {
    setAmount(data?.amount);
  };

  return (
    <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
      <form onSubmit={handleSubmit(onSubmit)}>
        <input
          {...register("amount", {
            required: true,
            pattern: /[0-9]/,
          })}
        />
        <button type="submit">Calculate</button>
        <div className="flex-col">
          <b>Amount : {amount}</b>
          <b>Zakat : {zakat}</b>
        </div>
      </form>
    </div>
  );
};

export default Zakat;
