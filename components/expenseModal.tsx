"use client"
import { ExpenseType } from '@/types/commonTypes';
import { ExpenseModalProps } from '@/types/componentsTypes';
import React, { useState } from 'react';
import { FaTimes } from 'react-icons/fa';

const ExpenseModal = ({ isOpen, onClose, onAddExpense,onUpdateExpense, expense }: ExpenseModalProps) => {
    const [amount, setAmount] = useState<number>(0);
    const [category, setCategory] = useState<string>('');
    const [note, setNote] = useState<string>('');
    const [date, setDate] = useState<string>('');
   
    const categories = ['Groceries', 'Rent', 'Utilities', 'Entertainment', 'Online Purchases', 'Other']; // Add your own categories


    const handleUpdateExpense = () =>{
        const updateExpense: ExpenseType = {
            id: expense.id,
            amount: amount || expense.amount,
            category: category || expense.category,
            note: note || expense.note,
            date: date || expense.date,
        };

        onUpdateExpense(updateExpense);
        setAmount(0);
        setCategory('');
        setDate('');
        setNote('');
        onClose();
    }

    const handleAddExpense = () => {
        // You can add validation logic here before adding the expense
        const newExpense: ExpenseType = {
            id: `${Date.now()}`,
            amount: amount,
            category,
            note,
            date,
        };

        onAddExpense(newExpense);
        setAmount(0);
        setCategory('');
        setDate('');
        setNote('');
        onClose();
    };
    
    return (<>
        <div className={`modal ${isOpen ? 'block' : 'hidden'}`}>
            <div className="modal-overlay absolute top-0 left-0 w-full h-full bg-gray-800 bg-opacity-80">
                <div className="modal-container bg-white w-96 mx-auto mt-20 p-6 rounded shadow-lg">
                    <div className="mb-4">
                        <div className='flex justify-between'>
                            <h2 className="title">Add Expense</h2>
                            <button className="button small" onClick={onClose}>
                                <FaTimes className="text-3xl color: #f2849e  cursor-pointer" />
                            </button>
                        </div>


                        <label className="block text-gray-600 text-sm mb-2" htmlFor="amount">
                            Amount
                        </label>
                        <input
                            type="number"
                            id="amount"
                            value={amount || expense.amount}
                            onChange={(e) => setAmount(parseFloat(e.target.value))}
                            className="w-full border p-2 mb-2"
                        />

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="category">
                            Category
                        </label>
                        
                        

                        <select
                            id="category"
                            value={category || expense.category}
                            onChange={(e) => setCategory(e.target.value)}
                            className="w-full border p-2 mb-2"
                        >
                            <option value="" disabled>Select a category</option>
                            {categories.map((cat) => (
                                <option key={cat} value={cat}>
                                    {cat}
                                </option>
                            ))}
                        </select>

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="note">
                            Note
                        </label>
                        <textarea
                            id="note"
                            value={note || expense.note}
                            onChange={(e) => setNote(e.target.value)}
                            className="w-full border p-2 mb-2"
                        />

                        <label className="block text-gray-600 text-sm mb-2" htmlFor="date">
                            Date
                        </label>
                        <input
                            type="date"
                            id="date"
                            value={date || expense.date}
                            onChange={(e) => setDate(e.target.value)}
                            className="w-full border p-2 mb-4"
                        />
                    </div>

                    <div className="flex justify-end">
                        {expense.id !=='' ?
                            <button
                                onClick={handleUpdateExpense}
                                className="button primary"
                            >
                                update 
                            </button>

                            :
                            <button
                                onClick={handleAddExpense}
                                className="button primary"
                            >
                                Add 
                            </button>
                        }
                    </div>
                </div>
            </div>
        </div>
 </>);
};

export default ExpenseModal;