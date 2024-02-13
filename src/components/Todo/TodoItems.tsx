import { useState, useEffect } from 'react';
import TodoItem from './TodoItem';
import { getToken } from '../../utils/utilFunctions';
import TodoFilter from './TodoFilter';
import axios, {AxiosResponse} from 'axios';
interface ITodoItem {
    text:string, 
    description:string,
    type:string
}

const TodoItems = () => {
    const token = getToken()
    const [timeFilter, setTimeFilter] = useState('present');
    const [statusFilter, setStatusFilter] = useState('active');
    const [todos, setTodos] = useState([{text: 'Go Gym', description: 'Eat good and go to the gymnasium', type: 'present'}, {text: 'Go Gym', description: 'Eat good and go to the gymnasium', type: 'present'}]);
    const [loading, setLoading] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    const getTodos = async () => {
        setLoading(true);
        setErrorMessage('');
        try {
            const result:AxiosResponse = await axios.get('http://localhost:5000/todo', {
                headers: {
                    Authorization: 'Bearer ' + token
            }});

            if (result && result.status === 200) {
                console.log(result);
                setLoading(false);
            }
            
        } catch (error){
            setLoading(false);
			if (axios.isAxiosError(error)) {
				console.log('error message: ', error.message);
				setErrorMessage(error.response?.data.error);
			} else {
				console.log('unexpected error: ', error);
				setErrorMessage('An unexpected error occurred');
			}
        }
    }

    useEffect(() => {
        getTodos();
    },[]);

	return (
		<div className='flex flex-col sm:px-20 mt-5 max-sm:px-10 md:px-20 lg:px-32  xl:px-80 '>
			<div className='flex justify-between mt-10 '>
				<TodoFilter
					text='Present'
					color='bg-cyan-500'
					hoverColor='bg-cyan-600'
					timeFilter={timeFilter}
					changeFilter={() => {
						setTimeFilter('present');
						setStatusFilter('active');
					}}
				/>
				<TodoFilter
					text='Future'
					color='bg-fuchsia-500'
					hoverColor='bg-fuchsia-600'
					timeFilter={timeFilter}
					changeFilter={() => {
						setTimeFilter('future');
						setStatusFilter('active');
					}}
				/>
				<TodoFilter
					text='Active'
					color='bg-yellow-500'
					hoverColor='bg-yellow-600'
					statusFilter={statusFilter}
					changeStatusFilter={() => {
						setStatusFilter('active');
						setTimeFilter('present');
					}}
				/>
				<TodoFilter
					text='Done'
					color='bg-red-500'
					hoverColor='bg-red-600'
					statusFilter={statusFilter}
					changeStatusFilter={() => {
						setStatusFilter('done');
						setTimeFilter('');
					}}
				/>
			</div>
			<div className='bg-slate-50 rounded px-1 w-full mt-4 max-h-32 '>
                {
                    todos.map((todo:ITodoItem) => {
                        return <TodoItem todo={todo}/>
                    })
                }
            </div>
		</div>
	);
};

export default TodoItems;
