"use client"
import { useState } from 'react';
import { BiCommentEdit } from "react-icons/bi";
import { MdDeleteForever } from "react-icons/md";
import { MdAddChart } from "react-icons/md";
import { ExpenseType } from '@/types/commonTypes';
import ExpenseModal from './expenseModal';


const ExpenseList = () => {
  const [expenses, setExpenses] = useState<ExpenseType[]>([]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [expense, setExpense] = useState<ExpenseType>({
    id: '',
    amount: 0,
    category: '',
    note: '',
    date: ''
  });
  const [total, setTotal] = useState<number>(0)

  const onAddExpense = (expense: ExpenseType) => {
    setExpenses([...expenses, expense]);
    setTotal(total + expense.amount);
  }
  const onClose = () => {
    setIsOpen(false);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }

  const onUpdateExpense = (expenseRecord: ExpenseType) => {
    setExpenses(expenses.map((e) => (e.id === expenseRecord.id ? expenseRecord : e)));
    setTotal(total - expense.amount + expenseRecord.amount);
    setExpense({
      id: '',
      amount: 0,
      category: '',
      note: '',
      date: ''
    })
  }


  const onDeleteHandler = (expense: ExpenseType) => {
     
    const filterdExpenses:ExpenseType[] = expenses.filter((e) => e.id !== expense.id)
    setExpenses(filterdExpenses);
    setTotal(total - expense.amount);
  }

  const onEditHandler = (expense: ExpenseType) => {
    setExpense(expense)
    setIsOpen(true);
  }
  return (<>
    <div className="inner">
      <div className='flex justify-between'>
        <h2 className="title">Expense List</h2>
        <ul className="actions">
        <button className="button primary" 
        onClick={() => setIsOpen(true)}>
             Add Expense</button>
             <li>
              <a className="button small">
                ⁜
              </a>
            </li>
         </ul>
      </div>

      <ExpenseModal expense={expense} isOpen={isOpen} onClose={onClose} onAddExpense={onAddExpense} onUpdateExpense={onUpdateExpense} />
      <div className="table-wrapper">
      <table>
        <thead>
          <tr>
            <th >ID</th>
            <th >Category</th>
            <th >Note</th>
            <th >Date</th>
            <th >Actions</th> 
            <th >Amount</th>
          </tr>
        </thead>
        <tbody>
          {
            expenses.length > 0 ?
              expenses.map((expense) => (
                <tr key={expense.id} >
                  <td >{expense.id}</td>
                 
                  <td >{expense.category}</td>
                  <td >{expense.note}</td>
                  <td >{new Date(expense.date).toLocaleDateString()}</td>
                  <td className="action fit">
                  <ul className="actions">
                    <li>
                    <button onClick={() => onEditHandler(expense)} className="button small"> <BiCommentEdit className="text-3xl color: #f2849e  cursor-pointer"/> </button>
                  </li><li>
                    <button onClick={() => onDeleteHandler(expense)} className="button small"><MdDeleteForever className="text-3xl color: #f2849e  cursor-pointer" /> </button>
                </li> </ul>
                 </td> 
                 <td >{expense.amount.toFixed(2)}</td>
                </tr>
              ))

              : <tr>
                <td colSpan={6} className="text-center">No Expense Found!</td>
              </tr>

          }
        </tbody>
     
      <tfoot>
                <tr>
                  <td colSpan={5} />
                  <td>{total.toFixed(2)}</td>
                </tr>
              </tfoot>
              </table>
      </div> 
       </div>
    </>
  );
};

export default ExpenseList;