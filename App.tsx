import Navigation from "./src/navigation";
import ExpensesContextProvider from "./src/store/expensesContext";

export default function App() {
  return (
    <ExpensesContextProvider>
      <Navigation />
    </ExpensesContextProvider>
  );
}
