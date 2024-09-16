const AuthService = {
    login: async (email, password) => {
      const response = await fetch('http://localhost:3508/api/user/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });
  
      if (response.ok) {
        const user = await response.json();
        localStorage.setItem('user', JSON.stringify(user));
        return user;
      } else {
        throw new Error('Login failed');
      }
    },
  
    register: async (name, email, password) => {
      const response = await fetch('http://localhost:3508/api/user/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name, email, password }),
      });
  
      if (!response.ok) {
        throw new Error('Registration failed');
      }
    },
  
    logout: () => {
      localStorage.removeItem('user');
      window.location.href = '/login';
    },
  
    getCurrentUser: () => {
      return JSON.parse(localStorage.getItem('user'));
    }
  };
  
  export default AuthService;
  