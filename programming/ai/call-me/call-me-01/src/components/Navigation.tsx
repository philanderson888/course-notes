import { useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';
import { Menu, X, LogOut, UserPlus, LogIn, Contact } from 'lucide-react';
import { useState } from 'react';

export const Navigation = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);

  const handleLogout = () => {
    logout();
    navigate('/login');
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Contact className="h-8 w-8 text-indigo-600" />
              <span className="ml-2 text-xl font-bold text-gray-900">Contacts App</span>
            </div>
          </div>

          {/* Desktop menu */}
          <div className="hidden sm:flex sm:items-center sm:space-x-4">
            {user ? (
              <>
                <button
                  onClick={() => navigate('/contacts')}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <Contact className="h-5 w-5 mr-1" />
                  Contacts
                </button>
                <button
                  onClick={handleLogout}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => navigate('/login')}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </button>
                <button
                  onClick={() => navigate('/register')}
                  className="text-gray-700 hover:text-indigo-600 px-3 py-2 rounded-md text-sm font-medium flex items-center"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Register
                </button>
              </>
            )}
          </div>

          {/* Mobile menu button */}
          <div className="sm:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-indigo-600"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <div className="sm:hidden">
          <div className="pt-2 pb-3 space-y-1">
            {user ? (
              <>
                <button
                  onClick={() => {
                    navigate('/contacts');
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium flex items-center"
                >
                  <Contact className="h-5 w-5 mr-1" />
                  Contacts
                </button>
                <button
                  onClick={() => {
                    handleLogout();
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium flex items-center"
                >
                  <LogOut className="h-5 w-5 mr-1" />
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    navigate('/login');
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium flex items-center"
                >
                  <LogIn className="h-5 w-5 mr-1" />
                  Login
                </button>
                <button
                  onClick={() => {
                    navigate('/register');
                    setIsOpen(false);
                  }}
                  className="w-full text-left text-gray-700 hover:text-indigo-600 px-3 py-2 text-base font-medium flex items-center"
                >
                  <UserPlus className="h-5 w-5 mr-1" />
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </nav>
  );
};