const { useState, createContext } = require("react");

const initialState = {
    incomeList: [],
    saveData:(data)=>{
        
    }
};
const GlobalContext = createContext(initialState);
const GlobalProvider = ({ children }) => {
    const [incomeList, setIncomeList] = useState([]);
    const saveData = (data) => {
        setIncomeList([...incomeList, data]);
    };
    return (
        <GlobalContext.Provider value={{ ...initialState, incomeList, saveData }}>
            {children}
        </GlobalContext.Provider>
    );
};

export { GlobalContext, GlobalProvider };
