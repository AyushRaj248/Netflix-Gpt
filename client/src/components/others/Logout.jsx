import { useDispatch, useSelector } from 'react-redux'
import { removeUser } from '../../redux/user.slice';
import { useNavigate } from 'react-router-dom';

const Logout = () => {
    const dispatch = useDispatch()
    const naviagte = useNavigate()

    const handleLogOut =()=>{
        dispatch(removeUser());
        localStorage.removeItem("user");
        naviagte("/login");
    }
  return (
    <button 
    className='text-gray-100 bg-blue-600/30 hover:bg-blue-600/50 border border-blue-500/50 px-2.5 py-1 sm:px-3 sm:py-1.5 rounded-lg transition-all duration-200 text-sm lg:text-base font-medium cursor-pointer hover:shadow-md hover:scale-105'
    onClick={handleLogOut}>
        Logout
    </button>
  )
}

export default Logout
