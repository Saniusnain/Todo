import {
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

interface TodoTypeContextProps {
	typeContext: string;
	setTypeContext: Dispatch<SetStateAction<string>>;
}

const TodoTypeContext = createContext<TodoTypeContextProps | undefined>(
	undefined
);
export const TodoTypeProvider = ({ children }: { children: ReactNode }) => {
	const [typeContext, setTypeContext] = useState('');

	const contextValue: TodoTypeContextProps = {
		typeContext,
		setTypeContext,
	};

	return (
		<TodoTypeContext.Provider value={contextValue}>
			{children}
		</TodoTypeContext.Provider>
	);
};

export const useTodoTypeContext = () => {
	const context = useContext(TodoTypeContext);

	if (!context) {
		throw new Error('Context must be used within a Provider');
	}

	return context;
};

const TodoContext = createContext<TodoContextProps | undefined>(undefined);

export const TodoProvider = ({ children }: { children: ReactNode }) => {
	const [todoContext, setTodoContext] = useState<ITodoItem[]>([]);

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
