import React, {
	createContext,
	useState,
	useContext,
	ReactNode,
	Dispatch,
	SetStateAction,
} from 'react';

interface ITodoItem {
	_id: string;
	text: string;
	completed: boolean;
	description: string;
	type: string;
	user_id: string;
	__v: number;
}

interface TodoContextProps {
	todoContext: ITodoItem[];
	setTodoContext: Dispatch<SetStateAction<ITodoItem[]>>;
}

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({children}:{children: ReactNode}) => {
	const [todoContext, setTodoContext] = useState<ITodoItem[]>([{
        "_id": "65cb721fc0ef6e36b2c8b0ea",
        "text": "BOOO))-------",
        "completed": false,
        "description": "Eat good and go to the gymnasium",
        "user_id": "65ca1eb11988ba2fffd3ae71",
        "type": "present",
        "__v": 0
    }]);

	const contextValue: TodoContextProps = {
		todoContext,
		setTodoContext,
	};

	return (
		<TodoContext.Provider value={contextValue}>{children}</TodoContext.Provider>
	);
};

export const useTodoContext = () => {
	const context = useContext(TodoContext);

	if (!context) {
		throw new Error('Context must be used within a Provider');
	}

	return context;
};
