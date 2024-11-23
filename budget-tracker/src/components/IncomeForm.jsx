import { addIncome } from "@/redux/incomeSlice";
import { useState } from "react";
import { useDispatch } from "react-redux";

export default function IncomeForm() {
  const [description, setDescription] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [date, setDate] = useState(" ");

  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      alert("Tüm alanları doldurunuz.");
      return;
    }

    dispatch(addIncome({ description, amount: parseFloat(amount), date }));

    setDescription("");
    setAmount("");
    setDate("");
  };

  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gelir Açıklaması</label>
        <input
          type="text"
          value={description}
          placeholder="Örneğin: Maaş"
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div>
        <label>Miktar</label>
        <input
          type="number"
          value={amount}
          placeholder="Örneğin: 5000"
          onChange={(e) => setAmount(e.target.value)}
        />
      </div>
      <div>
        <label>Tarih</label>
        <input
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <button type="submit">Gelir Ekle</button>
    </form>
  );
}
