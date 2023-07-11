import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

function Error() {
  const navigate = useNavigate();

  useEffect(() => {

    const goHome = () => {
        let path = `/`;
        navigate(path);
    }
    
    goHome(); 
  }, []);

  return (
    <div className="Error">
    </div>
  );
}

export default Error;
