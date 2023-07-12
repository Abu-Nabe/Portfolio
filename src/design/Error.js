import React, { useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    const currentPath = location.pathname;
    const goHome = () => {
        if (currentPath.includes('/experience')) {
          // Redirect to /experience
          navigate('/experience');
        }else if (currentPath.includes('/contact')) {
          // Redirect to /experience
          navigate('/contact');
        }else if (currentPath.includes('/skills')) {
          // Redirect to /experience
          navigate('/skills');
        }else{
          let path = `/`;
          navigate(path);
        }
    }
    
    goHome(); 
  }, []);

  return (
    <div className="Error">
    </div>
  );
}

export default Error;
