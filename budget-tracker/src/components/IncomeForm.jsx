import { useState } from "react";

export default function IncomeForm() {
  const [description, setDescription] = useState(" ");
  const [amount, setAmount] = useState(" ");
  const [date, setDate] = useState(" ");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!description || !amount || !date) {
      alert("Tüm alanları doldurunuz.");
      return;
    }
  };
 
  return (
    <form onSubmit={handleSubmit}>
      <div>
        <label>Gelir Açıklaması</label>
        <input type="text" value={description} placeholder="Örneğin: Maaş" />
      </div>
      <div>
        <label>Miktar</label>
        <input type="number" value={amount} placeholder="Örneğin: 5000" />
      </div>
      <div>
        <label>Tarih</label>
        <input type="date" value={date} />
      </div>
      <button type="submit">Gelir Ekle</button>
    </form>
  );
}
